function convertTemperature() {
    let temperatureInput = document.getElementById("temperature");
    let celsiusOutput = document.getElementById("celsius");
    let fahrenheitOutput = document.getElementById("fahrenheit");
    
    let temperature = parseFloat(temperatureInput.value);
    
    let celsius = (temperature - 32) * 5 / 9;
    let fahrenheit = (temperature * 9 / 5) + 32;
    
    celsiusOutput.textContent = "Celsius: " + celsius.toFixed(2);
    fahrenheitOutput.textContent = "Fahrenheit: " + fahrenheit.toFixed(2);
  }
  
  function increment() {
    let temperatureInput = document.getElementById("temperature");
    temperatureInput.value = parseFloat(temperatureInput.value) + 1;
    convertTemperature();
  }
  
  function decrement() {
    let temperatureInput = document.getElementById("temperature");
    temperatureInput.value = parseFloat(temperatureInput.value) - 1;
    convertTemperature();
  }
  
  convertTemperature();