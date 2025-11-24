export default function puxaValorBitcoin() {
  const bitcoin = document.querySelector(".bitcoin");
  fetch("https://blockchain.info/ticker")
    .then((response) => response.json())
    .then((body) => {
      bitcoin.innerHTML = (1000 / body.BRL.sell).toFixed(4);
    });
}
