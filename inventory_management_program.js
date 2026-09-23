const inventory = [];

function findProductIndex(prodName) {
  const targetOfArr = inventory.findIndex(
    (element) => element.name === prodName.toLowerCase(),
  );

  if (targetOfArr >= 0) {
    return targetOfArr;
  } else {
    return -1;
  }
}

/*const vysledok = findProductIndex("SAmple")
console.log(vysledok)*/

function addProduct(prodObj) {
  let indexOfElement = findProductIndex(prodObj.name);
  if (indexOfElement >= 0) {
    inventory[indexOfElement].quantity += prodObj.quantity;
    console.log(`${inventory[indexOfElement].name} quantity updated`);
  } else {
    inventory.push({
      name: prodObj.name.toLowerCase(),
      quantity: prodObj.quantity,
    });
    console.log(`${prodObj.name.toLowerCase()} added to inventory`);
  }
}

//addProduct({name:"flour", quantity: 5});

function removeProduct(prodName, prodQuantity) {
  let indexOfElement = findProductIndex(prodName);
  if (indexOfElement >= 0) {
    if (inventory[indexOfElement].quantity - prodQuantity > 0) {
      inventory[indexOfElement].quantity -= prodQuantity;
      console.log(
        `Remaining ${inventory[indexOfElement].name} pieces: ${inventory[indexOfElement].quantity}`,
      );
    } else if (inventory[indexOfElement].quantity - prodQuantity === 0) {
      inventory.splice(indexOfElement, 1);
    } else {
      console.log(
        `Not enough ${inventory[indexOfElement].name} available, remaining pieces: ${inventory[indexOfElement].quantity}`,
      );
    }
  } else {
    console.log(`${prodName.toLowerCase()} not found`);
  }
}

removeProduct("carrot", 5);
