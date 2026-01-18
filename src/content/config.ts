import { defineCollection, z } from 'astro:content';

const products = defineCollection({
  type: 'content', // Karena kita butuh body text untuk deskripsi SEO
  schema: z.object({
    name: z.string(), // Nama Produk (Wajib)
    category: z.string(), // Kategori (Wajib, utk URL)
    image: z.string().default("/placeholder-product.jpg"), // Gambar utama
    price: z.string().optional(), // "Call for Price" atau angka
    featured: z.boolean().default(false), // Utk tampil di homepage
    specs: z.record(z.string()).optional(), // Tabel spesifikasi mini (Key-Value)
  }),
});

export const collections = {
  products,
};