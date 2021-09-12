
 window.addEventListener('load', function() {
  if (localStorage.getItem('token')) {
    document.querySelector('.header').append(createVisit)
  } 
  else {
    document.querySelector('.header').append(loginBtn)
  };
     
 })
createElement = function({tagName = 'div',text = '',className = ''}){
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
const createVisit = document.createElement('button');
createVisit.textContent = 'Создать визит'
createVisit.classList.add('login-btn')
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
            document.querySelector('.header').append(createVisit)
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


 