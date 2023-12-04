const sushiList = [
  {
    id: 1,
    title: "Philadelphia Roll",
    description: "Salmon, avocado, cucumber, cream cheese, nori, rice",
    weight: "200g",
    price: 12.99,
    image: "images/sushi1.png",
  },
  {
    id: 2,
    title: "Spicy Tuna Roll",
    description: "Tuna, spicy mayo, cucumber, sriracha, nori, rice",
    weight: "180g",
    price: 14.99,
    image: "images/sushi2.png",
  },
  {
    id: 3,
    title: "Dragon Roll",
    description: "Shrimp tempura, avocado, eel, eel sauce, nori, rice",
    weight: "220g",
    price: 16.99,
    image: "images/sushi3.png",
  },
  {
    id: 4,
    title: "California Roll",
    description: "Crab meat, avocado, cucumber, tobiko, nori, rice",
    weight: "190g",
    price: 13.99,
    image: "images/sushi4.png",
  },
  {
    id: 5,
    title: "Rainbow Roll",
    description: "California roll, assorted sashimi on top",
    weight: "210g",
    price: 18.99,
    image: "images/sushi5.png",
  },
  {
    id: 6,
    title: "Tempura Roll",
    description: "Shrimp tempura, avocado, cucumber, spicy mayo, nori, rice",
    weight: "200g",
    price: 15.99,
    image: "images/sushi6.png",
  },
  {
    id: 7,
    title: "Spicy Salmon Roll",
    description: "Spicy salmon, avocado, cucumber, sriracha, nori, rice",
    weight: "180g",
    price: 14.99,
    image: "images/sushi7.png",
  },
  {
    id: 8,
    title: "Vegetarian Roll",
    description: "Avocado, cucumber, carrot, tofu, nori, rice",
    weight: "170g",
    price: 11.99,
    image: "images/sushi8.png",
  },
  {
    id: 9,
    title: "Eel Avocado Roll",
    description: "Eel, avocado, cucumber, eel sauce, nori, rice",
    weight: "200g",
    price: 16.99,
    image: "images/sushi9.png",
  },
];

export function getAllProducts() {
  return sushiList;
}
