import React, {useState} from 'react';
import axios from 'axios';
// import MuiAlert from '@material-ui/lab/Alert';
import { baseURL } from '../global';



export default function Auth() {

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value})

    const login = async () => {
        await axios.post(
            baseURL + 'auth/token/login/', formData
            ).then(res => {
            if (res.statusText === 'OK') {
                axios.defaults.headers.common['Authorization'] = `Token ${res.data.auth_token}`;
                alert('You are logged in');
                }
            }).catch(err =>{alert(err.message)})
    }

    const register = async () => {
        await axios.post(
            baseURL + 'auth/users/', formData
            ).then(res => {
            if (res.statusText === 'Created') {
                alert(`Username: ${res.data.username} created`)
            }}).catch((err) => {
                alert(err.message)
            })
    }

    
    return(
        <div className='container w-50 my-5 bg-light rounded shadow p-5'>

            <h4 className='text-center mb-3'>Sign or Register</h4>

            <input 
            className='form-control mb-3'
            type='text'
            name='username'
            value={formData.username} 
            placeholder='Enter name' 
            onChange={e => onChange(e)}
            required
            />

            <input
            className='form-control mb-3'
            type='password' 
            name='password'
            value={formData.password}
            placeholder='Password' 
            onChange={(e) => onChange(e)}
            required
            />
            <div className='d-flex justify-content-around'>
                <input 
                type='button' 
                onClick={login} 
                value='Login' 
                className='btn btn-outline-primary'
                />

                <input 
                type='button' 
                onClick={register} 
                value='Register' 
                className='btn btn-outline-primary'
                />
            </div>
        </div>
    )
}
