
function NavLink({to = "/", text,children, color = "bg-zinc-800"}) {
  return (
    <a
      href={`${to}`}
      className="group rounded-full px-2 py-1 flex items-center gap-x-2 font-Rubik hover:rounded-full hover:ring-2 hover:ring-black hover:bg-zinc-900  dark:hover:ring-white dark:hover:bg-zinc-100  transition-colors duration-200 ease-out"
    >
      <span className={`p-1 text-white rounded-lg text-xl ${color} hover:text-white dark:hover:text-white`}>
        {children}
      </span>
        <span className="dark:group-hover:text-black  group-hover:text-white text-sm">
        {text}
        </span>
      </a>
  );
}

export default NavLink;
