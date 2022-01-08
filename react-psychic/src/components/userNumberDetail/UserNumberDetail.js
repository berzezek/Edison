import React, {useState, useEffect} from 'react';
import { Table } from 'react-bootstrap';
import { baseURL } from '../global';
import axios from 'axios';
import { useParams} from 'react-router-dom';



export default function UserNumberDetail() {

    let params = useParams();
    let num = params.num
    
    const [userStatistic, setUserStatistic] = useState([]);

    console.log(userStatistic);

    useEffect(() => {
        axios({
                method: 'GET',
                url: baseURL + `api/v1/psychicnumber/?num=${num}`
            }).then(response => {
                setUserStatistic(response.data)
            })

    }, [num])


    return(
        <div className='container w-50 text-center shadow rounded bg-light p-5 mt-5'>
            <h4 className='mb-3'>Statistic for {num}</h4>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>№</th>
                    <th>Number</th>
                    </tr>
                </thead>
                <tbody>
                    {userStatistic.map((e) => (
                    <tr key={e.id}>
                    <td>{e.psychic.title}</td>
                    <td>{e.number_psychic}</td>
                    </tr>
                    ))}
                    
                </tbody>
            </Table>

        </div>
        
    )
}