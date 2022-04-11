import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


// ссылка основной контейнер
const refsGalleryContainer = document.querySelector('.gallery')
const gallerySet = createGalleryGreed(galleryItems)

// вставил разметку в html
refsGalleryContainer.innerHTML = gallerySet

// делегировал события с ел. на родителя получение url orig img
refsGalleryContainer.addEventListener('click', onGalleryClick)

// делегирую ивент на родителя
function onGalleryClick(event) {
  // if(event.target.closest('.gallery__image') ){
  //   console.log('hhhhh');
  // }
  if(event.target.nodeName !== 'IMG'){
    return
  }
} 

// ссылка на масив ссылок
const linkArr = refsGalleryContainer.querySelectorAll('a')

// добавил слушателя на все ссылки
function addEventListenerOnLink(arr) {
  arr.forEach(element => element.addEventListener('click', removeEvDefoltFromLink));
}
addEventListenerOnLink(linkArr)

// функция снятия ивента по умолчанию
function removeEvDefoltFromLink(event) {
    event.preventDefault()
}

// создал разметку для галереи
function createGalleryGreed(items) {
  return items.map(item => ` <div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div> `).join('')
}

// создаю бекдроп модалки 
const lightbox = document.createElement('div')
lightbox.id = 'lightbox' 
refsGalleryContainer.after(lightbox)

// ссылка на img
const images = document.querySelectorAll('img')

// вешаю слушателя на img
images.forEach(image => {
  image.addEventListener('click', createImgForLightbox)
})

function createImgForLightbox(event) {
  lightbox.classList.add('active')
  window.addEventListener('keydown', onEscKeyPressToClose)
  const img = document.createElement('img')
  img.src = event.target.dataset.source

  while (lightbox.firstChild) {
    lightbox.removeChild(lightbox.firstChild)
  }
   
  lightbox.appendChild(img)
}

// 
lightbox.addEventListener('click', onLightboxClikToCloseLightbox
)

function onLightboxClikToCloseLightbox(event) {
  lightbox.classList.remove('active')
  window.removeEventListener('keydown', onEscKeyPressToClose)
}

function onEscKeyPressToClose(event) {
  if(event.code === 'Escape'){
    onLightboxClikToCloseLightbox()
  }
}
