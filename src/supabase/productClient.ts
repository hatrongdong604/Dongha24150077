import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "YOUR_SUPABASE_URL";
const SUPABASE_ANON_KEY = "YOUR_SUPABASE_ANON_KEY";

export const productClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Lấy danh sách sản phẩm
export const getProducts = async () => {
  const { data, error } = await productClient.from("products").select("*");
  return { data, error };
};

// Thêm sản phẩm mới
export const addProduct = async (product: {
  name: string;
  price: number;
  image_url?: string;
}) => {
  const { data, error } = await productClient
    .from("products")
    .insert([product]);
  return { data, error };
};

// Cập nhật sản phẩm
export const updateProduct = async (id: number, product: any) => {
  const { data, error } = await productClient
    .from("products")
    .update(product)
    .eq("id", id);
  return { data, error };
};

// Xóa sản phẩm
export const deleteProduct = async (id: number) => {
  const { data, error } = await productClient
    .from("products")
    .delete()
    .eq("id", id);
  return { data, error };
};
