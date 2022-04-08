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
    for (let j = 0; j < products[i].availableSizes.length; j++) {
      if (products[i].availableSizes[j] === size) {
        result.push(products[i]);
      }
    }
  }

  return result;
}

function moreThanThreeProducts(products) {
  if (products.length < 4) {
    return false;
  } else {
    return true;
  }
}

function checkForSizeByName(products, name, size) {
  let product = null;
  for (let i = 0; i < products.length; i++) {
    if (products[i].name === name) {
      product = products[i];
    }
  }

  if (product) {
    if (product.availableSizes.includes(size)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

module.exports = {
  getProductsBySize,
  moreThanThreeProducts,
  checkForSizeByName,
};
