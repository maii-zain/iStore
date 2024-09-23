import { Form } from 'react-bootstrap';

const SearchBar = ({ onSearch }) => {
  return (
    <Form className="my-4 d-flex">
      <Form.Control
        type="text"
        placeholder="Search for products..."
        className="me-2 form-control-lg"
        onChange={(e) => onSearch(e.target.value)}
      />
    </Form>
  );
};

export default SearchBar;
