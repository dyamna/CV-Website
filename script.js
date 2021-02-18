
//NAVBAR
let lastScrollTop = 0;
navbar = document.getElementById('navbar');

window.addEventListener ('scroll', function(){
    const scrollTop = window.pageTOffset||
    this.document.documentElement.scrollTop;

    if(scrollTop > lastScrollTop){
        navbar.style.top="-50px";
    }else {
        navbar.style.top="0";

    }
    lastScrollTop= scrollTop;
    print ('hello');
});

/*/ TYPED
var typed = new Typed('.typed', {
    strings: ['npm install^1000\n `installing components...` ^1000\n `Fetching from source...`'],
    typeSpeed: 20,
    backSpeed: 0,
    
  });*/
    