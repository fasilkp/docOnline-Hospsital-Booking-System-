import axios from 'axios';
import * as React from 'react';
import { useState } from 'react';
import { Container, Dropdown, Table } from 'react-bootstrap';
import { RiMore2Fill } from 'react-icons/ri';
import AdminHeader from '../AdminHeader/AdminHeader';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

export default function HospitalRequests() {
  const [hospitalList, setHospitalList] = useState([])
  const [refresh, setRefresh]=useState(false)
  React.useEffect(() => {
    (
      async function () {
        try {
          const { data } = await axios.get("/admin/hospital/requests")
          if (!data.err) {
            setHospitalList(data.doctorRequests)
          }

        } catch (err) {
          console.log(err)
        }
      }
    )()
  }, [refresh])
  const acceptRequest=async (e)=>{
    e.preventDefault();
    const {data}= await axios.post("/admin/hospital/accept", {email});
    if(!data.err){
      setRefresh(!refresh)
    }else{
      alert("something went wrong")
    }
  }
  const rejectRequest= async(e)=>{
    e.preventDefault();
  }
  return (
    <div className="admin-home">
      <AdminHeader />
      <div className="admin-main">
        <AdminSidebar page={'hospital request'} />
        <Container fluid>

          <div className="admin-container">
            <h5>Hospital Requests</h5>
            <Table className='table-main' responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>option</th>
                </tr>
              </thead>
              <tbody>
                {
                  hospitalList.map((item, index) => {
                    return <tr>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.mobile}</td>
                      <td className='option-btn'>
                        <Dropdown>
                          <Dropdown.Toggle variant="success" id="dropdown-basic">
                            <RiMore2Fill />
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="#" onClick={(e)=>acceptRequest(e, item.email)}>Accept</Dropdown.Item>
                            <Dropdown.Item href="#" onClick={(e)=>rejectRequest(e, item.email)}>Reject</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </td>
                    </tr>
                  })
                }

              </tbody>
            </Table>

          </div>
        </Container>
      </div>
    </div>

  );
}