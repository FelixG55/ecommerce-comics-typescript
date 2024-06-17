import  { useContext } from 'react'
import ProductsCart from './ProductsCart'
import { CartContext } from '../../Context/CartContext'
import ResumeCart from './ResumeCart'
import EmptyCart from './EmptyCart'

function Cart() {

  const context = useContext(CartContext)

  if (!context) {
    throw new Error("CartContext must be used within a CartContextProvider");
  }
  const { cart } = context;

  
  return (
    <>
        <div className="container-fluid bg-warning pt-3" style={{height:'auto'}}>
          <div className="row 1 m-5 ">
            <div className="col-8 ">
              {cart.length > 0 ?cart.map((product,pIndex)=>{
              return (
              <ProductsCart {...product} key={`cart${pIndex}`}/>
              )
              }):<EmptyCart/>}
            </div>
              <ResumeCart cart={cart} styleProps={{width:'25rem'}} hidden={true}/>
          </div>
        </div>
    </>
  )
}

export default Cart