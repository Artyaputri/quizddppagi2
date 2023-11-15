const prompt = require('prompt-sync')();

let score = 0;
let jawaban_benar = 0;
let jawaban_salah = 0;
let point_per_soal = 1;

let soal = [
    {
        "q": "Yang merupakan member JKT 48?",
        "o": [
            'Jokowi',
            'Freya',
            'Nadin Amizah',
            'Igun Mama Takut',
        ],
        "a": 1 
    },
    {
        "q": "Nama kakak Upin dan Ipin adalah...",
        "o": [
            'Kak Rose',
            'Kak Jeane',
            'Monkey D. Luffy',
            'Igun Mama Takut',
        ],
        "a": 0 
    },

    {
        "q": "nama hewan awalan a adalah...",
        "o": [
            'singa',
            'ayam',
            'kucing',
            'kelinci',
        ],
        "a": 1
    },
    {
        "q": "presiden pertama indonesia adalah...",
        "o": [
            'hatta',
            'megawati',
            'soekarno',
            'jokowi',
        ],
        "a": 2 
    },
    {
        "q": "makanan china adalah...",
        "o": [
            'nasi goreng',
            'mie goreng',
            'dimsum',
            'bakso',
        ],
        "a": 2
    }


]

let nama = prompt('Input nama: ')

// Lengkapi code program yang belum selesai
for (let i = 0; i < soal.length; i++) {
    console.log('\nSoal ' + (i + 1) + ': ' + soal[i].q);
    
    // Display answer choices
    for (let j = 0; j < soal[i].o.length; j++) {
        console.log(j + '. ' + soal[i].o[j]);
    }

    // Prompt user for an answer
    let jawaban = prompt('Jawaban Anda (masukkan angka pilihan): ');

    // Check if the answer is correct
    if (parseInt(jawaban) === soal[i].a) {
        console.log('Jawaban Anda benar!');
        score += point_per_soal;
        jawaban_benar++;
    } else {
        console.log('Jawaban Anda salah. Jawaban yang benar adalah: ' + soal[i].o[soal[i].a]);
        jawaban_salah++;
    }
}


console.log("Kuis selesai")
console.log("\n")
console.log("Statistic Kuis")
console.log('Nama\t\t:',nama)
console.log('Score\t\t:',score)
console.log('Jawaban benar\t:',jawaban_benar)
console.log('Jawaban salah\t:',jawaban_salah)