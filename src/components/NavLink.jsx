export const Icon = () => {
  return (
    <svg
      height="10px"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
    </svg>
  );
};

function NavLink({to, text}) {
  return (
    <a
      href={`${to}`}
      class="rounded-full px-4 py-2 flex items-center gap-x-2 font-Rubik hover:rounded-full hover:ring-2 hover:ring-white hover:bg-white hover:text-black transition-colors duration-200 ease-out"
    >
        {text}
      <span>
        <Icon />
      </span>
    </a>
  );
}

export default NavLink;
