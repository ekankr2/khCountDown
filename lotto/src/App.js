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

    function getRandomInt() {
        return Math.floor(Math.random() * 45) + 1 //최댓값은 제외, 최솟값은 포함
    }

    function sixRandomInt() {
        let luckyNumbers = []

        while (true){
            let randomInt = getRandomInt()

            if(!luckyNumbers.includes(randomInt)){
                luckyNumbers.push(randomInt)
            }
            if(luckyNumbers.length === 6){
                break
            }
        }
        return luckyNumbers
    }

    function sortLottery(){
        let sortArray = sixRandomInt()

        sortArray.sort((a, b)=>{
            return a - b;
        })
        return sortArray
    }

  return (
    <>
      <button onClick={()=>{console.log(sortLottery())}}>클릭</button>
    </>
  );
}

export default App;
