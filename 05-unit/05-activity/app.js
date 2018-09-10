state = {
  score: 0,
  round: 1,
  playerList: [
    {
      name: 'joe',
      highscore: 32
    },
    {
      name: 'ashley',
      highscore: 44
    },
    {
      name: 'juan',
      highscore: 22
    }
  ]
}


console.log(state.score);

console.log(state.playerList.map(e=>e.name));

