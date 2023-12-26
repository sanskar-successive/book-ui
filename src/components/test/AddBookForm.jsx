import React, { useEffect, useReducer, useState } from "react";
import {
  Button,
  Checkbox,
  DatePicker,
  Flex,
  Form,
  Input,
  InputNumber,
  Select,
  Typography,
  Upload,
} from "antd";
import axios from "axios";
import { useParams } from "react-router-dom";



const AddBookForm = () => {
  let bookRaw = {
    _id : "",
    title: "",
    coverImage: "",
    category: "",
    author: {
      name: "",
      about: "",
    },
    rating: "",
    reviews: [],
    price: "",
    moreDetails: {
      language: "",
      publisher: "",
      firstPublished: "",
      seller: "",
      description: "",
      fileSize: "",
      pages: "",
      edition: "",
    },
  };
  const { bookId } = useParams();
  console.log(bookId);

  let initialLoading = false;

  if(bookId) initialLoading = true;

  const [bookData, setBookData] = useState(bookRaw)
  const [loading, setLoading] = useState(initialLoading);


  useEffect(() => {
    const fetchBookData = async () => {
      try {
        const apiResponse = await axios.get(`http://localhost:5000/api/books/${bookId}`);
        console.log(apiResponse.data);
        setBookData({ ...apiResponse.data });
        setLoading(false); 
      } catch (error) {
        console.error('Error fetching book data:', error);
        setLoading(false);
      }
    };

    if (bookId) {
      fetchBookData();
    }
  }, []);

  const [form] = Form.useForm();

  const addBook = async () => {
    const response = await axios.post(
      "http://localhost:5000/api/books",
      bookRaw
    );
    console.log(response.data);
  };

  const onFinish = (values) => {
    console.log(values);

    const {
      bookTitle,
      category,
      authorName,
      authorAbout,
      price,
      rating,
      description,
      fileSize,
      language,
      publisher,
      firstPublished,
      seller,
      verified,
      pages,
      coverImage,
    } = values;

    bookRaw.title = bookTitle;
    bookRaw.category = category;
    bookRaw.author.name = authorName;
    bookRaw.author.about = authorAbout;
    bookRaw.price = price;
    bookRaw.rating = rating;
    bookRaw.moreDetails.description = description;
    bookRaw.moreDetails.fileSize = fileSize;
    bookRaw.moreDetails.language = language;
    bookRaw.moreDetails.publisher = publisher;
    bookRaw.moreDetails.firstPublished = firstPublished;
    bookRaw.moreDetails.seller = seller;
    bookRaw.moreDetails.verified = verified;
    bookRaw.moreDetails.pages = pages;
    bookRaw.coverImage = coverImage;

    console.log(bookRaw);

    addBook();
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Flex
      vertical
      flex="wrap"
      style={{
        marginTop: "2%",
        marginRight: "8%",
        marginLeft: "8%",
        marginBottom: "8%",
      }}
    >
      <Typography.Title>Add Book</Typography.Title>

      <Form
        form={form}
        name="addBook"
        onFinish={onFinish}
        initialValues={bookData}
      >
        <Typography style={{ fontSize: 16 }}> Title </Typography>
        <Form.Item initialValue={bookData.title} name="bookTitle">
          <Input size="large" />
        </Form.Item>

        <Typography style={{ fontSize: 16 }}> Author </Typography>
        <Form.Item initialValue={bookData.author.name} name="authorName">
          <Input size="large" />
        </Form.Item>

        <Typography style={{ fontSize: 16 }}> About Author </Typography>
        <Form.Item initialValue={bookData.author.about} name="authorAbout">
          <Input.TextArea rows={4} />
        </Form.Item>

        <Typography style={{ fontSize: 16 }}> Category </Typography>
        <Form.Item initialValue={bookData.category} name="category">
          <Select placeholder="select a category" size="large">
            <Select.Option value="c1">c1</Select.Option>
            <Select.Option value="c2">c2</Select.Option>
            <Select.Option value="c3">c3</Select.Option>
            <Select.Option value="c4">c4</Select.Option>
          </Select>
        </Form.Item>

        <Typography style={{ fontSize: 16 }}> Language </Typography>
        <Form.Item initialValue={bookData.moreDetails.language} name="language">
          <Select placeholder="select language" size="large">
            <Select.Option value="l1">l1</Select.Option>
            <Select.Option value="l2">l2</Select.Option>
            <Select.Option value="l3">l3</Select.Option>
            <Select.Option value="l4">l4</Select.Option>
          </Select>
        </Form.Item>

        <Typography style={{ fontSize: 16 }}> Publisher </Typography>
        <Form.Item
          initialValue={bookData.moreDetails.publisher}
          name="publisher"
        >
          <Input size="large" />
        </Form.Item>
{/* 
        <Typography style={{ fontSize: 16 }}> First Published </Typography>
        <Form.Item
          initialValue={bookData.moreDetails.firstPublished}
          name="firstPublished"
        >
          <DatePicker size="large" />
        </Form.Item> */}

        <Typography style={{ fontSize: 16 }}> Seller </Typography>
        <Form.Item initialValue={bookData.moreDetails.seller} name="seller">
          <Input size="large" />
        </Form.Item>

        <Typography style={{ fontSize: 16 }}> Price </Typography>
        <Form.Item initialValue={bookData.price} name="price">
          <InputNumber size="large" />
        </Form.Item>

        <Typography style={{ fontSize: 16 }}> Rating </Typography>
        <Form.Item initialValue={bookData.rating} name="rating">
          <InputNumber size="large" />
        </Form.Item>

        <Typography style={{ fontSize: 16 }}> File Size in KB </Typography>
        <Form.Item initialValue={bookData.moreDetails.fileSize} name="fileSize">
          <InputNumber size="large" />
        </Form.Item>

        <Typography style={{ fontSize: 16 }}> Page Count </Typography>
        <Form.Item initialValue={bookData.moreDetails.pages} name="pages">
          <InputNumber size="large" />
        </Form.Item>

        <Typography style={{ fontSize: 16 }}> Book Description </Typography>
        <Form.Item
          initialValue={bookData.moreDetails.description}
          name="description"
        >
          <Input.TextArea rows={10} />
        </Form.Item>

        <Typography style={{ fontSize: 16 }}> Verfied </Typography>
        <Form.Item name="verified">
          <Checkbox />
        </Form.Item>

        <Typography style={{ fontSize: 16 }}> Cover Image </Typography>
        <Form.Item name="coverImage">
          {/* <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </div>
          </Upload> */}
          <Input size="large" />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            style={{ fontSize: 16 }}
          >
            Save
          </Button>
        </Form.Item>
      </Form>
    </Flex>
  );
};
export default AddBookForm;
