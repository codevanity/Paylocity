let circularProgrss = document.querySelector(".circular-progress"),
    progressValue = document.querySelector(".progress-value");

    let progressStartValue = 0,
        progressEndValue = 45,
        speed = 100;


let progress = setInterval(()  =>  {
    progressStartValue++



    progressValue.textContent = `${progressStartValue}%`
    circularProgrss.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`

    if(progressStartValue == progressEndValue){
        clearInterval(progress);
    }

}, speed);