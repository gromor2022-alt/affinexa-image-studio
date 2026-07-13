import logo from "../assets/logo.png";

export default function Home({ onLaunch }) {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">

      <div className="text-center">

        <img
          src={logo}
          alt="AffiNexa"
          className="w-72 mx-auto mb-10"
        />

        <h1 className="text-5xl font-bold text-[#0F5FDB]">
          AffiNexa Image Studio
        </h1>

        <p className="mt-5 text-2xl text-[#2563EB] font-medium">
          Professional Image Optimization Suite
        </p>

        <p className="mt-3 text-gray-500 text-lg">
          Version 1.0
        </p>

        <button
          onClick={onLaunch}
          className="
          mt-12
          bg-white
          border-2
          border-[#0F5FDB]
          text-[#0F5FDB]
          px-10
          py-4
          rounded-xl
          text-lg
          font-semibold
          transition-all
          duration-300
          hover:bg-[#0F5FDB]
          hover:text-white
          shadow-md
          "
        >
          Launch Studio
        </button>

        <p className="mt-10 text-sm text-gray-400">
          © 2026 AffiNexa
        </p>

      </div>

    </div>
  );
}