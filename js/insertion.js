let P_div = document.getElementsByClassName("parentDiv");
let Sbtn = document.getElementsByClassName("startbtn");
let inst = document.getElementsByClassName("text_instr");
let stopSort = false;
let StopBtn = document.getElementById("stopbtn");
let current = -1;
let stack=[];
let step_dic=[];
document
  .getElementById("insertion_sort_link")
  .addEventListener("click", function () {
    document.getElementById("home").innerHTML = `
      <div class="visual_box">
        <form class="my_form">
          <h2>Insertion Sort</h2>
          <p>Enter an array of numbers below and click the "Sort" button to sort them using Insertion Sort.</p>
          <input type="text" id="array-input" name="array-input" placeholder="Type..."/>
          <input type="button" value="Sort" id="sort-btn" />
        </form>  
        <div class="parentDiv" id="parentDiv"></div>
        <div class="all_controls">
        <label for="customRange1" class="form_label">Speed</label> 
         <input type="range" class="form_range" id="customRange1">
         <img src="image/goToBeginning.png" class="btn face_left" id="back_btn" alt="Previous" />
         <img src="image/play.png" class="startbtn btn" id="startbtn" alt="Start"/>
         <img src="image/pause.png" class="stopbtn btn" id="stopbtn" alt="Stop" style="display:none;"/>
         <img src="image/goToEnd.png" class="btn" id="forward_btn" alt="Next"/>
       </div>
        <div class="text_instr">
          <span>
            In Insertion sort we are comparing each element with the sorted elements before it and inserting it in the right position in the sorted list.</span>
        </div>
      </div>
    `;
    // event listeners
    // let Sbtn = document.getElementsByClassName("startbtn");
    // Sbtn[0].addEventListener("click", () => {
    //   stopSort = false;
    //   insertionSort(arry);
    // });

    let Sbtn = document.getElementsByClassName("startbtn");
    let StopBtn1 = document.getElementById("stopbtn");
    console.log(StopBtn);
    let handleClick = () => {
      stopSorting = false;
      console.log("assigning handleListner");
      console.log(StopBtn1);
      Sbtn[0].style.display="none";
      StopBtn1.style.display="block";

      insertionSort(arry);
    };
    Sbtn[0].addEventListener("click", handleClick);

    StopBtn1.addEventListener("click", () => {
      StopBtn1.style.display = "none";
      Sbtn[0].style.display = "block";
      stopSort = true;
    });

    document.getElementById("sort-btn").addEventListener("click", function () {
      getArray();
    });
    
    document.getElementById("back_btn").addEventListener("click", function () {
      Sbtn[0].removeEventListener("click", handleClick);
      counter--;
      console.log(counter);
      previous_step(counter, stack);
    });
    
   document.getElementById("forward_btn").addEventListener("click", function () {
     Sbtn[0].removeEventListener("click", handleClick);
        console.log(counter);
        next_Step(counter);
      }); 
  });

let count = 0;
let arry = [];
function previous_step(index)
{
  let i = 0;
  let n_arr = [];
  console.log("Fetching from index", index);
  n_arr = stack[index];
  console.log(stack[index]);
  parentDiv[0].innerHTML = "";
  n_arr.forEach((e) => {
    if (isNaN(e)) {
      console.log(
        "It's either you are at last step or sorry we can't fetch that data"
      );
    } else {
      let innerDiv = document.createElement("div");
      innerDiv.style.height = e * 5 + "px";
      innerDiv.style.backgroundColor =
        "#" + (((1 << 24) * Math.random()) | 1).toString(16);
      innerDiv.setAttribute("id", "elem" + i);
      i++;
      innerDiv.classList.add("innerDiv");
      let innerText = document.createElement("div");
      innerText.innerText = e.toString();
      innerText.classList.add("innerText");
      innerDiv.appendChild(innerText);
      parentDiv[0].appendChild(innerDiv);
    }
  });
  arry = [];
  arry = n_arr;
  Sbtn[0].addEventListener("click", () => {
    stopSort = false;
    insertionSort(n_arr);
  });
}
function getArray() {
  let i=0;
  P_div.innerHTML="";
  var input = document.getElementById("array-input").value.trim();
  arry = input.split(" ").map(Number);
  console.log(arry);
  if (arry.length <= 1) {
    instr[0].innerHTML = `Enter More Elements`;
  } else {
    arry.forEach((e) => {
      if (isNaN(e)) {
        instr[0].innerHTML = `Enter Integer Input Only`;
      } else {
        let innerDiv = document.createElement("div");
        innerDiv.style.height = e * 5 + "px";
        innerDiv.style.backgroundColor =
          "#" + (((1 << 24) * Math.random()) | 1).toString(16);
        innerDiv.setAttribute("id", "elem" + count);
        count++;
        innerDiv.classList.add("innerDiv");
        let innerText = document.createElement("div");
        innerText.innerText = e.toString();
        innerText.classList.add("innerText");
        innerDiv.appendChild(innerText);
        P_div[0].appendChild(innerDiv);
      }
    });
     for (let i = 0; i < arry.length - 1; i++) {
        if (arry[i] > arry[i+1]) {
          let Sbtn = document.getElementsByClassName("startbtn");
          Sbtn[0].addEventListener("click", () => {
            stopSort = false;
            insertionSort(arry);
          }); 
        }
      }
      inst[0].innerHTML = `Given Array is already sorted , Give me something else to sort `;
      }
    }

const soja = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

async function insertionSort(arry) {
  inst[0].innerHTML = `Starting Insertion Sort on array: ${arry.join(", ")}. `;
  inst[0].innerHTML = `Inserting elements one by one in the correct position. `;
  for (let i = 1; i < arry.length && !stopSort; i++) {
    let key = arry[i];
    let j = i - 1;
    inst[0].innerHTML = `Inserting element ${key} at index ${j + 1}. `;
    while (j >= 0 && arry[j] > key && !stopSort) {
      inst[0].innerHTML = `Moving element ${arry[j]} to index ${j+1}. `;
      arry[j + 1] = arry[j];
      console.log("VALUES GOING INSIDE SWAP",j,"and",j+1);
      await swapColorHeight_insertion(j, j+1);
      j--;
    }
    arry[j + 1] = key;
    console.log("Iteration", arry);
    counter++;
    console.log("Value of counter", counter);
    console.log(arry);
    stack.push(arry.slice());
    inst[0].innerHTML = `Array after iteration ${i}: ${arry.join(", ")}. `;
  }
  if (!stopSort) {
    inst[0].innerHTML = `All elements are sorted. Algorithm executed successfully.`;
    console.log("Final Array", arry);
  }
}
async function next_Step(counter)
{
  let n_arr=[];
  n_arr=stack[counter];
  console.log(n_arr,"at index",counter);  
  stopSort=false;
  for (let k = 1; k < n_arr.length && !stopSort; k++) {
    let key = n_arr[k];
    let j = k - 1;
    inst[0].innerHTML = `Inserting element ${key} at index ${j + 1}. `;
    while (j >= 0 && n_arr[j] > key && !stopSort) {
      inst[0].innerHTML = `Moving element ${n_arr[j]} to index ${j+1}. `;
      n_arr[j + 1] = n_arr[j];
      j--;
    }
    n_arr[j + 1] = key;
    counter++;
    console.log("Value of counter", counter);
    console.log("UPDATED VAL",n_arr);
    stack.push(n_arr.slice());
    let i=0;
    parentDiv[0].innerHTML="";
    n_arr.forEach((e) => {
    if (isNaN(e)) {
        console.log(
          "It's either you are at last step or sorry we can't fetch that data"
        );
    } else {
        let innerDiv = document.createElement("div");
        innerDiv.style.height = e * 5 + "px";
        innerDiv.style.backgroundColor =
          "#" + (((1 << 24) * Math.random()) | 1).toString(16);
        innerDiv.setAttribute("id", "elem" + i);
        i++;
        innerDiv.classList.add("innerDiv");
        let innerText = document.createElement("div");
        innerText.innerText = e.toString();
        innerText.classList.add("innerText");
        innerDiv.appendChild(innerText);
        parentDiv[0].appendChild(innerDiv);
      }
    });
    inst[0].innerHTML = `Array after iteration ${i}: ${n_arr.join(", ")}. `;
  if (j !== k - 1) {
    stopSort = true;
  }
}
Sbtn[0].addEventListener("click", () => {
  stopSort = false;
  insertionSort(n_arr);
});
}
async function swapColorHeight_insertion(j, i) {

  let a = "elem" + j;
  let b = "elem" + i;
  let e1 = document.getElementById(a);
  let e2 = document.getElementById(b);
  let bg1 = e1.style.backgroundColor;
  let bg2 = e2.style.backgroundColor;
  let h1 = e1.clientHeight;
  let h2 = e2.clientHeight;
  let t1 = e1.innerText;
  let t2 = e2.innerText;
  e1.style.backgroundColor = bg2;
  e2.style.backgroundColor = bg1;
  e1.style.height = h2 + "px";
  e2.style.height = h1 + "px";

  e1.classList.add("swapping");
  e2.classList.add("swapping");

  e1.innerText = t2;
  e2.innerText = t1;

  return new Promise((resolve) => {
    setTimeout(() => {
      // remove class to un-highlight elements being swapped
      e1.classList.remove("swapping");
      e2.classList.remove("swapping");
      resolve();
    }, 500);
  });
  await soja(document.getElementById("customRange1").value * 100);

}


// ========================== Quick Sort ========================================
let paused = false;

document
  .getElementById("quick_sort_link")
  .addEventListener("click", function () {
    document.getElementById("home").innerHTML = `
  <div class="visual_box">
  <form class="my_form">
      <h2>Quick Sort</h2>
      <p>Enter an array of numbers below and click the "Sort" button to sort them using Quick Sort.</p>
      <input type="text" id="array-input" name="array-input" placeholder="Type..."/>
      <input type="button" value="Sort" id="sort-btn" />
      </form>  
      <div class="parentDiv" id="parentDiv"></div>
      <div class="all_controls">
          <label for="customRange1" class="form_label">Speed</label> 
          <input type="range" class="form_range" id="customRange1">
          <img src="image/goToBeginning.png" class="btn face_left" id="back_btn" alt="Previous" />
          <img src="image/play.png" class="startbtn btn" id="startbtn" alt="Start"/>
          <img src="image/pause.png" class="stopbtn btn" id="stopbtn" alt="Stop" style="display:none;"/>
          <img src="image/goToEnd.png" class="btn" id="forward_btn" alt="Next"/>
    </div>
      <div class="text_instr">
      Quick sort is a divide-and-conquer sorting algorithm that recursively divides the input array into smaller subarrays based on a pivot element, and then sorts the subarrays in place
      </div>
  </div>
  </div>
  `;
    // event listeners
      let Sbtn = document.getElementsByClassName("startbtn");
      let handleClick = () => {
        paused = false;
        btn[0].style.display = "none";
        stopBtn.style.display = "inline-block";
        quickSort(arry);
      };
      Sbtn[0].addEventListener("click", handleClick);

      let stopBtn = document.getElementById("stopbtn");
      stopBtn.addEventListener("click", () => {
        paused = true;
        stopBtn.style.display = "none";
        btn[0].style.display = "inline-block";
      });
    document.getElementById("sort-btn").addEventListener("click", function () {
      //texttospeech(document.querySelector(".text_instr").textContent);
      getArray();
    });
    document.getElementById("back_btn").addEventListener("click", function () {
      Sbtn[0].removeEventListener("click", handleClick);
      counter--;
      console.log(counter);
      previous_Qstep(counter, stack);
    });
    
   document.getElementById("forward_btn").addEventListener("click", function () {
     Sbtn[0].removeEventListener("click", handleClick);
        console.log(counter);
        next_QStep(counter);
      }); 

  });
  
function getArray() {
  var input = document.getElementById("array-input").value.trim();
  arry = input.split(" ").map(Number);
  console.log(arry);
  if (arry.length <= 1) {
    inst[0].innerHTML = `Enter More Elements`;  //instruction to be updated
  }
  else{
    arry.forEach(e=>{
        if(isNaN(e))  
        {
          inst[0].innerHTML = `Enter Integer Input Only`;  //instruction to be updated
        }
        else{
          let innerDiv=document.createElement('div');
          innerDiv.style.height=(e*5 + 'px');
          innerDiv.style.backgroundColor = '#'+((1<<24)*Math.random()|1).toString(16);
          innerDiv.setAttribute('id','elem'+i);
          i++;
          innerDiv.classList.add("innerDiv");
          let innerText=document.createElement('div');
          innerText.innerText=e.toString();
          innerText.classList.add("innerText");
          innerDiv.appendChild(innerText);
          P_div[0].appendChild(innerDiv);
        }
    })

    Sbtn[0].addEventListener("click",()=>quickSort(arry,0,arry.length-1));
}
  }
  let pivotIndex;
  async function quickSort(arry, left, right) {
    console.log("Inside Quicksort");
    if (left < right) {
      pivotIndex = await partition(arry, left, right);
      if (!paused) {
        await quickSort(arry, left, pivotIndex - 1);
      }
      if (!paused) {
        await quickSort(arry, pivotIndex + 1, right);
      }
      let state = {
        arry: arry,
        left: left,
        right: right
      };
      step_dic.push(state);

    }
  }

  async function partition(arry, left, right) {
    let pivotValue = arry[right];
    pivotIndex = left;
    for (let i = left; i < right; i++) {
      if (arry[i] < pivotValue) {
        if (!paused) {
          await soja(document.getElementById("customRange1").value * 100);
          await swapNumber_Quick(arry, i, pivotIndex);
          await swapColorHeight_Quick(i, pivotIndex, pivotIndex);
          pivotIndex++;
          onStepComplete(i, pivotIndex);
        }
      } else {
        if (!paused) {
          await swapColorHeight_Quick(i, i, pivotIndex);
          onStepComplete(i);
        }
      }
    }
    if (!paused) {
      await soja(document.getElementById("customRange1").value * 100);
      await swapNumber_Quick(arry, pivotIndex, right);
      await swapColorHeight_Quick(pivotIndex, right, pivotIndex);
      onStepComplete(pivotIndex);
    }
    console.log("",pivotIndex);
    return pivotIndex;
  }
 async function swapColorHeight_Quick(i, j, pivotIndex) {
  console.log("i:",i,"j",j);
    let a = "elem" + i;
    let b = "elem" + j;
    let e1 = document.getElementById(a);
    let e2 = document.getElementById(b);
    let bg1 = e1.style.backgroundColor;
    let bg2 = e2.style.backgroundColor;
    let h1 = e1.clientHeight;
    let h2 = e2.clientHeight;
    e1.style.backgroundColor = bg2;
    e2.style.backgroundColor = bg1;
    e1.style.height = h2 + "px";
    e2.style.height = h1 + "px";
    e1.innerText = arry[i];
    e2.innerText = arry[j];
    await soja(document.getElementById("customRange1").value * 100);
  }
  async function swapNumber_Quick(arry, i, j) {
    let temp = arry[i];
    arry[i] = arry[j];
    arry[j] = temp;
  }

  // let counter=-1
  
  function onStepComplete(i,pivotIndex) {
    setTimeout(() => {
      let instr = document.querySelector(".text_instr");
      counter++;
      console.log("Value of counter", counter);
      console.log("UPDATED VAL",arry);
      stack.push(arry.slice());
      if (pivotIndex !== undefined && i === pivotIndex) {
        instr.innerText = "Pivot element swapped";
      } else if (pivotIndex !== undefined) {
        instr.innerText = `Swapping element ${i} with pivot element ${arry[pivotIndex]}`;
      } else {
        instr.innerText = `Comparing element ${i} with pivot element`;
      }
      if(arry.sort()==arry)
      {
        console.log("SORT KARATOY ",arry.sort());
        instr.innerText = `Algo Executed Successfully , All Elements are sorted`;
      }
      console.log("Prevarry",stack);
    }, 10);
  }

  function previous_Qstep(index)
  {
    let i = 0;
    let n_arr = [];
    console.log("Fetching from index", index);
    n_arr = stack[index];
    console.log(stack[index]);
    parentDiv[0].innerHTML = "";
    n_arr.forEach((e) => {
      if (isNaN(e)) {
        console.log(
          "It's either you are at last step or sorry we can't fetch that data"
        );
      } else {
        let innerDiv = document.createElement("div");
        innerDiv.style.height = e * 5 + "px";
        innerDiv.style.backgroundColor =
          "#" + (((1 << 24) * Math.random()) | 1).toString(16);
        innerDiv.setAttribute("id", "elem" + i);
        i++;
        innerDiv.classList.add("innerDiv");
        let innerText = document.createElement("div");
        innerText.innerText = e.toString();
        innerText.classList.add("innerText");
        innerDiv.appendChild(innerText);
        parentDiv[0].appendChild(innerDiv);
      }
    });
    arry = [];
    arry = n_arr;
    Sbtn[0].addEventListener("click", () => {
      stopSort = false;
      quickSort(n_arr);
    });
  }