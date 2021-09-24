const createElement = function({tagName = 'div',text = '',className = ''}){
    const element = document.createElement(tagName)
    element.classList.add(className)   
    element.textContent = text
    return element
}
export default createElement