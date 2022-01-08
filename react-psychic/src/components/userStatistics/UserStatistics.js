import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { baseURL } from '../global';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useGetUser from '../hooks/useGetUser';


export default function UserStatistic() {

    let numeric = 0

    const [userNumber, setUserNumber] = useState([]);
    const user = useGetUser();
    

    useEffect(() => {
      axios({
        method: "get",
        url: baseURL + "api/v1/usernumber/",
      }).then((response) => {
        setUserNumber(response.data);
      }).catch(err => {
        console.log(err)
      });
    }, []);
    return (
      
      <div className='container mt-5 w-50 text-center shadow rounded p-3'>
          { user.username ? 
          <>
          <h2 className='my-3'>Welcome {user.username}</h2>
          <Table striped bordered hover>
            <thead>
                <tr>
                <th>№</th>
                <th>Number</th>
                </tr>
            </thead>
            <tbody>
                {userNumber.map((e) => (
                <tr key={e.id}>
                <td>{numeric += 1}</td>
                <td><Link to={{ pathname: `/psychicnumber/${e.number_user}`, fromDashboard: false }} >{e.number_user}</Link></td>
                </tr>
                ))}
                
            </tbody>
            </Table>
            </>
            :
            <h2>Please sign in or register</h2>
            }
      </div>
    );
  }
  