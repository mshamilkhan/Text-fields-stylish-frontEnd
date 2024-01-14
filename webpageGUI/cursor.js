


const cursor = document.querySelector(".cursor")


document.addEventListener("mousemove" , (e) =>{
    let x=e.pageX
    let y= e.pageY
    cursor.style.top = y + "px"
    cursor.style.left = x + "px"
    // cursor.style.display = "block"
})



document.getElementById('qlearning').addEventListener('click', function() {
    // Get values from input fields and dropdown
    var numberOfEpisodes = document.getElementById('numberOfEpisodes').value;
    var slipProbability = document.getElementById('slipProbability').value;
    var epsilonValue = document.getElementById('epsilonValue').value;

    // Do something with the values (for example, log them to the console)
    console.log("Number of Episodes:", numberOfEpisodes);
    console.log("Slip Probability:", slipProbability);
    console.log("Epsilon Value:", epsilonValue);
  });

//   export {numberOfEpisodes, slipProbability, epsilonValue}
