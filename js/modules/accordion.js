export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = "ativo";
  }

// função para modificar a classe
  toggleAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

// função para adicionar o evento ao accordion
  addAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener("click", () => this.toggleAccordion(item));
    });
  }

// função para iniciar
  init() {
    if (this.accordionList.length) {
      // ativa o primeiro item da página
      this.toggleAccordion(this.accordionList[0]);
      this.addAccordionEvent();
    }
  }
}
