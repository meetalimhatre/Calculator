console.log("dome");

const toggleSwitch = document.querySelector(
    '.theme-switch input[type="checkbox"]'
  );
  
  function switchTheme(e) {
    if (e.target.checked) {
      /*TARGET MAIN HTML TAG <html lang="en"> and add atribute in it*/
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }
  
  toggleSwitch.addEventListener("change", switchTheme, false);
  
  let input = document.getElementById("input");
  let output = document.getElementById("output");

  function calculate(data){
    
    switch(data){

      case '=':
        output.innerHTML = math.evaluate(input.innerHTML);
        break;

      case 'AC':
        input.innerHTML = "";
        output.innerHTML = "0";
        break;

      case 'C':
        input.innerHTML = input.innerHTML.substr(0,input.innerHTML.length -1);
        
        /*do evalute after removeing of one element*/
        output.innerHTML = math.evaluate(input.innerHTML) === undefined ? 0 : math.evaluate(input.innerHTML) ; 
        break;

      default:    
      input.innerHTML += data;
    }

  }