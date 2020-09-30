let popup = document.querySelector('.popup_opened');
let editButton = document.querySelector('.profile__button-edit');
let closeButton = document.querySelector('.popup__close');
let nameInput = document.querySelector('.profile__title');
let addNameInput = document.querySelector('.popup__input-text_type_name');
let jobInput = document.querySelector('.profile__subtitle');
let addJobInput = document.querySelector('.popup__input-text_type_job');
let addProfile = document.querySelector('.popup__save');
let formElement = document.querySelector('form')

function openPopup() {
    popup.setAttribute('style', 'display: flex');
    addNameInput.value = nameInput.textContent
    addJobInput.value = jobInput.textContent
}

function closePopup() {
    popup.removeAttribute('style', 'display: flex')
}

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    nameInput.textContent = addNameInput.value
    jobInput.textContent = addJobInput.value
    closePopup()
}
editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);