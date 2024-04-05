import { Divider } from "@nextui-org/react";

export default function PeopleCard({teacher,work,content,img = ""}) {
  return (
    <div className="h-full w-full bg-zinc-900 p-2 rounded">
      <figure className="flex items-center justify-center p-2">
        <img className="aspect-square rounded-full h-full w-32 border-2 p-1 object-cover" src={img} alt="" />
      </figure>
      <Divider />
      <h2 className="text-center font-Kanit py-1 text-2xl font-bold">{teacher}</h2>
      <h3 className="text-center font-Noto-Sans text-zinc-200">{work}</h3>
      <p className="py-1 font-Noto-Sans text-zinc-500 text-center">"{content}"</p>
    </div>
  );
}
