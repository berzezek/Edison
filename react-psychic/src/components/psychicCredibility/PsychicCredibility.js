import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';
import axios from 'axios';
import { baseURL } from '../global';
// import usePsychic from '../hooks/UseGetPsychic';


export default function PsychicCredibility() {


  const [post, setPost] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: baseURL + "api/v1/psychic/",
    }).then((response) => {
      setPost(response.data);
    }).catch(err => {
    });
  }, []);



    return(
      <div className='mt-5'>
        {post.map((p) => (
          <div className='container' key={p.id}>
            <h3>Statistic for psychic: {p.title}</h3>
            <span>Attempt - {p.attempt} | True - {p.credibility}</span>
        <Chart
            chartType='PieChart'
            width='100%'
            height='30rem'
            data={[['Task', 'Statistics'], [`True - ${p.credibility}`, p.credibility], [`False - ${p.attempt - p.credibility}`, p.attempt - p.credibility]]}
            options={{pieHole: 0.4, is3D: false}}
            />
            <hr />
            </div>
            ))}
      </div>
    )
}