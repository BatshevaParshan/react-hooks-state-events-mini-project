import React, { useState } from "react";

function CategoryFilter({ categories, onFilterChange }) {
const [selectedCategory, setSelectedCategory] = useState("All");

const handleCategoryClick = (category) => {
  setSelectedCategory(category);
  onFilterChange(category);
};

return (
  <div className="category-filter">
    <button
      className={selectedCategory === "All" ? "selected" : ""}
      onClick={() => handleCategoryClick("All")}
    >
      All
    </button>
    {categories.map((category) => (
      <button
        key={category}
        className={selectedCategory === category ? "selected" : ""}
        onClick={() => handleCategoryClick(category)}
      >
        {category}
      </button>
    ))}
  </div>
);
}

export default CategoryFilter;
