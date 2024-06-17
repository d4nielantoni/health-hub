import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://ykmxhrevwsqeezmpwgqr.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlrbXhocmV2d3NxZWV6bXB3Z3FyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg2Mjc4MDgsImV4cCI6MjAzNDIwMzgwOH0.i_9tC_t7UyoxpEcHwspToJrUbrQzz50jLsvpMFG5kog";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase