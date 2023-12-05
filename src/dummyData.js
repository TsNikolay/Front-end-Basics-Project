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
    description: "California roll, assorted sashimi on top, salmon",
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

const aboutData = [
  {
    blockLayoutNumber: 1,
    imgSrc: "/images/about1.jpg",
    title: "Welcome",
    content:
      "Welcome to SushiBoss - a culinary haven where artistry meets tradition, and every bite tells a story. Nestled in the heart of Kyiv, our sushi restaurant takes you on an exquisite journey through the delicate flavors and meticulous craftsmanship of Japanese cuisine.",
  },
  {
    blockLayoutNumber: 2,
    imgSrc: "/images/about2.jpg",
    title: "The art of cook",
    content:
      "Our chefs, masters of their craft, skillfully blend the finest ingredients to create a symphony of tastes that dance on your palate. From the pristine waters of the Pacific to the vibrant markets of Tokyo, each element is carefully sourced to ensure the highest quality .",
  },
  {
    blockLayoutNumber: 1,
    imgSrc: "/images/about3.jpg",
    title: "Elevating Japanese elegance",
    content:
      "The tranquil surroundings provide the perfect backdrop for savoring our extensive menu, which boasts a diverse selection of sushi and sashimi, expertly crafted rolls, and innovative fusion creations that push the boundaries of traditional Japanese fare.",
  },
  {
    blockLayoutNumber: 2,
    imgSrc: "/images/about4.jpg",
    title: "Guiding culinary journeys",
    content:
      "Dedicated to providing an inclusive culinary experience, our menu caters to both seasoned sushi enthusiasts and those venturing into the world of Japanese cuisine for the first time. Our staff is passionate about guiding you through the menu, helping you explore new flavors and find the perfect pairing from our curated selection.",
  },
  {
    blockLayoutNumber: 1,
    imgSrc: "/images/about5.jpg",
    title: "Unforgettable dining experiences",
    content:
      "Whether you're seeking a romantic evening, a family celebration, or a corporate gathering, SushiBoss is the ideal destination. Our commitment to exceptional service, coupled with the enchanting flavors of our dishes, ensures that every visit is a memorable occasion.",
  },
];

export function getAllAboutData() {
  return aboutData;
}
