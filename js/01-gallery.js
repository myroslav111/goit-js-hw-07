import { galleryItems } from './gallery-items.js';
// Change code below this line


// ссылка основной контейнер
const refsGalleryContainer = document.querySelector('.gallery')
const gallerySet = createGalleryGreed(galleryItems)

// вставил разметку в html
refsGalleryContainer.innerHTML = gallerySet

// делегировал события с ел. на родителя 
refsGalleryContainer.addEventListener('click', onGalleryClick)

// делегирую ивент на родителя 
// снимаю ивент браузера по умолчанию
function onGalleryClick(event) {
  event.preventDefault()
  if(event.target.nodeName !== 'IMG'){
    return
  }
  
  event.target.addEventListener('click', createImgForLightbox)
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

// создаем начинку для лайтбокса
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

// вешаем слушателя на бекдроп для закрытия
lightbox.addEventListener('click', onLightboxClikToCloseLightbox)

// фун. закрытия лайтбокса
function onLightboxClikToCloseLightbox(event) {
  lightbox.classList.remove('active')
  window.removeEventListener('keydown', onEscKeyPressToClose)
}

// функция закрытия лайтбокса по esc
function onEscKeyPressToClose(event) {
  if(event.code === 'Escape'){
    onLightboxClikToCloseLightbox()
  }
}
