import './App.css';
import axios from "axios";


function App() {

    const heroku = 'https://esc-proxy.herokuapp.com/'
    const request = 'https://www.dhlottery.co.kr/'

  const getLotto = () =>{
      axios.get(`${heroku}${request}common.do?method=getLottoNumber&drwNo=861`)
          .then((result)=>{
            console.log(result.data)
          })
  }

  return (
    <>
      <button onClick={getLotto}>클릭</button>
    </>
  );
}

export default App;
