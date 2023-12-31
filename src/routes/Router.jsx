import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../pages/layout/Layout";
import BookList from "../pages/bookList/BookList";
import AddBook from "../pages/addBook/AddBook";
import BookDetails from "../pages/bookDetails/BookDetails";
import BulkUploadList from "../pages/bulkUpload/BulkUploadList";
import BulkErrorDetail from "../pages/bulkErrorDetail/BulkErrorDetail";
import Filter from "../components/filter/Filter";
import Sort from "../components/sort/Sort";
import Search from "../components/search/Search";
import UploadFile from "../components/uploadFile/UploadFile";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route path="/" element={<BookList />} />
        {/* <Route path="/" element={<Search />} /> */}

        <Route path="/:bookId" element={<BookDetails />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/add-book/:bookId" element={<AddBook />} />
        <Route path="/upload-file" element={<UploadFile />} />
        <Route path="/bulk-uploads" element={<BulkUploadList />} />
        <Route path="/bulk-uploads/:session_id" element={<BulkErrorDetail />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
