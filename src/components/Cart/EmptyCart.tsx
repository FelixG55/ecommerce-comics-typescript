

function EmptyCart() {
  return (
    <div className='card list-group'>
         <ul className="list-group list-group-flush" >
            <li className="list-group-item" style={{background:'#fffdc1'}}>
            
                <h2>! Empieza a comprar !</h2>
            </li>
            <li className="list-group-item" style={{background:'#fffdc1'}}>
            <i className="bi bi-basket"></i>
            </li>
            <li className="list-group-item" style={{background:'#fffdc1'}}>

            </li>
         </ul>
    </div>
  )
}

export default EmptyCart