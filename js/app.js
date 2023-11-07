'use strict'

let workingNewProducts = [];
const allNewProducts =[];

const leftImg = document.querySelector('section img:first-child')
const middleImg = document.querySelector('section img:nth-child(2)')
const rightImg = document.querySelector('section img:nth-child(3)')



function NewProducts (name, src) {
    this.name = name;
    this.src = src;

}

let bag = new NewProducts('bag','./img/bag.jpg');
let banana = new NewProducts('banana','./img/banana.jpg');
let bathroom = new NewProducts('bathroom','./img/bathroom.jpg');
let boots = new NewProducts('boots','./img/boots.jpg');
let breakfast = new NewProducts('breakfast','./img/breakfast.jpg');
let bubblegum = new NewProducts('bubblegum','./img/bubblegum.jpg');
let chair = new NewProducts('chair','./img/chair.jpg');
let cthulhu = new NewProducts('cthulhu','./img/cthulhu.jpg');
let dogDuck = new NewProducts('dogDuck','./img/dog-duck.jpg');
let dragon = new NewProducts('dragon','./img/dragon.jpg');
let pen = new NewProducts('pen','./img/pen.jpg');
let petSweep = new NewProducts('petSweep','./img/pet-sweep.jpg');
let scissors = new NewProducts('scissors','./img/scissors.jpg');
let shark = new NewProducts('shark','./img/shark.jpg');
let sweep = new NewProducts('sweep','./img/sweep.png');
let tauntaun = new NewProducts('tauntaun','./img/tauntaun.jpg');
let unicorn = new NewProducts('unicorn','./img/unicorn.jpg');
let waterCan = new NewProducts('waterCan','./img/water-can.jpg');
let wineGlass = new NewProducts('wineGlass','./img/wine-glass.jpg');

allNewProducts.push(bag);
allNewProducts.push(banana);
allNewProducts.push(bathroom);
allNewProducts.push(boots);
allNewProducts.push(breakfast);
allNewProducts.push(bubblegum);
allNewProducts.push(chair);
allNewProducts.push(cthulhu);
allNewProducts.push(dogDuck);
allNewProducts.push(dragon);
allNewProducts.push(pen);
allNewProducts.push(petSweep);
allNewProducts.push(scissors);
allNewProducts.push(shark);
allNewProducts.push(sweep);
allNewProducts.push(tauntaun);
allNewProducts.push(unicorn);
allNewProducts.push(waterCan);
allNewProducts.push(wineGlass);


// shuffleArray(workingnewproducts);

// newproducts = [bag,banana,bathroom,boots,breakfast,bubblegum,chair,cthulhu,dogDuck,dragon,pen,petSweep,scissors,shark,sweep,tauntaun,unicorn,waterCan,wineGlass]


function renderNewProducts(){


    if(workingNewProducts.length <= 2){
    workingNewProducts = allNewProducts.slice();
    shuffleArray(workingNewProducts);
    }


const firstNewproduct = workingNewProducts.pop();
leftImg.setAttribute('src',firstNewproduct.src)

const secondNewproduct = workingNewProducts.pop();
middleImg.setAttribute('src',secondNewproduct.src)


const thirdNewproduct = workingNewProducts.pop();
rightImg.setAttribute('src',thirdNewproduct.src)

}



renderNewProducts();


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Generate a random index from 0 to i
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements at i and j
    }
}
function handleLeftNewProductClick(event){
    renderNewProducts();
    
}

function handleMiddleNewProductClick(event){
    renderNewProducts();
    
}

function handleRightNewProductClick(event){
    renderNewProducts();

    
}



leftImg.addEventListener('click',handleLeftNewProductClick);
middleImg.addEventListener('click',handleMiddleNewProductClick);
rightImg.addEventListener('click',handleRightNewProductClick);




  
  