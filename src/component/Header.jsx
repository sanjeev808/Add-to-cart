import React, { useState ,useEffect } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Badge from '@material-ui/core/Badge'
import Nav from 'react-bootstrap/Nav'
import Menu from '@material-ui/core/Menu';
import Table from 'react-bootstrap/Table'
import { DLT } from '../redux/actions/actions'

import './Style.css'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

export default function Header() {
    const [price , setPrice ] =useState(0)

    const getdata = useSelector((state) => state.cartreducer.carts)
    console.log(getdata);
    const dispatch =useDispatch()

    const dlt = (id) =>{
        dispatch(DLT(id))
    }
    
    // set price data to calculate all carts price 
    const total = () =>
    {
        let price = 0;
        getdata.map((ele,k)=>{
            price =ele.price*ele.qnty+price
        });
        setPrice(price)
    }
    useEffect (()=>{
        total();
    },[total])


    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Navbar bg="dark" variant="dark" className='py-3'>
                <Container>
                    <NavLink to="/" className="text-decoration-none text-white fs-4 ">Food Cart</NavLink>
                    <Nav className="me-auto">
                        <NavLink to="" className='text-decoration-none text-white fs-5 mx-5'>Home</NavLink>
                    </Nav>
                    <div className='icon-shop'>
                        <Badge badgeContent={getdata.length} color="primary"

                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}

                        >
                            <i className="fa-solid fa-cart-shopping"></i>
                        </Badge>

                    </div>
                </Container>

                <Menu
                    id="basic-menu" className='mt-5'
                    // aria-labelledby="demo-positioned-button"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': "basic-menu"
                    }}

                >
                    {
                        getdata.length ?
                            <div className="card_details" style={{ width: "24rem", padding: 10 }}>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Photo</th>
                                            <th>Restaurant Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            getdata.map((e) => {
                                                return (
                                                    <>
                                                        <tr>
                                                            <td>
                                                                <NavLink to={`/cart/${e.id}`} onClick={handleClose}>
                                                                <img src={e.imgdata} alt="" className='w-50' />
                                                                </NavLink>
                                                            </td>
                                                            <td>
                                                                <p>{e.rname}</p>
                                                                <p>Price : ₹{e.price}</p>
                                                                <p>Quantity : {e.qnty}</p>
                                                                <p onClick={() =>dlt(e.id)} className='text-danger fs-5' > <i style={{ cursor: "pointer" }} className='fas fa-trash smalltrash'></i></p>
                                                            </td>
                                                            <td className='text-danger fs-5 mt-5'  ><p onClick={() =>dlt(e.id)} > <i style={{ cursor: "pointer" }} className='fas fa-trash largetrash'  ></i>
                                                            </p></td>
                                                        </tr>
                                                    </>
                                                )
                                            })

                                        }
                                        <p className='text-center'>Total : ₹ {price}</p>
                                    </tbody>
                                </Table>
                            </div> : <div className='cards-details d-flex justify-content align-item-center' style={{ width: "18rem", padding: 10 }}>

                                <i className="fa fa-xmark position-absolute " onClick={handleClose} style={{ top: 2, right: 20, fontSize: 23, cursor: "pointer" }}></i>
                                <p className='fs-5'>Your carts is Empty</p>
                                <img src="./cart.gif" className='emptycart_img' style={{ width: "5rem", padding: 10 }} alt="dsd" />
                            </div>
                    }

                </Menu>
            </Navbar>

        </>
    )
}
