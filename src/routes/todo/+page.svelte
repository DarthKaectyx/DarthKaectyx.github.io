<script>
    let tasks = [];
    let doneTasks = [];
    let newTask = "";
  
    function addToList() {
      tasks = [...tasks, newTask];
      newTask = "";
    }
    function changeList(task) {
    
        doneTasks = [...doneTasks, task];

        removeFromList(task, tasks)
    }
    function removeFromList(task, list){

        const taskIndex = list.indexOf(task);
        if (taskIndex !== -1) {
            list.splice(taskIndex, 1);
        }

        tasks = [...tasks];
        doneTasks = [...doneTasks];
    }
  </script>
  
 
  
  <div class='container'>
    <div class='layout'>
      <div style='display:grid'>
        <h1>ToDo</h1>
      </div>
      <div style="display:grid">
        <h1>Done</h1>
      </div>
    </div>
    <div class="addTask">
      <input bind:value={newTask} type="text" placeholder="New Task" />
      <button on:click={addToList}>Add</button>
    </div>
    <div class= 'tasks'>
        <div>
            {#each tasks as task (task)}
                <div class='task' style='inline'>
                    <p class='taskText'>{task}</p>
                    <button on:click={() => changeList(task)} class='taskButton'>Done</button>
                </div>
            {/each}
        </div>
        <div>
            {#each doneTasks as task (task)}
                <div class='task' style='inline'>
                    <p class='taskText'>{task}</p>
                    <button on:click={() => removeFromList(task, doneTasks)} class='taskButton'>Remove</button>
                </div>
            {/each}
        </div>
        </div>    
    </div>
    
    <style>
        .container {
            width: 80vw;
            height: 70vh;
            background-color: #00B980;
            border-width: 10px;
            border-style: hidden;
            border-radius: 50px;
            padding-top: 10px;
        }
    
        .layout {
            display: grid;
            grid-template-columns: 50% 50%;
            width: 100%;
            height: 80px;
            margin-top: 35px;
        }
    
        .layout h1 {
            background-color: #43D1AF;
            padding: 5px;
            height: 40px;
        }
    
        .addTask {
            border-color: #43D1AF;
            border-style: solid;
            border-top: 0;
            border-left: 0;
            border-right: 0;
            padding-bottom: 10px;
        }
    
        .addTask button {
            padding: 5px;
        }
    
        .addTask input {
            padding: 5px;
        }
    
        .tasks {
            display: grid;
            grid-template-columns: 50% 50%;
        }
    
        .task {
            display: grid;
            grid-template-columns: 1fr auto; /* 1fr for taskText and auto for buttons */
            background-color: #43D1AF;
            padding-left: 10px;
            margin: 5px;
            align-items: center; /* Center content vertically within each task */
        }
    
        .taskButton {
            padding: 15px;
            margin: auto;
        }
    
        .taskText {
            width: 30px;
        }
    </style>
    