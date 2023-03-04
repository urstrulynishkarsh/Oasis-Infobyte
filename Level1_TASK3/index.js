let c=document.querySelector('[data-celsius]');
let f=document.querySelector('[data-fahrenheit]');
let k=document.querySelector('[data-kelvin]');

let b = document.querySelector('[data-btn]')

function roundNumber(number){
    return Math.round(number*100)/100
}


c.addEventListener('input', function(){
    let cTemp = parseFloat(c.value)
    let fTemp = (cTemp*(9/5)) + 32
    let kTemp = cTemp + 273.15

    f.value = roundNumber(fTemp)
    k.value = roundNumber(kTemp)
})


f.addEventListener('input', function(){
    let fTemp = parseFloat(f.value)
    let cTemp = (fTemp - 32) * (5/9)
    let kTemp = (fTemp -32) * (5/9) + 273.15

    c.value = roundNumber(cTemp)
    k.value = roundNumber(kTemp)
})

k.addEventListener('input', function(){
    let kTemp = parseFloat(k.value)
    let cTemp = kTemp - 273.15
    let fTemp = (kTemp - 273.15) * (9/5) + 32

    c.value = roundNumber(cTemp)
    f.value = roundNumber(fTemp)
})


b.addEventListener('click', ()=>{
    c.value = ""
    f.value = ""
    k.value = ""
})
