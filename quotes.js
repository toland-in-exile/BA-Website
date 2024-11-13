const quotes = [
    "Toland: I'm starting to see that the medical field is alot like being in the Army, but about half the 'getting shot at'.",
    "Salty: Scrambled eggs is just fried chicken.\nToland: Is not!\nHippo: Prove it.\nToland: When Kamorphia cooks his eggs(balut), it's fried chicken. When the rest of us do it, it's 'fried-chicken-in-progress'.",
    "Lego: You're not gunna 'rings of power' me, THEY'RE the villains!",
    "Toland(improvising a prayer in Pathfinder): Dear beautiful mecha-woman, how do we revive my beloved companion?",
    "Mady: The Shannon taint is wild.",
    "Mobius: Sounds like the wee woo wagons are out.",
    "Shannon(to her kids, during a raid): Pretend it's an Easter egg hunt and go look for it yourself!",
    "Ditz: Are we breaking out the people openers?",
    "Toland: Midas' brain is like the perfect pick-up line. Smooth.",
    "Toland: I don't know how I've managed to accidently collect all of the internet's psychopaths in one Discord.",
    "Mobius: You have very clean eyelids.",
    "Shannon: Wtf is bean salad? That's gotta be some southerner BS.\nRyowynn: *Hides the pickled pig's feet* How DARE you...",
    "The Fam in reference to Mobius: Me? I'm a smoking crater of secondhand embarrassment.",
    "Unknown: The babies! Put them in the cabinet, quit shaking them around!",
    "All of us at some point: Nevermind, it's a rock, I got excited.",
    "Toland: Oh hey! I found a short-*falls to death*...cut.",
    "Shannon(to Weasel after he returned from NTC): Weren't you in the desert for like a year? WHY ARE YOUR LEGS WHITER THAN MINE?!",
    "Toland: Why are you lighting that on fire? You're gunna melt the plastic to the cheese, you donut.",
    "Unnamed BN S3 NCOIC: ..., But I didn't know what a macro was so I restarted the computer.",
    "Toland: You make my brain feel fuzzy."
];

document.addEventListener('DOMContentLoaded', function() {
    const quoteElement = document.querySelector('#quoteContainer p');
    
    function fadeQuote() {
        setInterval(() => {
            // Fade out
            quoteElement.style.opacity = '0';
            
            setTimeout(() => {
                // Change quote
                quoteElement.textContent = quotes[Math.floor(Math.random() * quotes.length)];
                // Fade in
                quoteElement.style.opacity = '1';
            }, 2000);
            
        }, 8000);
    }
    
    fadeQuote();
});
