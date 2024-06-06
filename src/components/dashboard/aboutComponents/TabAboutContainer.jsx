import { useState } from "react";
import TabHistory from "./TabHistory";
import TabObjectives from "./TabObjetives.jsx";
import TabValues from "./TabValues";
import TabStaff from "./TabStaff";

export default function TabAboutContainer() {
  const [currentTab, setCurrentTab] = useState(1);
  return (
    <>
      <nav className="w-full">
        <ul className="flex gap-2 w-full my-2">
          <li className="w-full">
            <button
              className={`${
                currentTab === 1 ? "bg-zinc-950 shadow-2xl" : ""
              } border-b border-orange-300 w-full px-4 py-2 text-zinc-800 dark:text-zinc-300 rounded-tr-xl rounded-tl-xl transition-all`}
              onClick={() => setCurrentTab(1)}
            >
              Historia
            </button>
          </li>
          <li className="w-full">
            <button
              className={`${
                currentTab === 2 ? "bg-zinc-950 shadow-2xl" : ""
              } border-b border-orange-300 w-full px-4 py-2 text-zinc-800 dark:text-zinc-300 rounded-tr-xl rounded-tl-xl transition-all`}
              onClick={() => setCurrentTab(2)}
            >
              Valores
            </button>
          </li>
          <li className="w-full">
            <button
              className={`${
                currentTab === 3 ? "bg-zinc-950 shadow-2xl" : ""
              } border-b border-orange-300 w-full px-4 py-2 text-zinc-800 dark:text-zinc-300 rounded-tr-xl rounded-tl-xl transition-all`}
              onClick={() => setCurrentTab(3)}
            >
              Objetivos
            </button>
          </li>
          <li className="w-full">
            <button
              className={`${
                currentTab === 4 ? "bg-zinc-950 shadow-2xl" : ""
              } border-b border-orange-300 w-full px-4 py-2 text-zinc-800 dark:text-zinc-300 rounded-tr-xl rounded-tl-xl transition-all`}
              onClick={() => setCurrentTab(4)}
            >
              Personal
            </button>
          </li>
        </ul>
      </nav>
      <div className="bg-zinc-900 p-2">
        {currentTab === 1 && <TabHistory />}
        {currentTab === 2 && <TabValues />}
        {currentTab === 3 && <TabObjectives />}
        {currentTab === 4 && <TabStaff />}
      </div>
    </>
  );
}
