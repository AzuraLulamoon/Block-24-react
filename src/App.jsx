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
      <h1 className='header'>Da Best Puppies</h1>
      <div className='pupList'>
        {
          puppies.map((puppy) => {
            return <p className='pupName' onClick={()=>{ setFeatPupId(puppy.id)}} key={puppy.id}> {puppy.name} </p>
          })
        }
      </div>
      { featPupId && (
          <div className='pupCard'>
            <h2 className='cardTitle'>{featuredPup.name}</h2>
            <ul className='cardList'>
              <li className='cardAge'> Age: {featuredPup.age} </li>
              <li className='cardEmail'> Email: {featuredPup.email} </li>
              <li className='cardCute'> Are they cute?: {featuredPup.isCute} </li>
              <img src={featuredPup.imgUrl}/>
            </ul>
          </div>
        )}
    </>
  )
}

export default App
