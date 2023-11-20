import { useState } from "react";
import { Form, Dropdown, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../redux/actions/productActions";

const SearchBox = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");


  const categories = [
    "men's clothing",
    "women's clothing",
    "jewelry",
    "electronics",
  ];

  const handleDropdownSelect = (category) => {
    // Fetch products when a category is selected
    fetchProductsData({ category: category !== "All" ? category : undefined });
  };

  const handleSearch = () => {
    // Fetch products when the search button is clicked
    fetchProductsData({ search: searchTerm });
  };

  const fetchProductsData = async (searchParams) => {
    try {
      await dispatch(fetchProducts(searchParams));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };



  return (
    <>
      <Form className="d-flex position-relative">
        <Dropdown style={{ position: "absolute", left: "0" }}>
          <Dropdown.Toggle id="dropdown-basic"></Dropdown.Toggle>
          <Dropdown.Menu align="end">
            <Dropdown.Item onClick={() => handleDropdownSelect("All")}>
              All Categories
            </Dropdown.Item>
            {categories.map((category) => (
              <Dropdown.Item
                key={category}
                onClick={() => handleDropdownSelect(category)}
              >
                {category}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2 form"
          aria-label="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button variant="outline-success" type="button" onClick={handleSearch}>
          Search
        </Button>
      </Form>
    </>
  );
};

export default SearchBox;
