import React,{useState} from 'react';
import './App.css';
import './component/movielist'
import Modal from 'react-modal'
import { Movielist } from './component/movielist';
Modal.setAppElement('#root')
function App() {
  const [name, setname]=useState('')
  const[image , setimage]=useState('')
  const[rating , setrating]=useState()
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
  
  console.log(movieList)
  return (
    <div className="App">
      <h1>Movie App</h1>
      <button onClick= {display} className='btn btn-primary'>+</button>
      
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
      padding: '20px',
      width: '550px',
      margin: 'auto'
      
      ,display:'flex'
    }
  }}>  
       <div className='App'>
         <h2>Add movie</h2>
         <div className="input-group">
         <div class="input-group-prepend">
    <span class="input-group-text">Name</span>
          </div>
        <input type='text'  className='form-control' placeholder='name...' value={name} onChange={iname}/> 
         </div>

       <div className='input-group'>
       <div class="input-group-prepend">
    <span class="input-group-text">Image</span>
  </div>
        <input type='text' className='form-control' placeholder='img...' value={image} onChange={onimage}/>
       </div>

     <div className='input-group'>
     <div class="input-group-prepend">
    <span class="input-group-text">rating</span>
  </div>
        <input type='number'  className='form-control' placeholder='rating...' value={rating} onChange={mrating}/>
     </div>

     <div>
       <button onClick={addmovie} className='btn btn-primary'>addMovie</button>  
     </div>
        <div>
          <button onClick={display} className='btn btn-primary' id='close'>close</button> 
        </div> 
        </div>
      
      </Modal>
      <Movielist data={movieList}/>
    </div>
  
  );
}

export default App;
