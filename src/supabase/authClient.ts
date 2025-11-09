import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "YOUR_SUPABASE_URL";
const SUPABASE_ANON_KEY = "YOUR_SUPABASE_ANON_KEY";

export const authClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Ví dụ hàm login
export const loginUser = async (email: string, password: string) => {
  const { data, error } = await authClient.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
};

// Ví dụ hàm đăng ký
export const registerUser = async (email: string, password: string) => {
  const { data, error } = await authClient.auth.signUp({
    email,
    password,
  });
  return { data, error };
};
