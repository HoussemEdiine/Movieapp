import React from 'react'
import ReactStars from "react-rating-stars-component"
function Moviecard(props) {
    return (
    <div className='container'>
    {
      props.data.map(item=>(
        <div className='card'>
        <div key={item.id}>
          <img src={item.image}  width='400px' height='320'/>
          <div class="card-body">
                <h5 class="card-title">{item.name}</h5>
        <label>Rating:</label><ReactStars count={5} value={item.rating} size={24}
    isHalf={true}
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="#ffd700"/>      
      </div>

      </div>
      </div>
      ))
    }  

    </div>
    )
}
export default Moviecard
