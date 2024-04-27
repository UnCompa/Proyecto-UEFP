import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import {motion} from 'framer-motion'
export default function Objectives({title,text,children,color}) {

  return (
    <motion.div >
      <Card className={`card border p-1 ${color} shadow-xl animate-fade-in`}>
      <CardHeader className="flex gap-x-2">
        {children}
        <h3 className="text-3xl font-bold font-Rubik [text-shadow:0px_0px_3px_#FFFFFF]">{title}</h3>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p className="font-Kanit">{text}</p>
      </CardBody>
    </Card>
    </motion.div>
  );
}
