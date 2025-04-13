let array = new Array();

let list_count = -1;

let count = document.getElementById('count');
let add = document.getElementById("add");
let card = document.getElementsByClassName("card")[0];


// Initial UI setup
function updateUI() {
    if (array.length === 0) {
        card.innerHTML = `<h4 style="justify-self: center; padding-top: 33%; font-size: large;">Currently, You have no pending tasks!!!</h4>`;
        list_count = -1;
    } 
    else {
        let display_text = '';
        array.forEach((task, index) => {
            display_text += `
                <div class="group">
                    <div class="content">
                        <h3>${task}</h3>
                    </div>
                    <div class="icons">
                        <i class='fas fa-pen' data-index="${index}" style='font-size:24px'></i>
                        <i class='fas fa-trash' data-index="${index}" style='font-size:24px; padding-left: 40px'></i>
                    </div>
                </div>
                <hr>`;
        });
        card.innerHTML = display_text;
    }
    count.innerText = "Count: " + (array.length);
}


card.addEventListener('click', (e) => {
    const index = e.target.getAttribute('data-index');
    if (!index) return; // Ignore clicks outside icons

    if (e.target.classList.contains('fa-pen')) {
        // Edit Task
        const newTask = prompt("Edit Task:", array[index]);
        if (newTask !== null && newTask.trim() !== "") {
            array[index] = newTask.trim();
            updateUI();
        } else if (newTask !== null) {
            alert("Input can't be empty!");
        }
    } else if (e.target.classList.contains('fa-trash')) {
        // Delete Task
        array.splice(index, 1);
        updateUI();
    }
});


// Add New Task
add.addEventListener('click', () => {
    const newTask = prompt("Enter the task:");
    if (newTask !== null && newTask.trim() !== "") {
        array.push(newTask.trim());
        updateUI();
    } else if (newTask !== null) {
        alert("Input can't be empty!");
    }
});

// Initialize
updateUI();

/* / initial condition
if(list_count == -1){
    count.innerText = "Count: " + (list_count+1);
    card.innerHTML = `<h4 style="justify-self: center; padding-top: 33%; font-size: large;">Currently, You have no pending tasks!!!</h4>`
}

// Task Reading
window.addEventListener('focus', ()=>{

    if(list_count == -1){
        card[0].innerHTML = `<h4 style="justify-self: center; padding-top: 33%; font-size: large;">Currently, You have no pending tasks!!!</h4>`
    }
    else{
        console.log(array);
        let display_text = ``;
        for(element of array){
            display_text += `<div class="group">
                    <div class="content">
                        <h3>` + element + `</h3>
                    </div>
                    <div class="icons">
                        <i class='fas fa-pen' style='font-size:24px'></i>
                        <i class='fas fa-trash' style='font-size:24px; padding-left: 40px'></i>
                    </div>
                </div>
                <hr>`;
        }
        card[0].innerHTML = display_text;

        // Task Editing
        let edit = document.querySelectorAll('.fa-pen');
        edit.forEach((element, index) => {
            element.addEventListener('click', ()=>{
                input = prompt("Enter the task");
                if(input == ""){
                    alert("Input can't be empty!!!");
                }
                else if(input != null && input.trim() == ""){
                    alert("Input can't be empty!!!");
                }
                else if(input != null){
                    array[index] = input;
                }
            });
        });

        // Task deleting
        let delete_task = document.querySelectorAll('.fa-trash');
        console.log(delete_task);
        console.log("awe");
        delete_task.forEach((element, index) => {
            element.addEventListener('click', ()=>{
                array.splice(index, 1);
            })
        })
        console.log(array);


        // Task adding
        // console.log("Clocle");
        // add.addEventListener('click', (event)=>{
        //     input = prompt("Enter the task");
        //     console.log(input);
        //     if(input == ""){
        //         alert("Input can't be empty!!!");
        //     }
        //     else if(input != null && input.trim() == ""){
        //         alert("Input can't be empty!!!");
        //     }
        //     else if(input != null){
        //         array[list_count+1] = input;
        //         list_count++;
        //     }
        //     count.innerText = "Count: " + (list_count+1);
        // });
    }
});

add.addEventListener('click', (event)=>{
    input = prompt("Enter the task");
    console.log(input);
    if(input == ""){
        alert("Input can't be empty!!!");
    }
    else if(input != null && input.trim() == ""){
        alert("Input can't be empty!!!");
    }
    else if(input != null){
        array[list_count+1] = input;
        list_count++;
    }
    count.innerText = "Count: " + (list_count+1);
});


// Task adding
/* add.addEventListener('click',(event)=>{
    input = prompt("Enter the task");
    console.log(input);
    if(input == ""){
        alert("Input can't be empty!!!");
    }
    else if(input != null && input.trim() == ""){
        alert("Input can't be empty!!!");
    }
    else if(input != null){
        // let card = document.getElementsByClassName('card');
        array[list_count+1] = input;
        list_count++;
        // if(list_count == -1){
        //     // card[0].innerHTML = `<h4 style="justify-self: center; padding-top: 33%; font-size: large;">Currently, You have no pending tasks!!!</h4>`
        // }
        // else if(list_count == 0){
        //     card[0].innerHTML = `<div class="group">
        //             <div class="content">
        //                 <h3>` + input + `</h3>
        //             </div>
        //             <div class="icons">
        //                 <i class='fas fa-pen' style='font-size:24px'></i>
        //                 <i class='fas fa-trash' style='font-size:24px; padding-left: 40px'></i>
        //             </div>
        //         </div>
        //         <hr>`;
        // }
        // else{
        //     card[0].innerHTML += `<div class="group">
        //             <div class="content">
        //                 <h3>` + input + `</h3>
        //             </div>
        //             <div class="icons">
        //                 <i class='fas fa-pen' style='font-size:24px'></i>
        //                 <i class='fas fa-trash' style='font-size:24px; padding-left: 40px'></i>
        //             </div>
        //         </div>
        //         <hr>`;
        // }
        // list_count++;
        // console.log(array);
    }
    // let count = document.getElementById('count');
    count.innerText = "Count: " + (list_count+1);
});
 */
// // Task Editing
// let edit = document.querySelectorAll('.fa-pen');
// edit.forEach((element, index) => {
//     element.addEventListener('click', ()=>{
//         input = prompt("Enter the task");
//         // console.log(input == null);
//         // console.log(input == "");
//         // console.log(event);
//         if(input == "" || input.trim() == ""){
//             alert("Input can't be empty!!!");
//         }
//         else{
//             array[index] = input;
//             // console.log(array);
//         }
//     });
// }) */