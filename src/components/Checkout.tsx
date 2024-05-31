import ResumeCart from "./Cart/ResumeCart";
import { FormEvent, useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import useCheckout from "../hooks/useCheckout";
import checkoutValidation from "../services/checkoutValidation";

const Checkout = () => {
  const context = useContext(CartContext);
  const [name, setName] = useState("");
  const [lastName,setLastName] = useState("")
  const [telephone,setTelephone] = useState("")
  const [email,setEmail] = useState("")
  const [orderIdd, setOrderIdd] = useState<string>("")
  const [errors, setErrors] = useState({
    name: "",
    lastName: "",
    telephone: "",
    email: "",
  });

  if (!context) {
    throw new Error("CartContext must be used within a CartContextProvider");
  }
  const { cart,getSumProducts } = context;
  const { orderId, createOrder } = useCheckout({
    cart,
    name,
    lastName,
    telephone,
    email,
    getSumProducts,
  });

  const getOrder = (e: FormEvent) => {
    e.preventDefault();
    setErrors(checkoutValidation(name,lastName,telephone,email))
    if(errors.name.length === 0 && errors.lastName.length == 0 && errors.telephone.length == 0 && errors.email.length == 0){
      setOrderIdd(orderId)
      createOrder();
    }
  }

  return (
    <div className="container-fluid bg-warning h-100">
      <div className="row">
        <div className="col">
          <form className="m-auto text-center mt-5">
            <div className="mb-2 ">
              <label className="form-label">Nombre</label>
              <input
                type="text"
                className="form-control w-50 m-auto"
                id="exampleInputEmail1"
                onInput={(e) => {setName(e.currentTarget.value)}}
              />
            </div>
              {errors.name ? <p className="text-danger mt-0">{errors.name}</p> : null}
            <div className="mb-2">
              <label className="form-label">Apellido</label>
              <input
                type="text"
                className="form-control w-50 m-auto"
                id="exampleInputEmail1"
                onInput={(e) => {setLastName(e.currentTarget.value)}}
              />
            </div>
            {errors.lastName ? <p className="text-danger mt-0">{errors.lastName}</p> : null}
            <div className="mb-2">
              <label className="form-label">Telefono</label>
              <input
                type="text"
                className="form-control w-50 m-auto"
                id="exampleInputEmail1"
                onInput={(e) => {setTelephone(e.currentTarget.value)}}
              />
            </div>
            {errors.telephone ? <p className="text-danger mt-0">{errors.telephone}</p> : null}
            <div className="mb-2">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control w-50 m-auto"
                id="exampleInputPassword1"
                onInput={(e) => {setEmail(e.currentTarget.value)}}
              />
            </div>
            {errors.email ? <p className="text-danger mt-0">{errors.email}</p> : null}
            <button type="submit" className="btn btn-danger mb-4" onClick={getOrder}>
              Generar orden !
            </button>
          </form>
        </div>
        <div className="col m-auto ">
          <ResumeCart
            cart={cart}
            styleProps={{ width: "50rem" }}
            hidden={false}
          />
          <div className="text-center mt-3" style={{background:'#fffdc1'}}>
          {orderIdd}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
