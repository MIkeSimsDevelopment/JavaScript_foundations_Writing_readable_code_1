/*
  Modify each function below to continue working with the suggested syntax.
  
  When a function's parameters reference `products`, it is referring to an array of objects. Each object has the following shape:
   {
     name: "Slip Dress",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ]
   }
*/

function getProductsBySize(products, size) {
  const result = [];
  for (let i = 0; i < products.length; i++) {
    const items = products[i]
    for (let j = 0; j < items.availableSizes.length; j++) {
      if (items.availableSizes[j] === size) {
        result.push(items);
      }
    }
  }

  return result;
}

function moreThanThreeProducts(products) {
  return products.length > 3;
}

function checkForSizeByName(products, name, size) {
  if (!products) return false;
  
  
  let product = null;
  for (let i = 0; i < products.length; i++) {
    const basket = products[i]
    if (basket.name === name) {
      product = basket;
    }    
  }



  if (product) {
    return product.availableSizes.includes(size)
  } else { 
    return false;
  }
}
module.exports = {
  getProductsBySize,
  moreThanThreeProducts,
  checkForSizeByName,
};
