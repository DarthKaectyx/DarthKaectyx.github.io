<script>
  import { each } from 'svelte/internal';

  /** @type {import('./$types').PageData} */
  export let data;

  function getValues(obj) {
    const result = [];

    function extractValues(obj, prefix = '') {
      for (const [key, value] of Object.entries(obj)) {
        const fullKey = prefix ? `${prefix}.${key}` : key;

        if (typeof value === 'object' && value !== null) {
          extractValues(value, fullKey);
        } else {
          result.push({ key: fullKey, value });
        }
      }
    }

    extractValues(obj);

    return result;
  }
</script>

<main>
  <h2>{"Showing results for: " + data.params.category}</h2>
  <hr />
  <!-- TODO: Style the results -->
  <div>
    {#each data.response as item}
      <article id ={data.params.category} class='row-container'>
        {#each getValues(item) as { key, value }}
          <div class='article-row'>
            <b id= 'text' class={key}>{key + ":"}</b>
            <p id="space"></p>
            <p class={key}>{value}</p>
          </div>
        {/each}
      </article>
    {/each}
  </div>
</main>

<style>
  .row-container {
    display: flex;
    flex-direction: column;
    margin-bottom: -10px; /* Adjust the margin between rows */
  }

  .article-row {
    display: flex;
    flex-wrap: wrap;
  }

  #text {
    flex: 0 0 30%; /* Adjust the width as needed */
  }
  .id{
    color: crimson;
  }
  .uid{
    color: blueviolet;
  }
  .password{
    color: violet;
  }

  .city{
    color: chartreuse;
  }

  .account_number{
    color:darkorange
  }

  .keys{
    text-decoration: solid;
  }

  

  #space {
    width: 10px;
  }

  #banks{
    background-image: url("https://media4.giphy.com/media/l4q87BzdPfCSEOvKM/giphy.gif");
  }

  #addresses{
    background-image:url("//images.prismic.io/smarttask/e7a0fb68-cb9a-4df1-b2e3-2c351efa0199_ezgif.com-resize-2.gif?auto=compress")
  }

  #beers{
    background-image:url("https://media1.giphy.com/media/e6TR9n00dL3JS/giphy.gif");
  }
</style>
