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

  // const cart = [
  //   {
  //     id: 1,
  //     name: 'Producto 1',
  //     price: 100,
  //     category: 'Electronics',
  //     quantity: 1
  //   },
  //   {
  //     id: 2,
  //     name: 'Producto 2',
  //     price: 200,
  //     quantity: 2
  //   },
  //   {
  //     id: 3,
  //     name: 'Producto 3',
  //     price: 300,
  //     quantity: 3
  //   }
  // ]
  
  return (
    <>
        <div className="container-fluid bg-warning pt-3" style={{height:500}}>
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
        {/* <Footer/> */}
    </>
  )
}

export default Cart