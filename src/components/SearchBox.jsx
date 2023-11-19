import { Form, Dropdown } from "react-bootstrap";

const SearchBox = () => {
  return (
    <>
      <Form className="d-flex position-relative">
        <Dropdown style={{ position: "absolute", left: "0" }}>
          <Dropdown.Toggle id="dropdown-basic"></Dropdown.Toggle>
          <Dropdown.Menu align="end">
            <Dropdown.Item href="#category1">Category 1</Dropdown.Item>
            <Dropdown.Item href="#category2">Category 2</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2 form"
          aria-label="Search"
        />
      </Form>
    </>
  );
};

export default SearchBox;
