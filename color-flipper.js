//All the posible characters the algorithm can choose 
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

//Selectors
const btn = document.getElementById('btn')
const color = document.querySelector('.color')

//Add an event when clicking the button
btn.addEventListener('click', () =>{
    let hexColor = '#'
    //A loop that repeats 6 times
    for (let i = 0; i < 6; i++){
        //Which is adding an element to hexColor. From the hex array gets a random element
        hexColor += hex[getRandomNumber()]
    }

    //This changes the text to span in the HTML to the random assortment of characters 
    color.textContent = hexColor
    //And also replaces the background color for the new random one
    document.body.style.backgroundColor = hexColor
})

//This is the function that gives a random number whithin the number of characters of the hex array
function getRandomNumber() {
    return Math.floor(Math.random() * hex.length)
}