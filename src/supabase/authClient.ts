// src/supabase/authClient.ts
import { createClient } from "@supabase/supabase-js";

// ========================
// ⚙️ Cấu hình Supabase
// ========================
const SUPABASE_URL = "https://axdbcqpwejcxvvisscjm.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF4ZGJjcXB3ZWpjeHZ2aXNzY2ptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI2NjIwNTYsImV4cCI6MjA3ODIzODA1Nn0.OXDfGsVn_10_cADPGPPlUY6ttVLefIh4zzqa9rbLCKg";

export const authClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ========================
// 👤 Hàm đăng nhập / đăng ký (không cần xác thực email)
// ========================

// 🔹 Đăng nhập người dùng
export const loginUser = async (email: string, password: string) => {
  try {
    const { data, error } = await authClient.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      console.error("Lỗi đăng nhập:", error.message);
      return { data: null, error };
    }
    return { data, error: null };
  } catch (err) {
    console.error("Lỗi đăng nhập không xác định:", err);
    return { data: null, error: err as any };
  }
};

// 🔹 Đăng ký người dùng mới
export const registerUser = async (email: string, password: string) => {
  try {
    // signUp
    const { data, error } = await authClient.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: window.location.origin, // redirect sau khi signUp, optional
      },
    });

    if (error) {
      console.error("Lỗi đăng ký:", error.message);
      return { data: null, error };
    }

    // đăng nhập ngay sau khi đăng ký
    const { data: loginData, error: loginError } =
      await authClient.auth.signInWithPassword({ email, password });

    if (loginError) {
      console.error("Đăng nhập sau khi đăng ký thất bại:", loginError.message);
      return { data: null, error: loginError };
    }

    return { data: loginData, error: null };
  } catch (err) {
    console.error("Lỗi đăng ký không xác định:", err);
    return { data: null, error: err as any };
  }
};
