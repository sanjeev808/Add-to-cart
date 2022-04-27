import React ,{useState} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardData from './CardData.jsx'
import './Style.css'
import { useDispatch } from 'react-redux'
import { ADD } from '../redux/actions/actions.jsx'


export default function Cards() {
  const  [data,setData] = useState(CardData)
  console.log(data)

  const dispatch = useDispatch()

  const send = (e) =>{
    // console.log(e)
dispatch(ADD(e));
  }
  return (
    <div className='container mt-3'>
      <h2 className='text-center'>Food Carts with Redux Project</h2>
      <div className='row d-flex align-item center justify-content-center'>
{
  data.map((element,id ) =>{
    return(<>  
        <Card style={{ width: '22rem' ,border:'none'}} className='mx-2 mt-4 card_style'>
  <Card.Img variant="top" src={element.imgdata} style={{height:'16rem'}} />
  <Card.Body>
    <Card.Title>{element.rname}</Card.Title>
    <Card.Text>
    Price : ₹{element.price}
    </Card.Text>
    <div className='button_div d-flex justify-content-center'>
    <Button variant="primary" className='col-lg-12' onClick={() => send(element)}>Add to cart</Button>
    </div>
  </Card.Body>
</Card> 
</>)

    })
  } 
      
      </div>
    </div>
  )
}
