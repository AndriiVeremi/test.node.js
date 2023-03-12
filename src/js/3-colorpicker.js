import colorCardTpl from '../templates/color-cards.hbs';
import colorCardAllTpl from '../templates/color-cardz.hbs';
import colors from './colors.json';


const paletteContainer = document.querySelector('.js-palette');
const cardsMarkup = createColorCardsMarkup(colors);

paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup);
paletteContainer.addEventListener('click', onPaletteContainerClick)

function createColorCardsMarkup(colors) {

    // return colors.map(colorCardTpl).join('');  //-------color-cards
    return colorCardAllTpl(colors);               //-------color-cardz        
}

function onPaletteContainerClick(evt) {

    const isColorSwatchEl = evt.target.classList.contains('color-swatch');

    if (!isColorSwatchEl) {
        return;
    }

    const swatchEl = evt.target;
    const parentColorCard = swatchEl.closest('.color-card');

    removeActiveCardClass();

    addActiveCardClass(parentColorCard);

    setBodyBgColor(swatchEl.dataset.hex);
}

function setBodyBgColor(color) {
    document.body.style.backgroundColor = color;
}

function removeActiveCardClass() {
    const currentActiveCard = document.querySelector('.color-card.is-active'); // шукаєм чи є вже активний клас

    if (currentActiveCard) {    //дивимся чи активний елемент якщо активний то знімаємо
        currentActiveCard.classList.remove('is-active');
    }
}

function addActiveCardClass(card) {  // вішаєм клас (з анімацією) на активний елемент
    card.classList.add('is-active');
}
// parentNode - зберігає силку на родітеля
// .closest(.color-card) - вибирає найблищий елемент з таким селектором .color-card


 //====================================================
 // Шаблонізатор   ====================================

const template = SuperTemplatingEngine.compile(`<div><p>{{ email }}</p><p>{{ name }}</p></div>`); // пишим шаблон

template({ name: 'Mango', email: 'mango@dev.i' }) // кідаєм дані в шаблон
// '<div><p>mango@dev.i</p><p>Mango</p></div>'