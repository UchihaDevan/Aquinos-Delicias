// src/lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tulajcsyfvgxvsdftikt.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR1bGFqY3N5ZnZneHZzZGZ0aWt0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ1NjM1MTIsImV4cCI6MjA2MDEzOTUxMn0.JJI-PQ4tjN7kwRsrukMbr6QjrN-_utbAjcN9DsEyzAE';

export const supabase = createClient(supabaseUrl, supabaseKey);
