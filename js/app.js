'use strict'

let workingNewProducts = [];
const allNewProducts =[];
let firstNewproduct = null;
let secondNewproduct = null;
let thirdNewproduct = null;
let totalClicks=0;
const maxClicks = 25;

const leftImg = document.querySelector('section img:first-child');
const middleImg = document.querySelector('section img:nth-child(2)');
const rightImg = document.querySelector('section img:nth-child(3)');
const viewResults=document.querySelector('div');
const ulElem = document.querySelector('ul');
const showResultButton = document.getElementById('viewResultsBtn');
const recentlyShownProducts = [];
const productsStorageKey = 'productstorage-key';


function NewProducts (name, src, views = 0, clicks = 0) {
    this.name = name;
    this.src = src;
    this.views = views;
    this.clicks = clicks;
    allNewProducts.push(this)
}


function initProduct() {

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
console.log('init ')
 
}


// shuffleArray(workingnewproducts);

// newproducts = [bag,banana,bathroom,boots,breakfast,bubblegum,chair,cthulhu,dogDuck,dragon,pen,petSweep,scissors,shark,sweep,tauntaun,unicorn,waterCan,wineGlass]


function renderNewProducts(){
console.log('totalClicks ',totalClicks);
    if(totalClicks == maxClicks){
        
        showResultButton.removeAttribute('hidden');
        viewResults.addEventListener('click', handleViewResultsClick);

        // also, disable the left and right imgs
        leftImg.removeEventListener('click', handleLeftNewProductClick);
        middleImg.removeEventListener('click',handleMiddleNewProductClick);
        rightImg.removeEventListener('click', handleRightNewProductClick);

        saveVotes ();
    }

    
    if(workingNewProducts.length <= 2){
    workingNewProducts = allNewProducts.slice();
    console.log('baseArray ' , allNewProducts)
    console.log('sliceArray ', workingNewProducts);
    shuffleArray(workingNewProducts);
    }


firstNewproduct = workingNewProducts.pop();
console.log(firstNewproduct);
console.log(workingNewProducts);
leftImg.setAttribute('src',firstNewproduct.src)

secondNewproduct = workingNewProducts.pop();
middleImg.setAttribute('src',secondNewproduct.src)


thirdNewproduct = workingNewProducts.pop();
rightImg.setAttribute('src',thirdNewproduct.src)

    firstNewproduct.views += 1;
    secondNewproduct.views += 1;
    thirdNewproduct.views += 1;

// console.log('base after render' , allNewProducts);



}



function saveVotes(){
  let key = productsStorageKey
  let value = JSON.stringify(allNewProducts);
  // console.log(key,value);
  // console.log(allNewProducts);
localStorage.setItem(key,value );

}

function alwaysNewproducts () {



}





// Fisher Yates via  Chat GPT
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Generate a random index from 0 to i
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements at i and j
  
    }
    // console.log('post shuffle',allNewProducts);
}
function handleLeftNewProductClick(event){
    firstNewproduct.clicks += 1;
   
    totalClicks += 1;
    renderNewProducts();
}

function handleMiddleNewProductClick(event){
    secondNewproduct.clicks += 1;
    
    totalClicks += 1;
    renderNewProducts();
}

function handleRightNewProductClick(event){
    thirdNewproduct.clicks += 1;
    
    totalClicks += 1;
    renderNewProducts();
}

function handleViewResultsClick() {
     renderResults();
}





leftImg.addEventListener('click',handleLeftNewProductClick);
middleImg.addEventListener('click',handleMiddleNewProductClick);
rightImg.addEventListener('click',handleRightNewProductClick);

showResultButton.addEventListener('click', handleViewResultsClick)

function renderResults(){
    for( let i = 0 ; i < allNewProducts.length; i++){
        const currentNewProduct = allNewProducts[i];
        const result = `${currentNewProduct.name}` + '-' + `${currentNewProduct.views}` + ':' + `${currentNewProduct.clicks}`;
       
        const liElem = document.createElement('li');
        ulElem.appendChild(liElem);
        liElem.textContent = result;
    }
}

function handleViewResultsClick() {
    renderChart();
  }

function renderChart() {
    let productNames = [];
    let productLikes = [];
    let productViews = [];
  
    for (let i = 0; i < allNewProducts.length; i++) {
      productNames.push(allNewProducts[i].name);
      productLikes.push(allNewProducts[i].clicks);
      productViews.push(allNewProducts[i].views);
    }
  
    /* refer to Chart.js > Chart Types > Bar Chart:
    https://www.chartjs.org/docs/latest/charts/bar.html
    and refer to Chart.js > Getting Started > Getting Started:
    https://www.chartjs.org/docs/latest/getting-started/ */
    const data = {
      labels: productNames,
      datasets: [{
        label: 'Likes',
        data: productLikes,
        backgroundColor: [
          'rgba(240, 172, 0, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)'
        ],
        borderWidth: 1
      },
      {
        label: 'Views',
        data: productViews,
        backgroundColor: [
          'rgba(50, 97, 35, 0.2)'
        ],
        borderColor: [
          'rgb(255, 159, 64)'
        ],
        borderWidth: 1
      }]
    };
  
    const config = {
      type: 'bar',
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      },
    };
    let canvasChart = document.getElementById('myChart');
    const myChart = new Chart(canvasChart, config);

}

// loadProducts();



function loadProducts() {
console.log('load')
  const storedProductsText =localStorage.getItem(productsStorageKey)
  // console.log(productsStorageKey);

  if(storedProductsText) {
   parseStoredProducts(storedProductsText);
    }else {
      initProduct();
    }
}
 

function parseStoredProducts(storedProductsText){ 
// allNewProducts.length = 0; 
  const storedProductObjects = JSON.parse(storedProductsText);
// console.log(storedProductObjects)
  storedProductObjects.forEach( (productObject) => {

  const currentNewProduct = new NewProducts(productObject.name,productObject.src,productObject.views, productObject.clicks );
  // allNewProducts.push(currentNewProduct);
  
  });

}

function start(){


loadProducts();
renderNewProducts();


}

start();