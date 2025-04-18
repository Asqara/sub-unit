// Simulasi database kelulusan dalam bentuk array
const dataKelulusan = [
        {nim:'G0401241029', nama:"Abid Ra'fad Aziz", status:'LOLOS', pilihan:'Dinamika'},
        {nim:'I3401241070', nama:'Altafaris Wibisono', status:'LOLOS', pilihan:'Media Kreatif'},
        {nim:'I3401241157', nama:'Ameera Nabiha Fazia', status:'LOLOS', pilihan:'Internal'},
        {nim:'H5401241062', nama:'Ammara Syauqillah Susanto', status:'LOLOS', pilihan:'Internal'},
        {nim:'E3401241097', nama:'Andrea Ayudia', status:'LOLOS', pilihan:'Media Kreatif'},
        {nim:'G3401241051', nama:'ARMA JASIR FADILAH', status:'LOLOS', pilihan:'Dinamika'},
        {nim:'H4401241107', nama:'Arsiliya Erlan Nauri', status:'LOLOS', pilihan:'Dinamika'},
        {nim:'G8401241056', nama:'Chelsea Audrey Crystalia', status:'LOLOS', pilihan:'Internal'},
        {nim:'G2401241005', nama:'Deni Wicaksono', status:'LOLOS', pilihan:'Pengembangan PJK'},
        {nim:'I2401241055', nama:'Devira Yosi Yatsika', status:'LOLOS', pilihan:'Internal'},
        {nim:'F1401241035', nama:'Dhia Aufa', status:'LOLOS', pilihan:'Dinamika'},
        {nim:'K1401241098', nama:'Eleanor Egsanara Simanullang', status:'LOLOS', pilihan:'Media Kreatif'},
        {nim:'E4401241010', nama:'Farouq Muhamad', status:'LOLOS', pilihan:'Internal'},
        {nim:'H4401241068', nama:'Guntur Prahara', status:'LOLOS', pilihan:'Dinamika'},
        {nim:'M0401241122', nama:'Lara Tria Novita', status:'LOLOS', pilihan:'Pengembangan PJK'},
        {nim:'C5401241042', nama:'M. NABIL INSANI', status:'LOLOS', pilihan:'Pengembangan PJK'},
        {nim:'D2401241010', nama:'Muhamad Nazar Robius Sani Awaludin', status:'LOLOS', pilihan:'Pengembangan PJK'},
        {nim:'M0403241091', nama:'Muhammad Irfan Daniswara', status:'LOLOS', pilihan:'Media Kreatif'},
        {nim:'L1401241014', nama:'Nabila Shakila ‘Adani Putri Alya', status:'LOLOS', pilihan:'Pengembangan PJK'},
        {nim:'G4401241115', nama:'Nur Yasmin Fadhillah', status:'LOLOS', pilihan:'Media Kreatif'},
        {nim:'C1401241024', nama:'Pratama Diningrat Marjuki', status:'LOLOS', pilihan:'Dinamika'},
        {nim:'A2401241140', nama:'Reihan Athallah Akbar', status:'LOLOS', pilihan:'Internal'},
        {nim:'I1401241068', nama:'Syauqi Shabrina Nugraha', status:'LOLOS', pilihan:'Pengembangan PJK'},
        {nim:'M0402241010', nama:'Zahra Alia Pratiwi', status:'LOLOS', pilihan:'Dinamika'},
];

// Fungsi untuk mengecek kelulusan
function cekKelulusan() {
    const inputData = document.getElementById("inputData").value.trim();
    const errorElement = document.getElementById("error");

    // Reset pesan error sebelumnya
    errorElement.textContent = "";

    if (inputData === "") {
        errorElement.textContent = "Harap masukkan Nomor Pendaftaran atau Nama!";
        return;
    }

    // Cari data dalam "database" dengan case-insensitive
    const hasil = dataKelulusan.find(data => 
        data.nim.toLowerCase() === inputData.toLowerCase() || 
        data.nama.toLowerCase() === inputData.toLowerCase()
    );

    if (hasil) {
        try {
            // Simpan hasil ke localStorage dengan key yang unik
            localStorage.setItem("hasilKelulusan", JSON.stringify(hasil));
            
            // Redirect ke halaman hasil
            window.location.href = "hasil.html";
        } catch (e) {
            errorElement.textContent = "Gagal menyimpan data ke localStorage. Coba lagi!";
            console.error("localStorage error:", e);
        }
    } else {
        // Tampilkan error jika data tidak ditemukan
        errorElement.textContent = "Data tidak ditemukan. Periksa kembali input Anda!";
    }
}
