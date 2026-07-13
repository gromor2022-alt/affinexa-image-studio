console.log("Main process started");

const {
  app,
  BrowserWindow,
  dialog,
  ipcMain,
} = require("electron");

const path = require("path");
const { processFolder } = require("./imageProcessor.cjs");

function createWindow() {
  const win = new BrowserWindow({
    width: 1400,
    height: 900,
    minWidth: 1200,
    minHeight: 800,

    title: "AffiNexa Image Studio",

    autoHideMenuBar: true,

    backgroundColor: "#0F172A",

    webPreferences: {
      preload: path.join(__dirname, "preload.cjs"),
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  win.loadURL("http://localhost:5173");

  console.log(
    "Preload path:",
    path.join(__dirname, "preload.cjs")
  );
}

console.log("Registering IPC handlers...");

ipcMain.handle("select-input-folder", async () => {
  const result = await dialog.showOpenDialog({
    properties: ["openDirectory"],
  });

  if (result.canceled) {
    return null;
  }

  return result.filePaths[0];
});

ipcMain.handle("select-output-folder", async () => {
  const result = await dialog.showOpenDialog({
    properties: ["openDirectory"],
  });

  if (result.canceled) {
    return null;
  }

  return result.filePaths[0];
});

ipcMain.handle("process-images", async (event, options) => {
  try {
    const result = await processFolder(options);
    return {
      success: true,
      ...result,
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: error.message,
    };
  }
});

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});