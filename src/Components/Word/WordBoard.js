import React from 'react'

function WordBoard(props) {
    const {WordPartList,char} = props
    return (
        <div>
            {/* we provided the user with a _ sign at the length of the selected word
If the user enters the correct letter, the letter will be displayed, otherwise the _ sign will continue to be displayed. */}
            {
                 WordPartList.map((item, i) => {
                    return (
                        <div className="input-char" key = {i}>
                            {char.includes(item) ? item : "_"}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default WordBoard;
