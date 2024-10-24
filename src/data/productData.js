import shoeImage from '../assets/images/shoe.png';

export const productData = {
  name: "JORDAN 4 CHARCOAL GREY",
  shortDescription: "Classic basketball sneaker",
  fullDescription: "The Air Jordan 4 (J4) is a classic basketball sneaker designed by Tinker Hatfield and first released in 1989. Known for its sleek silhouette and durable construction, it became an iconic shoe both on and off the court. .",
  price: 145.95,
  // Using the same image for all views for demonstration
  images: [shoeImage, shoeImage, shoeImage, shoeImage, shoeImage],
  features: [
    "Durable leather and nubuck upper: Offers both support and style.",
    "Mesh paneling: Enhances breathability.",
    "Heel pull tab: Makes it easy to slip on and off.",
    "Anatomical lace system.",
    "Plastic wing eyelets: Allow for customizable lacing for a snug fit."
  ]
};