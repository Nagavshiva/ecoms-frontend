// productlist.jsx
import { useEffect } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/actions/productActions';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const loading = useSelector((state) => state.product.loading);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Container style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(18rem, 1fr))', gap: '1rem', height: '330px',paddingTop:'2rem' }}>
      <Row xs={1} sm={2} md={3} lg={4} xl={5}>
        {products.map((product) => (
          <Col key={product._id}>
            <Card className="mb-4" style={{ height: '75vh',width: '14rem'}}>
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.name}
                style={{ height: '200px', objectFit: 'cover' }} 
              />
              <Card.Body style={{ height: '130px' }}>
                <Card.Title style={{ fontSize: '1rem' }}>{product.name}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
              </Card.Body>
              <Button className='btn btn-success' >Add To Cart</Button>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;


