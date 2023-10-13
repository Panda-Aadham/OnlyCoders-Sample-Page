import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import "./LoginModal.css"

// Custom component for login modal
const LoginModal = (props: {show: boolean, onHide: () => void}) => {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    // Event handlers
    const handleEmailChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setEmail(e.target.value);
    };
    
    const handlePasswordChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setPassword(e.target.value);
    };
    
    const handleConfirmPasswordChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setPasswordConfirm(e.target.value);
    };

    useEffect(() => {
        const emailRegexPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        setEmailError(emailRegexPattern.test(email));
    }, [email])
    
    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Sign-up
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        onChange={handleEmailChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                    <Form.Control
                        type="password"
                        id="inputPassword1"
                        aria-describedby="passwordHelpBlock"
                        placeholder="Enter your password"
                        onChange={handlePasswordChange}
                    />
                    <Form.Text id="passwordHelpBlock" muted>
                        Your password must be 8-20 characters long, contain letters and numbers,
                        and must not contain spaces, symbols, or emojis.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
                    <Form.Label htmlFor="inputPassword5">Confirm password</Form.Label>
                    <Form.Control
                        type="password"
                        id="inputPassword2"
                        aria-describedby="passwordHelpBlock"
                        placeholder="Confirm password"
                        onChange={handleConfirmPasswordChange}
                    />
                </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
};

export default LoginModal;