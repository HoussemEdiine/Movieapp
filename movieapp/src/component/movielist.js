import React ,{useState} from 'react'
import Moviecard from './moviecard'
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
        <div className="d-flex flex-colum">
             {moviesearch.map(item =>(
       <Moviecard key={item.id} >
          <div className='card-header' style={{width:'300px'}}>{item.name}</div> 
          <div>
            <img src={item.image} width='240' height='240' style={{margin:'5px'}}/>
          </div>
          <div>
           <label>Rating:</label> {item.rating}/5
          </div>
       </Moviecard>
      ))
      }
        </div>
        </div>
    )
}
