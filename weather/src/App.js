import { useState, useEffect } from 'react';
import './App.css';
import Weather from './Components/Weather';
//import lat from './Components/Weather';
//import lng from './Components/Weather';




function App() {
  const[lat, setLat]=useState(0)
  const [lng, setLng]=useState(0)
  const[isLoading,setIsLoading]=useState(true)

  useEffect(() => {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position =>{
        console.log(position)
        setLat(position.coords.latitude)
        setLng(position.coords.longitude)
        setIsLoading(false)
      },(error)=>{
        console.log(error)
        alert("paikannus epäonnistui")
      })
    } else {
      alert("Your browser does not support geolocation")
    }
  }, [])
  
  if(isLoading){
    return <p>Ladataan sijaintia...</p>
  } 

  else {
  return (
    <div className="content">
      <h3> Your position</h3>
      <p>
      Position:&nbsp;
      {lat.toFixed(3)}
      {lng.toFixed(3)}
      </p>
      <Weather lat={lat} lng={lng} />
    </div>
  );
}
}
export default App;
