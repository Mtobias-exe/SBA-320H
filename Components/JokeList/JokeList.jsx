import React, { useState, useEffect } from 'react'
import axios from 'axios';
import "./JokeList.css"

function JokeList() {
  const [joke, setJoke] = useState([]);
  const [error, setError] = useState(null);
  const [headText, setText] = useState('Want to hear a joke from your old man?');
  const [initialLoad, setInitialLoad] = useState(true);
  const [showJoke, setShowJoke] = useState(false);
  const [image, setImage] = useState('../public/neutral-face-removebg-preview.png')
  const [stop, setStop] = useState(false)
  const URL = 'https://icanhazdadjoke.com/'

    const fetchJoke = async () => {
      try{
        const response = await axios.get(URL, { headers: { Accept: "application/json" } });
        setJoke(response.data);
        if (!initialLoad){
          setText('Want to hear another one?')
          setShowJoke(true)
          setImage('../public/dad-laughing-removebg-preview.png')
        }
        setInitialLoad(false)
        } catch (err){
          setError(err.message);
        }
       
    }
    // wanna hear a joke from your old man? (img is neutral)
    // Would you like to hear another joke (img src is neutral )
    //  if yes fetch joke (img src dad laughing)

   const handleClick = () => {
    fetchJoke()
   }

   const handleStop = () =>{
    setStop(true)
    setShowJoke(false)
    setText("Alright bud, gonna head out and get milk")
    setImage('../public/sad-dad-removebg-preview.png')
   }

    useEffect(()=>{
      fetchJoke();
    }, []);
    
  if (error) console.log(`Error: ${error}`)

  return (
    <div className='Joke-page'>
        <img src={image} alt="dad reaction"/>
        <div className='joke-cont'>
          <h2 className='Dialogue'>{headText}</h2>
          {/* Joke here  */}
          {showJoke && <p className='jokeText'>{joke.joke}</p>}
          <button className='btn' onClick={handleClick}>Get New Joke</button>
          <button className='btn-no' onClick={handleStop}>No thanks</button>
        </div>
    </div>

  )
}

export default JokeList