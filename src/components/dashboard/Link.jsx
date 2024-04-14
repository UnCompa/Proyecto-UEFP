import { FaHome } from "react-icons/fa";

export default function Link({to,children,text}) {
  return (
    <a
      href={to}
      className="flex font-light items-center gap-x-2 text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800 rounded w-full px-4 py-2 transition-all"
    >
      {children}
      <p>{text}</p>
    </a>
  );
}
