import { Form } from 'react-bootstrap';

const CategoryFilter = ({ onCategoryChange }) => {
  return (
    <Form className="my-4 d-flex">
      <Form.Select
        aria-label="Category"
        className="me-2 form-control-lg"
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="">All Categories</option>
        <option value="clothes">Clothes</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelry</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
      </Form.Select>
    </Form>
  );
};

export default CategoryFilter;
