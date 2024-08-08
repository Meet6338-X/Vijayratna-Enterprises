// dont edit anything here below
let categoryItemsSection = [
  { sectionName: "Refurbished" },
  { sectionName: "Trending" },
  { sectionName: "Latest" },
  { sectionName: "Popular" },
];
let productMinimal = document.querySelector(".product-minimal");
let productContainer = document.querySelector(".product-container");
let Refurbished = document.querySelector(".Refurbished");
let trending = document.querySelector(".Trending");
let latest = document.querySelector(".Latest");
let popular = document.querySelector(".Popular");

// add or delete products from these sections if u want and edit all the arrays inside information like img url , name , catgory , prices and mrps
// check the array and edit the information correctly
let newArr = [
  {
    img: "https://th.bing.com/th/id/OIP.xqW6e8hRc41wMnTiuCFE2gHaFj?w=244&h=183&c=7&r=0&o=5&pid=1.7",
    productName: "Canon LBP2900B (Refurbished)",
    productCategory: "printer",
    mrp: 9500,
    discount: 10,
    price: function () {
      let discountPrice = (this.mrp * this.discount) / 100;
      let Price = this.mrp - discountPrice;
      return Price;
    },
    quantity: 0,
    TotalAmount: 0,
  },
  {
    img: "https://rukminim1.flixcart.com/image/832/832/printer/y/a/g/hp-laserjet-m1005-original-imaefkqpg4q8nth4.jpeg?q=70",
    productName: "HP M1005 (Refurbished)",
    productCategory: "printer",
    mrp: 13500,
    discount: 10,
    price: function () {
      let discountPrice = (this.mrp * this.discount) / 100;
      let Price = this.mrp - discountPrice;
      return Price;
    },
    quantity: 0,
    TotalAmount: 0,
  },
  {
    img: "https://th.bing.com/th/id/OIP.cHhP5A3x24qG8sP5P_B97gHaGq?w=219&h=197&c=7&r=0&o=5&pid=1.7",
    productName: " HP M1120 (Refurbished)",
    productCategory: "printer",
    mrp: 9500,
    discount: 10,
    price: function () {
      let discountPrice = (this.mrp * this.discount) / 100;
      let Price = this.mrp - discountPrice;
      return Price;
    },
    quantity: 0,
    TotalAmount: 0,
  },
  {
    img: "https://th.bing.com/th/id/OIP.YyHl2VQTiidJW1bFFgc_JgHaFj?w=245&h=184&c=7&r=0&o=5&pid=1.7",
    productName: "HP Lazer Jet 3050 (Refurbished)",
    productCategory: "printer",
    mrp: 8500,
    discount: 20,
    price: function () {
      let discountPrice = (this.mrp * this.discount) / 100;
      let Price = this.mrp - discountPrice;
      return Price;
    },
    quantity: 0,
    TotalAmount: 0,
  },
  {
    img: "https://th.bing.com/th/id/OIP.-MXqOpfIfXtEFHdkxrCbuwAAAA?w=188&h=188&c=7&r=0&o=5&pid=1.7",
    productName: "Canon 4350 (Refurbished)",
    productCategory: "printer",
    mrp: 12000,
    discount: 10,
    price: function () {
      let discountPrice = (this.mrp * this.discount) / 100;
      let Price = this.mrp - discountPrice;
      return Price;
    },
    quantity: 0,
    TotalAmount: 0,
  },
  {
    img: "https://th.bing.com/th/id/OIP.i_P5VB9D1DeQQn7ltICd-wHaGd?w=188&h=180&c=7&r=0&o=5&pid=1.7",
    productName: "canon 4412 (Refurbished)",
    productCategory: "printer",
    mrp: 12500,
    discount: 12,
    price: function () {
      let discountPrice = (this.mrp * this.discount) / 100;
      let Price = this.mrp - discountPrice;
      return Price;
    },
    quantity: 0,
    TotalAmount: 0,
  },
];
console.log(newArr[0].price());
let trendingArr = [
  {
    img: "https://th.bing.com/th/id/OIP.47_WaNNM2uY_GXt59ke2jwHaHa?w=163&h=180&c=7&r=0&o=5&pid=1.7",
    productName: "Epson l3110 (Refurbished)",
    productCategory: "printer",
    mrp: 6500,
    discount: 5,
    price: function () {
      let discountPrice = (this.mrp * this.discount) / 100;
      let Price = this.mrp - discountPrice;
      return Price;
    },
    quantity: 0,
    TotalAmount: 0,
  },
  {
    img: "https://th.bing.com/th/id/OIP.524Ol9gu8wKLwGWssLMvQgHaGg?w=204&h=180&c=7&r=0&o=5&pid=1.7",
    productName: "Epson l220 (Refurbished)",
    productCategory: "printer",
    mrp: 6000,
    discount: 12,
    price: function () {
      let discountPrice = (this.mrp * this.discount) / 100;
      let Price = this.mrp - discountPrice;
      return Price;
    },
    quantity: 0,
    TotalAmount: 0,
  },
  {
    img: "https://th.bing.com/th/id/OIP.KA1Rt1UIkNd847LlufHUtwAAAA?w=319&h=148&c=7&r=0&o=5&pid=1.7",
    productName: "HP 319 (Refurbished)",
    productCategory: "printer",
    mrp: 6000,
    discount: 10,
    price: function () {
      let discountPrice = (this.mrp * this.discount) / 100;
      let Price = this.mrp - discountPrice;
      return Price;
    },
    quantity: 0,
    TotalAmount: 0,
  },
  {
    img: "https://th.bing.com/th/id/OIP.ehsv0c2uYdIfW7yay_c30wHaFj?w=267&h=200&c=7&r=0&o=5&pid=1.7",
    productName: "HP LJ1010 (Refurbished)",
    productCategory: "printer",
    mrp: 7500,
    discount: 20,
    price: function () {
      let discountPrice = (this.mrp * this.discount) / 100;
      let Price = this.mrp - discountPrice;
      return Price;
    },
    quantity: 0,
    TotalAmount: 0,
  },
  {
    img: "https://th.bing.com/th/id/OIP.hDvFSkS2Hs4vBoJQiolG2wHaFS?w=231&h=180&c=7&r=0&o=5&pid=1.7",
    productName: "HP LJ 1015 (Refurbished)",
    productCategory: "printer",
    mrp: 7500,
    discount: 15,
    price: function () {
      let discountPrice = (this.mrp * this.discount) / 100;
      let Price = this.mrp - discountPrice;
      return Price;
    },
    quantity: 0,
    TotalAmount: 0,
  },
  {
    img: "https://th.bing.com/th/id/OIP.Y2BA4Z3_cV9eZMbPXiXnJAHaEL?w=296&h=180&c=7&r=0&o=5&pid=1.7",
    productName: "Dot matrix Epson lx310 (Refurbished)",
    productCategory: "printer",
    mrp: 5000,
    discount: 10,
    price: function () {
      let discountPrice = (this.mrp * this.discount) / 100;
      let Price = this.mrp - discountPrice;
      return Price;
    },
    quantity: 0,
    TotalAmount: 0,
  },
];
let popularArr = [
  {
    img: "https://th.bing.com/th/id/OIP.wnuZte1r5S3uNdjuLJBLTQHaEK?w=301&h=180&c=7&r=0&o=5&pid=1.7",
    productName: "Dot matrix Epson fx2175 (Refurbished)",
    productCategory: "printer",
    mrp: 7500,
    discount: 15,
    price: function () {
      let discountPrice = (this.mrp * this.discount) / 100;
      let Price = this.mrp - discountPrice;
      return Price;
    },
    quantity: 0,
    TotalAmount: 0,
  },
  {
    img: "https://th.bing.com/th/id/OIP.gNbmvWdsdGBpVWFvwxBzeQHaE8?w=242&h=180&c=7&r=0&o=5&pid=1.7",
    productName: "Dot matrix Epson lq2090 (Refurbished)",
    productCategory: "printer",
    mrp: 8500,
    discount: 10,
    price: function () {
      let discountPrice = (this.mrp * this.discount) / 100;
      let Price = this.mrp - discountPrice;
      return Price;
    },
    quantity: 0,
    TotalAmount: 0,
  },
  {
    img: "https://th.bing.com/th/id/OIP.CPdbLquvarPlHWYDHEU53gHaHa?w=172&h=180&c=7&r=0&o=5&pid=1.7",
    productName: "Dot matrix Epson lx300+ii (Refurbished)",
    productCategory: "printer",
    mrp: 5000,
    discount: 15,
    price: function () {
      let discountPrice = (this.mrp * this.discount) / 100;
      let Price = this.mrp - discountPrice;
      return Price;
    },
    quantity: 0,
    TotalAmount: 0,
  },
  {
    img: "https://th.bing.com/th/id/OIP.TZcrBuX2ydS8qzimIaUybAHaEe?w=304&h=184&c=7&r=0&o=5&pid=1.7",
    productName: "Dot matrix Epson lq310 (Refurbished)",
    productCategory: "printer",
    mrp: 6000,
    discount: 15,
    price: function () {
      let discountPrice = (this.mrp * this.discount) / 100;
      let Price = this.mrp - discountPrice;
      return Price;
    },
    quantity: 0,
    TotalAmount: 0,
  },
  {
    img: "https://th.bing.com/th/id/OIP.aAOgUxyaOkA3dnat1yt0kgHaGd?w=215&h=188&c=7&r=0&o=5&pid=1.7",
    productName: "laser printers phaser 3117",
    productCategory: "printer",
    mrp: 5000,
    discount: 20,
    price: function () {
      let discountPrice = (this.mrp * this.discount) / 100;
      let Price = this.mrp - discountPrice;
      return Price;
    },
    quantity: 0,
    TotalAmount: 0,
  },
  {
    img: "https://th.bing.com/th/id/OIP.qOsubMYmEraDMa41GkdbRAHaHa?w=193&h=193&c=7&r=0&o=5&pid=1.7",
    productName: "Epson l3210 (New)",
    productCategory: "printer",
    mrp: 14000,
    discount: 15,
    price: function () {
      let discountPrice = (this.mrp * this.discount) / 100;
      let Price = this.mrp - discountPrice;
      return Price;
    },
    quantity: 0,
    TotalAmount: 0,
  },
];
let latestArr = [
  {
    img: "https://th.bing.com/th/id/OIP.JJbP2bM1LX58D2Li1UmiygHaGy?w=210&h=192&c=7&r=0&o=5&pid=1.7",
    productName: "Epson l3250 (New)",
    productCategory: "printer",
    mrp: 16000, // Adjusted to give a 10% discount
    discount: 10,
    price: function () {
      let discountPrice = (this.mrp * this.discount) / 100;
      let Price = this.mrp - discountPrice;
      return Price;
    },
    quantity: 0,
    TotalAmount: 0,
  },
  {
    img: "https://th.bing.com/th/id/OIP.GxCA3naJ6GQF6TNh3eZamgHaHa?w=186&h=186&c=7&r=0&o=5&pid=1.7",
    productName: "Epson l3260 (New)",
    productCategory: "printer",
    mrp: 19500, // Adjusted to give a 12% discount
    discount: 12,
    price: function () {
      let discountPrice = (this.mrp * this.discount) / 100;
      let Price = this.mrp - discountPrice;
      return Price;
    },
    quantity: 0,
    TotalAmount: 0,
  },
  {
    img: "https://th.bing.com/th/id/OIP.ulJHDz0F6RtjOXLjDbKr8wHaFg?w=230&h=180&c=7&r=0&o=5&pid=1.7",
    productName: "Epson l130 (New)",
    productCategory: "printer",
    mrp: 10550, // Adjusted to give a 10% discount
    discount: 10,
    price: function () {
      let discountPrice = (this.mrp * this.discount) / 100;
      let Price = this.mrp - discountPrice;
      return Price;
    },
    quantity: 0,
    TotalAmount: 0,
  },
  {
    img: "https://th.bing.com/th/id/OIP.gcDgziy_PpUGKLsay4zAJgHaHa?w=175&h=180&c=7&r=0&o=5&pid=1.7",
    productName: "Canon gm 2070(New)",
    productCategory: "printer",
    mrp: 12500, // Adjusted to give a 12% discount
    discount: 12,
    price: function () {
      let discountPrice = (this.mrp * this.discount) / 100;
      let Price = this.mrp - discountPrice;
      return Price;
    },
    quantity: 0,
    TotalAmount: 0,
  },
  {
    img: "https://th.bing.com/th/id/OIP.XZMAS9p-gvmxTLEybLIAbQAAAA?w=199&h=199&c=7&r=0&o=5&pid=1.7",
    productName: "HP LJ 1007",
    productCategory: "printer",
    mrp: 111.11, // Adjusted to give a 10% discount
    discount: 10,
    price: function () {
      let discountPrice = (this.mrp * this.discount) / 100;
      let Price = this.mrp - discountPrice;
      return Price;
    },
    quantity: 0,
    TotalAmount: 0,
  },
  {
    img: "https://th.bing.com/th/id/OIP.qOsubMYmEraDMa41GkdbRAHaHa?w=193&h=193&c=7&r=0&o=5&pid=1.7",
    productName: "Recco lazer Printer All in one (Refurbished)",
    productCategory: "printer",
    mrp: 4000, // This remains the same as the discount was already 20%
    discount: 20,
    price: function () {
      let discountPrice = (this.mrp * this.discount) / 100;
      let Price = this.mrp - discountPrice;
      return Price;
    },
    quantity: 0,
    TotalAmount: 0,
  },
];

function productShowcase() {
  let showcase = "";
  categoryItemsSection.forEach((elem, idx) => {
    showcase += `    <div class="product-showcase ${elem.sectionName} ">
                <h2 class="title">${elem.sectionName}</h2>
                <div class="showcase-wrapper has-scrollbar">
                  <div class="showcase-container">
                  </div>
                  
                </div>
              </div>`;
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
                        
                        <a href="#" class="showcase-category">${
                          elem.productCategory
                        }</a>
                        
                        <div class="price-box">
                        <div>
                        <p>-${elem.discount}%</p>
                          <p class="price">&#8377; ${elem.price()}</p>
                          </div>
                          <del>M.R.P:&#8377; ${elem.mrp}</del>
                        </div>
                        <div class="btn-con">
                        <a href="#" class="addBtn"><button >Add</button></a>
                        <a href="https://wa.me/+919422086354?text=${
                          elem.productName
                        }" class="infoBtn"><button >Info</button></a>
                        </div>
                      </div>
                    </div>`;
  });
  let newShowcaseCont = await document.querySelectorAll(
    ".Refurbished>.showcase-wrapper>.showcase-container"
  );
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

                        <a href="#" class="showcase-category">${
                          elem.productCategory
                        }</a>

                        <div class="price-box">
                        <div>
                        <p>-${elem.discount}%</p>
                          <p class="price">&#8377; ${elem.price()}</p>
                          </div>
                          <del>M.R.P:&#8377; ${elem.mrp}</del>
                        </div>
                        <div class="btn-con">
                        <a href="#" class="addBtn"><button >Add</button></a>
                        <a href="https://wa.me/+919422086354?text=${
                          elem.productName
                        }" class="infoBtn"><button >Info</button></a>
                        </div>
                      </div>
                      </div>
                    </div>`;
  });
  let trendingCont = await document.querySelectorAll(
    ".Trending>.showcase-wrapper>.showcase-container"
  );
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

                        <a href="#" class="showcase-category">${
                          elem.productCategory
                        }</a>

                        <div class="price-box">
                        <div>
                        <p>-${elem.discount}%</p>
                          <p class="price">&#8377; ${elem.price()}</p>
                          </div>
                          <del>M.R.P:&#8377; ${elem.mrp}</del>
                        </div>
                        <div class="btn-con">
                        <a href="#" class="addBtn"><button >Add</button></a>
                        <a href="https://wa.me/+919422086354?text=${
                          elem.productName
                        }" class="infoBtn"><button >Info</button></a>
                        </div>
                      </div>
                      </div>
                    </div>`;
  });
  let popularCont = await document.querySelectorAll(
    ".Popular>.showcase-wrapper>.showcase-container"
  );
  popularCont.forEach((container) => {
    container.innerHTML = products;
  });
  products = "";
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

                        <a href="#" class="showcase-category">${
                          elem.productCategory
                        }</a>

                        <div class="price-box">
                        <div>
                        <p>-${elem.discount}%</p>
                          <p class="price">&#8377; ${elem.price()}</p>
                          </div>
                          <del>M.R.P:&#8377; ${elem.mrp}</del>
                        </div>
                        <div class="btn-con">
                        <a href="#" class="addBtn"><button >Add</button></a>
                        <a href="https://wa.me/+919422086354?text=${
                          elem.productName
                        }" class="infoBtn"><button >Info</button></a>
                        </div>
                      </div>
                      </div>
                    </div>`;
  });

  let latestCon = await document.querySelectorAll(
    ".Latest>.showcase-wrapper>.showcase-container"
  );
  latestCon.forEach((container) => {
    container.innerHTML = products;
  });
}
showcaseItems();
