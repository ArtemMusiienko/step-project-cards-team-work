import createElement from './createElement.js';
let renderBody = function() {
    let body = createElement({tagName: 'div',text: '',className: 'body-container',
    })
    document.body.append(body)
   
}
export default renderBody