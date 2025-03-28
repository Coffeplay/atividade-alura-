document.addEventListener('DOMContentLoaded', () => {
    const botaoAcessibilidade = document.getElementById('acessibilidade-btn');
    const aumentarFonte = document.getElementById('aumentar-fonte');
    const diminuirFonte = document.getElementById('diminuir-fonte');
    const conteudo = document.querySelector('.conteudo');
    let tamanhoFonte = 16; // Tamanho inicial da fonte em pixels
    let modoAcessibilidadeAtivo = false;
  
    botaoAcessibilidade.addEventListener('click', () => {
      if (!modoAcessibilidadeAtivo) {
        // Ativar modo de acessibilidade
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'yellow';
        botaoAcessibilidade.textContent = 'Desativar Modo de Acessibilidade';
        modoAcessibilidadeAtivo = true;
      } else {
        // Desativar modo de acessibilidade
        document.body.style.backgroundColor = '';
        document.body.style.color = '';
        botaoAcessibilidade.textContent = 'Ativar Modo de Acessibilidade';
        modoAcessibilidadeAtivo = false;
      }
    });
  
    aumentarFonte.addEventListener('click', () => {
      if (tamanhoFonte < 32) { // Limita o tamanho máximo da fonte
        tamanhoFonte += 2;
        conteudo.style.fontSize = `${tamanhoFonte}px`;
      }
    });
  
    diminuirFonte.addEventListener('click', () => {
      if (tamanhoFonte > 10) { // Limita o tamanho mínimo da fonte
        tamanhoFonte -= 2;
        conteudo.style.fontSize = `${tamanhoFonte}px`;
      }
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const botaoAcessibilidade = document.getElementById('acessibilidade-btn');
    const aumentarFonte = document.getElementById('aumentar-fonte');
    const diminuirFonte = document.getElementById('diminuir-fonte');
    const conteudo = document.querySelector('.conteudo');
    let tamanhoFonte = 16; // Tamanho inicial da fonte em pixels
    let modoAcessibilidadeAtivo = false;
  
    // Função para ativar/desativar modo de acessibilidade
    botaoAcessibilidade.addEventListener('click', () => {
      if (!modoAcessibilidadeAtivo) {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'yellow';
        botaoAcessibilidade.textContent = 'Desativar Modo de Acessibilidade';
        modoAcessibilidadeAtivo = true;
      } else {
        document.body.style.backgroundColor = '';
        document.body.style.color = '';
        botaoAcessibilidade.textContent = 'Ativar Modo de Acessibilidade';
        modoAcessibilidadeAtivo = false;
      }
    });
  
    // Funções para aumentar e diminuir a fonte
    aumentarFonte.addEventListener('click', () => {
      if (tamanhoFonte < 32) {
        tamanhoFonte += 2;
        conteudo.style.fontSize = `${tamanhoFonte}px`;
      }
    });
  
    diminuirFonte.addEventListener('click', () => {
      if (tamanhoFonte > 10) {
        tamanhoFonte -= 2;
        conteudo.style.fontSize = `${tamanhoFonte}px`;
      }
    });
  
    // Navegação por teclado
    document.addEventListener('keydown', (event) => {
      const ativo = document.activeElement;
  
      if (event.key === 'Enter' || event.key === ' ') {
        if (ativo === botaoAcessibilidade) botaoAcessibilidade.click();
        if (ativo === aumentarFonte) aumentarFonte.click();
        if (ativo === diminuirFonte) diminuirFonte.click();
      }
    });
  });
  