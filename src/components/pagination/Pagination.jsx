import { useEffect, useState } from "react";
import "./Pagination.css";

function Pagination() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function getData() {
      let response = await fetch("https://fakestoreapi.com/products");
      let d = await response.json();
      console.log(d);
      setProducts(d);
      setLoading(false);
    }
    getData();
  }, []);

  const selectPageHandler = (selectedPage) => {
    // if (selectedPage >= 1 && selectedPage <= products.length / 4)
    //   setPage(selectedPage);
    if (selectedPage < 1) {
      setPage(products.length / 4);
    } else if (selectedPage > products.length / 4) {
      setPage(1);
    } else setPage(selectedPage);
  };

  return (
    <div className="App">
      {loading && <h1>Sale is Back...</h1>}
      {products.length > 0 && (
        <div className="products">
          {products.slice((page - 1) * 4, page * 4).map((product) => {
            return (
              <span className="products__single" key={product.id}>
                <img
                  className="image"
                  src={product.image}
                  alt={product.title}
                />
                <span>{product.title}</span>
              </span>
            );
          })}
        </div>
      )}
      {products.length > 0 && (
        <div className="pagination">
          <span
            // className={page === 1 ? "pagination__disable" : ""}
            onClick={() => selectPageHandler(page - 1)}
          >
            Prev
          </span>
          {[...Array(products.length / 4)].map((_, i) => {
            return (
              <span
                className={page === i + 1 ? "pagination__selected" : ""}
                onClick={() => selectPageHandler(i + 1)}
                key={i}
              >
                {i + 1}
              </span>
            );
          })}
          <span
            // className={
            //   page === products.length / 4 ? "pagination__disable" : ""
            // }
            onClick={() => selectPageHandler(page + 1)}
          >
            Next
          </span>
        </div>
      )}
    </div>
  );
}

export default Pagination;