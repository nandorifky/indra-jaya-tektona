import fs from 'fs';
import path from 'path';

// ==========================================
// DATABASE PRODUK LENGKAP (MASTER DATA)
// ==========================================
const database = [
  // 1. ALAT LAB TANAH
  {
    category: "alat-lab-tanah",
    items: [
      "Automatic Soil Compactor",
      "CBR Laboratory Elektrik",
      "CBR Lapangan",
      "Manual Laboratory CBR",
      "Digital CBR Laboratory",
      "CBR Mould Set",
      "Swell Plate & Tripod CBR",
      "Surcharge Weight CBR",
      "Sondir 2.5 Ton Manual",
      "Sondir 5 Ton Manual",
      "Sondir Hidrolik 5 Ton",
      "Hand Bor Tanah",
      "Tube Density Sampler",
      "Sand Cone Test Set",
      "Plate Bearing Test Set",
      "Standard Penetration Test SPT",
      "Dynamic Cone Penetrometer DCP",
      "Proving Ring Penetrometer",
      "TVA Penetrometer",
      "Consolidation Test Set",
      "Electric Direct Shear",
      "Manual Direct Shear",
      "Vane Shear Tester",
      "Torvane Test",
      "Unconfined Compression Machine",
      "Triaxial Test Set",
      "Liquid Limit Test Set",
      "Plastic Limit Test Set",
      "Shrinkage Limit Test Set",
      "Moisture Content Test",
      "Speedy Moisture Tester",
      "Hydrometer Analysis Test",
      "Mechanical End Over End Shaker",
      "Corps Of Engineer Soil Surface Sampler",
      "Combination Permeameter",
      "Compaction Permeameter",
      "Compaction Test Set",
      "Sample Extruder Electric",
      "Sample Extruder Manual",
      "Vacuum Stand"
    ]
  },

  // 2. ALAT LAB BATUAN (AGGREGATE)
  {
    category: "alat-lab-batuan",
    items: [
      "Aggregate Impact Test",
      "Aggregate Crushing Value Apparatus",
      "Los Angeles Abrasion Machine",
      "Soundness Test",
      "Absorption of Fine Aggregate Test Set",
      "Specific Gravity & Absorption of Coarse Aggregate Test Set",
      "Bulk Density Test Set",
      "Sand Equivalent Test Set",
      "Sand Equivalent Shaker",
      "Organic Impurities Test",
      "Gilson Sample Splitter",
      "Precission Sample Splitter",
      "Sample Splitter",
      "Rotary Sample Devider",
      "Sieve Shaker",
      "Sieve Shaker Electric",
      "Electromagnetic Sieve Shakers",
      "Mesh Sieve Stainless Steel",
      "Square Pan 400 x 400 x 50 mm",
      "Thickness Gauge",
      "Length Gauge"
    ]
  },

  // 3. ALAT LAB BETON
  {
    category: "alat-lab-beton",
    items: [
      "Compression Machine 1500 kN",
      "Compression Machine 2000 kN",
      "Compression Machine 3000 kN",
      "Alat Uji Tekan Beton & Uji Lentur Beton",
      "Alat Uji Tekan Paving Block",
      "Hydraulic Concrete Beam Testing Machine",
      "Universal Testing Machine UTM",
      "Split Tensile Test",
      "Modulus Of Elasticity In Concrete Test Set",
      "Concrete Hammer Test Proceq Type N Original Schmidt",
      "Proceq Hammer Test Silver Schmidt ST PC Type N",
      "Matest C380 Hammer Test",
      "Matest C386N Hammer Test Digital",
      "Calibration Anvil Matest",
      "C194 Matest Concrete Pocket Penetrometer",
      "Slump Test Set",
      "Air Content Of Fresh Mixed Of Concrete",
      "Compacting Factor Apparatus",
      "L box Apparatus",
      "Vebe Time",
      "Vibrating Table",
      "Laboratory Concrete Mixer",
      "Mesin Beton Shotcrete PZ-7",
      "Cetakan Kubus Beton Cast Iron",
      "Cetakan Kubus Beton Plastik",
      "Cetakan Silinder Beton",
      "Concrete Beam Mould",
      "Vertical Cylinder Capping Set",
      "Steel Bar Bender Machine",
      "Steel Bar Cutter Portable RC25"
    ]
  },

  // 4. ALAT LAB ASPAL
  {
    category: "alat-lab-aspal",
    items: [
      "Marshall Test Set Complete",
      "Digital Marshall Test",
      "Centrifuge Extractor Test Electric",
      "Reflux Extractor Test Set",
      "Ductility Of Bituminous Materials Test Set",
      "Automatic Bitumen Penetrometer",
      "Laboratory Penetration Test Set",
      "Softening Point Test Set",
      "Flash And Fire Point By Cleveland Open Cup",
      "Loss On Heating Thin-Film Test",
      "Saybolt Viscosimeter",
      "Specific Gravity Of Semi Solid Bituminous Materials",
      "Distilation Of Cutback Asphalts",
      "Percentage Refusal Density",
      "Benkelman Beam",
      "Core Drill Aspal",
      "Core Drill Core IT",
      "Husqvarna DMS240 Diamond Core Drilling Machine",
      "Diamond Bit Hoffman 4 Inch",
      "Water Content In Petroleum Products"
    ]
  },

  // 5. ALAT LAB SEMEN
  {
    category: "alat-lab-semen",
    items: [
      "Air Permeability Of Portland Cement By Fineness Device Blaine",
      "Time Of Setting Of Hydraulic Cement By Vicat Needle",
      "Compressive Strength Of Hydraulic Cement Mortar",
      "Mortar Three Gang",
      "Specific Gravity Of Hydraulic Cement Test"
    ]
  },

  // 6. MINING EQUIPMENT
  {
    category: "mining-equipment",
    items: [
      "Jaw Crusher 5x8",
      "Retsch Jaw Crusher",
      "Double Roller Crusher",
      "Lab Pulverizer",
      "Hammer Mill",
      "Ball Mill",
      "Raymond Mill",
      "Handgrove Hardgrove Grindability",
      "Hydraulic Press Pellet Machine",
      "Rotap Sieve Shaker",
      "Sieve Shaker Lab Preparasi Mining",
      "Big Drying Oven",
      "Bottle Roller"
    ]
  },

  // 7. HIDROLIKA & FLUIDA
  {
    category: "hidrolika-fluida",
    items: [
      "Hydraulic Bench",
      "Flume Test",
      "Impact Of Jet",
      "Bernoullis Theorem Apparatus",
      "Pipe Friction Apparatus",
      "Bends And Fitting Friction",
      "Metacentric Height",
      "Ventury Set"
    ]
  },

  // 8. GENERAL EQUIPMENT (Tambahan)
  {
    category: "general-equipment",
    items: [
      "Laboratory Incubator",
      "Desicator Vacuum 300mm",
      "Vernier Caliper 12 Inch",
      "Dial Indicator 10 mm",
      "Mitutoyo Dial Indicator",
      "Metal Dial Thermometer Digital",
      "Pocket Dial Thermometer"
    ]
  }
];

// ==========================================
// SCRIPT GENERATOR
// ==========================================
const targetDir = path.join(process.cwd(), 'src', 'content', 'products');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

console.log("🚀 Memulai proses generate produk...");
let count = 0;

database.forEach(group => {
  group.items.forEach(itemName => {
    // 1. Buat Slug URL Friendly
    const slug = itemName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    
    // 2. Buat Folder Kategori
    const categoryDir = path.join(targetDir, group.category);
    if (!fs.existsSync(categoryDir)) fs.mkdirSync(categoryDir, { recursive: true });
    
    const filePath = path.join(categoryDir, `${slug}.md`);

    // 3. Template Konten Markdown
    const content = `---
name: "${itemName}"
category: "${group.category}"
image: "https://placehold.co/600x600/F8F9FA/1F2124?text=${encodeURIComponent(itemName)}"
price: "Call for Price"
featured: false
specs:
  Merk: "Indra Jaya"
  Garansi: "1 Tahun"
  Standar: "SNI / ASTM / AASHTO"
  Status: "Ready Stock / Pre-Order"
---

## Deskripsi Produk

**${itemName}** adalah instrumen pengujian vital untuk kebutuhan laboratorium teknik sipil maupun lapangan. Alat ini didesain memenuhi standar internasional (ASTM) dan nasional (SNI) untuk menjamin akurasi data proyek konstruksi Anda.

### Fitur Utama:
- **Material Tangguh:** Dibuat dari bahan berkualitas tinggi yang tahan korosi dan kondisi lapangan ekstrem.
- **Akurasi Tinggi:** Sistem pengukuran presisi dengan toleransi error minimal.
- **Mudah Dioperasikan:** Desain ergonomis memudahkan teknisi dalam pengambilan data.
- **Sertifikasi:** Opsional kalibrasi KAN (Komite Akreditasi Nasional).

### Aplikasi Penggunaan:
Alat ini umum digunakan oleh kontraktor, konsultan pengawas, BUMN Karya, dan Laboratorium Universitas untuk pengujian kualitas material ${group.category.replace(/-/g, ' ')}.

### Spesifikasi Teknis:
| Parameter | Nilai / Keterangan |
| :--- | :--- |
| **Model** | ${itemName} |
| **Dimensi** | - |
| **Berat** | - |
| **Power** | - |
| **Kelengkapan** | Unit Utama, Manual Book, Aksesoris Standar |

---
*Catatan: Spesifikasi dapat berubah sewaktu-waktu tanpa pemberitahuan untuk peningkatan mutu.*
`;

    // 4. Tulis File (Skip jika sudah ada agar tidak menimpa kerjaan manual Anda nanti)
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ [${group.category}] Created: ${slug}.md`);
      count++;
    } else {
      console.log(`⚠️ [${group.category}] Skipped (Exists): ${slug}.md`);
    }
  });
});

console.log(`\n🎉 SELESAI! ${count} produk baru berhasil dibuat.`);
console.log(`📂 Cek folder: src/content/products`);