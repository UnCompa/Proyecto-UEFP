import { Tooltip } from "@nextui-org/react";

export default function AcademicsLink({ id, children, text, url, content }) {
  return (
    <Tooltip placement="left-end" color="foreground" content={content} className="flex">
      <a href={url} className="flex items-center justify-start gap-x-2 transition-all bg-zinc-300 dark:bg-zinc-800 p-1 rounded hover:bg-zinc-200 active:bg-zinc-400 dark:hover:bg-zinc-700 dark:active:bg-zinc-900">
      <span className="text-xs text-zinc-800 dark:text-zinc-200">
      {children}
      </span>
      <span className="hidden lg:block text-sm text-gray-900 dark:text-gray-100">{text}</span>
      <span className="block lg:hidden text-sm text-gray-900 dark:text-gray-100">{id}</span>
      </a>
    </Tooltip>
  );
}
