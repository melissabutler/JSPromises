let BASE_URL = "https://deckofcardsapi.com/api/deck/"

// Part 1
$.getJSON(`${BASE_URL}new/draw/`).then(data => {
    console.log(`${data.cards[0].value.toLowerCase()} of ${data.cards[0].suit.toLowerCase()}`)
})

//Part 2
let firstPull = null;
$.getJSON(`${BASE_URL}new/draw`).then(data =>{
    firstPull = data.cards[0];
    let deckId = data.deck_id;
    return $.getJSON(`${BASE_URL}${deckId}/draw`);
})
.then(data => {
    let secondPull = data.cards[0];
    console.log(`${firstPull.value.toLowerCase()} of ${firstPull.suit.toLowerCase()}, ${secondPull.value.toLowerCase()} of ${secondPull.suit.toLowerCase()}`)

});

//Part 3
let $button = $('button');
let $cardArea = $('#card-area');
let deckID = null;

$.getJSON(`${BASE_URL}new/shuffle`).then(data =>{
    deckID = data.deck_id;
    $button.show();
});

$button.on('click', function(){
    $.getJSON(`${BASE_URL}${deckID}/draw`).then(data =>{
        let imgSrc = data.cards[0].image;
        let angle = Math.random() * 90 - 45;
        let randomX = Math.random() * 20;
        let randomY = Math.random() * 20;
        $cardArea.append(
            $('<img>', {
                src: imgSrc,
                css: {
                transform: `translate(${randomX}px,  ${randomY}px) rotate(${angle}deg)`
                }
            })
        )
        if (data.remaining === 0) $button.remove();
        
    });
});