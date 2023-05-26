import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">


      <main>

      <header className="App-header">
        <h1>Noahs To Do List</h1>
        
        <form id="new-task-form">
          <input type = "text" id="new-task-input" placeholder="What do you have planned?" />
          <input type="submit" id="new-task-submit" value="Add task" />
        </form>

      </header>

        <section class="task-list">
          <h2>Tasks</h2>
          <div id="tasks">
            <div class="task">
              <div class="content">
                <input type = "text" class="text" value = "My shiny task" readonly />
                <div class="actions">
                  <button class="edit">Edit</button>
                  <button class="delete ">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>

  );
}

//main js 
window.addEventListener('load', () => {
  const form = document.querySelector("#new-task-form");
  const input = document.querySelector("#new-task-input");
  const list_el = document.querySelector("#tasks")

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const task = input.value

    if (!task){
      alert("Please fill out task!");
      return
    }

    const task_el = document.createElement("div");
    task_el.classList.add("task");

    const task_content_el = document.createElement("div");
    task_content_el.classList.add("content");
    task_content_el.innerText = task;

    task_el.appendChild(task_content_el);

    list_el.appendChild(task_el);


  })

})

export default App;
