function helloworld(){
    console.log('why');
}
export default function myButton() {
    return (
      <div>
        <h1>Welcome to my app</h1>
        <button className='button' onClick={helloworld}> im a button</button>
      </div>
    );
  }
 