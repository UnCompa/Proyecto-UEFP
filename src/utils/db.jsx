import { supabase } from "../lib/supabase";

export const selectDB = async (db) => {
  const { data, error } = await supabase.from(db).select();
  return { data, error };
};
export const selecwithTableDB = async (db, table) => {
  const { data, error } = await supabase.from(db).select(table);
  return { data, error };
};
export const selectOnlyDataDB = async (db, table) => {
  let jsonData = {};
  const { data } = await supabase.from(db).select(table);
  (data);
  data?.forEach((text) => {
    jsonData = text.translates;
  });
  return jsonData;
};
export const selectOnlyDataContiditionDB = async (db, table, condicion) => {
  let jsonData = {};
  const column = condicion[0];
  const row = condicion[1];
  const { data } = await supabase.from(db).select(table).eq(column, row);
  data?.forEach((text) => {
    jsonData = text.translates;
  });
  return jsonData;
};
export const selectTranslate = async (table, lang) => {
  try {
    const langTable = table + lang;
    const { data: langData, error } = await supabase.from(langTable).select();
    const { data: langId, error: errorId } = await supabase.from(table).select();
    if (error || errorId) {
      throw error || errorId;
    }
    const combinedData = {};
    langData.forEach((item) => {
      const langIdItem = langId.find((idItem) => idItem.id === item.id);
      if (langIdItem) {
        combinedData[langIdItem.identificador] = item.texto;
      }
    });;
    return combinedData
  } catch (error) {
    console.error('Error al recuperar las traducciones:', error.message);
    return null;
  }
};


export const updateDBWithJson = async (db, table, updateJson) => {
  try {
    // Obtener los datos actuales de la tabla
    const { data: currentData, error: currentError } = await supabase
      .from(db)
      .select(table)
      .single();

    // Manejar errores al obtener los datos actuales
    if (currentError) {
      throw currentError;
    }

    // Fusionar los datos actuales con el nuevo JSON de actualización
    const updatedData = { ...currentData[table], ...updateJson };
    // Realizar la actualización en la base de datos
    const { data: dataUpdate, error: errorUpdate } = await supabase
      .from(db)
      .update({ [table]: updatedData })
      .eq("id", "1") // Ajusta la condición según tu estructura de datos
      .select();

    // Manejar errores durante la actualización
    if (errorUpdate) {
      throw errorUpdate;
    }

    ("Datos actualizados exitosamente:", dataUpdate);
    return { data: dataUpdate, error: null };
  } catch (error) {
    console.error("Error al actualizar los datos:", error.message);
    return { data: null, error: error.message };
  }
};
