let BASE_URL = "https://deckofcardsapi.com/api/deck/"

// PART 1
async function getCard() {
    let data = await $.getJSON(`${BASE_URL}new/draw/`);
    console.log(`${data.cards[0].value.toLowerCase()} of ${data.cards[0].suit.toLowerCase()}`)
}

// getCard()

// PART 2 

async function getTwo() {
    let firstPull = await $.getJSON(`${BASE_URL}new/draw`);
    let deckId = firstPull.deck_id
    let secondPull = await $.getJSON(`${BASE_URL}${deckId}/draw`)
    console.log(`${firstPull.cards[0].value.toLowerCase()} of ${firstPull.cards[0].suit.toLowerCase()}, ${secondPull.cards[0].value.toLowerCase()} of ${secondPull.cards[0].suit.toLowerCase()}`)

}

// getTwo()

//Part 3
async function setUp() {
    let $button = $('button');
    let $cardArea = $('#card-area');


    let deckData = await $.getJSON(`${BASE_URL}new/shuffle`)
    console.log(deckData)

    let deckID = deckData.deck_id

    $button.on('click', async function(){
    let data = await $.getJSON(`${BASE_URL}${deckID}/draw`)
    imgSrc = data.cards[0].image;
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
    
    
    
};


setUp()