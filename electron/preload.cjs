const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  version: "1.0.0",

  selectInputFolder: () =>
    ipcRenderer.invoke("select-input-folder"),

  selectOutputFolder: () =>
    ipcRenderer.invoke("select-output-folder"),

  processImages: (options) =>
    ipcRenderer.invoke("process-images", options),
});