function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }

  function loadCoupon(){
    document.getElementById('coupon').style.visibility = 'visible';
    document.getElementById('demo').style.opacity = 0.1;
   
    
}

function closeCoupon(){
    document.getElementById('coupon').style.visibility = 'hidden';
    document.getElementById('demo').style.opacity=1;
}


// function loadcoupon(){document.getElementById('coupon').style.visibility='visible';
//   document.getElementsByClassName('dark-mode').style.opacity=0.7}
  
//   function loadcoupon(){document.getElementById('coupon').style.visibility='hidden';
//   document.getElementsByClassName('dark-mode').style.opacity=1}

