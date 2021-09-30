import CardioModal from './doctors/cardiomodal.js';
import DentistModal from './doctors/DentistModal.js';
import TherapistModal from './doctors/TherapistModal.js';
import createElement from './api/createElement.js';
import renderHeader from './api/renderHeader.js';
import renderBody from './api/renderBody.js';
import renderCards from './api/renderCards.js';
import {Cardio,Dentist,Therapist} from './api/renderCards.js';
import cardsChecker from './api/cardsChecker.js';
import createInput from './api/input.js'; 
import createInputfrom from './api/input.js';
let logOutBtn = createElement({tagName: 'button',text: 'Выйти из системы',className: 'logout-btn',})
logOutBtn.addEventListener('click', function() {
  window.location.reload()
  localStorage.clear()

})
window.addEventListener('load', function() {
  let pleaseLogin = document.createElement('h2')
    pleaseLogin.textContent = 'Пожалуйста войдите в систему'
    pleaseLogin.classList.add('please-login')
  if (localStorage.getItem('token') ) {
   
    document.querySelector('.header').append(logOutBtn,createVisitBtn)
    document.querySelector('.login-btn').remove()
    pleaseLogin.remove()
    createInput()
    renderCards()
cardsChecker()
  }
  
  else {
    if(document.querySelector('logout-btn')){
      document.querySelector('logout-btn').remove()
    }
    document.querySelector('.header').append(loginBtn)
    
    document.querySelector('.body-container').append(pleaseLogin)
  };
     
 })
renderHeader()
const loginInput = document.createElement('input');
loginInput.classList.add('input')
loginInput.placeholder = 'Login';
const passwordInput = document.createElement('input');
passwordInput.classList.add('input')
passwordInput.placeholder = 'Password'; 
passwordInput.style.marginTop = '15px';
const submitBtnLogin = document.createElement('button');
submitBtnLogin .type = 'submit';
submitBtnLogin .textContent = 'Submit';
submitBtnLogin .classList.add('submit-btn-login')
const submitBtn = document.createElement('button');
submitBtn.type = 'submit';
submitBtn.textContent = 'Submit';
submitBtn.classList.add('submit-btn')
const closeModal = document.createElement('button');
closeModal.textContent = '×'
closeModal.classList.add('close')

const createVisitBtn = document.createElement('a');
createVisitBtn.textContent = 'Создать визит'
createVisitBtn.classList.add('login-btn')
createVisitBtn.classList.add('createVisit-btn')
const loginBtn = document.querySelector('.login-btn')
loginBtn.addEventListener('click', function(){
    document.querySelector('.body').insertAdjacentHTML('beforeend',`
    <div id="openModal" class="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title">Please Login</h3>
         
        </div>
        <div class="modal-body">    
            <form class='modal-form' action="submit">
        
            </form>
        </div>
      </div>
    </div>
  </div>
    `)
    document.querySelector('.modal-form').appendChild(loginInput);
    document.querySelector('.modal-form').appendChild(passwordInput)
    document.querySelector('.modal-form').appendChild(submitBtnLogin)
   document.querySelector('.modal-header').append(closeModal)
})    


 submitBtnLogin.addEventListener('click', function(e) {
  if (loginInput.value && passwordInput.value) {
    fetch("https://ajax.test-danit.com/api/v2/cards/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: loginInput.value, password: passwordInput.value, })
      })
        .then(response => response.text())
        .then(token => {
          if (token !== 'Incorrect username or password'){
            localStorage.setItem('token',token)
            document.querySelector('.modal').remove()
            loginBtn.remove()
            document.querySelector('.header').append(logOutBtn,createVisitBtn)
            createInput()
            renderCards()
            cardsChecker()
            document.querySelector('.please-login').remove()
          }
          else {
            alert('Please enter a valid username or password')  
          }
           
        }
           
            )

  }
  
  e.preventDefault()
  ;

     
 }) 
 ;



 
createVisitBtn.href = '#openModal'

const urgency = document.createElement('select')
urgency.classList.add('urgency')
const urgencyPlaceholder = document.createElement('option')
  urgencyPlaceholder.value = '-1'
  urgencyPlaceholder.disabled = true
  urgencyPlaceholder.selected = true
  urgencyPlaceholder.textContent = 'Выберите срочность визита'
  urgency.required = true
  const lowUrgency = document.createElement('option')
  lowUrgency.value = 'Низкая срочность'
  lowUrgency.textContent = 'Низкая'
  const mediumUrgency = document.createElement('option')
  mediumUrgency.value = 'Средняя срочность'
  mediumUrgency.textContent = 'Средняя'
  const highUrgency = document.createElement('option')
  highUrgency.value = 'Высокая срочность'
  highUrgency.textContent = 'Высокая'
  urgency.appendChild(urgencyPlaceholder)
  urgency.appendChild(lowUrgency)
  urgency.appendChild(mediumUrgency)
  urgency.appendChild(highUrgency)
 
createVisitBtn.addEventListener('click',function(){
  document.querySelector('.body').insertAdjacentHTML('beforeend',`
  <div id="openModal" class="modal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title">Create Visit</h3>
       
      </div>
      <div class="modal-body">    
          <form class='modal-form' action="submit">

      </select>
          </form>
      </div>
    </div>
  </div>
</div>`)
document.querySelector('.modal-header').append(closeModal)
const DoctorSelect = document.createElement('select')
DoctorSelect.classList.add('doctor-select')
 DoctorSelect.required = true
 const CardioOption = document.createElement('option')
 const selectPlaceHolder = document.createElement('option')
 selectPlaceHolder.textContent = 'Выберите врача'
 selectPlaceHolder.value = '-1'
 selectPlaceHolder.disabled = true
 selectPlaceHolder.selected = true
 CardioOption.textContent = 'Кардиолог'
 CardioOption.value = 'Кардиолог'
 const TherapistOption = document.createElement('option')
 TherapistOption.textContent = 'Терапевт'
 TherapistOption.value = 'Терапевт'
 const DentistOption = document.createElement('option')
 DentistOption.textContent = 'Стоматолог'
 DentistOption.value = 'Стоматолог'
 document.querySelector('.modal-form').appendChild(DoctorSelect)
 DoctorSelect.appendChild(selectPlaceHolder)
 DoctorSelect.appendChild(CardioOption)
 DoctorSelect.appendChild(TherapistOption)
 DoctorSelect.appendChild(DentistOption)
 const cardioModal = new CardioModal
 const therapistModal = new TherapistModal
 const dentistModal = new DentistModal
 
renderModal()
DoctorSelect.addEventListener('change',function(e){
 if (e.target.value === 'Кардиолог'){
  dentistModal.removeModal()
  therapistModal.removeModal()
cardioModal.render()
} 
else if (e.target.value === 'Терапевт'){
  dentistModal.removeModal()
  cardioModal.removeModal()
therapistModal.render()
} 
else if (e.target.value === 'Стоматолог'){
  dentistModal.render()
  cardioModal.removeModal()
  therapistModal.removeModal()
}
document.querySelector('.modal-form').append(submitBtn)
})
  
  
})


const renderModal = function(){
  const visitTarget = document.createElement('input')
  visitTarget.placeholder = 'Цель вашего визита'
  visitTarget.classList.add('visit-target')
  visitTarget.required = true
  const visitDesc = document.createElement('input')
  visitDesc.classList.add('visitDesc')
  visitDesc.placeholder = 'Краткое описание визита'
  visitDesc.required = true
 
  
  const fullName = document.createElement('input')
  fullName.required = true
  fullName.placeholder = 'Ваше ФИО'
  fullName.classList.add('fullName')
  document.querySelector('.modal-form').append(visitTarget,visitDesc,urgency,fullName)
}




submitBtn.addEventListener('click',function(e){
e.preventDefault()
if (urgency.value === '-1'){
alert('Выберите срочность визита')
}
else {
  if (document.querySelector('.please-login')){
    document.querySelector('.please-login').remove()
  }
  let visitTarget = document.querySelector('.visit-target').value
  let visitDesc = document.querySelector('.visitDesc').value
  let doctorselect = document.querySelector('.doctor-select').value
  
  let fullName = document.querySelector('.fullName').value
 ;
  let token = localStorage.getItem('token') 
  if (doctorselect === 'Кардиолог') {
    let blood = document.querySelector('.bloodPresure').value
    
    let diseaseHistory = document.querySelector('.diseaseHistory').value
    let age = document.querySelector('.ageInput').value
    let bmi = document.querySelector('.bmi-input').value
    
    fetch("https://ajax.test-danit.com/api/v2/cards", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        title: `${visitTarget}`,
        description: `${visitDesc}`,
        doctor: `${doctorselect}`,
        urgency: `${urgency.value}`,
        fullName: `${fullName}`,
       bloodPresure: `${blood}`,
       bmi: `${bmi}`,
       diseaseHistory: `${diseaseHistory}`,
       age: `${age}`,
    
    
      })
    })
      .then(response => response.json())
      .then(card => {
        card = new Cardio(card.title,card.description,card.doctor,card.urgency,card.fullName,card.bloodPresure,card.bmi,card.diseaseHistory,card.age,card.id)
        card.render()
      })
   
    
    }
    else if (doctorselect === 'Стоматолог'){
      let lastVisit = document.querySelector('.lastVisitInput').value
        fetch("https://ajax.test-danit.com/api/v2/cards", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({
            title: `${visitTarget}`,
            description: `${visitDesc}`,
            doctor: `${doctorselect}`,
            urgency: `${urgency.value}`,
            fullName: `${fullName}`,
           lastVisit: `${lastVisit}`
          })
        })
          .then(response => response.json())
          .then(card => {
            card = new Dentist(card.title,card.description,card.doctor,card.urgency,card.fullName,card.lastVisit,card.id)
  card.render()
          })
        
    
        
    }
    else if (doctorselect === 'Терапевт'){
     
      let age = document.querySelector('.ageInput').value
        fetch("https://ajax.test-danit.com/api/v2/cards", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({
            title: `${visitTarget}`,
            description: `${visitDesc}`,
            doctor: `${doctorselect}`,
            urgency: `${urgency.value}`,
            fullName: `${fullName}`,
            age: `${age}`
          })
        })
          .then(response => response.json())
          .then(card => {
            card = new Therapist(card.title,card.description,card.doctor,card.urgency,card.fullName,card.age,card.id)
            card.render()
          })
        
     
    }
    document.querySelector('.modal').remove()
   
  }
  
  
  })

  closeModal.addEventListener('click', function() {
    document.querySelector('.modal').remove()
    
  })
renderBody()

// fetch(`https://ajax.test-danit.com/api/v2/cards/26754`, {
//   method: 'DELETE',
//   headers: {
//     'Authorization': `Bearer ${localStorage.getItem('token')}`
//   },
// })
// localStorage.clear()

