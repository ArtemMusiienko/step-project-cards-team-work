import createElement from './createElement.js';
let renderHeader = function() {
    let header = createElement({tagName: 'header',text: '',className: 'header',
    })
 let logo = createElement({tagName: 'img',text: '',className: 'img-header',
    })
    document.body.append(header)
    
    logo.src = './img/19-196326_logo-blue-free-logos-gratis-png-transparent-png.png'
let loginBtn = createElement({tagName: 'a',text: 'Login',className: 'login-btn',})

  loginBtn.href = '#openModal'
  
  header.append(logo,loginBtn)
}
 


export default renderHeader;