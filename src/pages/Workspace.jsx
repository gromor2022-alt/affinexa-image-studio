import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { useApp } from "../context/AppContext";

export default function Workspace() {

  const {
    inputFolder,
    outputFolder,

    width,
    setWidth,

    quality,
    setQuality,

    format,
    setFormat,

  } = useApp();

  const [status, setStatus] = useState("Waiting...");

  async function startProcessing() {

    if (!inputFolder) {
      setStatus("Please select Input Folder");
      return;
    }

    if (!outputFolder) {
      setStatus("Please select Output Folder");
      return;
    }

    setStatus("Processing...");

    try {

      const result =
        await window.electron.processImages({

          inputFolder,

          outputFolder,

          width,

          quality,

          format,

        });
      if (result.success) {

        setStatus(
          `✅ Completed | Processed: ${result.processed} | Skipped: ${result.skipped}`
        );

      } else {

        setStatus(
          result.message || "Processing Failed"
        );

      }

    } catch (error) {

      console.error(error);

      setStatus(
        "Unexpected Error"
      );

    }

  }

  return (

    <div className="min-h-screen bg-[#F8FAFC]">

      <header className="h-16 bg-white border-b border-gray-200 flex items-center px-8">

        <h1 className="text-2xl font-bold text-[#0F5FDB]">

          AffiNexa Image Studio

        </h1>

      </header>

      <div className="flex h-[calc(100vh-64px)]">

        <Sidebar />

        <main className="flex-1 p-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl">

            <h2 className="text-3xl font-bold text-[#0F5FDB] mb-8">
              Image Processing
            </h2>

            <div className="grid grid-cols-3 gap-6">

              <div>
                <label className="block font-semibold mb-2">
                  Resize Width
                </label>

                <select
                  value={width}
                  onChange={(e) =>
                    setWidth(Number(e.target.value))
                  }
                  className="w-full border rounded-lg p-3"
                >
                  <option value={1200}>1200 px</option>
                  <option value={1600}>1600 px</option>
                  <option value={1800}>1800 px</option>
                  <option value={2048}>2048 px</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold mb-2">
                  Quality
                </label>

                <select
                  value={quality}
                  onChange={(e) =>
                    setQuality(Number(e.target.value))
                  }
                  className="w-full border rounded-lg p-3"
                >
                  <option value={70}>70</option>
                  <option value={80}>80</option>
                  <option value={90}>90</option>
                  <option value={100}>100</option>
                </select>
              </div>
              <div>
                <label className="block font-semibold mb-2">
                  Format
                </label>

                <select
                  value={format}
                  onChange={(e) => setFormat(e.target.value)}
                  className="w-full border rounded-lg p-3"
                >
                  <option value="webp">WEBP</option>
                  <option value="jpg">JPG</option>
                  <option value="png">PNG</option>
                </select>
              </div>

            </div>

            <button
              onClick={startProcessing}
              className="mt-8 w-full bg-[#0F5FDB] hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition"
            >
              🚀 Start Processing
            </button>

            <div className="mt-8 rounded-xl bg-gray-100 p-4">
              <p className="font-semibold">
                Status
              </p>

              <p className="mt-2 text-gray-700">
                {status}
              </p>
            </div>

          </div>

        </main>

      </div>

    </div>

  );

}