const burgerButton = document.querySelector('.burger__button');

const burgerBody = document.querySelector('.burger__body');





const burgerButtonDecors = document.getElementsByClassName('burger__decor');


console.log(burgerButton);

const mainBody = document.querySelector('body');

const burgerLinks = document.getElementsByClassName('bg_link');



burgerButton.addEventListener('click', function ()  {

    mainBody.classList.toggle('body_noScroll');
    


    if(burgerBody.classList.length<2){
        burgerBody.classList.toggle('burger__show');
        
    }
    else{
        burgerBody.classList.toggle('burger__hide');
        burgerBody.classList.toggle('burger__show');

    }
   
    for (let i = 0; i < burgerButtonDecors.length; i++) {
        burgerButtonDecors[i].classList.toggle('burger__show');
        
    }
    
});
for (let i = 0; i < burgerLinks.length; i++) {
    burgerLinks[i].addEventListener('click', function ()  {
        burgerBody.classList.toggle('burger__hide');
        burgerBody.classList.toggle('burger__show');
        mainBody.classList.toggle('body_noScroll');
        for (let i = 0; i < burgerButtonDecors.length; i++) {
            burgerButtonDecors[i].classList.toggle('burger__show');
            
        }
    });
    
}