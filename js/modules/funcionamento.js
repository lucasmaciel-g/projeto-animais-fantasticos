export default function marcarFuncionamento() {
  const funcionamento = document.querySelector('[data-semana]');
  const diaSemanaFuncionamento = funcionamento.dataset.semana.split(',').map(Number);
  const horaFuncionamento = funcionamento.dataset.horario.split(',').map(Number);
  const agora = new Date;
  const diaSemanaAgora = agora.getDay();
  const horaAgora = agora.getHours();
  
  if (diaSemanaFuncionamento.indexOf(diaSemanaAgora) !== -1 &&
      horaAgora >= horaFuncionamento[0] &&
      horaAgora < horaFuncionamento[1]) {
    funcionamento.classList.add('aberto');
  }

  console.log(horaAgora);
  console.log(diaSemanaFuncionamento);
  console.log(horaFuncionamento);
}
