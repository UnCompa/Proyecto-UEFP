import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { FaPen, FaStar } from "react-icons/fa";

export default function Objectives({title,text,children,color}) {
  return (
    <Card className={`border p-1 border-${color}-500 shadow-xl animate-fade-in`}>
      <CardHeader className="flex gap-x-2">
        {children}
        <h3 className="text-3xl font-bold font-Rubik [text-shadow:0px_0px_3px_#FFFFFF]">{title}</h3>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p className="font-Kanit">{text}</p>
      </CardBody>
    </Card>
  );
}
