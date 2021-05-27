import React, { Component } from "react";
import Coin from "../Coin/Coin";
import "./CoinFlipper.css";

class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    // State üzerinde paranın başlangıçtaki durumunu veriyoruz, başlangıçta "tura" olsun.
    // Daha sonra şu anda paranın dönüp dönmeme durumunu da veriyoruz, başlangıçta para atılmamış olduğundan "false" olarak verdik.
    this.state = {
      side: "tura",
      count:0,
      flipping: false,
      turaCounter:0,
      yaziCounter:0
    };
  }
  
  handleClick = () => {
    // "At!" butonuna tıkladığımızda paranın dönmesini istiyoruz, bu yüzden "flipping" durumunu "true" yapıyoruz.
    this.setState({ flipping: true, count: this.state.count +1 });
    this.randomBoolean()
    // 1 saniye kadar dönmesi yeterli, bu yüzden 1 saniye sonra "flipping" durmunu tekrar "false" yapıyoruz.
    setTimeout(() => this.setState({ flipping: false }), 1000);
  };

  randomBoolean =()=>{
    const getBoolean = Math.floor(Math.random() * 2); 
    if(getBoolean){
      this.setState({ yaziCounter: this.state.yaziCounter + 1 });
    }else{
      this.setState({ turaCounter: this.state.turaCounter + 1 });
    }
  }


  render() {
    const {side,count,turaCounter,yaziCounter,flipping} = this.state;
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={side} flipping={flipping} />
        <button onClick={this.handleClick}>At!</button>
        <p>
          Toplam
          <strong> {count} </strong>
          atıştan
          <strong> {turaCounter} </strong>ü tura
          <strong> {yaziCounter} </strong>
          si yazı geldi.
        </p>
      </div>
    );
  }
}

export default CoinFlipper;
