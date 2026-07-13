import { useState } from "react";
import Home from "./pages/Home";
import Workspace from "./pages/Workspace";

function App() {
  const [showWorkspace, setShowWorkspace] = useState(false);

  return showWorkspace ? (
    <Workspace />
  ) : (
    <Home onLaunch={() => setShowWorkspace(true)} />
  );
}

export default App;