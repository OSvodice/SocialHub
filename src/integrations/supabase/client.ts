// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://xnmoasmxatdpnlvwcvav.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhubW9hc214YXRkcG5sdndjdmF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkwNTUxMDIsImV4cCI6MjA2NDYzMTEwMn0.cjUujlUsknd0sGnbkXbr-PrjQsf6F2B5I0FZDQx4v8Q";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);