import React, { useEffect, useState } from "react";


const JokesSection = () => {
  const [dadJokes, setDadJokes] = useState([])
  const [chuckJokes, setChuckJokes] = useState([])

  const URL = {
    'chuck': 'https://api.chucknorris.io/jokes/random',
    'dad': 'https://icanhazdadjoke.com/slack'
  }


  

  const getJoke = (type) => {

    fetch(URL[type])
      .then(response => response.json())
      .then(data => {
        switch (type) {
          case 'chuck':
            if (data.value.length < 150) {
              setChuckJokes([...chuckJokes, { id: generateKey(), joke: data.value }])
            } else {
              getJoke('chuck')
              console.log('joke too long')
            }
            break
          case 'dad':
            setDadJokes([...dadJokes, { id: generateKey(), joke: data.attachments[0].text }])
            break
          default:
            console.log('something wrong happend')
        }
      })
      .catch(error => {
        console.log('error ', type, error)
      });
  }


  const generateKey = (pre) => {
    return `${pre}_${new Date().getTime()}`;
  }
  useEffect(() => {
    // eslint-disable-next-line
    getJoke('dad')
    getJoke('chuck')
    getJoke('dad')
    getJoke('chuck')

    
  }, [])



  return (
    <div className="JokeSection">
      <div className="chuckJokes">
        <div style={{
          backgroundColor: 'pink',
          padding: '1rem',
          width: '9rem',
          borderRadius: '1rem'
        }}>
          <p style={{ paddingBottom: '1rem' }}>The jokes are from <a rel="noreferrer" target="_blank" href="https://api.chucknorris.io/">this api</a></p>
          <button onClick={() => getJoke('chuck')}
            style={{ marginRight: '1rem' }}>Add new joke</button>
          <button onClick={() => setChuckJokes([])}>Reset</button>
        </div>
        {
          chuckJokes.map(item => {
            return (
              <div id={item.id} className="JokeCard" onClick={() => setChuckJokes(chuckJokes.filter(task => task.id !== item.id))}>
                <p>{item.joke}</p>
              </div>)
          })
        }
      </div>
      <div className="dadJokes">
        <div style={{
          backgroundColor: 'pink',
          padding: '1rem',
          width: '9rem',
          borderRadius: '1rem'
        }}>
          <p style={{ paddingBottom: '1rem' }}>The jokes are from <a rel="noreferrer" target="_blank" href="https://icanhazdadjoke.com/">this api</a></p>
          <button onClick={() => {
            getJoke('dad');
          }}
            style={{ marginRight: '1rem' }}>Add new joke</button>
          <button onClick={() => setDadJokes([])}>Reset</button>

        </div>
        {
          dadJokes.map(item => {
            return (
              <div id={item.id} className="JokeCard" onClick={() => setDadJokes(dadJokes.filter(task => task.id !== item.id))}>
                <p>{item.joke}</p>
              </div>
            )
          })
        }
      </div>
    </div >
  )
}

export default JokesSection