import React, { useState } from 'react'

const Task = () => {

    const data = ["Karan", "alpesh", "harsh", "aniket", "jay", "manali", "mishva", "nikunj"]

    const [name, setname] = useState(data[0]);
    const [number, setnumber] = useState(0)

    const changeValue = () => {
        if (number === data.length - 1) {
            setname(data[0]);
            setnumber(0)
        } else {
            setname(data[number + 1]);
            setnumber(number + 1);
        }
    }

    return (
        <>
            <div>
                <input type="text" id="type" name="type" value={ name } />
                <button onClick={ changeValue }>change</button>
            </div>
        </>
    )

};

export default Task