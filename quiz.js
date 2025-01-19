
function checkAnswer() {
    const correctAnswer=4;
    const userAnswer=document.querySelector('input[name="quiz"]:checked').value;
    
    if (userAnswer === correctAnswer) {
        document.querySelector('#feedback').textContent='Correct! Well done.';
    }else{
        document.querySelector('#feedback').textContent="That's incorrect. Try again!";
}
}
const submitAnswer=document.getElementById('#submit-answer');
submitAnswer.addEventListener('click',checkAnswer);