import './App.css';
export default function Home(){
   return(
    <div>
    <div className="buttonContainer">
   <button className='button'>Select</button>
   <button className='button'>Update</button>
   <button className='button'>Insert</button>
   <button className='button'>Delete</button>
   </div>
   <div className='requestContainer'>
    <h1>Get-request</h1>
    <h1>Put-request</h1>
    <h1>Post-request</h1>
   </div>
   </div>
   ) 
}