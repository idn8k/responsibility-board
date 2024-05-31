import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://fowkxbjbdhhsnrkcnynm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZvd2t4YmpiZGhoc25ya2NueW5tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3NTg0MzcsImV4cCI6MjAyNjMzNDQzN30.cSmuFNNOsCJ6wHBr5rrzb7rsKw489r528Rylo5ReBTU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
