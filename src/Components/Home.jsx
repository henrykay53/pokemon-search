import React from 'react'
import { useState, useEffect } from 'react';
import logo from '../images/logo.png'

const Home = () => {

    const [search, setSearch] = useState('');

    const [name, setName] = useState([]);
    // const [japaneese, setJapaneese] = useState([]);
    // const[power, setPower] = useState('');

    // const  handleSearch = ()=> {
    //     if(search.length > 0) {
    //         name.filter((n) => {
    //             // console.log(n.name);
    //             return n.name.match(search)
    //         })

    //     }
      
    // }

    // checkPokemon = ()=> {
    //     setSearch()
    // }

    const team = [];

    const createTeam = ()=> {

      

       

       
        console.log(team);

    }


    const deleteFromTeam = ()=> {
        name.filter((n) => {
            return team.pop(n)
        })
        console.log(team);
    }



    const url = 'https://pokeapi.co/api/v2/ability';

    useEffect(() => {

        fetch(url, {
            method: "GET",
    
            headers: {
    
                'Content-Type': 'application/json',
                'accept': '*/*',
    
            },
    
    
        })
            .then((response) => response.json())
            .then((data) => {
                setName(data.results);
               
            })
            .catch((error) => console.log(error));
    
      }, []);


  


    return (
        <div>

            <div className='mx-auto mt-10 w-[20%] lg:w-[5%] lg:h-[5%]'>
                <img src={logo} alt="Pokemon ball" />


            </div>



            <div className='flex justify-center'>
                <input onChange={e => setSearch(e.target.value)} value={search} type="text" placeholder='Enter pokemon name' className=' p-3 lg:p-4 mt-10 w-[100%] mx-4 lg:w-[50%] rounded-lg text-lg  ring-black ring-2 outline-red-700' />
            </div>

           

            {name.filter((item) => {
                return search.toLowerCase() === ''
                ? item
                : item.name.toLowerCase().includes(search)
            }).map(n => {
                return (

                    <div className=''>
                        <div className=' bg-gray-200 p-10 w-[90%] lg:w-[50%] mx-auto my-5 rounded-lg shadow-lg'>
                            <p className='text-lg font-bold flex'>Pokemon Name: {n.name.toUpperCase()}</p>

                            <div class='flex gap-2 mt-10 items-center '>

                                <button onClick={createTeam} className='bg-green-300 hover:bg-green-500 p-2 font-bold rounded-sm'>Add to team</button>
                                <button onClick={deleteFromTeam} className='bg-red-500 hover:bg-red-600 p-2 font-bold rounded-sm'>Remove from team</button>




                            </div>

                        </div>
                    </div>






                )
            })}
            {/* <p className='text-lg font-bold'>Pokemons Ability: {power}</p> */}





        </div>
    )
}

export default Home