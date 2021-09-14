class DentistModal {
  render() {
   const lastVisitInput = document.createElement('input')
   lastVisitInput.placeholder = 'Дата последнего визита'  
   lastVisitInput.classList.add('lastVisitInput')
  lastVisitInput.required = true
    document.querySelector('.modal-form').append(lastVisitInput)
 
  }
  removeModal() {
    if (document.querySelector('.lastVisitInput')){
      document.querySelector('.lastVisitInput').remove()
    }
  
  }
}
export default DentistModal