// evtl im server sortieren?

const HandleData = (recipeObject) => {
  const necessaryIngredients = recipeObject.filter((object) => {
    // return (
    //   object.Grocery !== "Salz" &&
    //   object.Grocery !== "Wasser" &&
    //   object.Grocery !== "Olivenöl" &&
    //   object.Grocery !== "Öl" &&
    //   object.Grocery !== "Pfeffer"
    // );
    return !["Salz", "Wasser", "Olivenöl", "Öl", "Pfeffer"].includes(
      object.Grocery
    );
  });

  const holder = {};
  necessaryIngredients.forEach(function (object) {
    if (Object.hasOwnProperty.call(holder, object.Grocery)) {
      holder[object.Grocery] = holder[object.Grocery] + object.Quantity;
    } else {
      holder[object.Grocery] = object.Quantity;
    }
  });

  const calculatedArray = [];

  const holderUnit = {};
  necessaryIngredients.forEach(function (object) {
    if (Object.hasOwnProperty.call(holderUnit, object.Grocery)) {
      holderUnit[object.Grocery] = object.Unit;
    } else {
      holderUnit[object.Grocery] = object.Unit;
    }
  });

  for (const prop in holder && holderUnit) {
    if (Object.hasOwnProperty.call(holderUnit, prop))
      calculatedArray.push({
        Grocery: prop,
        Quantity: holder[prop],
        Unit: holderUnit[prop],
      });
  }
  return calculatedArray;
};

export { HandleData };
