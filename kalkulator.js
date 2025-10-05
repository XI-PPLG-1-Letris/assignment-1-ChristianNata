const kalkulator = () => {
  const a = 20;
  const b = 4;

  const tambah = a + b;
  const kurang = a - b;
  const kali = a * b;
  const bagi = a / b;
  const modulus = a % b;

  console.log("Angka pertama:", a);
  console.log("Angka kedua:", b);
  console.log("Hasil Penjumlahan:", tambah);
  console.log("Hasil Pengurangan:", kurang);
  console.log("Hasil Perkalian:", kali);
  console.log("Hasil Pembagian:", bagi);
  console.log("Sisa Bagi (Modulus):", modulus);
};

// Jalankan function
kalkulator();