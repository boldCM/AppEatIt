// connect to database:

export async function connectDB() {
  const response = await fetch("http://localhost:5000/recipes");
  const recipeList = await response.json();
  console.log("connected to database");
  console.log(recipeList + " du da");
  return recipeList;
}
