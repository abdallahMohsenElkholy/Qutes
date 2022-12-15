
var quotes = [`“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”
― Albert Einstein`,
    `“Be the change that you wish to see in the world.”
― Mahatma Gandhi`,
    `Live as if you were to die tomorrow. Learn as if you were to live forever.”
― Mahatma Gandhi`,
    `“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”
― Ralph Waldo Emerson`,
    `“A room without books is like a body without a soul.”
― Marcus Tullius Cicero`,
    `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”
― Bernard M. Baruch`,
    `
“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”
― Dr. Seuss`
]

function getQuote() {

    var i = Math.trunc(quotes.length * Math.random())
    if (i >= quotes.length ) {
        i -= 4
    }
    document.getElementById('qutePlace').innerHTML = quotes[i]
    console.log(i);

}
