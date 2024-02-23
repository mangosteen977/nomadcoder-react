import { useState, useEffect } from "react";

function CoinApp() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [coinPrice, setCoinPrice] = useState(0);
    const [usdPrice, setUsdPrice] = useState(0);
    const [calculatePrice, setCalculatePrice] = useState(null);
    useEffect(()=>{
        //https://api.coinpaprika.com/v1/tickers 코인 정보 목록
        fetch("https://api.coinpaprika.com/v1/tickers")
        .then((res) => res.json())
        .then((json) => {
            setCoins(json);
            setLoading(false);
        });
    },[]); // api 호출 한 번만 하도록 watch 아무것도 X.
    const whatCoin = (event) => setCoinPrice(event.target.value);
    const whatUsd = (event) => setUsdPrice(event.target.value);
    const calculate = () => {
        console.log(coinPrice, usdPrice, ":", usdPrice / coinPrice);
        setCalculatePrice(usdPrice / coinPrice);
    }
  return (
    <div>
      <h2>Coin Tracker {loading ? null : `(${coins.length})`}</h2>
      {loading ? (
        <strong>loading...</strong>
      ) : (
        <div>
            <h3>Calculate how many Coins Can i buy...</h3>
            <select onChange={whatCoin}>
                <option key="x">Select the type of coin.</option>
                {coins.map((coin) => (
                    <option
                        key={coin.id}
                        value={coin.quotes.USD.price}
                    >
                        {coin.name} ({coin.symbol})
                    </option>
                ))}
            </select>
            <br />
            <label htmlFor="usd">USD :</label>
            <input
                id="usd"
                type="number"  
                placeholder="Enter USD dollar."
                value={usdPrice}
                onChange={whatUsd}
            />
            <button onClick={calculate}>Calculate</button>
            {calculatePrice === null ? null : (
                <div>you can buy <strong>{calculatePrice}</strong> of coin.</div>
            )}
        </div>
      )}
      
    </div>
  );
}

export default CoinApp;
