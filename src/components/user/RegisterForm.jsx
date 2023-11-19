// RegisterForm.js
import { useState, useEffect } from "react";
import { Form, Button, Container, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/actions/userActions";
import { useNavigate, NavLink } from "react-router-dom";
import {  toast } from "react-toastify";


const RegisterForm = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user,error } = useSelector((state) => state.auth);

  const redirect = "/";

  useEffect(() => {
    if (user) {
      // Show success toast
      toast.success("Registration successful!", { position: "top-center" });
      navigate(redirect);
    } 
    
  }, [user, error, navigate, redirect]);

  const handleChange = (e) => {
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    const newErrors = {};
    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    }

    // If there are errors, update the state and prevent form submission
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Clear previous errors
    setErrors({});

    // If no errors, dispatch the registration action
    console.log("Form submitted");
    dispatch(registerUser(formData));
  };

  return (
    <Container className="">
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <Form onSubmit={handleSubmit} className="mt-4">
          {error && (
            <Form.Text className="text-danger">User already exists</Form.Text>
          )}
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                style={{ height: "50px", backgroundColor: "#dcdcdc" }}
              />
              {errors.username && (
                <Form.Text className="text-danger">{errors.username}</Form.Text>
              )}
            </Form.Group>

            <Form.Group controlId="formPassword" className="mt-2">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                style={{ height: "50px", backgroundColor: "#dcdcdc" }}
              />
              {errors.password && (
                <Form.Text className="text-danger">{errors.password}</Form.Text>
              )}
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-2">
              Register
            </Button>
            <div className="mt-2">
              <span className="mr-2">Already have an account?</span>
              <NavLink to="/login" className="btn btn-link mb-2">
                Login
              </NavLink>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterForm;

