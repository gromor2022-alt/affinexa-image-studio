import { useState } from "react";

export default function Sidebar() {
  const [inputFolder, setInputFolder] = useState("");
  const [outputFolder, setOutputFolder] = useState("");

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
        AffiNexa
      </h2>

      {/* INPUT */}

      <button
        onClick={handleInputFolder}
        className="mb-2 rounded-xl bg-[#0F5FDB] py-3 text-white font-semibold"
      >
        📂 Select Input Folder
      </button>

      {inputFolder && (
        <div className="mb-5 rounded-lg bg-blue-50 p-3 text-xs break-all text-gray-700">
          {inputFolder}
        </div>
      )}

      {/* OUTPUT */}

      <button
        onClick={handleOutputFolder}
        className="mb-2 rounded-xl bg-green-600 py-3 text-white font-semibold"
      >
        📁 Select Output Folder
      </button>

      {outputFolder && (
        <div className="mb-5 rounded-lg bg-green-50 p-3 text-xs break-all text-gray-700">
          {outputFolder}
        </div>
      )}

      <hr className="my-4" />

      <button className="mb-3 rounded-xl border border-gray-300 py-3 font-semibold hover:bg-gray-100">
        🖼 Image Studio
      </button>

      <button className="mb-3 rounded-xl border border-gray-300 py-3 font-semibold hover:bg-gray-100">
        📄 PDF Studio
      </button>

      <button className="mb-3 rounded-xl border border-gray-300 py-3 font-semibold hover:bg-gray-100">
        🤖 AI Tools
      </button>

      <button className="mt-auto rounded-xl border border-gray-300 py-3 font-semibold hover:bg-gray-100">
        ⚙ Settings
      </button>

    </aside>
  );
}