import React, { useState } from "react";
import HeaderFeed from "../Components/HeaderFeed";
import { Link,useNavigate } from "react-router-dom";

import {
  Container,
  Image,
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
  Button,
  FormInput,
} from "react-bootstrap";
import axios from "axios";
import Api from "../Utils/Api";

function Feed() {
    const navigate = useNavigate();
    const [photo, setPhoto] = useState("");
    const [video, setVideo] = useState("");
    const [article, setArticle] = useState("");

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     value: 'Please write an essay about your favorite DOM element.'
  //   };

  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  // handleChange(event) {
  //   this.setState({value: event.target.value});
  // }

  const user = JSON.parse(localStorage.getItem('userData'));

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!user) {
        navigate('/login')
      }else{
        const userID = user.id;
      }

    const id = user.id;

    await axios
      .post(Api.createFeed, { 
        userID: id,
        photo,
        video,
        article
      })
      .then((res) => {
        const result = res.data;
        console.log(result);

        if(res.status === 200){
            event.preventDefault();           
            alert(result.message);
        }
        
      })
      .catch((err) => {
        console.log(err);
      })
  }

  // function MyVerticallyCenteredModal(props) {
  //   return (
  //     <Modal
  //       {...props}
  //       size="lg"
  //       aria-labelledby="contained-modal-title-vcenter"
  //       centered
  //     >
  //       <Modal.Header closeButton>
  //         <Modal.Title id="contained-modal-title-vcenter">
  //           Type your post!
  //         </Modal.Title>
  //       </Modal.Header>
  //       <Modal.Body>
  //         <textarea cols="100" placeholder="Write something good!" onChange={(e) => setStatus(e.target.value)}>
            
  //         </textarea>
  //       </Modal.Body>
  //       <Modal.Footer>
  //         <Button variant="success" onClick= {()=>handleSubmit()}>Post</Button>
  //         <Button variant="danger" onClick={props.onHide}>Close</Button>
  //       </Modal.Footer>
  //     </Modal>
  //   );
  // }
return (
  <>
    <div>
      <HeaderFeed />
      <Container>
        <Row className="mt-4">
          <Col lg="3" className="d-flex justify-content-center mb-3">
            <Card style={{ width: "35rem", height: "20rem" }}>
              <div className="d-flex justify-content-center mt-3">
                <Link to={`/profile/${user.id}`}>
                  <Image
                    style={{
                      width: "100px",
                      height: "100px",
                    }}
                    variant="top"
                    src="../Assets/Image.jpg"
                    roundedCircle
                  />
                </Link>
              </div>
              <Card.Body className="text-center">
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/profile"
                >
                  <Card.Title>Muhamad Ajie Darmawan</Card.Title>
                </Link>
                <Card.Text>Kerja Cerdas</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>
                  Koneksi Anda <span style={{ float: "right" }}>50</span>
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
          <Col lg="8">
            <Card className="mb-3">
              <div className="d-flex">
                <Image
                  className="m-1"
                  style={{ width: "60px", height: "60px" }}
                  src="../Assets/Pic1.jpg"
                />
                <form>
                    <Row>
                        <textarea
                            className="mt-3 mb-3 ms-4"
                            style={{ borderRadius: "5px", width: "500px", height: "150px" }}
                            size="sm"
                            variant="outline-secondary"
                            placeholder="Apa yang terjadi?"
                            
                            onChange={(e) => setArticle(e.target.value)}
                        >
                            {/* <span style={{ float: "left", marginLeft: "10px" }}>
                            Mulai buat postingan
                            </span> */}
                        </textarea>
                    </Row>
                    <Row>
                        <div className="d-flex justify-content-end">
                    <Button value="Submit"
                        className="ms-4"
                        style={{backgroundColor:'#34BE82', 
                            borderRadius: "20px", 
                            width: "90px",
                            height: "35px",
                            textAlign:"center", 
                            color: "white", 
                            fontWeight:"bold", 
                            borderColor:"silver", 
                            float:"right"}} 
                        onClick={(event)=>handleSubmit(event)}
                    >
                    Kirim
                    </Button>
                    </div>
                    </Row>
                </form>
                
{/* <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                /> */}
              </div>
              <Card.Body>
                <Row>
                  <Col className="text-center">
                    <Image
                      style={{ width: "20px", height: "20px" }}
                      src="../Assets/gallery.png"
                    />
                    <span className="ms-2">Foto</span>
                  </Col>
                  <Col className="text-center">
                    <Image
                      style={{ width: "20px", height: "20px" }}
                      src="../Assets/multimedia.png"
                    />
                    <span className="ms-2">Video</span>
                  </Col>
                  <Col className="text-center">
                    <Image
                      style={{ width: "20px", height: "20px" }}
                      src="../Assets/timetable.png"
                    />
                    <span className="ms-2">Acara</span>
                  </Col>
                  <Col className="text-center">
                    <Image
                      style={{ width: "20px", height: "20px" }}
                      src="../Assets/document.png"
                    />
                    <span className="ms-2">Article</span>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card className="mb-5">
              <div className="d-flex">
                <Image
                  className="m-1"
                  style={{ width: "60px", height: "60px" }}
                  src="../Assets/Pic1.jpg"
                />
                <span className="ms-2 mt-4">Muhamad Ajie Darmawan</span>
              </div>
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <Card.Img variant="bottom" src="../Assets/Image.jpg" />
              <Card.Body>
                <Row>
                  <Col className="text-center">
                    <Image
                      style={{ width: "20px", height: "20px" }}
                      src="../Assets/like.png"
                    />
                    <span className="ms-2">Like</span>
                  </Col>
                  <Col className="text-center">
                    <Image
                      style={{ width: "20px", height: "20px" }}
                      src="../Assets/comment.png"
                    />
                    <span className="ms-2">Comment</span>
                  </Col>
                  <Col className="text-center">
                    <Image
                      style={{ width: "20px", height: "20px" }}
                      src="../Assets/share.png"
                    />
                    <span className="ms-2">Share</span>
                  </Col>
                  <Col className="text-center">
                    <Image
                      style={{ width: "20px", height: "20px" }}
                      src="../Assets/send.png"
                    />
                    <span className="ms-2">Send</span>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  </>
  );
}

export default Feed;