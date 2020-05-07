$(document).ready(function(){

$("ul.navigationItems > li > a").click(function() {        
          $("ul.navigationItems > li > a").removeClass("active"); 
          $(this).addClass("active");          
});

    
$('.minus-btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());
 
    if (value > 1) {
        value = value - 1;
    } else {
        value = 0;
    }
 
  $input.val(value);
 
});
 
$('.plus-btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());
 
    if (value < 100) {
        value = value + 1;
    } else {
        value =100;
    }
 
    $input.val(value);
});



    
    
});

/**************DEsktop Price slider code********************/

   (function() {
 
  var parent = document.querySelector(".price-slider");
  if(!parent) return;
 
  var
    rangeS = parent.querySelectorAll("input[type=range]"),
    numberS = parent.querySelectorAll("input[type=number]");
 
  rangeS.forEach(function(el) {
    el.oninput = function() {
      var slide1 = parseFloat(rangeS[0].value),
        	slide2 = parseFloat(rangeS[1].value);
 
      if (slide1 > slide2) {
		[slide1, slide2] = [slide2, slide1];
      }
 
      numberS[0].value = slide1;
      numberS[1].value = slide2;
    }
  });
 
  numberS.forEach(function(el) {
    el.oninput = function() {
		var number1 = parseFloat(numberS[0].value),
		number2 = parseFloat(numberS[1].value);
		
      if (number1 > number2) {
        var tmp = number1;
        numberS[0].value = number2;
        numberS[1].value = tmp;
      }
 
      rangeS[0].value = number1;
      rangeS[1].value = number2;
 
    }
  });
 
})(); 


/**************Mobile Price slider code********************/

  (function() {
 
  var parent = document.querySelector(".Mobprice-slider");
  if(!parent) return;
 
  var
    rangeS = parent.querySelectorAll("input[type=range]"),
    numberS = parent.querySelectorAll("input[type=number]");
 
  rangeS.forEach(function(el) {
    el.oninput = function() {
      var slide1 = parseFloat(rangeS[0].value),
        	slide2 = parseFloat(rangeS[1].value);
 
      if (slide1 > slide2) {
		[slide1, slide2] = [slide2, slide1];
      }
 
      numberS[0].value = slide1;
      numberS[1].value = slide2;
    }
  });
 
  numberS.forEach(function(el) {
    el.oninput = function() {
		var number1 = parseFloat(numberS[0].value),
		number2 = parseFloat(numberS[1].value);
		
      if (number1 > number2) {
        var tmp = number1;
        numberS[0].value = number2;
        numberS[1].value = tmp;
      }
 
      rangeS[0].value = number1;
      rangeS[1].value = number2;
 
    }
  });
 
})(); 
