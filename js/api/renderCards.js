import cardsChecker from './cardsChecker.js';

export class Cardio  {
    constructor(title,description,doctor,urgency,fullName,bloodPressure,bmi,diseaseHistory,age,id) {

        this.title = title
        this.description = description
        this.doctor = doctor
        this.urgency = urgency
        this.fullName = fullName
        this.bloodPressure = bloodPressure
        this.bmi = bmi
        this.diseaseHistory = diseaseHistory
        this.age = age
        this.id = id
    }
    render(){
      const editCard = document.createElement('img');
editCard.src = './img/image.png'
      editCard.classList.add('edit-card')
      const cardCloseBtn = document.createElement('button')
    cardCloseBtn.classList.add('card-close-btn')
    cardCloseBtn.type = 'button'
    cardCloseBtn.textContent = 'x'
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card-container');
        const cardTitle = document.createElement('h2');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = this.title;
        const cardDescription = document.createElement('h2');
        cardDescription.classList.add('card-description');
        cardDescription.textContent = this.description;
        const cardDoctor = document.createElement('h2');
        cardDoctor.classList.add('card-doctor');
        cardDoctor.textContent = this.doctor;
        const urgency = document.createElement('h2');
        urgency.classList.add('urgency');
        urgency.textContent = this.urgency
        urgency.style.display = 'none';
        const fullName = document.createElement('h2');
        fullName.classList.add('full-name');
        fullName.textContent = this.fullName;
        fullName.style.display = 'none';
        const bloodPressure = document.createElement('h2')
        bloodPressure.classList.add('blood-pressure');
        bloodPressure.textContent = this.bloodPressure
        bloodPressure.style.display  = 'none';
        const bmi = document.createElement('h2')
        bmi.classList.add('bmi')
        bmi.textContent = this.bmi
        bmi.style.display = 'none'
        const diseaseHistory = document.createElement('h2')
        diseaseHistory.classList.add('disease-history')
        diseaseHistory.textContent = this.diseaseHistory
        diseaseHistory.style.display = 'none'
        const age = document.createElement('h2')
        age.classList.add('age')
        age.textContent = this.age
        age.style.display = 'none'
        const showMore = document.createElement('h2')
        showMore.classList.add('showMore')
        showMore.textContent = 'Показать больше'
        const showLess = document.createElement('h2')
        showLess.classList.add('showMore')
        showLess.textContent = 'Скрыть'
        showLess.style.display = 'none'
        showMore.addEventListener('click', function() {
        showMore.style.display = 'none'
        showLess.style.display = 'block'
          urgency.style.display = 'block';
          fullName.style.display = 'block';
          bloodPressure.style.display  = 'block';
          bmi.style.display = 'block'
          diseaseHistory.style.display = 'block'
          age.style.display = 'block'
        })
        showLess.addEventListener('click', function(){
          showLess.style.display = 'none'
          showMore.style.display = 'block'
          urgency.style.display = 'none';
          fullName.style.display = 'none';
          bloodPressure.style.display  = 'none';
          bmi.style.display = 'none'
          diseaseHistory.style.display = 'none'
          age.style.display = 'none'
        })
        cardDiv.setAttribute('id',this.id)
        cardDiv.setAttribute('title',this.title)
        cardDiv.setAttribute('urgency',this.urgency)
        cardCloseBtn.addEventListener('click', function() {
          fetch(`https://ajax.test-danit.com/api/v2/cards/${cardDiv.getAttribute('id')}`, {
            method: 'DELETE',
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
          })
        })
        cardCloseBtn.addEventListener('click', function(e) {
          e.target.parentNode.remove();
         })
         cardCloseBtn.addEventListener('click', function(){
         if (!document.querySelector('.body-container').hasChildNodes()){
          let createMoreCards = document.createElement('h2')
          createMoreCards.classList.add('please-login')
          createMoreCards.textContent = 'Карточек пока нет'
          document.querySelector('.body-container').append(createMoreCards)
         }
         })
       

editCard.addEventListener('click',function(e){
    editCard.style.display = 'none';
    showMore.remove()
    showLess.remove()
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
showLess.style.display = 'none'
cardDiv.append(editTitle,editDescription,editUrgency,editFullName,editBloodPressure,editBmi,editDiseaseHistory,editAge)
save.addEventListener('click', function(e) {
  cardTitle.textContent = editTitle.value
  editTitle.remove()
  cardDescription.textContent = editDescription.value
 editDescription.remove()
  
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

cardDiv.append(editCard,cardCloseBtn,cardTitle,cardDescription,cardDoctor,showMore,showLess,urgency,fullName,bloodPressure,bmi,diseaseHistory,age)
editCard.style.display = 'block'

save.remove()
fetch(`https://ajax.test-danit.com/api/v2/cards/${cardDiv.getAttribute('id')}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  },
  body: JSON.stringify({
   
    title: `${editTitle.value}`,
    description: `${editDescription.value}`,
    doctor: `${cardDoctor.textContent}`,
    urgency: `${editUrgency.value}`,
    fullName: `${editFullName.value}`,
    bloodPresure: `${editBloodPressure.value}`,
       bmi: `${editBmi.value}`,
       diseaseHistory: `${editDiseaseHistory.value}`,
       age: `${editAge.value}`,
  })
})


})
         } )

         cardDiv.append(editCard,cardCloseBtn,cardTitle,cardDescription,cardDoctor,showMore,showLess,urgency,fullName,bloodPressure,bmi,diseaseHistory,age)
        document.querySelector('.body-container').append(cardDiv)
        
    }
  
}
export class Dentist  {
  constructor(title,description,doctor,urgency,fullName,lastVisit,id) {
      this.title = title
      this.description = description
      this.doctor = doctor
      this.urgency = urgency
      this.fullName = fullName
   this.lastVisit = lastVisit
   this.id = id
  }
  render(){
    const editCard = document.createElement('img');
    editCard.src = './img/image.png'
          editCard.classList.add('edit-card')
    const cardCloseBtn = document.createElement('button')
    cardCloseBtn.classList.add('card-close-btn')
    cardCloseBtn.type = 'button'
    cardCloseBtn.textContent = 'x'
      const cardDiv = document.createElement('div');
      cardDiv.classList.add('card-container');
      const cardTitle = document.createElement('h2');
      cardTitle.classList.add('card-title');
      cardTitle.textContent = this.title;
      const cardDescription = document.createElement('h2');
      cardDescription.classList.add('card-description');
      cardDescription.textContent = this.description;
      const cardDoctor = document.createElement('h2');
      cardDoctor.classList.add('card-doctor');
      cardDoctor.textContent = this.doctor;
      const urgency = document.createElement('h2');
      urgency.classList.add('urgency');
      urgency.style.display = 'none';
      urgency.textContent = this.urgency
      const fullName = document.createElement('h2');
      fullName.classList.add('full-name');
      fullName.style.display = 'none';
      fullName.textContent = this.fullName;
      const lastVisit = document.createElement('h2')
     lastVisit.classList.add('last-visit')
     lastVisit.textContent = this.lastVisit;
     lastVisit.style.display = 'none';
     cardDiv.setAttribute('id',this.id)
     cardDiv.setAttribute('title',this.title)
     cardDiv.setAttribute('urgency',this.urgency)
     const showMore = document.createElement('h2')
        showMore.classList.add('showMore')
        showMore.textContent = 'Показать больше'
        const showLess = document.createElement('h2')
        showLess.classList.add('showMore')
        showLess.textContent = 'Скрыть'
        showLess.style.display = 'none'
        showMore.addEventListener('click', function() {
        showMore.style.display = 'none'
        showLess.style.display = 'block'
          urgency.style.display = 'block';
          fullName.style.display = 'block';
          lastVisit.style.display = 'block'
        })
        showLess.addEventListener('click', function(){
          showLess.style.display = 'none'
          showMore.style.display = 'block'
          urgency.style.display = 'none';
          fullName.style.display = 'none';
         lastVisit.style.display = 'none'
        })
     editCard.addEventListener('click',function(e){
       showMore.remove()
       showLess.remove()
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
  
  const editUrgency = document.createElement("input")
  editUrgency.type = 'text'
  editUrgency.value = urgency.textContent
  urgency.remove()
  const editFullName = document.createElement("input")
  editFullName.type = 'text'
  editFullName.value = fullName.textContent
  fullName.remove()
  const editLastVisit = document.createElement("input")
  editLastVisit.type = 'text'
  editLastVisit.value = lastVisit.textContent
  lastVisit.remove()
  
  cardDiv.append(editTitle,editDescription,editUrgency,editFullName,editLastVisit)
  save.addEventListener('click', function(e) {
    cardTitle.textContent = editTitle.value
    editTitle.remove()
    cardDescription.textContent = editDescription.value
   editDescription.remove()
   
    urgency.textContent = editUrgency.value
    editUrgency.remove()
    fullName.textContent = editFullName.value
    editFullName.remove()
  lastVisit.textContent = editLastVisit.value
  editLastVisit.remove()
  
  cardDiv.append(editCard,cardCloseBtn,cardTitle,cardDescription,cardDoctor,showMore,showLess,urgency,fullName,lastVisit)
  editCard.style.display = 'block'
  save.remove()
  fetch(`https://ajax.test-danit.com/api/v2/cards/${cardDiv.getAttribute('id')}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify({
      title: `${editTitle.value}`,
      description: `${editDescription.value}`,
      doctor: `${cardDoctor.textContent}`,
      urgency: `${editUrgency.value}`,
      fullName: `${editFullName.value}`,
         lastVisit: `${editLastVisit.value}`,
    })
  })
  
  
  })
           } )
     cardCloseBtn.addEventListener('click', function() {
      fetch(`https://ajax.test-danit.com/api/v2/cards/${cardDiv.getAttribute('id')}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
      })
    })
    cardCloseBtn.addEventListener('click', function(e) {
      e.target.parentNode.remove();
     })
     
     cardCloseBtn.addEventListener('click', function(){
      if (!document.querySelector('.body-container').hasChildNodes()){
       let createMoreCards = document.createElement('h2')
       createMoreCards.classList.add('please-login')
       createMoreCards.textContent = 'Карточек пока нет'
       document.querySelector('.body-container').append(createMoreCards)
      }
      })
     cardCloseBtn.addEventListener('click', cardsChecker)
     cardDiv.append(editCard,cardCloseBtn,cardTitle,cardDescription,cardDoctor,showMore,showLess,urgency,fullName,lastVisit)
        document.querySelector('.body-container').append(cardDiv)
  }

}
export class Therapist  {
  constructor(title,description,doctor,urgency,fullName,age,id) {
      this.title = title
      this.description = description
      this.doctor = doctor
      this.urgency = urgency
      this.fullName = fullName
   this.age = age 
   this.id = id 
  }
  render(){
    const editCard = document.createElement('img');
    editCard.src = './img/image.png'
          editCard.classList.add('edit-card')
    const cardCloseBtn = document.createElement('button')
    cardCloseBtn.classList.add('card-close-btn')
    cardCloseBtn.type = 'button'
    cardCloseBtn.textContent = 'x'
      const cardDiv = document.createElement('div');
      cardDiv.classList.add('card-container');
      const cardTitle = document.createElement('h2');
      cardTitle.classList.add('card-title');
      cardTitle.textContent = this.title;
      const cardDescription = document.createElement('h2');
      cardDescription.classList.add('card-description');
      cardDescription.textContent = this.description;
      const cardDoctor = document.createElement('h2');
      cardDoctor.classList.add('card-doctor');
      cardDoctor.textContent = this.doctor;
      const urgency = document.createElement('h2');
      urgency.style.display = 'none';
      urgency.classList.add('urgency');
      urgency.textContent = this.urgency
      const fullName = document.createElement('h2');
      fullName.classList.add('full-name');
      fullName.style.display = 'none';
      fullName.textContent = this.fullName;
      const age = document.createElement('h2')
   age.classList.add('age')
   age.style.display = 'none';
     age.textContent = this.age;
     cardDiv.setAttribute('id',this.id)
     cardDiv.setAttribute('title',this.title)
     cardDiv.setAttribute('urgency',this.urgency)
     const showMore = document.createElement('h2')
        showMore.classList.add('showMore')
        showMore.textContent = 'Показать больше'
        const showLess = document.createElement('h2')
        showLess.classList.add('showMore')
        showLess.textContent = 'Скрыть'
        showLess.style.display = 'none'
        showMore.addEventListener('click', function() {
        showMore.style.display = 'none'
        showLess.style.display = 'block'
          urgency.style.display = 'block';
          fullName.style.display = 'block';
          age.style.display = 'block'
        })
        showLess.addEventListener('click', function(){
          showLess.style.display = 'none'
          showMore.style.display = 'block'
          urgency.style.display = 'none';
          fullName.style.display = 'none';
         age.style.display = 'none'
        })
     editCard.addEventListener('click',function(e){
       showMore.remove()
       showLess.remove()
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
  
  const editUrgency = document.createElement("input")
  editUrgency.type = 'text'
  editUrgency.value = urgency.textContent
  urgency.remove()
  const editFullName = document.createElement("input")
  editFullName.type = 'text'
  editFullName.value = fullName.textContent
  fullName.remove()
  
  const editAge = document.createElement("input")
  editAge.type = 'text'
  editAge.value = age.textContent
  age.remove()
  cardDiv.append(editTitle,editDescription,editUrgency,editFullName,editAge)
  save.addEventListener('click', function(e) {
    cardTitle.textContent = editTitle.value
    editTitle.remove()
    cardDescription.textContent = editDescription.value
   editDescription.remove()
    
    urgency.textContent = editUrgency.value
    editUrgency.remove()
    fullName.textContent = editFullName.value
    editFullName.remove()
  age.textContent = editAge.value
  editAge.remove()
  cardDiv.append(editCard,cardCloseBtn,cardTitle,cardDescription,cardDoctor,showMore,showLess,urgency,fullName,age)
  editCard.style.display = 'block'
  save.remove()
  fetch(`https://ajax.test-danit.com/api/v2/cards/${cardDiv.getAttribute('id')}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify({
      title: `${editTitle.value}`,
      description: `${editDescription.value}`,
      doctor: `${cardDoctor.textContent}`,
      urgency: `${editUrgency.value}`,
      fullName: `${editFullName.value}`,
         age: `${editAge.value}`,
    })
  })
  
  
  })
           } )
     cardCloseBtn.addEventListener('click', function() {
      fetch(`https://ajax.test-danit.com/api/v2/cards/${cardDiv.getAttribute('id')}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
      })
    })
    cardCloseBtn.addEventListener('click', function(e) {
      e.target.parentNode.remove();
     })
    
     cardCloseBtn.addEventListener('click', function(){
      if (!document.querySelector('.body-container').hasChildNodes()){
       let createMoreCards = document.createElement('h2')
       createMoreCards.classList.add('please-login')
       createMoreCards.textContent = 'Карточек пока нет'
       document.querySelector('.body-container').append(createMoreCards)
      }
      })
     cardCloseBtn.addEventListener('click', cardsChecker())
     cardDiv.append(editCard,cardCloseBtn,cardTitle,cardDescription,cardDoctor,showMore,showLess,urgency,fullName,age)
    document.querySelector('.body-container').append(cardDiv)
    editCard.addEventListener('click', function() {
      
         })
  }


}

const renderCards = function(){
    fetch("https://ajax.test-danit.com/api/v2/cards", {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  },
  
})
  .then(response => response.json())
  .then(cards => {
cards.forEach(card => {
if (card.doctor === 'Кардиолог'){
  card = new Cardio(card.title,card.description,card.doctor,card.urgency,card.fullName,card.bloodPresure,card.bmi,card.diseaseHistory,card.age,card.id)
  card.render()
}
else if (card.doctor === 'Стоматолог'){
  card = new Dentist(card.title,card.description,card.doctor,card.urgency,card.fullName,card.lastVisit,card.id)
  card.render()
}
else if (card.doctor === 'Терапевт'){
  card = new Therapist(card.title,card.description,card.doctor,card.urgency,card.fullName,card.age,card.id)
  card.render()
}
else {
  fetch(`https://ajax.test-danit.com/api/v2/cards/${card.id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
  })
}
})
  })

}

fetch("https://ajax.test-danit.com/api/v2/cards", {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  },
  
})

  .then(response => response.json())
  .then(cards => console.log(cards))
export default renderCards;



