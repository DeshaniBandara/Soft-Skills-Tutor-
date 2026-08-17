import { createClient } from '@supabase/supabase-js';

// Fetch Supabase URL and Anon Key from environment variables (.env file)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Check if the environment variables are loaded correctly
if (!supabaseUrl || !supabaseKey) {
  console.error('⚠️ Supabase environment variables are missing! Please check your .env file.');
}

// Create and export the Supabase client
export const supabase = createClient(supabaseUrl, supabaseKey);