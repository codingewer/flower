import logo from './logo.svg';
import './App.css';
import Flower from './Flower';
import Confetti from 'react-confetti'

function App() {
  const  width = 1000
  const  height = 1000
  return (
    <div className="App">
      <Confetti
     className='confetti'
     
    />
    

<div class="text-container">
  <span>İ</span>
  <span>Y</span>
  <span>İ</span>
  <span> </span>
  <span>K</span>
  <span>İ</span>
  <br/>
  <span>Doğdun</span>
  <br/>
  <span>Umiko</span>

</div>


<p className='typewiretter' >Mükemmel ötesi bir arkadaşsın💜</p>


    </div>
  );
}

export default App;
