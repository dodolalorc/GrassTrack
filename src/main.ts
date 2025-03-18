import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import router from './routers';


const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import {
  faPlus,
  faHippo,
  faUser,
  faSun,
  faHouse,
  faGear,
  faTractor,
  faCow,
  faLeaf,
  faCog,
  faUpload,
  faBalanceScale,
  faClockRotateLeft,
  faQuestion,
  faMessage,
  faX,
  faCheck,
  faEnvelope,
  faGrip,
} from '@fortawesome/free-solid-svg-icons';

import {
  faPenToSquare,
} from '@fortawesome/free-regular-svg-icons';

library.add(faPlus, faHippo, faUser, faSun, faHouse, faGear, faTractor, faCow, faLeaf, faCog, faUpload, faBalanceScale, faClockRotateLeft, faQuestion, faMessage, faX, faCheck, faEnvelope, faGrip, faPenToSquare);

createApp(App)
  .use(pinia)
  .use(router)
  .use(ElementPlus)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');