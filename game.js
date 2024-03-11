
var guessGame = _.before(3,guessNumber)// to limit the number of times fuction i called.
function guessNumber() {
    var number = Math.random() * 5 | 1,// have set Maximum value to 5 and minimun value to 1
        guess,
        text = 'Guess a number: between 1 and 5';
    do {
        guess = prompt(text);
    
       if (number < guess) {
            text = "You've guessed too high!-You Lost 1 Life";
        } else if (number > guess) {
           text = "You've guessed too low!-You Lost 1 Life";
        }
    } while (guess != number);
   
    document.getElementById('win').textContent = 'You Win';
    function newBg(){
        let bg= document.getElementById("bG")
        bg.style.backgroundImage= "url('win.jpg')"
         }
    newBg();
}
guessNumber();