import React from 'react';
import './AddBook.css'; // Import the corresponding CSS file

const AddBook = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    console.log(new URLSearchParams(formData).toString())
    // You can pass formData as a fetch body directly:
    // fetch('/some-api', { method: form.method, body: formData });

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  };

  return (
    <div className="add-book-container">
      <h2>Add Book</h2>

      <form className="add-book-form" method="post" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="bookTitle">Title</label>
          <input maxLength={50} type="text" id="bookTitle" name="bookTitle" />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            rows="8"
            maxLength={500}
            placeholder="Enter a brief description"
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select id="category" name="category">
            <option value="">Select a category</option>
            <option value="">Category 1</option>
            <option value="">Category 2</option>
            <option value="">Category 3</option>
            <option value="">Category 4</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="language">Language</label>
          <select id="language" name="language">
            <option value="">Select a language</option>
            <option value="">Language 1</option>
            <option value="">Language 2</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input type="number" id="price" name="price" />
        </div>

        <div className="form-group">
          <label htmlFor="rating">Rating</label>
          <input readOnly defaultValue={0} type="number" id="rating" name="rating" />
        </div>

        <div className="form-group">
          <label htmlFor="fileSize">File Size</label>
          <input readOnly type="number" id="fileSize" name="fileSize" />
        </div>

        <div className="form-group">
          <label htmlFor="pages">Page Count</label>
          <input readOnly defaultValue={0} type="number" id="pages" name="pages" />
        </div>

        <div className="form-group">
          <label htmlFor="authorName">Author</label>
          <input maxLength={50} type="text" id="authorName" name="authorName" />
        </div>

        <div className="form-group">
          <label htmlFor="aboutAuthor">About Author</label>
          <textarea
            id="aboutAuthor"
            name="aboutAuthor"
            rows="5"
            maxLength={100}
            placeholder="Tell us about the author"
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="seller">Seller</label>
          <input maxLength={50} type="text" id="seller" name="seller" />
        </div>

        <div className="form-group">
          <label htmlFor="publisher">Publisher</label>
          <input maxLength={50} type="text" id="publisher" name="publisher" />
        </div>

        <div className="form-group">
          <label htmlFor="firstPublished">First Published</label>
          <input type="date" id="firstPublished" name="firstPublished" />
        </div>

        <div className="form-group">
          <label htmlFor="verified">Verified</label>
          <input type="checkbox" id="verified" name="verified" />
        </div>

        <div className="form-group">
          <label htmlFor="coverImage">Cover Image</label>
          <input type="file" id="coverImage" name="coverImage" />
        </div>

        <button type="submit" className="add-book-button">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
