import React from 'react';
import { Chart } from 'react-google-charts';
import usePsychic from '../hooks/UseGetPsychic';


export default function PsychicStatistic() {


  const post = usePsychic();
  console.log(post);


    return(
      <div className=''>
        {post.map((p) => (
          <div className='container' key={p.id}>
        <Chart
            chartType='PieChart'
            width='100%'
            height='30rem'
            data={[['Task', 'Statistics'], ['True', 20], ['False', 30]]}
            options={{title: p.title, pieHole: 0.4, is3D: false}}
            />
            <hr />
            </div>
            ))}
      </div>
    )
}