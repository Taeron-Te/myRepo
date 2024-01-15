let template = 0;
let timer;
let i = parseInt(document.getElementById("someID").innerHTML)

const waveButt = document.getElementById("wave")
if (waveButt) {
    waveButt.addEventListener("mouseenter", (event) => whileStart())
    waveButt.addEventListener("mouseleave", (event) => whileAdd())
}

function addOne() {
    console.log(i)
    i++;
    document.getElementById("someID").innerHTML = i
}

function whileStart() {
    template++;
    console.log(template)
    if (template > 10000) {
        alert('STOP');
        clearTimeout(timer)
        return
    }
    timer = setTimeout(whileStart, 10)
}

function whileAdd() {
    clearTimeout(timer)
    console.log(template)
    i++;
    document.getElementById("someID").innerHTML = i
    template--;
    if (template >= 0)
        timer = setTimeout(whileAdd, 100 / (template / 10))
}
//------
const twButt = document.getElementById("addTwenty")
if (twButt) {
    twButt.addEventListener('click', (event) => {
        for (let m = 0; m < 12; m++) {
            setTimeout((event) => {
                i++;
                document.getElementById("someID").innerHTML = i
            }, m * 100);
        }
    })
}


// const delayAdd = document.getElementById("delayAdd")
// if (delayAdd) {
//     delayAdd.addEventListener('click', (event) => {
//         setTimeout((event) => {
//             i++;
//             document.getElementById("someID").innerHTML = i
//         }, 500);
//     })
// }
let numClicks = 0;
const delayAdd = document.getElementById("delayAdd")
if (delayAdd) {
    delayAdd.addEventListener('click', (event) => {
        numClicks++
        document.getElementById("forAdd").innerHTML = numClicks
    })
    delayAdd.addEventListener('mouseleave', (event) => {
        i += numClicks
        document.getElementById("someID").innerHTML = i
        numClicks = 0
        document.getElementById("forAdd").innerHTML = numClicks
    })
}