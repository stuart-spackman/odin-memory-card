import { useState, useEffect } from 'react'

import '../styles/App.css'
import PokeCard from './PokeCard'

export default function App() {
    const [currentScore, setCurrentScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [alreadyClicked, setAlreadyClicked] = useState([]);

    const mapper = [];
    for (let i = 1; i <= 12; i++) {
        while (mapper.length < 12) {
            let randNum = Math.floor(Math.random() * 12) + 1;
            if (!mapper.includes(randNum)) {
                mapper.push(randNum);
            }
        }
    }
    return (
        <>
            <div className="title">
                <h1>Pokemon Memory Game (made using React!!)</h1>
            </div>
            <div className="score">
                <h2>Current Score: {currentScore}</h2>
                <h2>Best Score: {bestScore}</h2>
            </div>
            <div className="body">
                {mapper.map((number) => {
                    return (
                        <PokeCard
                            number={number}
                            clickFunction={
                                () => {
                                    console.log('in click function for button # ', number)
                                    if (!alreadyClicked.includes(number)) {
                                        const newArr = alreadyClicked;
                                        newArr.push(number);
                                        setAlreadyClicked(newArr);
                                        const newScore = currentScore + 1;
                                        setCurrentScore(newScore);
                                        if (newScore > bestScore) {
                                            setBestScore(newScore);
                                        }

                                    } else {
                                        setAlreadyClicked([]);
                                        setCurrentScore(0);
                                    }

                                }
                            }
                            key={number}
                        />
                    )
                })}
            </div>
        </>
    )
}