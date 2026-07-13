import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {

  const [inputFolder, setInputFolder] = useState("");

  const [outputFolder, setOutputFolder] = useState("");

  const [width, setWidth] = useState(1600);

  const [quality, setQuality] = useState(90);

  const [format, setFormat] = useState("webp");

  return (

    <AppContext.Provider
      value={{
        inputFolder,
        setInputFolder,

        outputFolder,
        setOutputFolder,

        width,
        setWidth,

        quality,
        setQuality,

        format,
        setFormat,
      }}
    >

      {children}

    </AppContext.Provider>

  );

}

export function useApp() {
  return useContext(AppContext);
}