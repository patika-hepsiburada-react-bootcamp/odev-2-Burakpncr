import { useEffect, useState } from 'react'
import Restart from '../Restart/Restart'
import KeyBoard from '../KeyBoard/KeyBoard'
import WordBoard from '../Word/WordBoard'
import Figure from '../HangMan/Figure'
import './GameBoard.css'

function GameBoard(props) {
    const wordList = [ 
    { id: 1, word: "Library" },
    { id: 2, word: "Chair" },
    { id: 3, word: "Cupboard" },
    { id: 4, word: "Mirror" },
    { id: 5, word: "Wardrobe" },
    { id: 6, word: "Fridge" },
    { id: 7, word: "Dishwasher" },
    { id: 8, word: "Toaster" },
    { id: 9, word: "Spoon" },
    { id: 10, word: "Knife" },
    { id: 11, word: "Plate" }]
    
    const [char, setchars] = useState([]) //List of correct letters received from user
    const [wrongs, setWrongs] = useState(0) //Incorrect number of letters entered by the user
    const [complete, setComplete] = useState(1) //Number of correct letters entered by the user
    const [word, setWord] = useState(wordList[Math.floor(Math.random() * wordList.length)]) //A random word selection from the Word List
    const [start, setStart] = useState(true)
    const [WordPartList, setWordPartList] = useState([])  //shredded list of randomly selected word
    let charList = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];

    useEffect(() => {
        setWordPartList(word.word.toUpperCase().split(""))
    }, [word, start])

    return (

        <div>
            {
                start ? <div className="Word-Container">
                    <div className="Gameboard-Wrapper">
                        <div className="input-list">
                        {/* The randomly selected word is divided into a list and the user is given space as the length of the list. */}
                            <WordBoard
                                WordPartList={WordPartList}
                                char={char}
                            />

                        </div>
                        <div className="char-list">
                        {/* the user was given buttons as many as the specified letter */}
                            <KeyBoard
                                wrongs={wrongs}
                                setComplete={setComplete}
                                setchars={setchars}
                                setStart={setStart}
                                setWrongs={setWrongs}
                                charList={charList}
                                WordPartList={WordPartList}
                                char={char}
                                complete={complete}
                            />
                        </div>
                    </div>
                    <div className="Figure-Wrapper">
                        <Figure
                            wrongs={wrongs}
                        />
                    </div>
                </div>
                    :
                    <div>
                        {/* allowed the user to restart the game when the user knows the word correctly or uses the given right to make a mistake */}
                        <Restart
                            wrongs={wrongs}
                            setComplete={setComplete}
                            setchars={setchars}
                            setStart={setStart}
                            setWrongs={setWrongs}
                            setWord={setWord}
                            wordList={wordList}
                            word={word}
                        />
                    </div>
            }

        </div>
    )
}

export default GameBoard
