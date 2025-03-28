document.addEventListener('DOMContentLoaded', () => {
    const botaoAcessibilidade = document.getElementById('acessibilidade-btn');
    let modoAtivo = false;
  
    botaoAcessibilidade.addEventListener('click', () => {
      if (!modoAtivo) {
        // Ativar modo de acessibilidade
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'yellow';
        botaoAcessibilidade.textContent = 'Desativar Modo de Acessibilidade';
        modoAtivo = true;
      } else {
        // Desativar modo de acessibilidade
        document.body.style.backgroundColor = '';
        document.body.style.color = '';
        botaoAcessibilidade.textContent = 'Ativar Modo de Acessibilidade';
        modoAtivo = false;
      }
    });
  });
  