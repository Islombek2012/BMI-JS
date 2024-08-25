const form = document.querySelector('.form')
const inputName = document.querySelector('.input-name')
const inputWeight = document.querySelector('.input-weight')
const inputHeight = document.querySelector('.input-height')
const submit = document.querySelector('.result-bmi')
const username = document.querySelector('.username')
const userBmi = document.querySelector('.user-bmi')
const userResult = document.querySelector('.user-result')
inputName.focus()
form.addEventListener('submit', (e)=>{
      e.preventDefault()
      let user = inputName.value.trim()
      let weight = inputWeight.value;
      let height = inputHeight.value;
      let formula = (weight / ((height * height) / 10000)).toFixed(2);
      if(weight && height && user && formula > 0){
            if(formula <= 18.5){
                  username.textContent = user;
                  userBmi.textContent = 'Your BMI is:'
                  userResult.textContent = `Under weight (${formula})`
            }else if(formula > 18.5 && formula <= 24.9){
                  username.textContent = user;
                  userBmi.textContent = 'Your BMI is:'
                  userResult.textContent = `Normal weight (${formula})`
            }else if(formula >= 25 && formula <= 29.9){
                  username.textContent = user;
                  userBmi.textContent = 'Your BMI is:'
                  userResult.textContent = `Over weight (${formula})`
            }else if(formula >= 30){
                  username.textContent = user;
                  userBmi.textContent = `Your BMI is: (${formula})`
                  userResult.textContent = 'Obesity'
            }
      }else{
            alert('error')
      }


      form.reset()
      inputName.focus()
})