import React from 'react';
import { Chart } from 'react-google-charts';
import usePsychic from '../hooks/UseGetPsychic';


export default function PsychicCredibility() {


  const post = usePsychic();


    return(
      <div className=''>
        {post.map((p) => (
          <div className='container' key={p.id}>
        <Chart
            chartType='PieChart'
            width='100%'
            height='30rem'
            data={[['Task', 'Statistics'], [`True - ${p.credibility}`, p.credibility], [`Attempt - ${p.attempt}`, p.attempt]]}
            options={{title: p.title, pieHole: 0.4, is3D: false}}
            />
            <hr />
            </div>
            ))}
      </div>
    )
}