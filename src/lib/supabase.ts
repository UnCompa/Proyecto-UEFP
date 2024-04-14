import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ghcjhzctpiawffeinyir.supabase.co"
const supabaseAnon = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdoY2poemN0cGlhd2ZmZWlueWlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMxMTE1ODAsImV4cCI6MjAyODY4NzU4MH0.veAckn8TnCIu_96svywUvTsJ6D4oQwYeeVUmjY5fMiY"
export const supabase = createClient(supabaseUrl,supabaseAnon);