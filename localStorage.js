const pizza = localStorage.getItem("pizza");

console.log(pizza);
// expected output: '🍕'

// converts the array / object back into its orginal format
const foods = JSON.parse(localStorage.getItem("foods"));
for (let i = 0; i < foods.length; i++) {
  console.log(foods[i]);
}

// expected output: '🍕','🍝','🍜','🍔'

const foods = ["🍕", "🍝", "🍜", "🍔"];

// or

const foods = {
  pizza: "🍕",
  pasta: "🍝",
  soup: "🍜",
  burger: "🍔",
};

// saving an array or an object to localStorage
localStorage.setItem("favFoods", JSON.stringify(foods));

// saving an string to localStorage
localStorage.setItem("pizza", "🍕");

// now only the key "foods is in local storage since the key pizza was deleted
localStorage.removeItem("pizza");

// now the local storage is completely empty
localStorage.clear();
