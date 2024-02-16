import React, { useState } from "react";

function CategoryFilter({categories, onCategoryChange}) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
      <button
        key={category}
        className={selectedCategory === category ? "selected" : ""}
        onClick={() => {
          setSelectedCategory(category);
          onCategoryChange(category);
        }}
        >
        {category}
        </button>

      ))}
    </div>
  );
}

export default CategoryFilter;