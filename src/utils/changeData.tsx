import { supabase } from "../lib/supabase";
/**
 * 
 * @param key recibe que texto se desea recuperar en base al identificador
 * @param lang se recibe que idioma de la tabla se desea recuperar
 * @param seccion para que tabla se desea recuperar
 * @returns el texto del identificador de la tabla
 */
export const recuperarTexto = async (key: string, lang: "es" | "en", seccion:string) => {
  const { data } = await supabase
    .from(seccion)
    .select("id")
    .eq("identificador", key);
  const identificador = data ? data[0] : undefined
  const tableLang = seccion + lang;
  const { data: value } = await supabase
    .from(tableLang)
    .select("texto")
    .eq("id", identificador?.id);
  const texto = value ? value[0].texto : undefined
  return texto;
};
/**
 * 
 * @param key recibe que texto se desea recuperar en base al identificador
 * @param lang se recibe que idioma de la tabla se desea recuperar
 * @param seccion para que tabla se desea recuperar
 * @param newText el objecto con los nuevos datos
 * @returns los datos actualizados
 */
export const actualizarTexto = async (key:string, lang: "es" | "en", seccion:string,newText:object) => {
  const {data: id} = await supabase.from(seccion).select("id").eq("identificador", key);
  const identificador = id ? id[0] : undefined
  const tableLang = seccion + lang;
  const {data} = await supabase.from(tableLang).update(newText).eq("id",identificador?.id).select()  
  return data
}