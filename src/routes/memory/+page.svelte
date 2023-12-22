<script>
  let cards = [];
  let flipped_cards = []
  let flipcount = 0  
  let red_score = 0;
  let blue_score = 0;
  let active_player = "blue";
  let blueTurn = true;
  let images = 
  ["https://www.thesun.co.uk/wp-content/uploads/2019/03/NINTCHDBPICT000344691379-e1552934426150.jpg", "data:image/jpeg;base64,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", "https://cdn.bleacherreport.net/images_root/slides/photos/000/607/610/rooney_ronaldo_original.jpg?1294008063", "https://cdn.ghanasoccernet.com/2017/10/528256-4907c403cab9aea37431fbc9993f9f7c.jpg", "https://talksport.com/wp-content/uploads/sites/5/2012/02/ferdiand_tevez_man_love_2_106683860.jpg?strip=all&w=700&h=420&crop=1", "https://www.yourtradebase.com/blog/wp-content/uploads/2013/01/funny-football-05.jpeg",
  "https://www.thesun.co.uk/wp-content/uploads/2019/03/NINTCHDBPICT000344691379-e1552934426150.jpg","data:image/jpeg;base64,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", "https://cdn.bleacherreport.net/images_root/slides/photos/000/607/610/rooney_ronaldo_original.jpg?1294008063", "https://cdn.ghanasoccernet.com/2017/10/528256-4907c403cab9aea37431fbc9993f9f7c.jpg", "https://talksport.com/wp-content/uploads/sites/5/2012/02/ferdiand_tevez_man_love_2_106683860.jpg?strip=all&w=700&h=420&crop=1", "https://www.yourtradebase.com/blog/wp-content/uploads/2013/01/funny-football-05.jpeg" 
  ];

  if(active_player == "blue"){
    blueTurn = true;
  }else{
    blueturn = false;
  }

  function flip(card) {
    if (!card.flipped && flipcount < 2) {
      // TODO: Probably do what?
      card.flipped = true;
      flipcount += 1;
      flipped_cards.push(card);
      // flip the cards over after 2s from seeing both cards
      if (flipcount == 2) {
        setTimeout(() => {
          // flip over cards that have not been marked as "completed"
          if (flipped_cards[0].id == flipped_cards[1].id){
            flipped_cards[0].completed = true
            flipped_cards[1].completed = true
            if (active_player == "blue"){
              blue_score += 1
            }
            else if (active_player == "red"){
              red_score += 1
            }
            console.log(active_player)
          }
          cards = cards;
          flipped_cards = []
          cards.forEach((card) => {
            card.flipped = card.completed;
          });
          flipcount = 0;
          if (active_player == "blue") {
            active_player = "red"
            blueTurn = false;
            console.log(active_player, "1")
          } else if (active_player == "red") {
            active_player = "blue"
            blueTurn = true;
            console.log(active_player, "2")
          }
          
        }, 1000);
      }
      console.log(cards)
      cards = cards;

    } else {
      alert("chill");
    }
  } 

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }





function StartUp(){

  cards = [];
  flipped_cards = []
  flipcount = 0  
  red_score = 0;
  blue_score = 0;
  active_player = "blue";
  blueTurn = true;

  for (let index = 0; index < 6; index++) {
    cards.push({
      id: index,
      img: images[index], // TODO: unique images per card card
      flipped: false,  // TODO: think
      completed: false,
    });

    cards.push({
      id: index,
      img: images[index], // TODO: unique images per card card
      flipped: false,  // TODO: think
      completed: false,
    });
  }

  shuffleArray(cards)
}
StartUp()
</script>

<div class="box" id="red-box">
  <p>{red_score}</p>
</div>

<div class="box" id="blue-box">
  <p>{blue_score}</p>
</div>

<div class="box" id=turn-box style={blueTurn?"right: 10px;":"left:10px"}></div>

<main>
  <div class="row">
    {#each cards as card, i}
      <div
        on:click={() => {
          flip(card);
        }}
        
        on:keypress={() => {
          flip(card);
        }}
        class:flipped={card.flipped}
        class="card"
      >
        <img class="front" src={card.img} alt="" />
        <img class="back" src="front.webp" alt="" />
      </div>
    {/each}
    
  </div>
  <button id="restartButton" on:click={() =>{
    StartUp();
  }}>Restart</button>
</main>

<style>
  main {
    margin-top: 50px;
    display: flex;
    place-content: center;
    place-items: center;
  }

  .row {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(6, 100px);
    grid-template-rows: repeat(3, 100px);
  }

  @media (max-width:800px){
    .row{
      grid-template-columns: repeat(4, 100px);
    }
  }

  @media (max-width:600px){
    .row{
      grid-template-columns: repeat(2, 100px);
      grid-template-rows: repeat(6, 100px);

    }
  }

  .card {
    border: 1px solid black;
    border-radius: 10% 30% 50% 70%;
    cursor: pointer;
    transition: transform 1s;
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
  }

  .card.flipped {
    transform: rotateY(180deg);
  }

  .card .back {
    transform: rotateY(0deg);
    
  }

  .card .front {
    transform: rotateY(180deg);
  }

  .card img {
    border-radius: 50% 20% / 10% 40%;;
    width: 100%;
    height: 100%;
    object-fit: cover;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    position: absolute;
  }
  .box {
    width: 100px;
    height: 100px;
    position: fixed;
    text-align: center;
    font-size: 30px;
  }

  #restartButton{
    padding: 5px;
    margin-bottom: 300px;
    margin-left: 80px;
  }

  #red-box, #blue-box{
    bottom: 0px;
    z-index: 2;
  }
  
  #red-box {
    background-color: red;
    left: 0px;
  }
  #blue-box {
    background-color: blue;
    right: 0px;
  }
  #turn-box{
    bottom: 10px;
    z-index: 1;
    background-color: greenyellow;
    box-shadow: 0 0 20px 20px greenyellow;
  }
</style>
