import { createClient } from "@supabase/supabase-js";
const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL
const supabaseAnon = import.meta.env.PUBLIC_SUPABASE_ANON_KEY
export const supabase = createClient(supabaseUrl,supabaseAnon);