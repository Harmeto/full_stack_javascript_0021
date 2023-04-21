
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }
  
  
  function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
  
  
  function changeUnits() {

    const bigTemp = document.getElementById("bigTemp");
    const bigC = document.getElementById("bigC");
    const days = document.querySelectorAll(".weakly-weather-item");

    if (bigC.innerText === "°C") {
      
      bigTemp.innerText = Math.round(celsiusToFahrenheit(parseInt(bigTemp.getAttribute("value"))));
      bigC.innerText = "°F";
      days.forEach((day) => {
        const temp = day.querySelector("p:nth-child(3)");
        temp.innerHTML = '';
        temp.innerText = Math.round(celsiusToFahrenheit(parseInt(temp.getAttribute("value")))) ;
      });
    } else {
      
      bigTemp.innerText = parseInt(bigTemp.getAttribute("value"));
      bigC.innerText = "°C";
      days.forEach((day) => {
        const temp = day.querySelector("p:nth-child(3)");
        temp.innerText = parseInt(temp.getAttribute("value")) ;
      });
    }
  }
  
  function toggleTemp(){
    changeUnits();
  }
