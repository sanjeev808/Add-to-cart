import React,{useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { DLT ,ADD,REMOVE } from '../redux/actions/actions'

export default function CardsDetail() {


  const dispatch = useDispatch()

  //to add data thro quantity
  const send = (e) =>{
    // console.log(e)
dispatch(ADD(e));
  }

  //delete data thro delete button icon
  const dlt = (id) =>{
    dispatch(DLT(id))
    history("/")
}

//remove data quntity one by one 
const remove = (item) =>
{
  dispatch(REMOVE(item))
}
//id pass thro onclick menu buttons 
  const [data,setData] =useState([])
  console.log(data);
  const {id} = useParams()
  console.log(id)

  const getdata = useSelector((state) => state.cartreducer.carts)
  console.log(getdata)
  


  const compare =() =>
    {
        let comparedata =getdata.filter((e) => {
            return e.id == id 
          
        });
          setData(comparedata)
    }
    const history = useNavigate();
    useEffect(()=>{
      compare();
    },[id])


  return (
    <div className='container mt-2 '>
      <h2 className='text-center'>Item Detail Page</h2>
   
    <section className='container mt-5 ' >
      <div className='iteamsdetails p-5'>
        {
          data.map((ele) =>{
            console.log(ele)
            return(
              <>
               <div className="items_img " >
          <img  src={ele.imgdata} alt="" />
        </div>
        <div className="details">
          <Table>
            <tr>
              <td>
              <p><strong>Restaurant</strong> : {ele.rname}</p>
              <p><strong>Price</strong> : ₹ {ele.price}</p>
              <p><strong>Dishes</strong> : {ele.address} </p>
              <p><strong>Total</strong> : ₹ {ele.price * ele.qnty}</p>
              <div className='mt-5 d-flex justify-content-between align-items-center w-100' style={{background:"#ddd",color:"#111",cursor:"pointer"}}>
                <span style={{fontSize:24}} onClick={ele.qnty <= 1 ? dlt(ele.id) : ()=>remove(ele)}>-</span>
                <span style={{fontSize:22}}>{ele.qnty}</span>
                <span style={{fontSize:24}} onClick={()=>send(ele)}>+</span>

              </div>
              </td>
              <td>
              <p><strong>Rating</strong> : <span className='bg-success p-1 rounded-3'>{ele.rating}</span></p>
              <p><strong>Order Review</strong> : {ele.somedata} </p>
              <p onClick={() =>dlt(ele.id)}><strong>Remove</strong>: <i  class="fa-solid fa-trash-can ms-2 $red-500" style={{fontSize:'19px',color:"red",cursor:'pointer'}}></i> </p>
              {/* <p><strong>Total</strong> :₹ {ele.price * ele.qnty}</p> */}
              </td>
            </tr>
          </Table>
        </div>
              </>
            )
          })
        }
      </div>
    </section>
    </div>
  )
}
