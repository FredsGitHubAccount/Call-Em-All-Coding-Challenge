// Random number generator from 1-11
rand11 = () => {
    random = Math.floor(Math.random() * 11 + 1);
    return random;
}

// Random number generator from 1-13 using rand11()
rand13 = () => {

    // Pick a random column from 1-11
    column = rand11();
    console.log(`Column number : ${column}`);

    // Pick a random row from 1-11
    row = rand11();
    console.log(`Row number : ${row}`);

    // Generates the index
    index = column + (row - 1) * 11;
    console.log(`Index hit : ${index}`);
    
    // If the index does not land in the dead zone, return the randomly generated number in the console
    if (index <= 117) {
      
        // Generates the number within the found index 
        console.log(`Your random number is :  ${1+(index-1) % 13}`);
        return console.log("=====================");
    }

    // If it lands in the dead zone, recall the function
    else {
        console.log('Trying again');
        console.log("=====================");
        rand13();
    }

}

// Called function when the page loads
rand13();


// Open the index.html file and view the console for the randomly generated number. You can click the Random Number Generator button and see additional results in the console.
// Comment out the portion below if you would like to run the solution through this file.

let playLotto = document.getElementById("play-lottery")

playLotto.addEventListener("click",function(){
    console.log("You have hit the RNG button")
    console.log("=====================")
    rand13();
})




