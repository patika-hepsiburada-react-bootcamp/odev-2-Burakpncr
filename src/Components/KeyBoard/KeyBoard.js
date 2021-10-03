import React from 'react'
import './KeyBoard.css'

function KeyBoard(props) {
    const { setWrongs, setComplete, setStart, setchars, wrongs, charList, complete, char, WordPartList } = props;

    var unique = WordPartList.filter(function (itm, i, a) { 
        return i == a.indexOf(itm); //Retrieval of different elements in the list has been provided.
    });

    const keyClick = (chars) => {
        if (WordPartList.includes(chars)) { //We check if the letter entered by the user is in the fragmented word list.
            if (!char.includes(chars)) { //add if letter has not been added before
                setchars(c => [...c, chars])
            }
            setComplete(complete + 1) //Increased the number of correct answers given by the user
            if (complete == unique.length) { 
                setStart(false) //If the number of correct answers given and the number of different items in the list are equal, the start is updated.
            }
        }
        else {
            setWrongs(wrongs + 1) //If the user entered the wrong letter, we increased the number of wrong answers.
            if (wrongs >= 5) { //If the number of wrong answers is more than 5, the game is over.
                setStart(false)
            }
        }
    }
    return (
        <div>
            {
                charList.map((item) => {
                    return (
                        <div className="word"> 
                        <button type="button" 
                        className="CharButton btn btn-outline-dark" 
                        key = {item}
                        value ={item}
                        disabled = {char.includes(item)}
                        onClick={() => keyClick(item)}>{item}</button> </div>
                    )
                })

            }
        </div>
    )
}

export default KeyBoard
