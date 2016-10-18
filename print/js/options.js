function roundedBorder() {
    var cards, i, borderRadius;
    if (document.getElementById('roundedBorder').checked) 
    {
        borderRadius = '12px';
    } else {
        borderRadius = 0;
    }
    cards = document.querySelectorAll('.card');
    for (i = 0; i < cards.length; i++) {
        cards[i].style.borderRadius = borderRadius;
    }
}

function cardBacks() {
    var cards, i, show;
    if (document.getElementById('cardBacks').checked) 
    {
        show = 'flex';
    } else {
        show = 'none';
    }
    cards = document.querySelectorAll('.card-holder-back');
    for (i = 0; i < cards.length; i++) {
        cards[i].style.display = show;
    }
}

function thickerPadding() {
    var cards, i, margin, cardHolderHeight, cardHolders;
    if (document.getElementById('thickerPadding').checked) 
    {
        margin = '10px';
        cardHolderHeight = '840px';
    } else {
        margin = '1px';
        cardHolderHeight = '800px';
    }
    cards = document.querySelectorAll('.card');
    for (i = 0; i < cards.length; i++) {
        cards[i].style.margin = margin;
    }
    cardHolders = document.querySelectorAll('.card-holder');
    for (i = 0; i < cardHolders.length; i++) {
        cardHolders[i].style.height = cardHolderHeight;
    }
    cardHolders = document.querySelectorAll('.card-holder-back');
    for (i = 0; i < cardHolders.length; i++) {
        cardHolders[i].style.height = cardHolderHeight;
    }

}