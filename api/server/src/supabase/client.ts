import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseApiKey = process.env.SUPABASE_API_KEY;

if (!supabaseUrl || !supabaseApiKey) {
  throw new Error(`Missing SUPABASE_URL or SUPABASE_API_KEY`);
}

const supabase = createClient<Database>(supabaseUrl, supabaseApiKey);

export default supabase;
