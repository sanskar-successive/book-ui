import React, { useContext } from "react";
import { FilterOutlined, SortAscendingOutlined } from "@ant-design/icons";
import { Button, Layout, Menu } from "antd";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";
const { Header, Content, Sider } = Layout;

const PageLayout = ({children}) => {

  // const {content, setContent} = useContext(ContentContext);
  const navigate = useNavigate();  

  const handleBookList = ()=>{
    navigate('/')  
  }

  const handleAddBook = ()=>{
    navigate('add-book')
  }

  const handleBulkUpload = ()=>{
    navigate('bulk-upload')
  }

  return (
    <Layout>
      <Header
        style={{
          position: "fixed",
          zIndex: 1000,
          width: "100%",
          backgroundColor: "white",
          textAlign: "center",
          border: "2px solid",
        }}
      >
        <SearchBar />
        <Button onClick={()=>alert('filter clicked')} size="large" icon={<FilterOutlined />}>
          Filter
        </Button>
        <Button onClick={()=>alert('sort clicked')} size="large" icon={<SortAscendingOutlined />}>
          Sort
        </Button>
      </Header>
      <Layout>
        <Sider
          width={200}
          style={{
            backgroundColor: "white",
            border: "2px solid",
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            marginTop: "64px",
          }}
        >
          <Menu >
            <Menu.Item onClick={handleBookList}>Book List</Menu.Item>
            <Menu.Item onClick={handleAddBook}>Add Book</Menu.Item>
            <Menu.Item onClick={handleBulkUpload}>Bulk Upload</Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content
            style={{
              marginLeft: 220,
              marginTop: 80,
              marginBottom: 20,
              marginRight: 20,
              padding: 5,
              border: "2px solid",
              overflow: "initial",
              border: "2px solid",
            }}
          >
            {/* <BookList/> */}
            {/* <AddBookForm/> */}
            {/* <UploadModal/> */}

            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default PageLayout;
