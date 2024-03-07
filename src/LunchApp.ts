import './reset.css';
import './global.css';
import './components/LunchHeader/LunchHeader';
import './components/LunchItemFilter/LunchItemFilter';
import './components/LunchItem/LunchItem';
import './components/LunchItems/LunchItems';
import { RestaurantRegister } from './domain';
import DUMMY from './constants/dummy';

const LUNCH_APP = `
<lunch-header></lunch-header>
<lunch-item-filter></lunch-item-filter>
<lunch-items></lunch-items>
`;

class LunchApp extends HTMLElement {
  connectedCallback() {
    this.render();
    localStorage.setItem('restaurants', JSON.stringify(DUMMY));
  }

  render() {
    this.innerHTML = LUNCH_APP;
  }
}

customElements.define('lunch-app', LunchApp);