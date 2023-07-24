import './App.css'
import { puppyList } from './data.js'
import { useState } from 'react';

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  console.log(puppies);
  const featuredPup = puppies.find((pup)=> pup.id === featPupId)
  console.log(featuredPup)
  return (
    <>
      <div>
        {
          puppies.map((puppy) => {
            return <p onClick={()=>{ setFeatPupId(puppy.id)}} key={puppy.id}> {puppy.name} </p>
          })
        }
        <p>{ featPupId && <p>{ featPupId }</p> }</p>
      </div>  
    </>
  )
}

export default App
