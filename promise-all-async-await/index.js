const animals = [
  { id: 1, name: "cat" },
  { id: 2, name: "dog" },
  { id: 3, name: "ferret" },
  { id: 4, name: "snake" },
];

const getAnimals = () => {
  return new Promise((resolve, reject) => {
    return setTimeout(() => resolve(animals), 1000);
  });
};

const getAnimalName = (animal) => {
  return new Promise((resolve, reject) => {
    return setTimeout(() => resolve(animal.name), 500);
  });
};

const capitalize = (name) => {
  return new Promise((resolve, reject) => {
    return setTimeout(() => resolve(name.toUpperCase()), 1500);
  });
};

const runAsync = async () => {
  const animals = await getAnimals();
  console.log(animals);

  // Using for-of loop
  // for (const animal of animals) {
  //   const animalName = await getAnimalName(animal);
  //   console.log(animalName);

  //   const capitalizedName = await capitalize(animalName);
  //   console.log(capitalizedName);
  // }

  Promise.all(
    animals.map(async (animal) => {
      const animalName = await getAnimalName(animal);
      console.log(animalName);

      const capitalizedName = await capitalize(animalName);
      console.log(capitalizedName);
    })
  );
};

runAsync();
