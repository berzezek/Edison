import axios from 'axios';
import React, { useEffect, useState } from 'react';
import usePsychic from '../hooks/UseGetPsychic';
import useGetUser from '../hooks/useGetUser';
import { baseURL } from '../global';


export default function Psychic() {

    const [plan, setPlan] = useState(false);
    const [psyNumber, setPsyNumber] = useState();
    const [userNumber, setUserNumber] = useState();

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
            const psy_random = Math.ceil(Math.random() * 99);
            psychicNumbers.push({key: element.title, value: parseInt(psy_random)});
        });
        setPsyNumber(psychicNumbers);
    }

    const enterUserNunber = () => {
        setPlan(false);
        console.log(formDataPsy);
        
        axios({
            method: 'post',
            url: baseURL + 'api/v1/usernumbercreate/',
            data: formDataPsy,
            });

        if (psychicArray.length > 0 && psyNumber) {
            let formDataPsychicNumber = [];
            for (let i = 0; i < psychicArray.length; i++) {
                // console.log(psyNumber[i].value);
                // console.log(psychicArray[i].id);
                formDataPsychicNumber.push({user_number: userNumber, psychic: psychicArray[i].id, number_psychic: psyNumber[i].value});
            };

            for (let i = 0; i < psychicArray.length; i++) {
                console.log(formDataPsychicNumber[i]);
                axios({
                    method: 'post',
                    url: baseURL + 'api/v1/psychicnumbercreate/',
                    data: formDataPsychicNumber[i],
                    })
                }
        }
    }

    return(
        <div className='container text-center mt-5'>
            {!plan ?
            <div className='bg-light rounded shadow p-5'>
                <p>Загадайте двузначное число и призовите экстрасенсов!</p>
                <button className='ms-3 shadow btn btn-primary' onClick={toGuess}>Я загадал</button>
            </div>
            :
            <>
                <div className='my-5 bg-light rounded shadow p-5'>
                    <p>Наши глубокоуважаемые экстрасенсы предполагают, что Вы могли загадать сдедующие числа:</p>
                    {psyNumber.map((e) => (
                        <span key={e.key} className='ms-3 display-6 bg-dark text-white rounded shadow'>{e.value}</span>
                    ))}
                </div>
                <div className='d-flex bg-light rounded shadow p-5 justify-content-center'>

                    <input 
                    type='number'
                    className='form-control w-25' 
                    placeholder='Введите ваше число' 
                    onChange={(e) => setUserNumber(e.target.value)}
                    />

                    <input 
                    value='Ввод'
                    className='btn btn-primary ms-2'
                    type='button'  
                    onClick={enterUserNunber}/>
                </div>
            </>
            }
        </div>
    )
}