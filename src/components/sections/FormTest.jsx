import { useState } from "react"
import { supabase } from "../../lib/supabase"

export default function FormTest() {
    const [text, setText] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(text);
        const result = await supabase.from("text").insert(text).select()
        console.log(result);
    }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
        <label htmlFor="">Texto:</label>
        <input type="text" onChange={e => setText(e.target.value)}/>
        <button>Enviar</button>
    </form>
  )
}
