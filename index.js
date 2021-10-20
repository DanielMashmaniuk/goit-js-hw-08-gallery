const backdropClose = document.querySelector('.lightbox__overlay');
const lightboxRef = document.querySelector('.lightbox');
const imageRef = document.querySelector('.lightbox__image');
const closeBtn = document.querySelector('button[data-action="close-lightbox"]');
const galleryEl = document.querySelector('.gallery')
const openmodal = document.querySelector('.lightbox');
const modalContent = document.querySelector('.lightbox__content')
const dataSources = [];
galleryEl.addEventListener("click", onClickImage)
window.addEventListener('click', onButtotClick);
//функция проверки клика по карточке и добавления класса 'is-open'
 galleryItems.map(
  (item, index) =>(
    galleryEl.innerHTML += `<li class="gallery__item">
  <a class="gallery__link"
  href="${item.original}">
  <img class="gallery__image"
  src="${item.preview}"
  data-source="${item.original}"
  data-id="${index}"
  alt="${item.description}"/>
     </a>
 </li>`)
 );
//открытие модалки по клику на img
function onClickImage(evt) {
  evt.preventDefault(evt);
  if(!evt.target.nodeName=== "IMG"){
    return
  }
  openmodal.classList.add('is-open');
  imageRef.src=evt.target.dataset.source;
  imageRef.alt=evt.target.alt;
  }
 //закрытие модалкипо клику button
   function onButtotClick (e){
     if(e.target.nodeName==="BUTTON"){
     imageRef.src="";
     imageRef.alt="";
     openmodal.classList.remove('is-open');
     //window.removeEventListener('click', onButtotClick);
    }
   } ;
  //закрытие по кнопке ESC
  window.addEventListener('keydown', e => {
             //currentIndex = dataSourse.indexOf(modalContent.src);
  if(e.key === "Escape") {
    lightboxRef.classList.remove('is-open');
    imageRef.src="";
    imageRef.alt="";
    return
   }
  });
  function onClouseOverley(e) {
    if (e.target ===backdropClose) {
      onButtotClick()
    }
  }
  let index = 0;
  function onKeyPrevNextEscImg(e) {
    if (e.code === "ArrowLeft") {
      indexPrev();
    } else if (e.code === "ArrowRight") {
      indexNext();
    }
    if (e.code === "Escape") {
      onButtotClick();
    }
  }
  function indexPrev() {
    if (index - 1 < 0) {
      return;
    }
    index -= 1;
    setActiveImage(index);
  }
  function indexNext() {
    if (index + 1 >= images.length) {
      return;
    }
    index += 1;
    setActiveImage(index);
  }
  function setActiveImage(imageIdx) {
    const activeImage = galleryItems[imageIdx];
    lightboxRef.src = activeImage.dataset.source;
    lightboxRef.alt = activeImage.alt;
  }