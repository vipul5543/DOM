const form = document.querySelector('form');
form.addEventListener('submit', function(e){
  e.preventDefault();

const height = parseInt(document.querySelector('#height').value)
const weight = parseInt(document.querySelector('#weight').value)
const result = document.querySelector('#results')
const msg = document.querySelector('#msg')

if(height === '' || height<0 || isNaN(height)){
  result.innerHTML = `please give a valid height ${height}`;
}
if(weight === '' || weight<0 || isNaN(weight)){
  result.innerHTML = `please give a valid weight ${weight}`;
}else{
  const bmi = (weight / ((height * height) / 10000)).toFixed(2)
  result.innerHTML = `<span>${bmi}</span>`;
  if(bmi<18.6){
    msg.innerHTML = "you are under weight"
  }else if(bmi<24.9 && bmi>18.6){
    msg.innerHTML = "you are normal"
  }
  else{
    msg.innerHTML = "you are over weight"
  }
 }
 

})


