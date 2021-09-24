class CardioModal {
  render() {
    const bloodPresure = document.createElement('input')
    bloodPresure.placeholder = 'Ваше обычное давление'
    bloodPresure.classList.add('bloodPresure')
    bloodPresure.required = true
    const bmi = document.createElement('input')
    bmi.placeholder = 'Ваш индекс массы тела'
    bmi.classList.add('bmi-input')
    bmi.required = true
    const diseaseHistory = document.createElement('input')
    diseaseHistory.placeholder = 'Перенесенные заболевания сердечно-сосудистой системы'
    diseaseHistory.classList.add('diseaseHistory')
    diseaseHistory.required = true 
    const ageInput = document.createElement('input')
    ageInput.placeholder = 'Ваш возраст'
    ageInput.classList.add('ageInput')
    ageInput.required = true
    document.querySelector('.modal-form').append(bloodPresure,bmi,diseaseHistory,ageInput)
    return ageInput
  }
  removeModal() {
    if (document.querySelector('.bloodPresure') && document.querySelector('.bmi') && document.querySelector('.diseaseHistory') && document.querySelector('.ageInput') ){
      document.querySelector('.bloodPresure').remove()
      document.querySelector('.bmi-input').remove()
      document.querySelector('.diseaseHistory').remove()
      document.querySelector('.ageInput').remove()
    }
   
  }
}
export default CardioModal