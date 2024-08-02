import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

function ForgotPassword({show,handleClose}){
    const [email, setEmail] = useState('');
  
    const handleForgotPassword = (e) => {
        e.preventDefault();
        // Add forgot password logic here
      };
      const handleModalClose = () => {
        handleClose(false);
        setEmail(''); 
    };
    
    return(
        <Modal  show={show} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Forgot Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleForgotPassword}>
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

    )
}
export default ForgotPassword