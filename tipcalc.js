let button1 = document.getElementById('button1')
let button2 = document.getElementById("button2")
let numberOfPeople = document.getElementById('numberOfPeople')
let people_no = Number(numberOfPeople.innerHTML)
let tipInput = document.getElementById('tipInput')
let billTotalInput = document.getElementById('billTotalInput')
let perPersonTotal = document.getElementById('perPersonTotal')

const calculate = () =>  {
  tip = Number(tipInput.value)/100
  bill = Number(billTotalInput.value)
  let  calculation = tip * bill
  let result = calculation + tip
  let  perpersontotal =  result/people_no
  perPersonTotal.innerText =  `$${perpersontotal.toFixed(2)}`
}








button1.onclick = () => {
    people_no += 1
   numberOfPeople.innerText = people_no 
    calculate()
    
}
button2.onclick = () => {
   people_no = people_no -1
   if (people_no <= 1){
    people_no = 1
   }
 numberOfPeople.innerHTML = people_no
 calculate()
}