// dont edit anything here below
let categoryItemsSection = [
    {sectionName: "New"},{sectionName: "Trending"},{sectionName: "Latest"},{sectionName: "Popular"}
    ]
let productMinimal = document.querySelector(".product-minimal");
let productContainer = document.querySelector(".product-container");
let New = document.querySelector(".New");
let trending = document.querySelector(".Trending");
let latest = document.querySelector(".Latest");
let popular = document.querySelector(".Popular");


// add or delete products from these sections if u want and edit all the arrays inside information like img url , name , catgory , prices and discounts
// check the array and edit the information correctly
let newArr = [
    { img: "img1.webp", productName: "Apple", productCategory: "printer", discount: 10, price: 999, quantity: 0, TotalAmount: 0 },
    { img: "img1.webp", productName: "Grapes", productCategory: "printer", discount: 10, price: 999, quantity: 0, TotalAmount: 0 },
    { img: "img1.webp", productName: "Apple", productCategory: "printer", discount: 10, price: 999, quantity: 0, TotalAmount: 0 },
    { img: "img1.webp", productName: "Grapes", productCategory: "printer", discount: 10, price: 999, quantity: 0, TotalAmount: 0 },
   ]

let trendingArr = [
    { img: "img1.webp", productName: "a", productCategory: "printer", discount: 10, price: 999, quantity: 0, TotalAmount: 0 },
    { img: "img1.webp", productName: "b", productCategory: "printer", discount: 10, price: 999, quantity: 0, TotalAmount: 0 },
    { img: "img1.webp", productName: "c", productCategory: "printer", discount: 10, price: 50, quantity: 0, TotalAmount: 0 },
    { img: "img1.webp", productName: "d", productCategory: "printer", discount: 10, price: 10, quantity: 0, TotalAmount: 0 }
]
let popularArr = [
    { img: "img1.webp", productName: "q", productCategory: "printer", discount: 10, price: 999, quantity: 0, TotalAmount: 0 },
    { img: "img1.webp", productName: "r", productCategory: "printer", discount: 10, price: 999, quantity: 0, TotalAmount: 0 },
    { img: "img1.webp", productName: "y", productCategory: "printer", discount: 10, price: 50, quantity: 0, TotalAmount: 0 },
    { img: "img1.webp", productName: "d", productCategory: "printer", discount: 10, price: 10, quantity: 0, TotalAmount: 0 }
]
let latestArr = [
    { img: "img1.webp", productName: "h", productCategory: "printer", discount: 10, price: 999, quantity: 0, TotalAmount: 0 },
    { img: "img1.webp", productName: "w", productCategory: "printer", discount: 10, price: 999, quantity: 0, TotalAmount: 0 },
    { img: "img1.webp", productName: "e", productCategory: "printer", discount: 10, price: 50, quantity: 0, TotalAmount: 0 },
    { img: "img1.webp", productName: "q", productCategory: "printer", discount: 10, price: 10, quantity: 0, TotalAmount: 0 }
]


function productShowcase() {
    let showcase = "";
    categoryItemsSection.forEach((elem, idx) => {
        showcase += `    <div class="product-showcase ${elem.sectionName} ">
                <h2 class="title">${elem.sectionName}</h2>
                <div class="showcase-wrapper has-scrollbar">
                  <div class="showcase-container">
                  </div>
                  
                </div>
              </div>`
    });
    productMinimal.innerHTML = showcase;
}
productShowcase();

async function showcaseItems() {
    let products = "";
    newArr.forEach((elem, idx) => {
        products += `<div class="showcase">
                      <a href="#" class="showcase-img-box">
                        <img
                          src="${elem.img}"
                          alt="relaxed short full sleeve t-shirt"
                          width="70"
                          class="showcase-img"
                        />
                      </a>

                      <div class="showcase-content">
                        <a href="#">
                          <h4 class="showcase-title">
                           ${elem.productName}
                          </h4>
                        </a>

                        <a href="#" class="showcase-category">${elem.productCategory}</a>

                        <div class="price-box">
                          <p class="price">$${elem.price}</p>
                          <del>$${elem.discount}</del>
                        </div>
                      </div>
                    </div>`
    });
    let newShowcaseCont = await document.querySelectorAll(".New>.showcase-wrapper>.showcase-container");
    newShowcaseCont.forEach((container) => {
        container.innerHTML = products;

    });
     products = "";
    trendingArr.forEach((elem, idx) => {
        products += `<div class="showcase">
                      <a href="#" class="showcase-img-box">
                        <img
                          src="${elem.img}"
                          alt="relaxed short full sleeve t-shirt"
                          width="70"
                          class="showcase-img"
                        />
                      </a>

                      <div class="showcase-content">
                        <a href="#">
                          <h4 class="showcase-title">
                           ${elem.productName}
                          </h4>
                        </a>

                        <a href="#" class="showcase-category">${elem.productCategory}</a>

                        <div class="price-box">
                          <p class="price">$${elem.price}</p>
                          <del>$${elem.discount}</del>
                        </div>
                      </div>
                    </div>`
    });
    let trendingCont = await document.querySelectorAll(".Trending>.showcase-wrapper>.showcase-container");
    trendingCont.forEach((container) => {
        container.innerHTML = products;
    });
    products = "";
    popularArr.forEach((elem, idx) => {
        products += `<div class="showcase">
                      <a href="#" class="showcase-img-box">
                        <img
                          src="${elem.img}"
                          alt="relaxed short full sleeve t-shirt"
                          width="70"
                          class="showcase-img"
                        />
                      </a>

                      <div class="showcase-content">
                        <a href="#">
                          <h4 class="showcase-title">
                           ${elem.productName}
                          </h4>
                        </a>

                        <a href="#" class="showcase-category">${elem.productCategory}</a>

                        <div class="price-box">
                          <p class="price">$${elem.price}</p>
                          <del>$${elem.discount}</del>
                        </div>
                      </div>
                    </div>`
    });
    let popularCont = await document.querySelectorAll(".Popular>.showcase-wrapper>.showcase-container");
    popularCont.forEach((container) => {
        container.innerHTML = products;
    });
    products =""
    latestArr.forEach((elem, idx) => {
        products += `<div class="showcase">
                      <a href="#" class="showcase-img-box">
                        <img
                          src="${elem.img}"
                          alt="relaxed short full sleeve t-shirt"
                          width="70"
                          class="showcase-img"
                        />
                      </a>

                      <div class="showcase-content">
                        <a href="#">
                          <h4 class="showcase-title">
                           ${elem.productName}
                          </h4>
                        </a>

                        <a href="#" class="showcase-category">${elem.productCategory}</a>

                        <div class="price-box">
                          <p class="price">$${elem.price}</p>
                          <del>$${elem.discount}</del>
                        </div>
                      </div>
                    </div>`
    });

    let latestCon = await document.querySelectorAll(".Latest>.showcase-wrapper>.showcase-container");
    latestCon.forEach((container) => {
        container.innerHTML = products;
    });
   
   
}
showcaseItems();


