export default function Link({ to, children, text, disable, thin = false, url = "/" }) {
  const urlStr = url.toString()
  return (
    <>
      {disable ? (
        <button
          className={`flex font-light items-center gap-x-2 hover:bg-zinc-800 rounded w-full px-4 py-2 transition-all`}
        >
          {children}
          <p className={`${(urlStr.includes(to)) ? "text-red-500" : "text-white"}`}>{text}</p>
        </button>
      ) : (
        <a
          href={to}
          className={`flex font-light items-center gap-x-2 text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800 rounded w-full px-4 py-2 transition-all`}
        >
          <span className={`${(urlStr.includes(to)) ? "text-red-600 dark:text-red-300" : ""}`}>
          {children}
          </span>
          <p className={`${thin ? "text-sm" : "text-base"} ${(urlStr.includes(to)) ? "text-red-600 dark:text-red-300" : ""}`}>{text}</p>
        </a>
      )}
    </>
  );
}
