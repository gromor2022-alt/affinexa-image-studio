export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">

      {/* Header */}

      <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8">

        <h1 className="text-2xl font-bold text-[#0F5FDB]">
          AffiNexa Image Studio
        </h1>

        <span className="text-gray-500">
          Version 1.0
        </span>

      </header>

      {/* Body */}

      <div className="flex">

        {/* Sidebar */}

        <aside className="w-72 h-[calc(100vh-64px)] bg-white border-r border-gray-200 p-6">

          <button className="w-full bg-[#0F5FDB] text-white rounded-xl py-3 font-semibold mb-4">
            📂 Input Folder
          </button>

          <button className="w-full bg-[#0F5FDB] text-white rounded-xl py-3 font-semibold mb-4">
            📁 Output Folder
          </button>

          <button className="w-full bg-[#0F5FDB] text-white rounded-xl py-3 font-semibold">
            ▶ Start Conversion
          </button>

        </aside>

        {/* Main Area */}

        <main className="flex-1 p-10">

          <div className="border-2 border-dashed border-blue-300 rounded-2xl h-[500px] flex flex-col items-center justify-center">

            <h2 className="text-3xl font-bold text-[#0F5FDB]">
              Drop Images Here
            </h2>

            <p className="mt-4 text-gray-500">
              or choose an input folder from the left panel
            </p>

          </div>

        </main>

      </div>

    </div>
  );
}