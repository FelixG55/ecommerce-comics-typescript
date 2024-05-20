import { type Product } from "../types";

interface Props {
  product: Product[];
}


const ItemDetail:React.FC<Props> = ({ product }) =>{
    return (
      <div
        className="card mb-3 m-4 p-0 border-warning"
        style={{ maxWidth: "840px" }}
      >
        <div className="row g-0">
          <div className="col-md-4 ">
            <img
              src={product[0].image}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8 bg-danger ">
            <div className="card-body bg-danger ">
              <h5 className="card-title">{product[0].name}</h5>
              <p className="card-text">{product[0].summary}</p>
              <p className="card-text">
                <b>Publisher:</b> {product[0].publisher}
              </p>
              <p className="card-text">
                <b>Characters:</b>{" "}
                {product[0].characters?.map((char) => {
                  return char + ", ";
                })}
              </p>
              <p className="card-text">
                <b>Price:</b> $ {product[0].price}
              </p>
              <div
                className="btn-group btn-outline-warning"
                role="group"
                aria-label="Basic example"
              >
                <button type="button" className="btn btn-outline-warning">
                  -
                </button>
                <button type="button" className="btn" disabled>
                  1
                </button>
                <button type="button" className="btn btn-outline-warning">
                  +
                </button>
              </div>
              <div className="mt-2">
                <button className=" btn btn-warning "> Agregar al carrito</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default ItemDetail;
  