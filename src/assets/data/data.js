export const data = {
    bride: {
        L: {
            id: 1,
            name: 'Hidayat Khoirul Umam',
            child: 'Putra Pertama',
            father: 'Abdul Ghofur',
            mother: 'Sakdiyah',
            image: './src/assets/images/cowo.webp'
        },
        P: {
            id: 2,
            name: 'Kuni Afiyah',
            child: 'Putri Pertama',
            father: 'Solihin',
            mother: 'Siti Mukaromah',
            image: './src/assets/images/cewe.webp'
        },

        couple: './src/assets/images/couple.webp'
    },

    time: {
        reception: {
            year: '2025',
            month: 'Juni',
            date: '13',
            day: 'Jumat',
            hours: {
                start: '14.00',
                finish: 'Selesai'
            }
        },
        marriage: {
            year: '2025',
            month: 'Oktober',
            date: '5',
            day: 'Minggu',
            hours: {
                start: '10.00',
                finish: 'Selesai'
            }
        },
        address: 'Dusun Sampangan RT07/RW01, Desa Bumirejo, Kec.Kaliangkrik, Kab.Magelang'
    },

    link: {
        calendar: 'https://calendar.app.google/dV54At7N8nQJPFsx6',
        map: 'https://maps.app.goo.gl/i87c25GLoLpTyNC69',
    },

    galeri: [
        {
            id: 1,
            image: './src/assets/images/1.jpg'
        },
        {
            id: 2,
            image: './src/assets/images/2.jpg'
        },
        {
            id: 3,
            image: './src/assets/images/3.jpg'
        },
        {
            id: 4,
            image: './src/assets/images/4.jpg'
        },
        {
            id: 5,
            image: './src/assets/images/5.jpg'
        }
    ],

    bank: [
        {
            id: 1,
            name: 'Kuni Afiyah',
            icon: './src/assets/images/bni.png',
            rekening: '1790710397'
        },
        {
            id: 2,
            name: 'Hidayat khoirul umam',
            icon: './src/assets/images/dana.png',
            rekening: '087820004195'
        },
    ],

    audio: './src/assets/audio/wedding.mp3',

    api: 'https://script.google.com/macros/s/AKfycbwiB9j2eKTCfJ5rvFBJKP2wxK6YATvH8PmgbCWeJaFH6_y3mPkK2YPTLIc2IJs0n7bxMA/exec',

    navbar: [
        {
            id: 1,
            teks: 'Home',
            icon: 'bx bxs-home-heart',
            path: '#home',
        },
        {
            id: 2,
            teks: 'Mempelai',
            icon: 'bx bxs-group',
            path: '#bride',
        },
        {
            id: 3,
            teks: 'Tanggal',
            icon: 'bx bxs-calendar-check',
            path: '#time',
        },
        {
            id: 4,
            teks: 'Galeri',
            icon: 'bx bxs-photo-album',
            path: '#galeri',
        },
        {
            id: 5,
            teks: 'Ucapan',
            icon: 'bx bxs-message-rounded-dots',
            path: '#wishas',
        },
    ],
}
