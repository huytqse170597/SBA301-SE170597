import React from "react";
import { Container, Form, Button, Row, Col, FormCheck } from "react-bootstrap";
import "./UpdateProfile.css";
import { FaLock, FaUser, FaEnvelope } from "react-icons/fa";
import { FaRepeat, FaPhoneVolume, FaHouse } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
const UpdateProfile = () => {
  return (
    <>
      <div className="update-profile-page">
        <Container className="d-flex justify-content-center align-items-center min-vh-100">
          <div className="update-profile-box p-4 rounded-5 px-5">
            <h2 className="text-center text-latte mb-4">Update Profile</h2>
            <Form action="#" method="POST">
              <Row>
                <div className="col-md-6">
                  <Form.Group className="mb-3">
                    <Form.Label className="text-latte">Username</Form.Label>
                    <div className="position-relative">
                      <Form.Control
                        type="text"
                        className="bg-transparent text-latte border-black rounded-5"
                      />
                      <FaUser className="position-absolute end-0 top-50 translate-middle-y me-3 text-latte" />
                    </div>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="text-latte">Email</Form.Label>
                    <div className="position-relative">
                      <Form.Control
                        type="text"
                        className="bg-transparent text-latte border-black rounded-5"
                      />
                      <FaEnvelope className="position-absolute end-0 top-50 translate-middle-y me-3 text-latte" />
                    </div>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="text-latte">Phone Number</Form.Label>
                    <div className="position-relative">
                      <Form.Control
                        type="text"
                        className="bg-transparent text-latte border-black rounded-5"
                      />
                      <FaPhoneVolume className="position-absolute end-0 top-50 translate-middle-y me-3 text-latte" />
                    </div>
                  </Form.Group>
                </div>

                <div className="col-md-6">
                  <Form.Group className="mb-3">
                    <Form.Label className="text-latte">First Name</Form.Label>
                    <div className="position-relative">
                      <Form.Control
                        type="text"
                        className="bg-transparent text-latte border-black rounded-5"
                      />
                      <IoPerson className="position-absolute end-0 top-50 translate-middle-y me-3 text-latte" />
                    </div>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="text-latte">Last Name</Form.Label>
                    <div className="position-relative">
                      <Form.Control
                        type="text"
                        className="bg-transparent text-latte border-black rounded-5"
                      />
                      <IoPerson className="position-absolute end-0 top-50 translate-middle-y me-3 text-latte" />
                    </div>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="text-latte">Address</Form.Label>
                    <div className="position-relative">
                      <Form.Control
                        type="text"
                        className="bg-transparent text-latte border-black rounded-5"
                      />
                      <FaHouse className="position-absolute end-0 top-50 translate-middle-y me-3 text-latte" />
                    </div>
                  </Form.Group>
                </div>
              </Row>

              <Button variant="primary" type="submit" className="w-100 mb-3">
                Save
              </Button>
            </Form>
          </div>
        </Container>
      </div>
    </>
  );
};

export default UpdateProfile;
