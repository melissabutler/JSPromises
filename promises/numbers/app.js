let BASE_URL = 'http://numbersapi.com/';
let fav_num = 15

// Part 1

$.getJSON(`${BASE_URL}${fav_num}?json`).then(data => {
    console.log(data);

});

// Part 2
let numbers = [23, 16, 99]

$.getJSON(`${BASE_URL}${numbers}?json`).then(data => {
    console.log(data)
});

// Part 3

Promise.all(
    Array.from({length: 4 }, () => {
        return $.getJSON(`${BASE_URL}${fav_num}?json`);
    })
).then(facts => {
    facts.forEach(data => $('body').append(`<p>${fact.data.text}</p>`));
})