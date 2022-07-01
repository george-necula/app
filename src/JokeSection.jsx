import React, { useState } from "react";
import ChuckNoris from './ChuckNoris'
import YoMama from "./YoMama";
const JokesSection = () => {
  const [chuckJokesCount, setChuckJokesCount] = useState(10)
  const [yoMamaCount, setYoMamaCount] = useState(10)

  const printJokes = (number, joke) => {
    let jokes = []
    for (let index = 0; index < number; index++) {
      jokes.push(joke)      
    }

    return jokes
  }

  return (
    <div className="JokeSection">
      <div className="chuckJokes">
        <div >
          <p>The jokes are from <a target="_blank" href="https://api.chucknorris.io/">this api</a></p>
        </div>
        {
          printJokes(chuckJokesCount,(<ChuckNoris />))
        }
      </div>
      <div >
        <div className="JokeCard">
        <p>The jokes are from <a target="_blank" href="https://yomomma.info/">this api</a></p>
        </div>
        {
          printJokes(yoMamaCount, (<YoMama />))
        }
      </div>
    </div>
  )
}

export default JokesSection