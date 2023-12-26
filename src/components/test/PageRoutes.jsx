import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookList from "./BookList";
import AddBookForm from "./AddBookForm";
import UploadButton from "./UploadButton";
import BookDetailsPage from "./BookDetailsPage";
import PageLayout from "./PageLayout";
import { ContentContextProvider } from "./ContentContext";

const PageRoutes = () => {
  return (
      <BrowserRouter>
        <PageLayout>
          <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/add-book" element={<AddBookForm />} />
            <Route path="/add-book/:bookId" element={<AddBookForm />} />
            <Route path="/bulk-upload" element={<UploadButton />} />
            {/* <Route path="/book-details" element={<BookDetailsPage />} /> */}
            <Route path="/book-details/:bookId" element={<BookDetailsPage />} />
          </Routes>
        </PageLayout>
      </BrowserRouter>

  );
};
export default PageRoutes;
