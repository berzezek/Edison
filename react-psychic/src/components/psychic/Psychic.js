import axios from 'axios';
import React, { useState } from 'react';
import usePsychic from '../hooks/UseGetPsychic';
import useGetUser from '../hooks/useGetUser';
import { baseURL } from '../global';


export default function Psychic() {

    const [plan, setPlan] = useState(false);
    const [psyNumber, setPsyNumber] = useState();
    const [userNumber, setUserNumber] = useState(10);
    const psychicArray = usePsychic();
    const user = useGetUser();

    const formDataPsy = {
        user: user.id,
        number_user: userNumber
    };

    const toGuess = () => {
        let psychicNumbers = [];
        setPlan(true);
        psychicArray.forEach(element => {
            const psy_random = Math.ceil(Math.random() * (99 - 9) + 9);
            psychicNumbers.push({key: element.title, value: parseInt(psy_random)});
        });
        setPsyNumber(psychicNumbers);
    }

    
    const enterUserNunber = () => {
        if (userNumber > 9 && userNumber < 100) {
        setPlan(false);
        
            if (psychicArray.length > 0 && psyNumber) {
            axios({
                method: 'post',
                url: baseURL + 'api/v1/usernumbercreate/',
                data: formDataPsy,
                }).then(res => {
                    const userNumberID = res.data.id;
                    if (res.statusText === 'Created') {
                        for (let i=0; i<psychicArray.length; i++) {

                            axios({
                                method: 'post',
                                url: baseURL + 'api/v1/psychicnumbercreate/',
                                data: {
                                    user_number: userNumberID, 
                                    psychic: psychicArray[i].id, 
                                    number_psychic: psyNumber[i].value
                                }
                            });
                            axios({
                                method: 'put',
                                url: baseURL + `api/v1/psychic/${psychicArray[i].id}/`,
                                data: {
                                    title: psychicArray[i].title, 
                                    credibility: (psyNumber[i].value === parseInt(userNumber) ? psychicArray[i].credibility += 1 : psychicArray[i].credibility),
                                    attempt: psychicArray[i].attempt += 1
                                    }
                            })
                        }
                    }
                }).then(alert('???????? ?????????????????????????????? ???????? ???????????? ??????????????????!'))
            }
        } else {alert('Digit must be two-digit')}
    } 
    if (user.username) {
        return(
            
            <div className='container text-center mt-5'>

                {!plan ?
                <div className='bg-light rounded shadow p-5'>
                    <p>?????????????????? {user.username} ?????????????????? ???????????????????? ??????????</p>
                     <p>?? ?????????????????? ????????????????????????!</p>
                    <button className='ms-3 shadow btn btn-primary' onClick={toGuess}>?? ??????????????</button>
                </div>
                :
                <>
                    <div className='my-5 bg-light rounded shadow p-5'>
                        <p>???????? ???????????????????????????????? ?????????????????????? ????????????????????????, ?????? ???? ?????????? ???????????????? ?????????????????? ??????????:</p>
                        {psyNumber.map((e) => (
                            <span key={e.key} className='ms-3 display-6 bg-dark text-white rounded shadow'>{e.value}</span>
                        ))}
                    </div>
                    <div className='d-flex bg-light rounded shadow p-5 justify-content-center'>

                        <input 
                        type='number'
                        className='form-control w-25' 
                        placeholder='?????????????? ???????? ??????????'
                        required
                        min='10'
                        max='99'
                        onChange={(e) => setUserNumber(e.target.value)}
                        />

                        <input 
                        value='????????'
                        className='btn btn-primary ms-2'
                        type='button'  
                        onClick={enterUserNunber}/>
                    </div>
                </>}
                
                
                
            
            </div>
        )
    } else {
        return (
            <div className='container mt-5 w-50 text-center shadow rounded p-3'>
                <h2>Please sign in or register</h2>
            </div>
        )
    }
}