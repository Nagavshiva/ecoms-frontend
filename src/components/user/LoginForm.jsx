// LoginForm.js
import { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/actions/userActions";
import { useNavigate, NavLink } from "react-router-dom";

const LoginForm = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, loading, error } = useSelector((state) => state.auth);
  console.log(loading);
  console.log(error);
  console.log(user);


  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    // Clear the error related to the current input field when the user starts typing
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

    // If no errors, dispatch the login action
    console.log("Form submitted");
    dispatch(loginUser(formData));
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <Form onSubmit={handleSubmit} className="mt-4">
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                style={{ height: '50px', backgroundColor: '#dcdcdc'}}
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
                style={{ height: '50px', backgroundColor: '#dcdcdc'}}
              />
              {errors.password && (
                <Form.Text className="text-danger">{errors.password}</Form.Text>
              )}
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-2">
              Login
            </Button>
            <div className="mt-2">
              <span className="mr-2">Do not have an account?</span>
            <NavLink to="/reg" className="btn btn-link mb-2">
              Register
            </NavLink>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
