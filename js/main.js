{

  const next = document.getElementById('next');
  const ul = document.querySelector('ul');
  const slides = ul.children;
  const dots = [];
  let currentIndex = 0;

  function moveSlide(){
    const slideWidth = slides[0].getBoundingClientRect().width;
    ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;

  }

  function moveDots(){
    dots.forEach(dot =>{
      dot.classList.remove('current');
    })
    dots[currentIndex].classList.add('current');
    
  }
  
  function setupDots(){
    for(let i=0; i<slides.length; i++){
      const button = document.createElement('button');
      button.addEventListener('click',()=>{
        currentIndex = i;
        moveDots();
        moveSlide();
      });
      dots.push(button);
      document.querySelector('nav').appendChild(button);
    }
    dots[0].classList.add('current');
  }

  function Reverse(){
    if(currentIndex > slides.length-1){
      currentIndex = 0;
    }
    if(currentIndex < 0){
      currentIndex = slides.length-1;
    }
  }

  setupDots();

  next.addEventListener('click',()=>{
    currentIndex++;
    Reverse();
    moveSlide();
    moveDots();
    
  });
  prev.addEventListener('click',()=>{
    currentIndex--;
    Reverse();
    moveSlide();
    moveDots();
  });


}