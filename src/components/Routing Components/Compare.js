import React from 'react'
import { useState } from 'react'

const Compare = (props) => {
    const [first, setFirst ] = useState([{'id' : '1'}, {'id': '2'}, {'id': '3'}])
    const [second, setSecond ] = useState([{'id' : '3'}])

    const handleChange = (e) => {
        const attr = e.target.name
        if(attr === 'first'){
            setFirst(e.target.value)
        } else if( attr === 'second'){
            setSecond(e.target.value)
        }
    }
    

    const removeCommon = (first, second) => {
        // const spreaded = {...first, ...second}
        // return spreaded.filter((common) => {
        //     return !(first.includes(common) && second.includes(common))
        // })

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(removeCommon(first, second))
    } 

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' name='first' placeholder='First Array' value={first} onChange={handleChange} />
                <input type='text' name='second' placeholder='Second Array' value={second} onChange={handleChange} />
                <button type='submit'> Compare </button>
            </form>
            
        </div>
    )
}

export default Compare