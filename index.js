let countEl= document.getElementById("count-el")
let saveEl= document.getElementById("save-el")
let cuenta = 0

function increment() {
    cuenta += 1
    countEl.textContent = cuenta

}

function decrement() {
    cuenta -= 1
    countEl.textContent = cuenta
}

function save(){
    let x = cuenta +" - "
    saveEl.textContent += x
    countEl.textContent = 0
    cuenta=0
}