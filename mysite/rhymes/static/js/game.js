console.log("connected!");

// restart game Buttons
var arr = ['one', 'three','five','eight'];
var marks = 0;

function include(arr, obj) {
    for(var i=0; i<arr.length; i++) {
        if (arr[i] == obj){ arr[i] = 'true'; return true;}
    }
    return false;
}

function change(){
one.src = "https://www.maxpixel.net/static/photo/1x/Correct-Okay-Mark-Right-Green-Sign-Symbol-Ticks-39830.png";
}

function changeone(){
  one.src = "https://backgroundcheckall.com/wp-content/uploads/2017/12/wrong-cross-transparent-background-3.png";
}

one.addEventListener('click',function(){
  one.style.opacity = "0.5";
  var check = include(arr,'one');
  if(check == true){
    marks+=2;
    setTimeout ( "change()", 1000 );
  } else{
    marks-=1;
      setTimeout ( "changeone()", 1000 );
  }

})

function doo(){
    two.src = "https://www.maxpixel.net/static/photo/1x/Correct-Okay-Mark-Right-Green-Sign-Symbol-Ticks-39830.png";
}

function dotwo(){
  two.src = "https://backgroundcheckall.com/wp-content/uploads/2017/12/wrong-cross-transparent-background-3.png"
}

two.addEventListener('click',function(){
  two.style.opacity = "0.5";
  var check = include(arr,'two');
  if(check == true){
    marks+=2;
    setTimeout ( "doo()", 1000 );
  } else{
    marks-=1;
    setTimeout ( "dotwo()", 1000 );
  }

})

function teen(){
    three.src = "https://www.maxpixel.net/static/photo/1x/Correct-Okay-Mark-Right-Green-Sign-Symbol-Ticks-39830.png";
}

function teentwo(){
  three.src = "https://backgroundcheckall.com/wp-content/uploads/2017/12/wrong-cross-transparent-background-3.png"
}

three.addEventListener('click',function(){
  three.style.opacity = "0.5";
  var check = include(arr,'three');
  if(check == true){
    marks+=2;
   setTimeout ( "teen()", 1000 );
  } else{
    marks-=1;
    setTimeout ( "teentwo()", 1000 );
  }

})

function char(){
  four.src = "https://www.maxpixel.net/static/photo/1x/Correct-Okay-Mark-Right-Green-Sign-Symbol-Ticks-39830.png";
}

function chartwo(){
  four.src = "https://backgroundcheckall.com/wp-content/uploads/2017/12/wrong-cross-transparent-background-3.png"
}

four.addEventListener('click',function(){
  four.style.opacity = "0.5";
  var check = include(arr,'four');
  if(check == true){
    marks+=2;
    setTimeout ( "char()", 1000 );
  } else{
    marks-=1;
    setTimeout ( "chartwo()", 1000 );
  }

})

function paach(){
  five.src = "https://www.maxpixel.net/static/photo/1x/Correct-Okay-Mark-Right-Green-Sign-Symbol-Ticks-39830.png";
}

function paachtwo(){
  five.src = "https://backgroundcheckall.com/wp-content/uploads/2017/12/wrong-cross-transparent-background-3.png"
}

five.addEventListener('click',function(){
  five.style.opacity = "0.5";
  var check = include(arr,'five');
  if(check == true){
    marks+=2;
    setTimeout ( "paach()", 1000 );
  } else{
    marks-=1;
    setTimeout ( "paachtwo()", 1000 );
  }

})

function che(){
  six.src = "https://www.maxpixel.net/static/photo/1x/Correct-Okay-Mark-Right-Green-Sign-Symbol-Ticks-39830.png";
}

function chetwo(){
  six.src = "https://backgroundcheckall.com/wp-content/uploads/2017/12/wrong-cross-transparent-background-3.png"
}

six.addEventListener('click',function(){
  six.style.opacity = "0.5";
  var check = include(arr,'six');
  if(check == true){
    marks+=2;
    setTimeout ( "che()", 1000 );
  } else{
    marks-=1;
    setTimeout ( "chetwo()", 1000 );
  }

})

function saat(){
  seven.src = "https://www.maxpixel.net/static/photo/1x/Correct-Okay-Mark-Right-Green-Sign-Symbol-Ticks-39830.png";
}

function saattwo(){
    seven.src = "https://backgroundcheckall.com/wp-content/uploads/2017/12/wrong-cross-transparent-background-3.png"
}

seven.addEventListener('click',function(){
  seven.style.opacity = "0.5";
  var check = include(arr,'seven');
  if(check == true){
    marks+=2;
    setTimeout ( "saat()", 1000 );
  } else{
    marks-=1;
    setTimeout ( "saattwo()", 1000 );
  }

})

function eig(){
  eight.src = "https://www.maxpixel.net/static/photo/1x/Correct-Okay-Mark-Right-Green-Sign-Symbol-Ticks-39830.png";
}

function eigtwo(){
  eight.src = "https://backgroundcheckall.com/wp-content/uploads/2017/12/wrong-cross-transparent-background-3.png"
}

eight.addEventListener('click',function(){
  eight.style.opacity = "0.5";
  var check = include(arr,'eight');
  if(check == true){
    marks+=2;
    setTimeout ( "eig()", 1000 );
  } else{
    marks-=1;
    setTimeout ( "eigtwo()", 1000 );
  }

})

function naa(){
  nine.src = "https://www.maxpixel.net/static/photo/1x/Correct-Okay-Mark-Right-Green-Sign-Symbol-Ticks-39830.png";
}

function ninetwo(){
  nine.src = "https://backgroundcheckall.com/wp-content/uploads/2017/12/wrong-cross-transparent-background-3.png"
}

nine.addEventListener('click',function(){
  nine.style.opacity = "0.5";
  var check = include(arr,'nine');
  if(check == true){
    marks+=2;
    setTimeout ( "naa()", 1000 );
  } else{
    marks-=1;
    setTimeout ( "ninetwo()", 1000 );
  }

})

function myFunction() {
  console.log(marks);
  for(var i = 0; i<arr.length;i++){
    if(arr[i] !== 'true'){
    alert("More red photos are remaining! Please Try again");
    break;
   }
  }
  document.getElementById("myText").innerHTML = marks;
}

d.addEventListener('click',myFunction);

var heading = document.querySelector("h1")
var head = document.querySelector("p")

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function colourChanger(){
  colour = getRandomColor();
  heading.style.color = colour;
}

function cc(){
  colour = getRandomColor();
  head.style.color = colour;
}

function back(){
  colour = getRandomColor();
  document.body.style.backgroundColor = colour;
}

// setInterval("colourChanger()",700);
// setInterval("cc()",700);
// setInterval("back()",2000);
