import { galleryItems } from './gallery-items.js';
// Change code below this line

// ссылка на родителя
const refsGalleryContainer = document.querySelector('.gallery')

// готовая разметка
const gallerySet = createGallery(galleryItems)

//фун. разметки галереи
function createGallery(arr) {
const newArr = arr.map(el => `<a class="gallery__item" href="${el.original}">
    <img class="gallery__image" src="${el.preview}" alt="${el.description}"  />
</a>`).join('')

    return newArr
}

// вставка разметки в html
refsGalleryContainer.innerHTML = gallerySet

// инициализация библиотеки 
let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', createOptionTextAndDelay) 

// фун. задержки заголовка
// иниц.заголовка
function createOptionTextAndDelay() {
    gallery.defaultOptions.captionsData = 'alt'
    gallery.defaultOptions.captionDelay = 250
}
