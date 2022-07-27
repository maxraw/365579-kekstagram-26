import {openBigPicture} from './big-picture.js';
import {filtersPhoto} from './filters.js';

const userPicture = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const renderUsersPhotos = (usersPhoto) => {
  const pictureGaleryFragment = document.createDocumentFragment();

  const pictureElements = userPicture.querySelectorAll('.picture');
  pictureElements.forEach((element) => {
    element.remove();
  });

  usersPhoto.forEach(({url, likes, comments, description}) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    pictureGaleryFragment.appendChild(pictureElement);

    pictureElement.addEventListener('click', (evt) => {
      evt.preventDefault();
      openBigPicture(url, likes, comments, description);
    });
  });

  userPicture.appendChild(pictureGaleryFragment);
};

const successData = (usersPhoto) => {
  filtersPhoto(usersPhoto);
  renderUsersPhotos(usersPhoto);
};

export {successData, renderUsersPhotos};
