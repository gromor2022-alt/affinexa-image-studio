import { useApp } from "../context/AppContext";

export default function Sidebar() {
  const {
    inputFolder,
    setInputFolder,
    outputFolder,
    setOutputFolder,
  } = useApp();

  async function handleInputFolder() {
    const folder = await window.electron.selectInputFolder();

    if (folder) {
      setInputFolder(folder);
    }
  }

  async function handleOutputFolder() {
    const folder = await window.electron.selectOutputFolder();

    if (folder) {
      setOutputFolder(folder);
    }
  }

  return (
    <aside className="w-80 bg-white border-r border-gray-200 p-6 flex flex-col">

      <h2 className="text-2xl font-bold text-[#0F5FDB] mb-8">
        AffiNexa Image Studio
      </h2>

      <button
        onClick={handleInputFolder}
        className="mb-2 rounded-xl bg-[#0F5FDB] py-3 text-white font-semibold"
      >
        📂 Select Input Folder
      </button>

      {inputFolder && (
        <div className="mb-5 rounded-lg bg-blue-50 p-3 text-xs break-all">
          {inputFolder}
        </div>
      )}

      <button
        onClick={handleOutputFolder}
        className="mb-2 rounded-xl bg-green-600 py-3 text-white font-semibold"
      >
        📁 Select Output Folder
      </button>

      {outputFolder && (
        <div className="mb-5 rounded-lg bg-green-50 p-3 text-xs break-all">
          {outputFolder}
        </div>
      )}

      <div className="mt-auto text-center text-xs text-gray-400">
        AffiNexa Image Studio V1
      </div>

    </aside>
  );
}