import React from "react";
import { Container, Row, Col, Image, Card, Button } from "react-bootstrap";
import { CInputGroup, CFormInput } from "@coreui/react";

function ChatRoom() {
  return (
    <div>
      <Container>
        <Row className="mt-5">
          <Col lg="4">
            <Card>
              <Card.Body>
                <div>
                  <Image
                    src={process.env.PUBLIC_URL + "/Assets/Pic1.jpg"}
                    alt="avatar"
                    roundedCircle
                    style={{ width: "15%" }}
                  />
                  <span className="ms-3">Vincent Porter</span>
                  <p className="mt-3">left 7 mins ago</p>
                </div>
                <div>
                  <Image
                    src={process.env.PUBLIC_URL + "/Assets/Pic1.jpg"}
                    alt="avatar"
                    roundedCircle
                    style={{ width: "15%" }}
                  />
                  <span className="ms-3">Vincent Porter</span>
                  <p className="mt-3">left 7 mins ago</p>
                </div>
                <div>
                  <Image
                    src={process.env.PUBLIC_URL + "/Assets/Pic1.jpg"}
                    alt="avatar"
                    roundedCircle
                    style={{ width: "15%" }}
                  />
                  <span className="ms-3">Vincent Porter</span>
                  <p className="mt-3">left 7 mins ago</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="8">
            <Card>
              <Card.Header>
                <div>
                  <Image
                    src={process.env.PUBLIC_URL + "/Assets/Pic1.jpg"}
                    alt="avatar"
                    roundedCircle
                    style={{ width: "15%" }}
                  />
                  <span className="ms-3">Vincent Porter</span>
                  <p className="mt-3">left 7 mins ago</p>
                </div>
                <div className="text-right">
                  <Button variant="outline-secondary" className="me-3">
                    <i className="fa fa-camera"></i>
                  </Button>
                  <Button variant="outline-primary" className="me-3">
                    <i className="fa fa-image"></i>
                  </Button>
                  <Button variant="outline-info" className="me-3">
                    <i className="fa fa-cogs"></i>
                  </Button>
                  <Button variant="outline-warning" className="me-3">
                    <i className="fa fa-question"></i>
                  </Button>
                </div>
              </Card.Header>
              <Card.Body>
                <div>
                  <ul>
                    <li>
                      <div className="message-data text-right">
                        <span class="message-data-time">10:10 AM, Today</span>
                      </div>
                      <div className="message other-message float-right">
                        {" "}
                        Hi Aiden, how are you? How is the project coming along?{" "}
                      </div>
                    </li>
                    <li className="clearfix">
                      <div className="message-data">
                        <span className="message-data-time">
                          10:12 AM, Today
                        </span>
                      </div>
                      <div className="message my-message">
                        Are we meeting today?
                      </div>
                    </li>
                    <li className="clearfix">
                      <div className="message-data">
                        <span className="message-data-time">
                          10:15 AM, Today
                        </span>
                      </div>
                      <div className="message my-message">
                        Project has been already finished and I have results to
                        show you.
                      </div>
                    </li>
                  </ul>
                </div>
                <CInputGroup className="mb-3">
                  <Image
                    className="me-3"
                    src={process.env.PUBLIC_URL + "/Assets/send.png"}
                    style={{ width: "40px" }}
                  />
                  <CFormInput
                    placeholder="Message"
                    aria-label="message"
                    aria-describedby="basic-addon1"
                  />
                </CInputGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ChatRoom;
