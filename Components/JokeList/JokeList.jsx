import React, { useState, useEffect } from 'react'
import axios from 'axios';

function JokeList() {
  const [joke, setJoke] = useState([]);
  const [error, setError] = useState(null)
  const [headText, setText] = useState('Want to hear a joke from your old man?')
  const URL = 'https://icanhazdadjoke.com/'

    const fetchJoke = async () => {
      try{
        const response = await axios.get(URL, { headers: { Accept: "application/json" } });
        setJoke(response.data);
        setText('Want to hear another one?')
        } catch (err){
          setError(err.message);
        }
    }

    // wanna hear a joke from your old man? (img is neutral)
    // Would you like to hear another joke (img src is neutral )
    //  if yes fetch joke (img src dad laughing)
    //  if no stop

   const handleClick = () => {
    fetchJoke()

   }

    
    useEffect(()=>{
      fetchJoke();
    }, []);
    


  if (error) console.log(`Error: ${error}`)


  return (
    <div className='Joke-cont'>
        <img src='../public/neutral-face-removebg-preview.png' alt="dad neutral face"/>
        {/* <h2>Wanna hear a joke from your old man?</h2> */}
        <h2>{headText}</h2>
        
        {/* Joke here  */}
        <p>{joke.joke}</p>
        <button className='btn' onClick={handleClick}>Get New Joke</button>
    
    </div>

  )
}

export default JokeList