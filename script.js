// script.js
// Adicione o JavaScript para funções interativas, como menus suspensos, animações ou formulários

const librasButton = document.getElementById('librasButton');

librasButton.addEventListener('click', () => {
  window.location.href = 'https://www.seu-servico-de-libras.com'; // Substitua pelo link do seu serviço
});

// Ação para o botão "Topo"
document.getElementById('top-btn').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});