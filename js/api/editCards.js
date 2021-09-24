import Cardio from './renderCards';
let editCards = function(){
    editCard.style.display = 'none';
          const save = document.createElement("img")
          save.src = './img/save.png'
          save.classList.add('save-button')
          e.target.parentNode.append(save)
const editTitle = document.createElement("input")
editTitle.type = 'text'
editTitle.value = cardTitle.textContent
cardTitle.remove()
const editDescription = document.createElement("input")
editDescription.type = 'text'
editDescription.value = cardDescription.textContent
cardDescription.remove()
const editCardDoctor = document.createElement("input")
editCardDoctor.type = 'text'
editCardDoctor.value = cardDoctor.textContent
cardDoctor.remove()
const editUrgency = document.createElement("input")
editUrgency.type = 'text'
editUrgency.value = urgency.textContent
urgency.remove()
const editFullName = document.createElement("input")
editFullName.type = 'text'
editFullName.value = fullName.textContent
fullName.remove()
const editBloodPressure = document.createElement("input")
editBloodPressure.type = 'text'
editBloodPressure.value = bloodPressure.textContent
bloodPressure.remove()
const editBmi = document.createElement("input")
editBmi.type = 'text'
editBmi.value = bmi.textContent
bmi.remove()
const editDiseaseHistory = document.createElement("input")
editDiseaseHistory.type = 'text'
editDiseaseHistory.value = diseaseHistory.textContent
diseaseHistory.remove()
const editAge = document.createElement("input")
editAge.type = 'text'
editAge.value = age.textContent
age.remove()

cardDiv.append(editTitle,editDescription,editCardDoctor,editUrgency,editFullName,editBloodPressure,editBmi,editDiseaseHistory,editAge)
save.addEventListener('click', function(e) {
  cardTitle.textContent = editTitle.value
  editTitle.remove()
  cardDescription.textContent = editDescription.value
 editDescription.remove()
  cardDoctor.textContent = editCardDoctor.value
  editCardDoctor.remove()
  urgency.textContent = editUrgency.value
  editUrgency.remove()
  fullName.textContent = editFullName.value
  editFullName.remove()
bloodPressure.textContent = editBloodPressure.value
editBloodPressure.remove()
bmi.textContent = editBmi.value
editBmi.remove()
diseaseHistory.textContent = editDiseaseHistory.value
editDiseaseHistory.remove()
age.textContent = editAge.value
editAge.remove()
cardDiv.append(editCard,cardCloseBtn,cardTitle,cardDescription,cardDoctor,urgency,fullName,bloodPressure,bmi,diseaseHistory,age)
editCard.style.display = 'block'
save.remove()

})
}
  
export default editCards