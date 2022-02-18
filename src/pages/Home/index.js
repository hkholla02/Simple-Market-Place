import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
const Home = () => {
  const [catgories, setCategories] = useState([]);
  // side effects
  useEffect(() => {
    // get categories
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <h2>Categories</h2>
      {catgories.length === 0 && <div>Loading....</div>}
      {catgories.length > 0 && (
        <ul>
          {catgories.map((category) => {
            return (
              <li key={category}>
                <Link to={`/product/${category}`}>{category}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Home;
