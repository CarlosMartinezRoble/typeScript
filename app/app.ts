function startGame() {
  //stating a new game
  var messagesElement = document.getElementById('messages');
  messagesElement!.innerText = 'Welcome to ultiMath! Satarting new Game..';
}

function logPlayer ( name) {
  console.log(`New game starting for player : ${name}`);
  
};

document.getElementById('startGame')?.addEventListener('click', startGame);


