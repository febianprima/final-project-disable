import React from "react";
import Header from "../Components/HeaderFeed.js";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroupItem,
  Image,
  ListGroup,
  CardGroup,
} from "react-bootstrap";
import { Link,useNavigate } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { GET_CONNECTION } from '../Utils/Query';

const Connection = () => {
  const user = JSON.parse(localStorage.getItem('userData'));
  const navigate = useNavigate();

  if (!user) {
    navigate('/login')
  } else{
    const userID = user.id;
  }

  const id = user.id;

  const { loading, error, data } = useQuery(GET_CONNECTION, {
    variables: { id: id}
  });

  if(loading){
    return <div>Loading</div>
  }

  if (error){
    return <div>{error.toString()}</div>
  }

  const contact = data.users[0].contact
  const connection = [];

  for (let i = 0; i < contact.length; i++){
    connection.push(contact[i].connection)
  }
  
  console.log(connection)

  return (
    <div>
      <Header />

      <Container>
        <Col className="mt-5">
          <Row lg="3" className="d-flex justify-content-center mb-3">
            <Card style={{ width: "90rem", backgroundColor:'#34BE82',borderRadius: "20px" }}>
              <div className="d-flex justify-content-center mt-3">
                <Link to={`/profile/${user.id}`}>
                  <Image
                    style={{
                      width: "100px",
                      height: "100px",
                    }}
                    variant="top"
                    src={process.env.PUBLIC_URL + "/Assets/Image.jpg"}
                    roundedCircle
                  />
                </Link>
              </div>
              <Card.Body className="text-center">
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/profile"
                >
                  <Card.Title>{data.users[0].profile[0].firstName} {data.users[0].profile[0].lastName}</Card.Title>
                </Link>
                <Card.Text>@{data.users[0].username}</Card.Text>
                <Card.Text>{data.users[0].contact.length} Koneksi</Card.Text>
              </Card.Body>
            </Card>
            </Row>
            <Row>
              <Card style={{ width: "90rem", backgroundColor:'whitesmoke'}}>
                <Card.Body className="text-center">
                <Card.Title style={{fontSize:'30pt', fontWeight:'bolder', textAlign:'center'}}>Koneksi Anda</Card.Title>
                </Card.Body>
              </Card>
          </Row>
          <Row>
            <CardGroup>
              <Card className="m-3">
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </CardGroup>
          </Row>
        </Col>
      </Container>
    </div>
  );
};

export default Connection;
