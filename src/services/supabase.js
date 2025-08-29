import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://zltextgtzdqgxixqgnvj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpsdGV4dGd0emRxZ3hpeHFnbnZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQxNDg1NDUsImV4cCI6MjA2OTcyNDU0NX0.4YVca7X6rXrFbWFZhwtHFeTqbYbXPjLWpZV2CR250Uo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
