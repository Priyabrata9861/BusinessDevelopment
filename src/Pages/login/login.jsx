import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import ForgotPassword from './forgotPassword';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../layouts/commonLayout.css'
function Login() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({ username: '', password: '' });
  const [showAlert, setShowAlert] = useState(false);
  const [isUsernameVisible, setIsUsernameVisible] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
  const [email, setEmail] = useState("");
  const handleForgotPasswordClick = () => {
    setEmail(null);
    setShowForgotPasswordModal(true);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let isValid = true;
    let errors = { username: '', password: '' };

    if (!formData.username) {
      errors.username = 'Username is required';
      toast.error('Username is required');
      isValid = false;

    }

    if (!formData.password) {
      errors.password = 'Password is required';
      toast.error('Password is required');
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Handle form submission
      console.log('Form submitted:', formData);
      setShowAlert(true);
    }
  };
  const toggleUsernameVisibility = () => {
    setIsUsernameVisible(!isUsernameVisible);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100 login">
      <Row>
        <Card className='animated-border'>
          <Card.Body>
            <Card.Title className="text-center mb-4">Business Development</Card.Title>
            {showAlert && (
              <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
                Login successful!
              </Alert>
            )}
            <Form onSubmit={handleSubmit}>
              <Col lg={12}>
                <Form.Group controlId="username">
                  <Form.Label>username</Form.Label>
                  <div className='password-rel'>
                    <Form.Control
                      type={isUsernameVisible ? "text" : "password"}
                      placeholder="Enter username"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      isInvalid={!!errors.username}
                      className="username-input"
                    />
                    <div className='eye-icon'>
                      <span onClick={toggleUsernameVisibility} style={{ cursor: 'pointer' }}>
                        {isUsernameVisible ? <FaEyeSlash /> : <FaEye />}
                      </span>
                    </div>
                  </div>
                  <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col lg={12}>
                <Form.Group controlId="password">
                  <Form.Label>password</Form.Label>
                  <div className='password-rel'>
                    <Form.Control
                      type={isPasswordVisible ? "text" : "password"}
                      placeholder="Enter password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      isInvalid={!!errors.password}
                      className="password-input"
                    />

                    <div className='eye-icon'>
                      <span onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }}>
                        {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                      </span>
                    </div>
                  </div>

                  <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                </Form.Group>
              </Col>
              <ForgotPassword
                show={showForgotPasswordModal}
                handleClose={() => setShowForgotPasswordModal(false)}
                email={email}
                setEmail={setEmail}
              />
              <Button variant="primary" type="submit" className="w-100 mt-4">
                Login
              </Button>
            </Form>
            {/* <div className="mt-3 text-center"><Link onClick={handleForgotPasswordClick}>
              Forgot Password
            </Link></div> */}

          </Card.Body>
        </Card>
      </Row>
      <ToastContainer position="top-center" />
    </Container>
  )
}
export default Login
