import {useEffect, useState } from "react";
import Layout from "./components/Layout/Layout";
import { DarkModeContext } from "./components/DarkContext";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    
  };
  
  // change root's background color
  useEffect(() => {
    const rootElement = document.documentElement;
    rootElement.style.transition = '.5s'
    rootElement.style.backgroundColor = darkMode ? '#121212' : '#fff'; 
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div className={`font-sans max-w-7xl mx-auto ${darkMode ? "dark " : ""} `}>
        <Layout />
      </div>
    </DarkModeContext.Provider>
  );
}

export default App;