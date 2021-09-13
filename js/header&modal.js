import Alert from './CardioModal.js'
const createElement = function({tagName = 'div',text = '',className = ''}){
    const element = document.createElement(tagName)
    element.classList.add(className)   
    element.textContent = text
    return element
}
let loginBtn = createElement({
    tagName: 'a',
    text: 'Login',
    className: 'login-btn',
})
loginBtn.href = '#openModal'
let renderHeader = function(){
    const header = createElement({
        tagName: 'header',
        text: '',
        className: 'header',
    })
    const  headerImg = createElement({
        tagName: 'img', 
        text: '',
        className: 'img-header',
    })
    headerImg.src = '/img/19-196326_logo-blue-free-logos-gratis-png-transparent-png.png'
    
    header.append(headerImg)
    document.body.append(header)
}
const loginInput = document.createElement('input');
loginInput.classList.add('input')
loginInput.placeholder = 'Login';
const passwordInput = document.createElement('input');
passwordInput.classList.add('input')
passwordInput.placeholder = 'Password'; 
passwordInput.style.marginTop = '15px';
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
    document.querySelector('.modal-form').appendChild(
        submitBtn
    )
    document.querySelector('.modal-header').appendChild(closeModal)
    closeModal.addEventListener('click',function(){
        document.querySelector('.modal').remove();
    })
})    
   

 submitBtn.addEventListener('click', function(e) {
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
            localStorage.setItem('token',token)
            document.querySelector('.modal').remove()
            loginBtn.remove()
            document.querySelector('.header').append(createVisitBtn)
        }
           
            )

  }
  else {
    const invalidData = document.createElement('h2')
      invalidData.textContent = 'Please enter valid data'
      invalidData.classList.add('invalid-data')
      document.querySelector('.modal-form').append(invalidData)
  }
  ;
     e.preventDefault()
     
 }) 
 ;

renderHeader()


 
createVisitBtn.href = '#openModal'


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
</div>
  `)
 const DoctorSelect = document.createElement('select')
 const CardioOption = document.createElement('option')
 const selectPlaceHolder = document.createElement('option')
 selectPlaceHolder.textContent = 'Выберите врача'
 selectPlaceHolder.value = '-1'
 selectPlaceHolder.disabled = true
 selectPlaceHolder.selected = true
 CardioOption.textContent = 'Кардиолог'
 CardioOption.value = '1'
 const TherapistOption = document.createElement('option')
 TherapistOption.textContent = 'Терапевт'
 TherapistOption.value = '2'
 const DentistOption = document.createElement('option')
 DentistOption.textContent = 'Стоматолог'
 DentistOption.value = '3'
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
if (e.target.value === '1'){
  dentistModal.removeModal()
  therapistModal.removeModal()
cardioModal.render()
} 
else if (e.target.value === '2'){
  dentistModal.removeModal()
  cardioModal.removeModal()
therapistModal.render()
} 
else if (e.target.value === '3'){
  dentistModal.render()
  cardioModal.removeModal()
  therapistModal.removeModal()
}
})
  
  document.querySelector('.modal-header').appendChild(closeModal)
  closeModal.addEventListener('click',function(){
      document.querySelector('.modal').remove();
  })
})
const renderModal = function(){
  const visitTarget = document.createElement('input')
  visitTarget.placeholder = 'Цель вашего визита'
  const visitDesc = document.createElement('input')
  visitDesc.placeholder = 'Краткое описание визита'
  const urgency = document.createElement('select')
  const urgencyPlaceholder = document.createElement('option')
  urgencyPlaceholder.value = '-1'
  urgencyPlaceholder.disabled = true
  urgencyPlaceholder.selected = true
  urgencyPlaceholder.textContent = 'Выберите срочность визита'
  const lowUrgency = document.createElement('option')
  lowUrgency.value = '1'
  lowUrgency.textContent = 'Низкая'
  const mediumUrgency = document.createElement('option')
  mediumUrgency.value = '2'
  mediumUrgency.textContent = 'Средняя'
  const highUrgency = document.createElement('option')
  highUrgency.value = '3'
  highUrgency.textContent = 'Высокая'
  const fullName = document.createElement('input')
  fullName .placeholder = 'Ваше ФИО'
  urgency.appendChild(urgencyPlaceholder)
  urgency.appendChild(lowUrgency)
  urgency.appendChild(mediumUrgency)
  urgency.appendChild(highUrgency)
  document.querySelector('.modal-form').append(visitTarget,visitDesc,urgency,fullName)
}



window.addEventListener('load', function() {
  if (localStorage.getItem('token')) {
    document.querySelector('.header').append(createVisitBtn)
  } 
  else {
    document.querySelector('.header').append(loginBtn)
  };
     
 })
 class DentistModal {
  render() {
   const lastVisitInput = document.createElement('input')
   lastVisitInput.placeholder = 'Дата последнего визита'  
   lastVisitInput.classList.add('lastVisitInput')
  
    document.querySelector('.modal-form').append(lastVisitInput,submitBtn)
 
  }
  removeModal() {
    if (document.querySelector('.lastVisitInput')){
      document.querySelector('.lastVisitInput').remove()
    }
  
  }
}

class CardioModal {
  render() {
    const bloodPresure = document.createElement('input')
    bloodPresure.placeholder = 'Ваше обычное давление'
    bloodPresure.classList.add('bloodPresure')
    const bmi = document.createElement('input')
    bmi.placeholder = 'Ваш индекс массы тела'
    bmi.classList.add('bmi')
    const diseaseHistory = document.createElement('input')
    diseaseHistory.placeholder = 'Перенесенные заболевания сердечно-сосудистой системы'
    diseaseHistory.classList.add('diseaseHistory')
    const ageInput = document.createElement('input')
    ageInput.placeholder = 'Ваш возраст'
    ageInput.classList.add('ageInput')
    document.querySelector('.modal-form').append(bloodPresure,bmi,diseaseHistory,ageInput,submitBtn)
    return ageInput
  }
  removeModal() {
    if (document.querySelector('.bloodPresure') && document.querySelector('.bmi') && document.querySelector('.diseaseHistory') && document.querySelector('.ageInput') ){
      document.querySelector('.bloodPresure').remove()
      document.querySelector('.bmi').remove()
      document.querySelector('.diseaseHistory').remove()
      document.querySelector('.ageInput').remove()
    }
   
  }
}

class TherapistModal {
  render() {
   const ageInput = document.createElement('input')
 ageInput.placeholder = 'Ваш возраст'  
 ageInput.classList.add('ageInput')
    document.querySelector('.modal-form').append(ageInput,submitBtn)
 
  }
  removeModal() {
    if (document.querySelector('.ageInput')){
      document.querySelector('.ageInput').remove()
    }
  
  }
}

