const container = document.querySelector(".products-container");
const forms = document.querySelector(".input-form");
const search = document.querySelector(".search-input");
const companies = document.querySelector(".companies");
const companyButton = document.querySelector(".company-btn");

// Display Products
function displayProducts(product) {
  if (product.length < 1) {
    return (container.innerHTML =
      "<h6>Sorry no products matched the search </h6>");
  }
  let display = product
    .map((items) => {
      const { image, company, title, price } = items;
      return `<article class="product">
    <img src="${image}" alt="" class="product-img img">
    <footer>
    <h5 class="product-name">${company}</h5>
    <span class="product-price">$${price}</span>
    </footer>
    </article>`;
    })
    .join("");

  container.innerHTML = display;
}

//Display Button
function displayButtons() {
  let set = ["all", ...new Set(products.map((items) => items.company))];
  companies.innerHTML = set
    .map((item) => {
      return `<button class="company-btn" data-id="${item}">${item}</button>`;
    })
    .join("");
}

//To Filter Product
function filterProducts(keyWord) {
  let searchItems = products.filter((items) => {
    if (
      items.title.toLowerCase().includes(keyWord.toLowerCase()) ||
      items.company.toLowerCase().includes(keyWord.toLowerCase())
    ) {
      return true;
    }
  });
  displayProducts(searchItems);
}

//event Listener on search
search.addEventListener("keyup", () => {
  const inputValue = search.value;
  filterProducts(inputValue);
});

//event listener on companies filter
companies.addEventListener("click", (e) => {
  let el = e.target;
  if (el.classList.contains("company-btn")) {
    if (el.dataset.id.toLowerCase() === "all") {
      return displayProducts(products);
    } else {
      return filterProducts(el.dataset.id);
    }
  }
});

displayButtons();
