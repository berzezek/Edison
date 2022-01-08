import {useEffect, useState} from 'react';
import axios from 'axios';
import { baseURL } from '../global';



export default function usePsychic() {

  const [post, setPost] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: baseURL + "api/v1/psychic/",
    }).then((response) => {
      setPost(response.data);
    }).catch(err => {
      console.log(err)
    });
  }, []);

  return (post ? post : null)
}