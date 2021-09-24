
  class TherapistModal {
    render() {
     const ageInput = document.createElement('input')
   ageInput.placeholder = 'Ваш возраст'  
   ageInput.classList.add('ageInput')
      document.querySelector('.modal-form').append(ageInput)
   
    }
    removeModal() {
      if (document.querySelector('.ageInput')){
        document.querySelector('.ageInput').remove()
      }
    
    }
  }
  
  export default TherapistModal