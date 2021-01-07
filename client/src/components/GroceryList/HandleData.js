const HandleData = (recipeObject) => {
  const necessaryIngredients = recipeObject.filter((object) => {
    return !["Salz", "Wasser", "Olivenöl", "Öl", "Pfeffer", "Zucker"].includes(
      object.Grocery
    );
  });

  if (necessaryIngredients.length > 0) {
    necessaryIngredients.forEach(() => {
      const index = necessaryIngredients.findIndex((item) => {
        return item.Quantity === 0;
      });
      console.log(index);
      if (index > 0) {
        const newObject = Object.assign(
          (necessaryIngredients[index].Quantity = "etwas")
        );
        console.log(newObject);
      }
    });
  }

  // const holder = {};
  // necessaryIngredients.forEach((object) => {
  //   if (Object.hasOwnProperty.call(holder, object.Grocery)) {
  //     holder[object.Grocery] = holder[object.Grocery] + object.Quantity;
  //   } else {
  //     holder[object.Grocery] = object.Quantity;
  //   }
  // });

  // const calculatedArray = [];

  // const holderUnit = {};
  // necessaryIngredients.forEach((object) => {
  //   if (Object.hasOwnProperty.call(holderUnit, object.Grocery)) {
  //     holderUnit[object.Grocery] = object.Unit;
  //   } else {
  //     holderUnit[object.Grocery] = object.Unit;
  //   }
  // });

  // for (const prop in holder && holderUnit) {
  //   if (Object.hasOwnProperty.call(holderUnit, prop))
  //     calculatedArray.push({
  //       Grocery: prop,
  //       Quantity: holder[prop],
  //       Unit: holderUnit[prop],
  //     });
  // }
  // return calculatedArray;
  return necessaryIngredients;
};

export { HandleData };
