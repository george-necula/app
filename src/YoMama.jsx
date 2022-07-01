import React, { useEffect, useState } from 'react'

const YoMama = () => {
  const [joke, setJoke] = useState('wait...')
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
  const jokesUrl = 'https://api.yomomma.info/'
  useEffect(() => {
    fetch(proxyUrl + jokesUrl)
      .then(response => response.json())
      .then(data => setJoke(data.joke));
  }, [])
  return (
    <div>
      <div className="JokeCard">
        <p>{joke}</p>
      </div>
    </div>
  )
}

export default YoMama
