let BASE_URL = 'http://numbersapi.com/';
let fav_num = 15

// PART 1
async function numberFacts() {
    let data = await axios.get(`${BASE_URL}${fav_num}?json`);
    console.log(data)
}

numberFacts();

// PART 2

let numbers = [23, 16, 99]

async function multiNumberFacts() {
    let data = await axios.get(`${BASE_URL}${numbers}?json`)
    console.log(data)
}

multiNumberFacts();

// PART 3
let fourFactPromises = [];

for (let i = 1; i < 5; i++) {
    fourFactPromises.push(axios.get(`${BASE_URL}${fav_num}?json`));
}

async function fourFacts() {
    let facts = await Promise.all(fourFactPromises);

    facts.forEach(fact => {
        $('body').append(`<p>${fact.data.text}</p>`);
    })
}

fourFacts()