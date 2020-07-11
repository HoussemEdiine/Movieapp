import React,{useState} from 'react';
import './App.css';
import './component/moviecard'
import Moviecard from './component/moviecard';
import Modal from 'react-modal'
Modal.setAppElement('#root')
function App() {
  const [search,setsearch]=useState('')
  const [name, setname]=useState('')
  const[image , setimage]=useState('')
  const[rating , setrating]=useState(null)
 const [isopen,setisopen]=useState(false)
  const [movieList , setmovielist]= useState([{
    id :0 , 
    name : 'harry potter',
    rating: 4,
    image : 'https://www.premiere.fr/sites/default/files/styles/scale_crop_1280x720/public/2018-04/montage_hp5_une.jpg'
  
  },{
    id :2 , 
    name : 'terminator',
    rating: 3.5,
    image :'https://images-na.ssl-images-amazon.com/images/I/A1TkRjQssmL._SL1500_.jpg'
  
  }])
  const iname = (e)=>{
   setname(e.target.value)
  }
  const onimage = (e) =>{
    setimage(e.target.value)
  }
  const mrating = (e) =>{
    setrating(e.target.value)
  }
  const addmovie = () =>{
     if(rating<6){
    setmovielist([...movieList,{
      id : movieList.length+1,
      name : name 
      , image : image,
      rating : rating

    }])
     }
  
  }
  const display = () =>{
    setisopen(!isopen)
  }
  const seaching = (e) =>{
    setsearch(e.target.value)
  }
  const moviesearch = movieList.filter(movie =>{
    return movie.name.toLowerCase().includes(search.toLowerCase()) || movie.rating==parseFloat(search)
  })
  console.log(movieList)
  return (
    <div className="App">
      <h1>Movie App</h1>
      <button onClick= {display}>ADD</button>
      <input placeholder='search...'  value={search} onChange={seaching} />
      <Modal isOpen={isopen} style={{
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(240, 240, 255, 0.75)'
    },
    content: {
      position: 'absolute',
      top: '300px',
      left: '300px',
      right: '300px',
      bottom: '300px',
      border: '1px solid #ccc',
      background: '#fff',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '4px',
      outline: 'none',
      padding: '20px'
    }
  }}>   
        <label>Name:</label>
        <input type='text' placeholder='name...' value={name} onChange={iname}/>
        <label>Image:</label>
        <input type='text' placeholder='img...' value={image} onChange={onimage}/>
        <label>Raiting:</label>
        <input type='number'  placeholder='rating...' value={rating} onChange={mrating}/>
        <button onClick={addmovie}>addMovie</button>  
        <div>
          <button onClick={display}>close</button> 
        </div> 
      </Modal>
      {moviesearch.map(item =>(
       <Moviecard key={item.id} >
          <div className='card-header' style={{width:'400px'}}>{item.name}</div> 
          <div>
            <img src={item.image} width='320' height='240' style={{margin:'5px'}}/>
          </div>
          <div>
           <label>Rating:</label> {item.rating}/5
          </div>
       </Moviecard>
      ))
      }
    </div>
  
  );
}

export default App;
