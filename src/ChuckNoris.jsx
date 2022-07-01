import React, { useEffect, useState } from 'react'

const ChuckNoris = () => {
  const [joke, setJoke] = useState('wait...')

  useEffect(() => {
    fetch('https://api.chucknorris.io/jokes/random')
      .then(response => response.json())
      .then(data => setJoke(data.value));
  }, [])
  return (
    <div>
      <div className="JokeCard">
        <p>{joke}</p>
      </div>
    </div>
  )
}

export default ChuckNoris
