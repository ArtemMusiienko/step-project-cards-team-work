
let createInput = function(){
  const div = document.createElement("div");
  div.className = "space_for_inputs"
    const input = document.createElement("input")
    input.className = "input_title"
input.type = "search"
input.placeholder ="search by title"
div.append(input)

// const statusSelect = document.createElement('select')
// statusSelect.className = "status_select"
// const allOption = document.createElement('option')
// allOption.textContent = 'All'
// allOption.value = '1'
// const doneOption = document.createElement('option')
// doneOption.textContent = 'Done'
// doneOption.value = '2'
// const openOption = document.createElement('option')
// openOption.textContent = 'Open'
// openOption.value = '3'
// div.appendChild(statusSelect)
// statusSelect.appendChild(allOption)
// statusSelect.appendChild(doneOption)
// statusSelect.appendChild(openOption)  


const statusSecondSelect = document.createElement('select')
statusSecondSelect.className = "status_second_select "
const allSecondOption = document.createElement('option')
allSecondOption.textContent = 'Все'
allSecondOption.value = '1'
const hightOption = document.createElement('option')
hightOption.textContent = 'Высокая'
hightOption.value = 'Высокая срочность'
const normalOption = document.createElement('option')
normalOption.textContent = 'Средняя'
normalOption.value = 'Средняя срочность'
const lowOption = document.createElement('option')
lowOption.textContent = 'Низкая'
lowOption.value = 'Низкая срочность'
div.appendChild(statusSecondSelect)
statusSecondSelect.appendChild(allSecondOption)
statusSecondSelect.appendChild(hightOption)
statusSecondSelect.appendChild(normalOption)
statusSecondSelect.appendChild(lowOption)
const header= document.querySelector('.header')
header.after(div)
const searchBtn = document.createElement('Button')
searchBtn.className = "search_btn"
searchBtn.textContent = 'Search'
div.appendChild(searchBtn)
const token = '38a16ed7-5607-4674-9870-898d0b89564a'

searchBtn.addEventListener('click', function(){
  document.querySelectorAll('.card-container').forEach(cardDiv => {
  if (!input.value){
    if (statusSecondSelect.value === '1'){
      cardDiv.style.display = 'block';
    }
    else {
      if (statusSecondSelect.value === cardDiv.getAttribute('urgency') ){
        cardDiv.style.display = 'block';
      }
      else {
        cardDiv.style.display = 'none';
      }
    }
  }
  else if (input.value && statusSecondSelect.value ==='1')  {
if (input.value === cardDiv.getAttribute('title') ){
  cardDiv.style.display = 'block';
}
else {
  cardDiv.style.display = 'none';
}
  }
  else if (input.value && statusSecondSelect.value !=='1') {
    if (input.value === cardDiv.getAttribute('title') && statusSecondSelect.value === cardDiv.getAttribute('urgency')  ){
cardDiv.style.display = 'block';
    }
    else {
      cardDiv.style.display = 'none';
    }
  }
});

})

















}
export default createInput 