let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count = 0
function increment()
{
    count += 1
    countEl.innerText = count 
}

function save()
{
    let countStr = count + " - "
    saveEl.textContent = saveEl.textContent + countStr 
}
console.log(count)