import React, { useState, useEffect } from 'react'
import axios from 'axios';

function JokeList() {
  const [joke, setJoke] = useState([]);
  const [error, setError] = useState(null)
  const URL = 'https://icanhazdadjoke.com/'
  
  
    const fetchJoke = async () => {
      try{
        const response = await axios.get(URL, { headers: { Accept: "application/json" } });
        setJoke(response.data);
        } catch (err){
          setError(err.message);
        }
    }
    
    useEffect(()=>{
      fetchJoke();
    }, []);
    


  if (error) console.log(`Error: ${error}`)


  return (
    <div className='Joke-cont'>
        <img src='../public/neutral-face-removebg-preview.png' alt="dad neutral face"/>
        <h2>Wanna hear a joke from your old man?</h2>
        
        {/* Joke here  */}
        <p>{joke.joke}</p>
        <button className='btn' onClick={fetchJoke}>Get New Joke</button>
    
    </div>

  )
}

export default JokeList