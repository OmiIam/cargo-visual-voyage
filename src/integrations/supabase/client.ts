// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://yyezvywyfbxrfynqmlec.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5ZXp2eXd5ZmJ4cmZ5bnFtbGVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ5OTQ5NjQsImV4cCI6MjA2MDU3MDk2NH0.yUaZ6Ue2qZkKHY6NLuYySj4m2dCbnLofFAgoxdl6WyI";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);