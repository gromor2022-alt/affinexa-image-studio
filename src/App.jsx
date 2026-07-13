import { useState } from "react";
import Home from "./pages/Home";
import Workspace from "./pages/Workspace";
import { AppProvider } from "./context/AppContext";

function App() {
  const [showWorkspace, setShowWorkspace] = useState(false);

  return (
    <AppProvider>
      {showWorkspace ? (
        <Workspace />
      ) : (
        <Home onLaunch={() => setShowWorkspace(true)} />
      )}
    </AppProvider>
  );
}

export default App;