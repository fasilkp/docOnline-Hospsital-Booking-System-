import React from 'react'
import { Container } from 'react-bootstrap';
import AdminHeader from '../AdminHeader/AdminHeader';
import HospitalSidebar from '../HospitalSidebar/HospitalSidebar';
import './AdminHome.css'

function hospitalHome() {
  return (
    <div className="admin-home">
      <AdminHeader />
      <div className="admin-main">
        <HospitalSidebar page={'dashboard'}/>
        <div className="admin-container">
          <Container fluid>

          <h5>Dashboard</h5>
          </Container>

        </div>
      </div>
    </div>
  )
}

export default HospitalHome