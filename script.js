const data = {
  pets: {
    Dog: {
      care: "Dogs need daily exercise, fresh water, food, and love.",
      img: "https://via.placeholder.com/200?text=Dog"
    },
    Cat: {
      care: "Cats need clean litter boxes, food, water, and playtime.",
      img: "https://via.placeholder.com/200?text=Cat"
    }
  },
  farm: {
    Cow: {
      care: "Cows need grass or hay, clean water, and shelter.",
      img: "https://via.placeholder.com/200?text=Cow"
    },
    Chicken: {
      care: "Chickens need feed, water, and a safe coop.",
      img: "https://via.placeholder.com/200?text=Chicken"
    }
  }
};

function updateAnimals() {
  const category = document.getElementById("category").value;
  const animalSelect = document.getElementById("animal");
  animalSelect.innerHTML = "<option value=''>-- Select --</option>";

  if (category) {
    for (let animal in data[category]) {
      let option = document.createElement("option");
      option.value = animal;
      option.textContent = animal;
      animalSelect.appendChild(option);
    }
  }
}

function showCare() {
  const category = document.getElementById("category").value;
  const animal = document.getElementById("animal").value;

  if (!animal) return;

  document.getElementById("animalName").textContent = animal;
  document.getElementById("careText").textContent = data[category][animal].care;
  document.getElementById("animalImg").src = data[category][animal].img;
}
