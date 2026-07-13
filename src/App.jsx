import logo from "./assets/logo.png";

function App() {
  return (
    <div className="min-h-screen bg-[#0F172A] flex items-center justify-center px-6">

      <div className="text-center">

        <img
          src={logo}
          alt="AffiNexa"
          className="w-44 mx-auto mb-10 drop-shadow-2xl"
        />

        <h1 className="text-5xl font-bold text-white">
          AffiNexa Image Studio
        </h1>

        <p className="mt-5 text-xl text-sky-300">
          Professional Image Optimization Suite
        </p>

        <p className="mt-3 text-gray-400">
          Version 1.0
        </p>

        <button
          className="
          mt-12
          bg-sky-500
          hover:bg-sky-600
          text-white
          px-8
          py-4
          rounded-xl
          text-lg
          font-semibold
          transition-all
          duration-300
          shadow-xl
          hover:scale-105
          "
        >
          Get Started
        </button>

      </div>

    </div>
  );
}

export default App;