export default function animaNumeros() {
  function realizaAnimacao() {
    const numeros = document.querySelectorAll('[data-numero]');
    numeros.forEach((numero) => {
      const total = +numero.innerText;
      const incremento = Math.floor(total / 200);
      let start = 0;
      const timer = setInterval(() => {
        start = start + incremento;
        if (start > total) {
          start = total;
          clearInterval(timer);
        }
        numero.innerText = start;
      }, 10 * Math.random);
    });

  }
  
  function handleMutation(mutation) {
    console.log(mutation);
    if (mutation[0].target.classList.contains('ativo')) {
      realizaAnimacao();
      observer.disconnect();
    }
  }
  const sectionNumerosAnimais = document.querySelector('.numeros');
  
  const observer = new MutationObserver(handleMutation);
  observer.observe(sectionNumerosAnimais, { attributes: true });
}
