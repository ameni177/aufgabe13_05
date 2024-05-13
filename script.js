let add = document.getElementById("addbtn")
let l = document.getElementById("list")
let c = document.getElementById("checkboxForm")
//let del = document.getElementById("delete")

add.onclick = function(){

    let userinput = document.getElementById("userinput");
    addtask(userinput.value);
}


function addtask(task)
{

    let li = document.createElement("li");
    li.textContent = task;
    l.appendChild(li);
}

function addcheckboxtask(task)
{
    
    let input = document.createElement("input");
    let label = document.createElement("label");
    let b = document.createElement("button");
    //b.id = "delete"
    b.textContent = "delete task";
    input.type = 'checkbox'
    label.textContent = task.title + " ";
    c.appendChild(input);
    c.appendChild(label);
    c.appendChild(b);
    c.appendChild(document.createElement('br'));
    if (task.completed) {input.checked=true}
    b.onclick = function(){
        c.removeChild(input);
       c.removeChild(label);
       c.removeChild(document.querySelector('br'));
       c.removeChild(b);
       
    }

}
fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(json => json.forEach(element => {
       addcheckboxtask(element)
        //console.log(element.title)
        
      }))
    