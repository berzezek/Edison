import {useEffect, useState} from 'react';
import axios from 'axios';
import { baseURL } from '../global';


export default function useGetUser() {

    const [sign, setSign] = useState({});
  
    useEffect(() => {
      axios({
        method: 'get',
        url: baseURL + 'auth/users/me/',
      }).then((response) => { setSign(response.data) }
      ).catch(err => {
      });
    }, []);
  
    return sign
}