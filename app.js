let input = document.getElementById("inputbox");
let btn = document.getElementById("btn");
let from = document.getElementById("from");
let to = document.getElementById("to");
let flag= document.getElementById("flag");
let flag2= document.getElementById("flag2");
let clear=document.getElementById('clear');

async function currencycon() {
    let amount= Number(input.value);
    if(!amount){
        alert("please backchodi nah kare ")
        return;
    }
    let fromcurr= from.value;
    let tocurr= to.value;
    let url=`https://api.exchangerate-api.com/v4/latest/${fromcurr}`;
    let response = await fetch(url);
    let data = await response.json();
    let rate = data.rates[tocurr];
    let result = amount*rate;
    input.value= result.toFixed(2);
}
btn.addEventListener('click',currencycon);


for(code in countryList){
    let newOption= document.createElement('option');
    newOption.value=code;
    newOption.textContent=code;
    from.append(newOption);
    
    let newOption2 = document.createElement('option');
    newOption2.value=code;
    newOption2.textContent=code;
    to.append(newOption2)
}
from.addEventListener("change", ()=>{
    let countrycode= countryList[from.value];
    flag.src=`https://flagsapi.com/${countrycode}/flat/64.png`;
});
to.addEventListener("change", ()=>{
    let countrycode1= countryList[to.value];
    flag2.src=`https://flagsapi.com/${countrycode1}/flat/64.png`;
});