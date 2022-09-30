function startGame() {
  //stating a new game
  
  let playerName : string | undefined = getInputValue ('playerName');
  logPlayer( playerName);

  postScore(80, playerName);
  postScore(-5, playerName);
}

function logPlayer ( name : string ='MultiMath Player' ): void {
  console.log(`New game starting for player : ${name}`);  
}

function getInputValue( elementID: string ): string | undefined {
  
  const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);

  if (inputElement.value === '') {
    return undefined;
  }
  else {
    return inputElement.value;
  }
}

function postScore(score : number, playerName: string = 'MultiMath Player') : void {
 
 let logger : (value : string) => void;

 if (score < 0) {
  logger = logError;
 }
 else {
  logger = logMessage;
 }

 const scoreElement : HTMLElement | null = document.getElementById( 'postedScores');
 scoreElement!.innerText = `${score} - ${playerName}`;

 logger(`Score: ${score}`);
}

document.getElementById('startGame')?.addEventListener('click', startGame);

const logMessage = (message : string) => console.log(message);

<<<<<<< HEAD


=======
function logError (err : string) : void {
  console.error( err);
}

let myResult: Result = {
  playerName: "",
  score: 0,
  problemCount: 0,
  factor: 0
};

let player : Person = {
  name: "Daniel",
  formatName: () => 'Dan'
  }; 
>>>>>>> e86840e (type custom)
