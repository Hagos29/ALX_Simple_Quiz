
function checkAnswer() {
    const correctAnswer=4;
    const userAnswer=document.querySelector('input[name="quiz"]:checked').value;
    
    if (userAnswer===correctAnswer) {
        document.querySelector('#feedback').textContent='Correct! Well Done';
    }else{
        document.querySelector('#feedback').textContent="That's incorrect. Try again!";
}
}
const answer=document.querySelector('#submit-answer');
answer.addEventListener('click', function(e){
    checkAnswer
})