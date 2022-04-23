const submit_button = document.querySelector('.btn-submit');
const wrapper_1 = document.querySelector('.wrapper-1');
const wrapper_2 = document.querySelector('.wrapper-2');
const rating_buttons = document.querySelectorAll('.button-value');
const score = document.querySelector('.score');
const retake_button = document.querySelector('.btn-retake');


submit_button.addEventListener('click', submit);
rating_buttons.forEach( btn =>{
    btn.addEventListener('click',chooseRating)
});
retake_button.addEventListener('click',retakeSurvey);

function submit(){
wrapper_1.style.display = "none";
wrapper_2.style.display = "block";
score.textContent = stars_score;
}

function chooseRating(event){
rating_buttons.forEach(btn => {
    btn.classList.remove('active');
})
event.target.classList.add('active');

if(event.target.classList.contains(rating_buttons)){
    event.target.classlist.add('active')
}else{
    event.target.parentElement.classList.add('active');
}
stars_score = event.target.textContent;

}

function retakeSurvey(){
    wrapper_1.style.display = 'block';
    wrapper_2.style.display = 'none';
}

