// locomotive script

function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotiveAnimation();

// variables and const

let body = document.querySelector("body")
let container = document.querySelector(".container")
let cartBtn = document.querySelector(".fa-cart-shopping")
let cartItems = document.querySelector(".cart-items-count")
let sideBar = document.querySelector(".side-bar")
let listOfProducts = document.querySelector(".list-of-products")
let home = document.querySelector(".home")
let services = document.querySelector(".services")
let contact = document.querySelector(".contact")
let submenuHome = document.querySelector("#submenu-home")
let submenuServices = document.querySelector("#submenu-services")
let submenuContact = document.querySelector("#submenu-contact")
let search = document.querySelector("#searchInput")
let searchItems = document.querySelector(".searched-items")
let cartContainer = document.querySelector(".cart-container")
let addToCart = document.querySelector(".addtocart")
let TotalPrice = document.querySelector(".total-price")
let FinalAmount
let itemTotalPrice = []
let cartArr = []
let productArr = [
  { img: "img1.webp", productName: "Apple", productInfo: "lorem sds dhsd gdthg, dfgdfgdfu ferej samrrh fugrye : hgfyyehvve; fgegeu2333 kjfdh feeee hjdfehh egjguiurb vudfmbdgiasdhfmh  information of the product , copy and paste here", price: 999, quantity: 0, TotalAmount: 0 },
  { img: "img1.webp", productName: "Grapes", productInfo: "lorem sds dhsd gdthg, dfgdfgdfu ferej samrrh fugrye : hgfyyehvve; fgegeu2333 kjfdh feeee hjdfehh egjguiurb vudfmbdgiasdhfmh  information of the product , copy and paste here", price: 999, quantity: 0, TotalAmount: 0 },
  { img: "img1.webp", productName: "Pineapple", productInfo: "lorem sds dhsd gdthg, dfgdfgdfu ferej samrrh fugrye : hgfyyehvve; fgegeu2333 kjfdh feeee hjdfehh egjguiurb vudfmbdgiasdhfmh  information of the product , copy and paste here", price: 50, quantity: 0, TotalAmount: 0 },
  { img: "img1.webp", productName: "Mango", productInfo: "lorem sds dhsd gdthg, dfgdfgdfu ferej samrrh fugrye : hgfyyehvve; fgegeu2333 kjfdh feeee hjdfehh egjguiurb vudfmbdgiasdhfmh  information of the product , copy and paste here", price: 10, quantity: 0, TotalAmount: 0 },
  { img: "img1.webp", productName: "Banana", productInfo: "lorem sds dhsd gdthg, dfgdfgdfu ferej samrrh fugrye : hgfyyehvve; fgegeu2333 kjfdh feeee hjdfehh egjguiurb vudfmbdgiasdhfmh  information of the product , copy and paste here", price: 100, quantity: 0, TotalAmount: 0 },
  { img: "img1.webp", productName: "Orange", productInfo: "lorem sds dhsd gdthg, dfgdfgdfu ferej samrrh fugrye : hgfyyehvve; fgegeu2333 kjfdh feeee hjdfehh egjguiurb vudfmbdgiasdhfmh  information of the product , copy and paste here", price: 500, quantity: 0, TotalAmount: 0 },
  { img: "img1.webp", productName: "Lichi", productInfo: "lorem sds dhsd gdthg, dfgdfgdfu ferej samrrh fugrye : hgfyyehvve; fgegeu2333 kjfdh feeee hjdfehh egjguiurb vudfmbdgiasdhfmh  information of the product , copy and paste here", price: 20, quantity: 0, TotalAmount: 0 },
  { img: "img1.webp", productName: "Blackberry", productInfo: "lorem sds dhsd gdthg, dfgdfgdfu ferej samrrh fugrye : hgfyyehvve; fgegeu2333 kjfdh feeee hjdfehh egjguiurb vudfmbdgiasdhfmh  information of the product , copy and paste here", price: 99, quantity: 0, TotalAmount: 0 },

]
//script code

cartBtn.addEventListener("click", function () {
  sideBar.classList.toggle("side-bar-active")
});

cartContainer.addEventListener("click", function (elem) {
  if (elem.target.classList.contains("remove-item-btn")) {
    cartArr[elem.target.dataset.index].quantity--
    if (cartArr[elem.target.dataset.index].TotalAmount <= cartArr[elem.target.dataset.index].price) {
      itemTotalPrice.splice(cartArr[elem.target.dataset.index], 1)
    }
    cartArr[elem.target.dataset.index].TotalAmount = (cartArr[elem.target.dataset.index].quantity * cartArr[elem.target.dataset.index].price)

    if (cartArr[elem.target.dataset.index].quantity <= 0) {
      cartArr[elem.target.dataset.index].quantity = 0
      cartArr[elem.target.dataset.index].TotalAmount = 0
      cartArr.splice([elem.target.dataset.index], 1)
    }
    insertDetailsInCart()
    calculateFinalPrice()
  }
})

function cartDetails() {

  listOfProducts.addEventListener("click", function (elem) {
    if (elem.target.classList.contains("addtocart")) {

      if (!cartArr.includes(productArr[elem.target.dataset.index])) {
        cartArr.push(productArr[elem.target.dataset.index])
        productArr[elem.target.dataset.index].quantity = 1
        productArr[elem.target.dataset.index].TotalAmount = (productArr[elem.target.dataset.index].quantity * productArr[elem.target.dataset.index].price)
      } else {
        productArr[elem.target.dataset.index].quantity++
        productArr[elem.target.dataset.index].TotalAmount = (productArr[elem.target.dataset.index].quantity * productArr[elem.target.dataset.index].price)
      }

      insertDetailsInCart()
      calculateFinalPrice()

    }
  })
}
cartDetails()

function insertDetailsInCart() {
  cartItems.innerHTML = cartArr.length
  let cartElements = ""
  cartArr.forEach((elem, idx) => {
    itemTotalPrice[idx] = (elem.TotalAmount)
    cartElements += `  <div class="cart-item">
    <img src="${elem.img}" class="cart-item-img" alt="">
    <span class="item-quantity">(${elem.quantity}x)</span>
    <span class="item-name">${elem.productName}</span>
    <span class="item-price">$${elem.price}</span>
    <button class="remove-item-btn" data-index="${idx}">Remove</button>
    </div>`
  });

  cartContainer.innerHTML = cartElements
}

function calculateFinalPrice() {
  FinalAmount = itemTotalPrice.reduce(function (acc, currVal) {
    return acc + currVal
  }, 0)
  TotalPrice.textContent = FinalAmount
}

function menuLinkFeature() {
  home.addEventListener("click", function () {
    submenuHome.classList.toggle("submenu-active")
    submenuServices.classList.remove("submenu-active")
    submenuContact.classList.remove("submenu-active")
  })
  services.addEventListener("click", function () {
    submenuServices.classList.toggle("submenu-active")
    submenuHome.classList.remove("submenu-active")
    submenuContact.classList.remove("submenu-active")
  })
  contact.addEventListener("click", function () {
    submenuContact.classList.toggle("submenu-active")
    submenuServices.classList.remove("submenu-active")
    submenuHome.classList.remove("submenu-active")

  })

}
menuLinkFeature();

function productDetails() {
  let productElements = ""
  productArr.forEach((elem, idx) => {

    productElements += `    <div class="product" ><img src="${elem.img}" alt="">
                    <span class="product-name">${elem.productName}</span> 
                    <span class="product-info">${elem.productInfo}</span>
                    <span class="prices-addtocart">
                        <span class="product-price">$${elem.price}</span>
                        <button class="addtocart" data-index="${idx}">Add to Cart</button>
                    </span>
                </div>`
  });

  listOfProducts.innerHTML = productElements

}
productDetails();

function searchFeature() {

  search.addEventListener("focus", () => {
    container.style.opacity = "0.3"
    container.style.backgroundColor = "grey"
    submenuContact.classList.remove("submenu-active")
    submenuHome.classList.remove("submenu-active")
    submenuServices.classList.remove("submenu-active")
    sideBar.classList.remove("side-bar-active");
  })

  search.addEventListener("input", () => {
    let lowerCase = search.value.toLowerCase()
    let itemsSuggested = productArr.filter(function (obj) {
      if (search.value == null || search.value == " " || search.value == '') {
        searchItems.style.display = "none";
      }
      else if ((obj.productName.toLowerCase().includes(lowerCase))) {
        searchItems.style.display = "flex";
        return obj.productName.toLowerCase().includes(lowerCase)
      }
    })


    let itemCollector = ""

    itemsSuggested.forEach((elem) => {

      itemCollector += `<a href="#" class="item-recom">
            <i class="fa-solid fa-magnifying-glass"></i>
            <div class="item-recom-name">${elem.productName}</div>
        </a>`
    });

    searchItems.innerHTML = itemCollector

  })

  search.addEventListener("blur", () => {
    setTimeout(() => {

      searchItems.style.display = "none"
    }, 300);
    container.style.opacity = "1"
    container.style.backgroundColor = "white "
  })
}
searchFeature();

