const data = {
  pets: {
    Dog: {
      care: "Dogs need daily exercise, fresh water, healthy food, and love.",
      img: "Dog.jpeg"
    },
    Cat: {
      care: "Cats need clean litter boxes, fresh water, food, and playtime.",
      img: "Cat.jpeg"
    }
  },
  farm: {
    Cow: {
      care: "Cows need grass or hay, clean water, shelter, and regular care.",
      img: "cow.jpeg"
    },
    Chicken: {
      care: "Chickens need feed, clean water, and a safe coop to live in.",
      img: "Chicken.jpeg"
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

  const img = document.getElementById("animalImg");
  img.src = data[category][animal].img;
  img.alt = animal;
}
