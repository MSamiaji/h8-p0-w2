var hari = 1;
var bulan = 5;
var tahun = 1945;

switch (bulan) {
    case 0:
        bulan = "Tidak ada bulan 0";
        break;
    case 1:
        bulan = "Januari";
        break;
    case 2:
        bulan = "Februari";
        break;
    case 3:
        bulan = "Maret";
        break;
    case 4:
        bulan = "April";
        break;
    case 5:
        bulan = "Mei";
        break;
    case 6:
        bulan = "Juni";
        break;
    case 7:
        bulan = "July";
        break;
    case 8:
        bulan = "Agustus";
        break;
    case 9:
        bulan = "September";
        break;
    case 10:
        bulan = "Oktober";
        break;
    case 11:
        bulan = "November";
        break;
    case 12:
        bulan = "Desember";
        break;
    default: 
        bulan = "Tidak termasuk dalam kondisi";
        break;

}

console.log(hari+' '+bulan+' '+tahun);