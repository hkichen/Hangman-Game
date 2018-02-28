var spells = ["alohamora", "aquamenti", "confringo", "confundo", "crucio", "engorgio", "episkey", "expelliarmus", "finite", "immobulus", "imperio", "incendio", "legilimens", "lumos", "nox", "obliviate", "protego", "reducto", "reparo", "silencio"];

var lives = 10;
var lettersGuessed = ["x", "b", "e", "a"];

function contains(arr, ele) {
    // return true if arr contains ele
    var arrHasElement = false;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == ele) {
            arrHasElement = true;
        }
    }
    return arrHasElement;
}

function userGuessed(userGuess) {
    var computerSpell = spells[Math.floor(Math.random() * spells.length)];
    console.log(computerSpell)
    var word = ""
    for (var i = 0; i < computerSpell.length; i++) {
        if (contains(lettersGuessed, computerSpell[i])) {
            word = word + computerSpell[i];
        } else {
            word = word + "-";
        }
    }
    return word;
}
console.log(userGuessed("x"))



