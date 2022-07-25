import {renderUsersPhotos} from './pictures.js';
import './validate.js';
import {
  showAllert,
} from './message.js';
import {
  getUsersPhotos,
} from './api.js';
import './filters.js';

getUsersPhotos(renderUsersPhotos, showAllert);
