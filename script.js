
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";
var counter = 0;
var ref2 = 50;
var ref3 = 100;
var multi = 1;
function cook(){
    document.getElementById("cookie").addEventListener("click", () => {
      counter = counter + (1*multi);
      document.getElementById("count").innerHTML = counter;
    });
  }

  document.getElementById("cursor").addEventListener("click", () => {
      if (counter >= ref2){
        counter = counter - ref2;
        ref2 = parseInt(ref2*1.5);
        document.getElementById("count").innerHTML = counter;
        document.getElementById("cursor").innerHTML = "Buy multiplier " + ref2 ;
        multi = (multi*2);
      }
    });

    document.getElementById("auto").addEventListener("click", () => {
        if (counter >= ref3){
          counter = counter - ref3;
        //  var x = counter + setTimeout(counter + 1, 1000);
          ref3 = parseInt(ref3*1.5);
          setInterval(function(){
              cookie.click()
          }, 1000);
          document.getElementById("count").innerHTML = counter;
          document.getElementById("auto").innerHTML = "Buy autoclicker " + ref3 ;
        }
    });

cook();

/*
function multiplier(){
      document.getElementById("cursor").addEventListener("click", () => {
      counter -= 50;
      document.getElementById("cookie").addEventListener("click", () => {
          document.getElementById("count").innerHTML = counter;
          counter += 2;
        });
  });
}
if (counter >= 50){
      multiplier();
  }

cook();
*/
