function startGame() {
  //stating a new game
  var messagesElement = document.getElementById('messages');
  messagesElement!.innerText = 'Welcome to ultiMath! Satarting new Game..';
}
document.getElementById('startGame')?.addEventListener('click', startGame);