import React from 'react';
import FoodCard from './FoodCard';
import { useState } from 'react';
import './FoodSearch.css';

const foodData = [
  { id: 1, name: 'Chicken Tikka', category: 'Starters', image: 'https://th.bing.com/th/id/OIP.hUnbzHW2uHcb2D65nbbvuQHaE9?rs=1&pid=ImgDetMain' },
  { id: 2, name: 'Paneer Butter Masala', category: 'Main Course', image: 'https://farm5.staticflickr.com/4244/34375209303_fe133a2921_o_d.png' },
  { id: 3, name: 'Gulab Jamun', category: 'Desserts', image: 'https://th.bing.com/th/id/OIP.qPrKbQZU_8L0ZQ9YEyyrxgAAAA?rs=1&pid=ImgDetMain' },
  { id: 4, name: 'Samosa', category: 'Starters', image: 'https://th.bing.com/th/id/R.5e9d914158f20abde43751bc56170aff?rik=IVjPf86fA0ExdQ&riu=http%3a%2f%2fwww.zedamagazine.com%2fwp-content%2fuploads%2f2018%2f06%2fIndian-Food-Samosa-Dish-HD-Wallpapers.jpg&ehk=CIZsxVe5CLA%2fpZXkiCdJuoTdrhucm2fgYqo%2fkXVfHls%3d&risl=&pid=ImgRaw&r=0' },
  { id: 5, name: 'Biryani', category: 'Main Course', image: 'https://assets.gqindia.com/photos/5ddcbd00836a7f0008bf48a4/master/pass/biryani-gurugram.jpg' },
  { id: 6, name: 'Rasgulla', category: 'Desserts', image: 'https://images.slurrp.com/prod/recipe_images/transcribe/dessert/Rasgulla.webp' },
];

const FoodList = ({ category }) => {
  const filteredFood = category === 'All' ? foodData : foodData.filter(food => food.category === category);

  return (
    <div className="food-list">
      {filteredFood.map(food => (
        <FoodCard key={food.id} food={food} />
      ))}
    </div>
  );
};

export default FoodList;
