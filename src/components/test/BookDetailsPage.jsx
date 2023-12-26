import { Button, Card, Col, Flex, List, Rate, Row, Typography } from "antd";
import BookDesription from "./BookDesription";
import TextArea from "antd/es/input/TextArea";
import ReviewList from "./ReviewList";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const BookDetailsPage = () => {

  const {bookId} = useParams();

  console.log(bookId);

  const [book, setBook] = useState();

  const fetchBookData = async ()=>{
    const apiResponse = await axios.get(`http://localhost:5000/api/books/${bookId}`);
    setBook(apiResponse.data); 
  }

  useEffect(()=>{
    fetchBookData();
  }, [])

  console.log(book);

  return (
    <div
      style={{
        border: "6px solid green",
        marginLeft: "20rem",
        marginRight: "20rem",
      }}
    >
      <Row>
        <Col style={{ border: "4px solid blue" }} span={8}>
          <div style={{ boxShadow: 10 }}>
            <img
              alt="avatar"
              src={book?.coverImage}
              style={{
                height: "85%",
                width: "80%",
                margin: "2rem",
                // border: "4px solid red",
              }}
            />
          </div>
        </Col>
        <Col style={{ border: "4px solid blue" }} span={16}>
          <div style={{ margin: 20 }}>
            <Row>
              <Typography.Title level={2}> {book?.title} </Typography.Title>
            </Row>
            <Row>
              <Typography.Title level={4}> {book?.author.name} </Typography.Title>
            </Row>
            <Row>
              <Rate defaultValue={4}>
                <Typography.Title level={4}> {book?.rating} </Typography.Title>
              </Rate>
            </Row>
            <Row>
              <Typography.Title level={4}>$ {book?.price} </Typography.Title>
            </Row>
            <Row>
              <Typography.Paragraph>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </Typography.Paragraph>
            </Row>
            <Row>
              <Col span={6}>
                <div>
                  <Typography> Publisher </Typography>
                  <Typography> First published </Typography>
                  <Typography> Seller </Typography>
                  <Typography> Language </Typography>
                  <Typography> Pages </Typography>
                  <Typography> Edition </Typography>
                </div>
              </Col>

              <Col>
                <div>
                  <Typography> {book?.moreDetails.publisher} </Typography>
                  <Typography> {book?.moreDetails.firstPublished} </Typography>
                  <Typography> {book?.moreDetails.seller} </Typography>
                  <Typography> {book?.moreDetails.language} </Typography>
                  <Typography> {book?.moreDetails.pages} </Typography>
                  <Typography> {book?.moreDetails.edition} </Typography>
                </div>
              </Col>
            </Row>
            <Row>
              <Button type="primary" href="https://ant.design" target="_blank">
                Add to library
              </Button>
            </Row>
          </div>
        </Col>
      </Row>
      <div>
        <BookDesription />
      </div>

      <div>
        <Typography.Title level={3}>Write Review</Typography.Title>
        <TextArea rows={4} />
        <Rate defaultValue={0}></Rate>
        <Button type="primary">Submit</Button>
      </div>
      <div>
        <ReviewList />
      </div>
    </div>

    // <>
    // </>
  );
};
export default BookDetailsPage;