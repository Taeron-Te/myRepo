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

function serializeForm(formNode) {
    return new FormData(formNode)
}

async function sendData(data) {
    return await fetch('/api/apply/', {
        method: 'POST',
        headers: { 'Content-Type': 'multipart/form-data' },
        body: data,
    })
}

async function handleFormSubmit(event) {
    event.preventDefault()
    console.log('Отправка!')
    const data = serializeForm(event.target)
    const response = await sendData(data)
}

const applicantForm = document.getElementById('mars-once')
applicantForm.addEventListener('submit', handleFormSubmit)

function calkulation(form) {
    let data = new FormData(form)
    let result = 0;
    switch (data.get('oper-logic')) {
        case 'plus':
            console.log('Плюс')
            result = parseInt(data.get('el1')) + parseInt(data.get('el2'))
            break;
        case 'minus':
            console.log('Минус')
            result = parseInt(data.get('el1')) - parseInt(data.get('el2'))
            break;

        case 'mult':
            console.log('Умножить')
            result = parseInt(data.get('el1')) * parseInt(data.get('el2'))
            break;

        case 'part':
            console.log('Разделить')
            result = parseInt(data.get('el1')) / parseInt(data.get('el2'))
            break;
        case 'pow':
            console.log('Возведение в степень')
            result = parseInt(data.get('el1')) ** parseInt(data.get('el2'))
            break


        default:
            console.log('Несработало')
            break;
    }
    return result;

}

function handler(event) {
    event.preventDefault()
    let a = calkulation(event.target)
    document.body.append(" " + a)
    document.getElementById('rez').innerHTML = a

}


const useFun = document.getElementById('useFun')
useFun.addEventListener('submit', handler)