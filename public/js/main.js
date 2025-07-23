import { auth, db, storage } from './firebase-config.js';

document.addEventListener('DOMContentLoaded', () => {
  const startButton = document.getElementById('startButton');
  if (startButton) {
    startButton.addEventListener('click', () => {
      console.log('Botón INICIAR clicado!');
    });
  }
});
