import React from 'react'
import { Link, Route, Routes, useParams, useNavigate } from 'react-router-dom'

const data = [
  {
    id: 0,
    category: "Mainboard",
    product_name: "MSI",
    price: 215,
    description: "MSI motherboard DDR5 Slot..."
  },
  {
    id: 1,
    category: "CPU",
    product_name: "AMD Ryzen R9 7950x",
    price: 599,
    description: "AMD Ryzen R9 7950x 5.0 Ghz..."
  },
  {
    id: 2,
    category: "GPU",
    product_name: "Nvidia RTX4090",
    price: 799,
    description: "Nvidia RTX4090 16Gb Graphic Card..."
  }
]

function Product() {

  return (
    <div className='container'>
      <div class="alert alert-primary" role="alert">
        <h3 className='text-center'>Welcome to Product Page</h3>
        <div className="container">
          <div className="row">
            {
              data.map((item) => {
                return (
                  <div key={item.id} className="col-md-6 mt-3">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">{item.category}</h5>
                        <p className="card-text">{item.product_name}</p>
                        <Link className="btn btn-primary" to={`/product/${item.id}`}>Detail</Link>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  )
}

function ProductDetail() {
  console.log("here1");

  let { id } = useParams();
  let arr = data.filter((res) => {
    return res.id == id
  });

  return (
    <div>
      <div class="alert alert-primary" role="alert">
        <h3>Kategory: {arr[0].category}</h3>
        <h3>Product: {arr[0].product_name}</h3>
        <h3>Description: {arr[0].description}</h3>
        <h3>Price: {arr[0].price}</h3>
      </div>
    </div>
  )
}

export default Product