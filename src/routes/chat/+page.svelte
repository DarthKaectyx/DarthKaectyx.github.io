<script>
  import { enhance } from "$app/forms";
  import "elizabot";
  import ElizaBot from "elizabot";
  import { subscribe } from "svelte/internal";
  import {globalChat_store} from '$lib/stores';
  



  let eliza = new ElizaBot();

  let chat = [{ user: "eliza", text:"What's up, homie!" }];
  let chatstring;
  LoadChat();

  async function write(message) {

    
    // TODO: yeet in the new message
    console.log(message);
    chat.unshift({user: "User", text: message});
    chat = chat;
    var element = document.getElementById("visible");

    // random delay for writing
    element.style.display = "flex";
    await new Promise((r) => setTimeout(r, 1500 + Math.random() * 1000));

    element.style.display = "none";

    // TODO: write the text
    chat.unshift({user: "eliza", text: eliza.transform(message)});
    chat = chat;

    SaveToStore(chat);
  }

  function SaveToStore(localChat){

    let JsonChat = JSON.stringify(localChat);
    
    globalChat_store.set(JsonChat);
  }

  async function LoadChat(){
    const unsubscribe = globalChat_store.subscribe(value => {
    chatstring = value;
  });
    if(chatstring != "1"){
      chat = JSON.parse(chatstring);
    }
    console.log(chatstring, globalChat_store);

  }


  function ResetChat(){
    chat = [{ user: "eliza", text: "What's up, homie!" }];
    SaveToStore(chat);
  }

  //ResetChat();
  
</script>


<svelte:head>
  <link rel="stylesheet" href="/pico.min.css">

  <style>
    nav {
      margin-left: 10%;
      margin-right: 10%;
    }
  </style>
</svelte:head>

<div class="container">
  <div class = "header">
    <h1>Elizabot</h1>
    <button on:click={ResetChat} id="ResetButton">Reset</button>
  </div>
  <div class="scrollable">
    <!-- TODO: loop over the messages and display them -->
    <form
      method="post"
      use:enhance={({ form, data, action, cancel }) => {
        /* https://kit.svelte.dev/docs/form-actions#progressive-enhancement */
        cancel(); //don't post anything to server
        const text = data.get("text");
        console.log(text);
        write(text);

        // TODO: reset the form using form.reset()
        form.reset();
      }}
    >
      <div style= display:inline>
        <input type="text" name="text"/>
        
      </div>
    
    
    </form>
    <article id="visible">
      <span class = 'circle'></span>
      <span class = 'circle'></span>
      <span class = 'circle'></span>
    </article>
    {#each chat as message}
    <article>
      <span>
        <div id={message.user}>{message.text}</div>
        
      </span>
    </article>
    {/each}
   
  </div>
  
</div>

<style>
  @keyframes typing {
    0% {transform: scale(1);}
    50% {transform: scale(1.4);}
    100% {transform: scale(1);}
  }

  .circle{
    height: 10px;
    width: 10px;
    border-radius: 50%;
    padding: 5px;
    margin: 3px;
    background-color: white;

    animation-name: typing;
    animation-duration: 1000ms;
    animation-timing-function: ease-in-out;
  }

  /* CSS-stilar för .circle med index 1 (den första cirkeln) */
  .circle:nth-child(1) {
    animation-delay: 0ms; /* Ingen fördröjning */
    animation-iteration-count: infinite;
  }
  /* CSS-stilar för .circle med index 2 (den andra cirkeln) */
  .circle:nth-child(2) {
    animation-delay: 333ms; /* Starta animationen efter 333 millisekunder (ms) */
    animation-iteration-count: infinite;
  
  }
  /* CSS-stilar för .circle med index 3 (den tredje cirkeln) */
  .circle:nth-child(3) {
    animation-delay: 666ms; /* Starta animationen efter 666 ms */
    animation-iteration-count: infinite;
  }

  .header{
    display: flex;
    align-items: center;
  }

  #visible{
    width: 100px;
    height: 60px; 
    display: none; 
    justify-content: center;
    align-items: center;
  }

  #eliza{
    color:brown;
  }
  #User{
    color: blue;
  }

  #ResetButton{
    height: 20px;
    width: 80px;
    margin-bottom: 50px;
    margin-left: auto;
    justify-content: center;
    align-items: center;
    padding-bottom: 30px;
    font: optional;
    font-size: small;
  }
</style>
