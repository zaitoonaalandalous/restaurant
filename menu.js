const allButton = document.querySelector('.filter-button-all');
const breakfastButton = document.querySelector('.filter-button-breakfast');
const lunchButton = document.querySelector('.filter-button-lunch');
const dinnerButton = document.querySelector('.filter-button-dinner');
const shakesButton = document.querySelector('.filter-button-shakes');
const mainGrid = document.querySelector('.main-grid');

const breakfastEventListener = ()=>{filterByBreakfast()};
const allEventListener = ()=>{filterByAll()};
const lunchEventListener = ()=>{filterByLunch()};
const dinnerEventListener = ()=>{filterByDinner()};
const shakesEventListener = ()=>{filterByShakes()};

breakfastButton.addEventListener('click',breakfastEventListener);
allButton.addEventListener('click',allEventListener);
lunchButton.addEventListener('click',lunchEventListener);
dinnerButton.addEventListener('click',dinnerEventListener);
shakesButton.addEventListener('click',shakesEventListener);

const menuItems = [{
    name: 'Pepperoni Pizza',
    imagePath: './pizza.jpg',
    type:'breakfast',
    price: '15.99'
},
{
    name: 'Chicken Salad',
    imagePath: './salad.jpg',
    type:'dinner',
    price: '6.00'
},
{
    name: 'Double Smash Burger',
    imagePath: './hamburger.png',
    type:'breakfast',
    price: '10.99'
},
{
    name: 'Classic Lasagna',
    imagePath: './lasagna.jpg',
    type:'dinner',
    price: '5.99'
},
{
    name: 'Icecream Sundae',
    imagePath: './icecream.png',
    type:'shakes',
    price: '4.50'
}];

function updateMenu(menuItems){
    let htmlContents = '';
    menuItems.forEach((item, index)=>{
        htmlContents += `
        <div class="menu-item">
            <div class="image-container">
                <img class="item-image" src="./${item.imagePath}">
            </div>
            <div class="item-info">
                <div class="top-item-container">
                    <div class="item-name">
                        ${item.name}
                    </div>
                    <div class="item-price">
                        $${item.price}
                    </div>
                </div>
                <div class="item-linebreak"></div>
                <div class="bottom-item-container">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolore iusto eaque nulla soluta laborum voluptatibus velit quos excepturi dicta voluptate, sequi ut quibusdam necessitatibus?
                </div>
            </div>
        </div>
        `;
    });
    mainGrid.innerHTML = htmlContents;
};

function filterArrayBreakfast(menuItem){
    if(menuItem.type === 'breakfast'){
        return true;
    };
};

function filterArrayLunch(menuItem){
    if(menuItem.type === 'lunch'){
        return true;
    };
};

function filterArrayDinner(menuItem){
    if(menuItem.type === 'dinner'){
        return true;
    };
};

function filterArrayShakes(menuItem){
    if(menuItem.type === 'shakes'){
        return true;
    };
};

function filterByAll(){
    updateMenu(menuItems);
};

function filterByBreakfast(){
    const filteredArray = menuItems.filter(filterArrayBreakfast);
    updateMenu(filteredArray);
};

function filterByShakes(){
    const filteredArray = menuItems.filter(filterArrayShakes);
    updateMenu(filteredArray);
};

function filterByDinner(){
    const filteredArray = menuItems.filter(filterArrayDinner);
    updateMenu(filteredArray);
};

function filterByLunch(){
    const filteredArray = menuItems.filter(filterArrayLunch);
    updateMenu(filteredArray);
};

updateMenu(menuItems);