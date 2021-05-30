import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Pritesh",
      email: "admin@btech.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "Deepak",
      email: "user@btech.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      _id: "1",
      name: "Nike Slim Shirt",
      category: "Shirts",
      image: "/images/product-1.jpg",
      price: 120,
      brand: "Nike",
      rating: 4.5,
      countInStock: 10,
      numReviews: 10,
      description: "high quality product",
    },

    {
      _id: "2",
      name: "Nike Slim Shirt",
      category: "Shirts",
      image: "/images/product-2.jpg",
      price: 122,
      brand: "Adidas",
      countInStock: 11,
      rating: 2.5,
      numReviews: 10,
      description: "high quality product",
    },

    {
      _id: "3",
      name: "Nike Slim Shirt",
      category: "Shirts",
      image: "/images/product-1.jpg",
      price: 120,
      brand: "Nike",
      countInStock: 0,
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },

    {
      _id: "4",
      name: "Nike Slim Shirt",
      category: "Shirts",
      image: "/images/product-1.jpg",
      price: 120,
      brand: "Nike",
      countInStock: 18,
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },

    {
      _id: "5",
      name: "Nike Slim Shirt",
      category: "Shirts",
      image: "/images/product-1.jpg",
      price: 120,
      brand: "Nike",
      countInStock: 6,
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
  ],
};

export default data;
