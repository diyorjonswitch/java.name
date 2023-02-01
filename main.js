const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./images/authentic-db-UC575-preview.jpg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      
      title: "dinner double",
      category: "lunch",
      price: 13.99,
      img: "./images/authentic-spi-QC20200209-preview.jpg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./images/authentic-spi-BH20200209-preview.jpg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./images/authentic-db-UC575-preview.jpg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./images/authentic-spi-QC20200209-preview.jpg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./images/authentic-spi-BH20200209-preview.jpg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./images/authentic-db-UC575-preview.jpg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./images/authentic-spi-QC20200209-preview.jpg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./images/authentic-spi-BH20200209-preview.jpg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "bison steak",
      category: "shakes",
      price: 22.99,
      img: "./images/authentic-spi-BH20200209-preview.jpg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];

  const sectionCenter = document.querySelector(".section-box");

  window.addEventListener("DOMContentLoaded", function () {
    let OurMenu = menu.map(function (item) {
      
     
        return `<div class="menu-item">
            <img src=${item.img} alt=${item.id} class="photo" />
            <div class="item-info">
            <header>
            <h4>${item.title}</h4>
            <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
            ${item.desc}
            </p>
            </div>
          </div>
      `
  
      
    });



    OurMenu = OurMenu.join("");
    console.log(OurMenu);


  
    sectionCenter.innerHTML = OurMenu;
  });
  


// button

  const lunch = document.getElementById('lunch');
  const box = document.querySelector('.box');

  lunch.addEventListener('click', function(){
    for(let i = 0; i < menu.length; i++){
        if(menu[i].category === 'lunch'){
            box.innerHTML += menu[i].title
        }
    }
});


// const boxes = document.querySelector(".box");

// window.addEventListener("DOMContentLoaded", function(){
//   let cate = menu.map(function(items){
//     if(menu[items].category === input.value){
//       return `<div class="menu-item1">
//       <img src="${items.img}" alt="${items.id}" class="photo1" />
//       <div class="item-info1">
//         <header>
//           <h4>${items.title}</h4>
//           <h4 class="price1">$${items.price}</h4>
//         </header>
//         <p class="item-text1">
//           ${items.desc}
//         </p>
//       </div>
//     </div>`
//     }
//   })
  
//   cate = cate.join("");
//   console.log(cate);

//   boxes.innerHTML = cate;
// })







// input

const input = document.getElementById('value');
const btn1 = document.getElementById('btn');

btn1.addEventListener('click', function(){
    for(let i = 0; i < menu.length; i++){
        if(menu[i].category === input.value){
          box.innerHTML  += `
          <img src=${menu[i].img} />
          <p>${menu[i].title}</p>
          <p>${menu[i].price}</p>
          <p>${menu[i].desc}</p>
          `  
        }
    }
});

// select.

const food = document.getElementById('food');

food.addEventListener('change', function () {
    for(let i = 0; i < menu.length; i++){
        if(menu[i].category === food.value) {
          box.innerHTML += `
          <img src=${menu[i].img} />
          <p>${menu[i].title}</p>
          <p>$${menu[i].price}</p>
          <p>${menu[i].desc}</p>
          ` 
        }
    }
});

