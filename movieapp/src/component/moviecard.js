import React from 'react'
function Moviecard(props) {
    return (
        <div className='card'>
          {props.children}
        </div>
    )
}

export default Moviecard
