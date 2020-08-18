import React ,{useState} from 'react'
import Moviecard from './moviecard'
import ReactStars from "react-rating-stars-component"
export  const Movielist = (props) => {
    const [search,setsearch]=useState('')
    const [searchByrate,setrate]=useState(0)
    const moviesearch = props.data.filter(movie =>{
             
     return   movie.rating >= searchByrate &&   movie.name.toLowerCase().includes(search.toLowerCase())        
      })
      const seaching = (e) =>{
        setsearch(e.target.value)
      }
      const searchrate = (searchByrate) =>{
        setrate(searchByrate)
      }
      console.log(searchByrate)
     
    return (
        <div> 
          <div>
              <ReactStars count={5} size={24}
              classNames='stars'
    onChange={searchrate}
    value={0}
    isHalf={false}
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="#ffd700"/>
    </div>  
        <div style={{marginBottom:'2px'}}>
            <input placeholder='search...'  type="search" value={search} onChange={seaching} className='search' />
            </div>
            
        <div className="container">
              
          <Moviecard data={moviesearch}/>     

        </div>
        </div>
    )
}
