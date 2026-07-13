import Sidebar from "../components/Sidebar";
export default function Workspace() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">

      <header className="h-16 bg-white border-b border-gray-200 flex items-center px-8">

        <h1 className="text-2xl font-bold text-[#0F5FDB]">
          AffiNexa Image Studio
        </h1>

      </header>

      <div className="flex h-[calc(100vh-64px)]">

        <Sidebar />

        <main className="flex-1 flex items-center justify-center">

          <div className="border-2 border-dashed border-blue-300 rounded-2xl w-[80%] h-[70%] flex flex-col items-center justify-center">

            <h2 className="text-4xl font-bold text-[#0F5FDB]">
              Welcome to Your Workspace
            </h2>

            <p className="mt-4 text-gray-500">
              Your image processing tools will appear here.
            </p>

          </div>

        </main>

      </div>

    </div>
  );
}