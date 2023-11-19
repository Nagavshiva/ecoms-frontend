import { Container, Navbar,Button,Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import LogoutButton from "./user/LogoutButton";
import { NavLink } from "react-router-dom";
import SearchBox from "./SearchBox";
const Header = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="/">Shopify</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
    
            <Nav
              className="mx-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <SearchBox />
            </Nav>
            {user ? (
                <LogoutButton />
              ) : (
                <div>
                  <NavLink to="/login">
                    <Button
                      variant="outline-success"
                      style={{ marginRight: "8px" }}
                    >
                      Login
                    </Button>
                  </NavLink>
                  <NavLink to="/reg">
                    <Button variant="outline-success">Register</Button>
                  </NavLink>
                </div>
              )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
