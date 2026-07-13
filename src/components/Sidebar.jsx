import { useState } from "react";

export default function Sidebar() {
  const [inputFolder, setInputFolder] = useState("");

  async function handleInputFolder() {
    const folder = await window.electron.selectInputFolder();

    if (folder) {
      setInputFolder(folder);
    }
  }

  return (
    <aside className="w-72 bg-white border-r border-gray-200 p-6 flex flex-col">

      <h2 className="text-2xl font-bold text-[#0F5FDB] mb-8">
        AffiNexa
      </h2>

      <button
        onClick={handleInputFolder}
        className="mb-3 rounded-xl bg-[#0F5FDB] py-3 text-white font-semibold"
      >
        📂 Input Folder
      </button>

      {inputFolder && (
        <div className="mb-6 rounded-lg bg-blue-50 p-3 text-xs break-all text-gray-700">
          {inputFolder}
        </div>
      )}

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