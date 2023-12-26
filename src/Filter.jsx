import React from "react";

const category = [
  "fiction",
  "mystery",
  "arts",
  "science",
  "romance",
  "horror",
  "religion",
  "philosophy",
  "history",
  "poetry",
  "biography",
  "technology",
];

const language = ["english", "hindi", "sanskrit", "telugu", "bengali"];

const Filter = () => {
  return (
    <div>
      <div>
        <p>Price</p>
        <input type="number" placeholder="Min" defaultValue={50} />
        <input type="number" placeholder="Max" defaultValue={2000} />
      </div>
      <div>
        <p>Rating</p>
        <label>
          3 and above <input type="number" />
        </label>
        <label>
          4 and above <input type="number" />
        </label>
      </div>
      <div>
        <p>Category</p>
        {category.map((item) => {
          return (
            <label htmlFor={item} >
              {item} <input type="checkbox" />
            </label>
          );
        })}
      </div>
      <div>
        <p>Language</p>
        {language.map((item) => (
          <label htmlFor={item}>
            {item} <input type="checkbox" />
          </label>
        ))}
      </div>

      <label>test <input type="checkbox" /></label>
    </div>
  );
};

export default Filter;
