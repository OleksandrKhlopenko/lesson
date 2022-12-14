const data = [
    {
      id: 1,
      name: "Invicta Men's Pro Diver",
      img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
      price: 74,
      category: "Dress",
    },
    {
      id: 11,
      name: "Invicta Men's Pro Diver 2",
      img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
      price: 74,
      category: "Dress",
    },
    {
      id: 2,
      name: "Timex Men's Expedition Scout ",
      img: "https://m.media-amazon.com/images/I/91WvnZ1g40L._AC_UY879_.jpg",
      price: 40,
      category: "Sport",
    },
    {
      id: 3,
      name: "Breitling Superocean Heritage",
      img: "https://m.media-amazon.com/images/I/61hGDiWBU8L._AC_UY879_.jpg",
      price: 200,
      category: "Luxury",
    },
    {
      id: 4,
      name: "Casio Classic Resin Strap ",
      img: "https://m.media-amazon.com/images/I/51Nk5SEBARL._AC_UY879_.jpg",
      price: 16,
      category: "Sport",
    },
    {
      id: 5,
      name: "Garmin Venu Smartwatch ",
      img: "https://m.media-amazon.com/images/I/51kyjYuOZhL._AC_SL1000_.jpg",
      price: 74,
      category: "Casual",
    },
  ];
  
  
  
  const productsWrapper = document.querySelector(".products");
  const searchInput = document.querySelector(".search");
  const  categories = document.querySelector(".categories");
  const  priceRange = document.querySelector(".priceRange");
  const  priceValue = document.querySelector(".priceValue");
  
  
  const displayProducts = (arrayOfProducts) => {
  
    const productArr = arrayOfProducts.map(product => `
  <div class="product">
    <img src="${product.img}" alt="" />
    <span class="name">${product.name}</span>
    <span class="priceText">${product.price}</span> 
  </div>
  `).join("")
  
  productsWrapper.innerHTML = productArr;
  
  }
  
  displayProducts( data)
  
  searchInput.addEventListener("keyup",(event) => {
  const value = event.target.value.toLowerCase();
  
  if(value){
  const  filterArray = data.filter( item => item.name.toLowerCase().indexOf(value) !== -1 )
  console.log(filterArray)
  }else{
    displayProducts(data);
  }
  
  })
  
  const setCategories = () => {
    const allCategories = data.map ( (product) => product.category)
    
    const filterCategory = allCategories.filter((item, index) => 
    allCategories.indexOf(item) === index );
  
  categories.innerHTML = filterCategory.map(category => `
  <span class ="category">${category}</span>
  `).join("")
  
  categories.addEventListener("click", (event) => {
    const selectCategory =event.target.textContent;
  
  if (selectCategory){
    const sortProductByCategory = data.filter( product => product.category === selectCategory)
    displayProducts(sortProductByCategory);
   } else { 
     displayProducts(data);
   }
  })}
  
  const setPrices = () => { 
    const priceList = data.map(product => product.price)
  
    const minPrice = Math.min(...priceList)
    const Maxprice = Math.max(...priceList)
  
    priceRange.min = minPrice;
    priceRange.max = Maxprice;
    priceRange.value = Maxprice;
  
    priceValue.textContent =` $ ${Maxprice}`
  
   priceRange.addEventListener("input", (event) =>{
   const value = event.target.value;
   priceValue.textContent=` $ ${value}`
  
   const filterArray = data.filter(product => product.price <= value );
   displayProducts(filterArray)
  
  })
  } 
  
  setCategories();
  setPrices();
  