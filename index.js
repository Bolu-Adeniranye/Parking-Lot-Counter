// document.getElementById("count").innerText = 5

// THE DOM (Document Object Model)
// aka how you use JavaScript to modify a website
// Document - HTML Document aka Website
// Object - Documents are of the data type object (html shoved into objects for Javascript)
// Model - Representation or Modellation / JavaScript model of the HTML document


// change the count-el in the HTML to reflect the new count



//camelCase - capitalise only first letter of second word
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")//pass arguments in brackets




console.log(countEl)
let count = 0

function increment() {
    // count = count + 1
    count += 1
    // countEl.innerText = count
    countEl.textContent = count



}

// 1. Create a function, save(), which logs out the count when it's called
// function save(){
//     increment()
//     let savedvalue = countEl.innerText
//     console.log(countEl.innerT)
// }

function save() {
    let countStr = count + " - "
    // saveEl.innerText = countStr
    // saveEl.innerText += countStr
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0

}



// Google:
// innerText alternative mdn

