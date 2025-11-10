import { createClient } from "@supabase/supabase-js";

// ========================
// ⚙️ Cấu hình Supabase Auth
// ========================
const SUPABASE_URL = "https://axdbcqpwejcxvvisscjm.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF4ZGJjcXB3ZWpjeHZ2aXNzY2ptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI2NjIwNTYsImV4cCI6MjA3ODIzODA1Nn0.OXDfGsVn_10_cADPGPPlUY6ttVLefIh4zzqa9rbLCKg";

export const authClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ========================
// 👤 Hàm đăng nhập / đăng ký
// ========================

// 🔹 Đăng nhập người dùng
export const loginUser = async (email: string, password: string) => {
  const { data, error } = await authClient.auth.signInWithPassword({
    email,
    password,
  });
  if (error) console.error("Lỗi đăng nhập:", error.message);
  return { data, error };
};

// 🔹 Đăng ký người dùng mới
export const registerUser = async (email: string, password: string) => {
  const { data, error } = await authClient.auth.signUp({
    email,
    password,
  });
  if (error) console.error("Lỗi đăng ký:", error.message);
  return { data, error };
};
