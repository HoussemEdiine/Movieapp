import React ,{useState} from 'react'
import Moviecard from './moviecard'
import ReactStars from "react-rating-stars-component"
export const Movielist = (props) => {
    const [search,setsearch]=useState('')
    const moviesearch = props.data.filter(movie =>{
        return movie.name.toLowerCase().includes(search.toLowerCase()) || movie.rating==parseFloat(search)
      })
      const seaching = (e) =>{
        setsearch(e.target.value)
      }
     
    return (
        <div>
        <div style={{marginBottom:'2px'}}>
            <input placeholder='search...'  type="search" value={search} onChange={seaching} className='search' />
            </div>
            
        <div className="container">   
                {moviesearch.map(item =>(
       <Moviecard key={item.id} > 
            <img src={item.image} width='400px' height='320'/>
          
            <div class="card-body">
                <h5 class="card-title">{item.name}</h5>
        <label>Rating:</label><ReactStars count={5} value={item.rating} size={24}
    isHalf={true}
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="#ffd700"/>      
      </div>
       </Moviecard>
      ))
      }
        </div>
        </div>
    )
}
