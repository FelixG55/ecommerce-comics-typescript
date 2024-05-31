
// import { ProductContext } from '../../context/product'
// import { CartContext } from '../../context/productsCart'
// import { Link } from 'react-router-dom'


// function BannerCart() {

//     const{productE} = useContext(ProductContext)
//     const{cart} = useContext(CartContext)

    

//   return (
//     <div className='row mb-4 py-4'style={{background:'#fffdc1'}}>
//         <div className="col-5">
//             <div className="row">
//                 <div className="col text-end m-auto">
//                      <img src={productE.image} alt="" className="img-fluid rounded-5" style={{width:'50px'}}/>
//                 </div>
//                 <div className="col text-start border-end">
//                     <h6 className='text-warning mb-0'>Agregaste a tu carrito</h6> 
//                     {productE.name}
//                 </div>
//             </div>
//         </div>
//         <div className="col-4 text-start ms-4">
//             <div className="row">
//                 <div className="col-6">
//                     <h6>{cart.length} productos en su carrito:</h6> 
//                     <h6>$ {Intl.NumberFormat().format(cart.reduce((acc, product)=> acc + product.price * product.quantity, 0))}</h6>
//                 </div>
//                 <div className="col-5 m-auto">
//                 {cart.map((product)=>{
//                     return(
//                         <img src={product.image} alt="" className="img-fluid rounded-5" style={{width:'40px'}} key={`bImage${product.id}`}/>
//                         )
//                     })}
//                 </div>
//             </div>
//         </div>
//         <div className="col-2 text-start my-auto">
//             <Link to='/productsCart'>  
//             <button  type="button" className="btn btn-warning btn-md me-2">
//                 Ver carrito
//             </button>
//             </Link>
//             <button  type="button" className="btn btn-warning btn-md">
//                 Comprar
//             </button>
//         </div>
//     </div>
//   )
// }

// export default BannerCart