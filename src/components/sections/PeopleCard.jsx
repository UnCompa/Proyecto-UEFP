import { Divider } from "@nextui-org/react";
import {motion} from 'framer-motion'
export default function PeopleCard({teacher,work,content,img = ""}) {
  return (
    <div className="h-full w-full bg-zinc-200 dark:bg-zinc-950/50 p-2 rounded shadow-lg hover:bg-zinc-300 dark:hover:bg-zinc-800 transition-all">
      <figure className="flex items-center justify-center p-4">
        <motion.img initial={{scale: 0}} whileInView={{scale: 1}} transition={{ease: "easeOut"}} className="avatar aspect-square rounded-full h-full w-32 border-2 border-black dark:border-white p-1 object-cover" src={img} alt="" />
      </figure>
      <Divider />
      <h2 className="text-center font-Kanit py-1 text-2xl font-bold">{teacher}</h2>
      <h3 className="text-center font-Noto-Sans text-zinc-800 dark:text-zinc-200">{work}</h3>
      <p className="py-1 font-Noto-Sans text-zinc-500 text-center">"{content}"</p>
    </div>
  );
}
