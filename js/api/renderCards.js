class Cardio {
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
        const fullName = document.createElement('h2');
        fullName.classList.add('full-name');
        fullName.textContent = this.fullName;
        const bloodPressure = document.createElement('h2')
        bloodPressure.classList.add('blood-pressure');
        bloodPressure.textContent = this.bloodPressure
        const bmi = document.createElement('h2')
        bmi.classList.add('bmi')
        bmi.textContent = this.bmi
        const diseaseHistory = document.createElement('h2')
        diseaseHistory.classList.add('disease-history')
        diseaseHistory.textContent = this.diseaseHistory
        const age = document.createElement('h2')
        age.classList.add('age')
        age.textContent = this.age
        cardDiv.setAttribute('id',this.id)
        cardDiv.append(cardTitle,cardDescription,cardDoctor,urgency,fullName,bloodPressure,bmi,diseaseHistory,age)
        document.querySelector('.body-container').append(cardDiv)
        
    }
  
}
class Dentist {
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
      const fullName = document.createElement('h2');
      fullName.classList.add('full-name');
      fullName.textContent = this.fullName;
      const lastVisit = document.createElement('h2')
     lastVisit.classList.add('last-visit')
     lastVisit.textContent = this.lastVisit;
     cardDiv.setAttribute('id',this.id)
     cardDiv.append(cardTitle,cardDescription,cardDoctor,urgency,fullName,lastVisit)
        document.querySelector('.body-container').append(cardDiv)
  }

}
class Therapist {
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
      const fullName = document.createElement('h2');
      fullName.classList.add('full-name');
      fullName.textContent = this.fullName;
      const age = document.createElement('h2')
   age.classList.add('age')
     age.textContent = this.age;
     cardDiv.setAttribute('id',this.id)
     cardDiv.append(cardTitle,cardDescription,cardDoctor,urgency,fullName,age)
    document.querySelector('.body-container').append(cardDiv)
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

