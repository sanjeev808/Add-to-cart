import React from 'react'
import Table from 'react-bootstrap/Table'

export default function CardsDetail() {
  return (
    <div className='container mt-2'>
      <h2 className='text-center'>Item Detail Page</h2>
   
    <section className='container mt-5' >
      <div className='iteamsdetails'>
        <div className="items_img">
          <img src="https://b.zmtcdn.com/data/pictures/3/18514413/0a17b72e9fec52a3ca736f4c2ea3646f_o2_featured_v2.jpg" alt="" />
        </div>
        <div className="details">
          <Table>
            <tr>
              <td>
              <p><strong>Restaurant</strong> : Massala Theoryy</p>
              <p><strong>Price</strong> : ₹300</p>
              <p><strong>Dishes</strong> : North India, Biryani, Mughlai </p>
              <p><strong>Total</strong> : ₹300</p>
              </td>
              <td>
              <p><strong>Rating</strong> : <span className='bg-success p-1 rounded-3'>3.5 ★</span></p>
              <p><strong>Order Review</strong> : 1175 + order placed from here recently </p>
              <p><strong>Remove</strong>: <i class="fa-solid fa-trash-can ms-2 $red-500" style={{fontSize:'19px',color:"red",cursor:'pointer'}}></i> </p>
              <p><strong>Total</strong> : 300</p>
              </td>
            </tr>
          </Table>
        </div>
      </div>
    </section>
    </div>
  )
}
