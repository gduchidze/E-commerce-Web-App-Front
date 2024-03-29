import { Moon, Sun } from "lucide-react";
import {  useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDarkMode } from "../DarkContext";

const Header = () => {
  const [burger, setBurger] = useState<boolean>(false)
  const nav_links: { name: string; path: string; id: number }[] = [
    {
      name: "Home",
      path: "home",
      id: 1,
    },
    {
      name: "Products",
      path: "products",
      id: 2,
    },
    {
      name: "Sign In",
      path: "signin",
      id: 3,
    },
    {
      name: "Sign Up",
      path: "signup",
      id: 4,
    },
  ];

  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setBurger(false);
        return;
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="sticky z-10 top-0 dark:bg-[#000000ab]">
      <header className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        <h1
        className="font-volkhov text-[2rem] text-[#484848] dark:text-white"
        onClick={() => navigate("/")}
      >
        DUTA
      </h1>
      {
        burger && <div className="fixed top-0 left-0 w-screen h-screen bg-[#222831] opacity-50" onClick={()=>setBurger(false)}></div>
      }
      <ul className={`flex flex-col justify-center gap-[18px] fixed px-20 h-screen top-[0%] right-0 bg-gradient-to-b from-white to-gray-200
      dark:from-black dark:to-gray-400
      sm:gap-[58px] sm:px-0
      sm:static sm:flex-row sm:bg-none sm:h-full  sm:translate-x-0
      duration-300
      ${burger ? 'translate-x-0' : 'translate-x-full'}
      `}>
        {nav_links.map((item) => (
          <li onClick={() => {
            setBurger(false)
            navigate(item.path)}} className={`duration-300 border border-transparent cursor-pointer px-2 py-2 
            ${item.path === 'signup' ? 'bg-black rounded text-white hover:bg-[#30A2FF] dark:bg-white dark:text-black'
            : 'hover:border-gray-600 rounded-xl dark:text-white sm:dark:text-white'}`}>
            {item.name}
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-col gap-1 relative cursor-pointer" onClick={()=>setBurger(prev=> !prev)}>
        <div className={`dark:bg-white ${burger ? 'translate-y-1 opacity-0' : 'bg-slate-900 opacity-100'} w-7 h-1 rounded `}></div>
        <div className={`dark:bg-white duration-300 ${burger ? 'bg-[#686767] dark:bg-slate-900 rotate-[50deg] translate-y-1' : 'bg-[#222831] rotate-[0deg]'}  w-7 h-1 rounded `}></div>
        <div className={`dark:bg-white duration-300 ${burger ? 'bg-[#686767] dark:bg-slate-900 rotate-[-50deg]' : 'bg-[#222831] rotate-[0deg]'} w-7 h-1 rounded `}></div>
      </div>
      <div className="cursor-pointer fixed bottom-10 right-10 z-[-1]" onClick={toggleDarkMode}>
        {
          darkMode ? <Sun color="#c1c1c1" size={40}/> : <Moon color="#001" size={40}/>
        }
      </div>
      </header>
      
    </div>
  );
};

export default Header;
