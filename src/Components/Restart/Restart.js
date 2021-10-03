import React from 'react'
import './Restart.css'

function Restart(props) {
    const { setWrongs, setComplete, setStart, setWord, setchars,wordList, wrongs } = props;
    const TryAgain = () => {
        setWrongs(0)
        setComplete(1)
        setStart(true)
        setWord(wordList[Math.floor(Math.random() * wordList.length)])
        setchars([])
    }
    return (
        <div className="Restart-Container" >
            {/* If the incorrectly entered answer list is greater than 5, the user loses,if not We reported that he won. */}
            {wrongs > 5 ?
                <div>
                    <h1 className="p">Game Over </h1>
                    <button className="over-button btn btn-outline-danger" onClick={TryAgain}> Try Again </button> </div>
                :
                <div>
                    <h1 className="p">You Win</h1>
                    <button className="over-button btn btn-outline-success" onClick={TryAgain}> Play Again </button>
                </div>}
        </div>
    )
}

export default Restart
