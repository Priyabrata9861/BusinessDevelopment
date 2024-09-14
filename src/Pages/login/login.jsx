import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import ForgotPassword from './forgotPassword';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../layouts/commonLayout.css'
import { TbBusinessplan } from "react-icons/tb";
function Login() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [isUsernameVisible, setIsUsernameVisible] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
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
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', formData);
      toast.success('Login successful!');
      setTimeout(() => {
        navigate('/dashboard');
      }, 2500); 
    }
  };
  const toggleUsernameVisibility = () => {
    setIsUsernameVisible(!isUsernameVisible);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 login">
      <Row>
        <div className='form bg-light'>
          <div>
          <div className="d-flex justify-content-center align-items-center fw-bold fs-5">
          <TbBusinessplan />
          </div>
            <div className="text-center mb-4 text-success fw-bold fs-4 ">Business Development</div>
            <Form onSubmit={handleSubmit}>
              <Col lg={12} className='pb-4'>
                <Form.Group controlId="username">
                  <Form.Label>username</Form.Label>
                  <div className='password-rel'>
                    <Form.Control
                      type={isUsernameVisible ? "text" : "password"}
                      placeholder="Enter username"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      className="username-input"
                    />
                    <div className='eye-icon'>
                      <span onClick={toggleUsernameVisibility} style={{ cursor: 'pointer' }}>
                        {isUsernameVisible ? <FaEyeSlash /> : <FaEye />}
                      </span>
                    </div>
                  </div>
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
                      className="password-input"
                    />

                    <div className='eye-icon'>
                      <span onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }}>
                        {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                      </span>
                    </div>
                  </div>
                </Form.Group>
              </Col>
              <ForgotPassword
                show={showForgotPasswordModal}
                handleClose={() => setShowForgotPasswordModal(false)}
                email={email}
                setEmail={setEmail}
              />
              <button variant="primary" type="submit" className=" button-primary w-100 mt-4">
                Sign in
              </button>
            </Form>
            {/* { { <div className="mt-3 text-center"><Link onClick={handleForgotPasswordClick}>
              Forgot Password
            </Link></div> }} */}

          </div>
        </div>
      </Row>
      <ToastContainer position="top-center" />
    </div>
  )
}
export default Login
