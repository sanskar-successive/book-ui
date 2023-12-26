// import React, { useState } from "react";
// import "./FilterButton.css";

// const FilterButton = () => {
//   const [showDropdown, setShowDropdown] = useState(false);

//   const toggleDropdown = () => {
//     setShowDropdown(!showDropdown);
//   };

//   const handleApplyFilters = (e) => {
//     console.log('aa rha hai');
//     e.preventDefault();

//     const form = e.target;
//     console.log((form));
//     const formData = new FormData(form);

//     console.log(new URLSearchParams(formData).toString());

//     const formJson = Object.fromEntries(formData.entries());
//     console.log(formJson);

//     setShowDropdown(false);
//   };

//   return (
//     <div className="filter-container">
//       <button className="filter-button" onClick={toggleDropdown}>
//         Filter
//       </button>
//       {/* {showDropdown && ( */}
//     <div className="filter-dropdown">
//       <form className="filter-form" method="post" onSubmit={handleApplyFilters}>
//         <div className="filter-group">
//           <label htmlFor="priceRange">
//             Price Range
//             <input type="number" id="minPrice" placeholder="Min" min={0} name="minPrice" />
//             <span className="price-separator">to</span>
//             <input type="number" id="maxPrice" placeholder="Max" max={2000} name="maxPrice" />
//           </label>
//         </div>
//         <div className="filter-group">
//           <label className="rating-label">Rating</label>
//           <div className="rating-options">
//             <label htmlFor="rating1">
//               3 and above
//               <input type="checkbox" id="rating1" name="rating1" />
//             </label>
//             <label htmlFor="rating2">
//               4 and above
//               <input type="checkbox" id="rating2" name="rating2" />
//             </label>
//           </div>
//         </div>
//         <div className="filter-group">
//           <label className="category-label">Categories</label>
//           <div className="category-options">
//             <label htmlFor="category1">
//               Category 1
//               <input type="checkbox" id="category1" name="category" />
//             </label>
//             <label htmlFor="category2">
//               Category 2
//               <input type="checkbox" id="category2" name="category" />
//             </label>
//           </div>
//         </div>
//         <div className="filter-group">
//           <label className="language-label">Languages</label>
//           <div className="language-options">
//             <label htmlFor="language1">
//               Language 1
//               <input type="checkbox" id="language1" name="language" />
//             </label>
//             <label htmlFor="language2">
//               Language 2
//               <input type="checkbox" id="language2" name="language" />
//             </label>
//           </div>
//         </div>
//         <button type="submit" className="apply-button">
//           Apply
//         </button>
//       </form>
//     </div>
//      {/* )} */}
//     </div>
//   );
// };

// export default FilterButton;

import React, { useState } from "react";
import "./FilterButton.css";

const FilterButton = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleApplyFilters = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    console.log(new URLSearchParams(formData).toString());
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);

    setShowDropdown(false);
  };

  return (
    <div className="filter-container">
      <button className="filter-button" onClick={toggleDropdown}>
        Filter
      </button>
      {showDropdown && (
        <div className="filter-dropdown">
          <form
            className="filter-form"
            method="post"
            onSubmit={handleApplyFilters}
          >
            <div className="filter-group">
              <label htmlFor="priceRange">Price Range</label>
              <div className="price-range-inputs">
                <input
                  type="number"
                  id="minPrice"
                  placeholder="Min"
                  min={0}
                  name="minPrice"
                />
                <span className="price-separator">to</span>
                <input
                  type="number"
                  id="maxPrice"
                  placeholder="Max"
                  max={2000}
                  name="maxPrice"
                />
              </div>
            </div>
            <div className="filter-group">
              <label className="rating-label">Rating</label>
              <div className="rating-options">
                <label htmlFor="rating1">
                  <input type="checkbox" id="rating1" name="rating1" />
                  3 and above
                </label>
                <label htmlFor="rating2">
                  <input type="checkbox" id="rating2" name="rating2" />
                  4 and above
                </label>
              </div>
            </div>
            <div className="filter-group">
              <label className="category-label">Categories</label>
              <div className="custom-select">
                <select multiple={true} name="categories">
                  <option>Category 1</option>
                  <option>Category 2</option>
                  <option>Category 3</option>
                  <option>Category 4</option>
                </select>
              </div>
            </div>
            <div className="filter-group">
              <label className="language-label">Languages</label>
              <div className="custom-select">
                <select multiple={true} name="languages">
                  <option>Language 1</option>
                  <option>Language 2</option>
                  <option>Language 3</option>
                  <option>Language 4</option>
                </select>
              </div>
            </div>
            <button type="submit" className="apply-button">
              Apply
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default FilterButton;
