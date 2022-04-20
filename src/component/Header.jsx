import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Badge from '@material-ui/core/Badge'
import Nav from 'react-bootstrap/Nav'

import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';

import './Style.css'
import { NavLink } from 'react-router-dom'

export default function Header() {

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
                        <Badge badgeContent={4} color="primary"

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
                    <div className='cards-details d-flex justify-content align-item-center' style={{width:"18rem",padding:10}}>

                        <i className="fa fa-xmark position-absolute " onClick={handleClose} style={{top:2,right:20,fontSize:23,cursor:"pointer"}}></i>
                        <p className='fs-5'>Your carts is Empty</p>
                        <img src="./cart.gif" className='emptycart_img'style={{width:"5rem" ,padding:10}} alt="dsd" />
                    </div>
                </Menu>
            </Navbar>

        </>
    )
}
