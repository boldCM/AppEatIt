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
      if (index > 0) {
        Object.assign((necessaryIngredients[index].Quantity = "etwas"));
      }
    });
  }

  return necessaryIngredients;
};

export { HandleData };
