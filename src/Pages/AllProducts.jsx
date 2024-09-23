import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import ProductCard from "../Components/ProductCard";
import PaginationComponent from "../Components/PaginationComponent";
import SearchBar from "../Components/SearchBar";
import CategoryFilter from "../Components/CategoryFilter";

const AllProducts = () => {
  const [products, setProducts] = useState([]); 
  const [filteredProducts, setFilteredProducts] = useState([]); 
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true); 
  const [searching, setSearching] = useState(false); 
  const [selectedCategory, setSelectedCategory] = useState(''); 
  const productsPerPage = 6; 

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        if (response.data) {
          setProducts(response.data); 
          setFilteredProducts(response.data); 
          setSearchResults(response.data); 
        } else {
          console.error('No products found in response');
        }
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      })
      .finally(() => setLoading(false)); 
  }, []);

  const handleSearch = (searchTerm) => {
    setSearching(true); 

    if (searchTerm) {
      const filteredSearch = filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(filteredSearch); 
      setCurrentPage(1); 
    } else {
      setSearchResults(filteredProducts); 
    }
    setSearching(false); 
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category); 
    let filtered;

    if (category === 'clothes') {
      filtered = products.filter((product) =>
        product.category === "men's clothing" || product.category === "women's clothing"
      );
    } else if (category) {
      filtered = products.filter((product) => product.category === category);
    } else {
      filtered = products;
    }

    setFilteredProducts(filtered); 
    setSearchResults(filtered); 
    setCurrentPage(1); 
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = searchResults.slice(indexOfFirstProduct, indexOfLastProduct);

  const onPageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container>
      <SearchBar onSearch={handleSearch} />
      <CategoryFilter onCategoryChange={handleCategoryChange} />
      {loading ? (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <>
          <Row className="mt-4 g-4">
            {currentProducts.length > 0 ? (
              currentProducts.map((product) => (
                <Col key={product.id} xs={12} sm={6} lg={4}>
                  <ProductCard product={product} />
                </Col>
              ))
            ) : (
              <p className="text-center w-100">
                {searching ? 'Searching for products...' : 'No products found.'}
              </p>
            )}
          </Row>
          {searchResults.length > productsPerPage && (
            <PaginationComponent
              currentPage={currentPage}
              totalPages={Math.ceil(searchResults.length / productsPerPage)}
              onPageChange={onPageChange}
            />
          )}
        </>
      )}
    </Container>
  );
};

export default AllProducts;
