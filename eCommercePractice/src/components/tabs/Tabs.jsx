import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";

const cards = [
  {
    id: 1,
    image: "https://themewagon.github.io/fruitables/img/fruite-item-1.jpg",
    title: "Oranges",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    category: "Fruits",
    price: 4.99,
  },
  {
    id: 2,
    image: "https://themewagon.github.io/fruitables/img/fruite-item-2.jpg",
    title: "Raspberries",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    category: "Vegetables",
    price: 7.99,
  },
  {
    id: 3,
    image: "https://themewagon.github.io/fruitables/img/baner-1.png",
    title: "Apple",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    category: "Fruits",
    price: 9.99,
  },
];

const MyTabs = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredCards = cards.filter((card) =>
    selectedCategory === "All" ? true : card.category === selectedCategory
  );

  return (
    <Box className="tabsContainer">
      <Box className="allTabs" sx={{ mb: 2 }}>
        <Button
          className="tab"
          onClick={() => handleCategoryClick("All")}
          variant="contained"
          sx={{ marginRight: 2 }}
        >
          All Products
        </Button>
        <Button
          className="tab"
          onClick={() => handleCategoryClick("Vegetables")}
          variant="contained"
          sx={{ marginRight: 2 }}
        >
          Vegetables
        </Button>
        <Button
          className="tab"
          onClick={() => handleCategoryClick("Fruits")}
          variant="contained"
        >
          Fruits
        </Button>
      </Box>

      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {filteredCards.map((card) => (
          <Card key={card.id} sx={{ maxWidth: 345, margin: "16px" }}>
            <CardMedia
              component="img"
              height="140"
              image={card.image}
              alt={card.title}
            />
            <CardContent>
              <Typography variant="h6">{card.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {card.body}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default MyTabs;
