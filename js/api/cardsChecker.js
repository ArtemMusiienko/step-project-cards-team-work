let cardsChecker = function(){
    
    fetch("https://ajax.test-danit.com/api/v2/cards", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        
      })
        .then(response => response.json())
        .then(cards => {
            let createMoreCards = document.createElement('h2')
            createMoreCards.classList.add('please-login')
            createMoreCards.textContent = 'Карточек пока нет'
            if (cards.length === 0) {
                
                document.querySelector('.body-container').append(createMoreCards)
            }
            if (cards.length > 0) {
createMoreCards.remove()
            }
        });
    }
export default cardsChecker;