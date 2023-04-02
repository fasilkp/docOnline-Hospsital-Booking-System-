import React, { useState } from 'react'
import { Avatar, Button, Menu, MenuItem } from '@mui/material'
import './UserHeader.css'
import { Container } from 'react-bootstrap'
import axios from 'axios'
import { useDispatch } from 'react-redux'

function UserHeader() {
    const [open, setOpen]=useState(false)
    const [anchorEl, setAnchorEl]=useState(null)
    const dispatch= useDispatch()
    async function handleLogout(){
        await axios.get("/user/auth/logout");
        dispatch({type:"refresh"})
    }

  return (
      
        <Container fluid>
      <div className="user-header def-padding">
        <div className="user-header-item">
            <h5>DocOnline</h5>
        </div>
        <div className="user-header-item">
            <span>Home</span>
            <span>Hospitals</span>
            <span>Departmets</span>
            <span>Doctors</span>
            <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={(e)=>{setOpen(true); setAnchorEl(e.currentTarget);}}
      >
        <Avatar alt="Femy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 32, height: 32 }} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={()=>setOpen(false)}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem onClick={handleLogout} >Logout</MenuItem>
      </Menu>
        </div>

    </div>
    </Container>
  )

}

export default UserHeader