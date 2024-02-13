import React from "react";

function CategoryFilter({ categories, selectedCategory, onFilterChange }) {
const handleButtonClick = (category) => {
  onFilterChange(category);
};

return (
  <div className="categories">
    {categories.map((category) => (
      <button
        key={category}
        className={category === "All" ? (category === "All" ? "selected" : "") : category === selectedCategory ? "selected" : ""}
        onClick={() => handleButtonClick(category)}
      >
        {category}
      </button>
    ))}
  </div>
);
}

export default CategoryFilter;

