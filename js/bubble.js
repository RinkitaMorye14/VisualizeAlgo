let parentDiv = document.getElementsByClassName("parentDiv");
let btn = document.getElementsByClassName("startbtn");
let instr = document.getElementsByClassName("text_instr");
let stopBtn = document.getElementById("stopbtn");
let stopSorting = false;
let counter = -1;
let i = 0;
let steps = [];

// =============================== Caution : (trial)code starts from here =================================
// ***********************************"Bubble Sort" **********************************************
document
  .getElementById("bubble_sort_link")
  .addEventListener("click", function () {
    document.getElementById("home").innerHTML = `
  <div class="visual_box">
  <form class="my_form">
      <h2>Bubble Sort</h2>
      <p>Enter numbers below and click the "Sort" button to sort them using Bubble Sort.</p>
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
      <div class="text_instr" id="text_instr">
          In bubble sort we are simply checking the index of 1st element with
          every other element and then we are swapping it like this here we
          are
      </div>
  </div>
  </div>
  `;
    // event listeners
    let btn = document.getElementsByClassName("startbtn");
    let handleClick = () => {
      stopSorting = false;
      console.log("assigning handleListner");
      btn[0].style.display = "none";
      stopBtn.style.display = "inline-block";
      myFunction(arr);
    };

    btn[0].addEventListener("click", handleClick);

    let stopBtn = document.getElementById("stopbtn");
    stopBtn.addEventListener("click", () => {
      stopSorting = true;
      stopBtn.style.display = "none";
      btn[0].style.display = "inline-block";
    });

    document.getElementById("sort-btn").addEventListener("click", function () {
      sortArray();
    });
    document.getElementById("back_btn").addEventListener("click", function () {
      btn[0].removeEventListener("click", handleClick);
      counter--;
      console.log(counter);
      previous_v(counter, steps);
    });

    document
      .getElementById("forward_btn")
      .addEventListener("click", function () {
        btn[0].removeEventListener("click", handleClick);
        console.log(counter);
        next_V(counter);
      });
  });
let arr = [];
function sortArray() {
  counter = -1;
  steps = [];
  parentDiv[0].innerHTML = "";
  // instr[0].innerHTML="";
  let i = 0;
  var input = document.getElementById("array-input").value.trim();
  arr = input.split(" ").map(Number);
  console.log(arr);
  if (arr.length <= 1) {
    instr[0].innerHTML = `Enter More Elements`;
  } else {
    arr.forEach((e) => {
      if (isNaN(e)) {
        instr[0].innerHTML = `Enter Integer Input Only`;
      } else {
        let innerDiv = document.createElement("div");
        innerDiv.style.height = e * 5 + "px";
        innerDiv.style.backgroundColor = "#695CFE";
          // "#" + (((1 << 24) * Math.random()) | 1).toString(16);
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
  }
}
function previous_v(index, steps) {
  let i = 0;
  let n_arr = [];
  console.log("Fetching from index", index);
  console.log(steps[index]);
  n_arr = steps[index];
  if (index <= -1) {
    console.log(
      "It's either you are at last step or sorry we can't fetch that data"
    );
    instr[0].innerHTML = `It's either you are at last step or sorry we can't fetch that data`;
  } else {
    parentDiv[0].innerHTML = "";
    n_arr.forEach((e) => {
      if (isNaN(e)) {
        console.log(
          "It's either you are at last step or sorry we can't fetch that data"
        );
        instr[0].innerHTML = `It's either you are at last step or sorry we can't fetch that data`;
      } else {
        let innerDiv = document.createElement("div");
        innerDiv.style.height = e * 5 + "px";
        innerDiv.style.backgroundColor = "#695CFE";
          // "#" + (((1 << 24) * Math.random()) | 1).toString(16);
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
    arr = [];
    arr = n_arr;
    btn[0].addEventListener("click", () => {
      stopSorting = false;
      myFunction(n_arr);
    });
  }
}

function next_V(index) {
  let n_arr = [];
  n_arr = steps[index];
  console.log(n_arr, "at index", index);
  if (n_arr != arr.sort()) {
    for (let j = 0; j < n_arr.length; j++) {
      if (n_arr[j] > n_arr[j + 1]) {
        console.log(arr[j], "is greater than", arr[j + 1]);
        temp = n_arr[j];
        n_arr[j] = n_arr[j + 1];
        n_arr[j + 1] = temp;
        break;
      }
    }
    console.log(n_arr);
    let i = 0;
    parentDiv[0].innerHTML = "";
    n_arr.forEach((e) => {
      if (isNaN(e)) {
        console.log(
          "It's either you are at last step or sorry we can't fetch that data"
        );
        instr[0].innerHTML = `It's either you are at last step or sorry we can't fetch that data`;
      } else {
        let innerDiv = document.createElement("div");
        innerDiv.style.height = e * 5 + "px";
        innerDiv.style.backgroundColor = "#695CFE";
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
    btn[0].addEventListener("click", () => {
      stopSorting = false;
      myFunction(n_arr);
    });
  }
}

const sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

async function myFunction(arr) {
  // const rangeip = document.getElementById("customRange1").value*100;
  console.log("INSIDE MYFUNCTION");
  for (let i = 0; i < arr.length && !stopSorting; i++) {
    for (let j = 0; j < arr.length - i - 1 && !stopSorting; j++) {
      await sleep(document.getElementById("customRange1").value * 100);
      Markcompare(j);
      if (arr[j] > arr[j + 1] && !stopSorting) {
        console.log(arr[j], "is greater than", arr[j + 1]);
        console.log(j, "is greater than", j + 1);
        swapNumber(arr, j);
        swapColorHeight(j);
        counter++;
        console.log("Value of counter", counter);
        console.log(arr);
        steps.push(arr.slice());
        instr[0].innerHTML = `Swapping element ${arr[j]} with element ${
          arr[j + 1]
        } ,as the element ${arr[j + 1]} is greater than ${arr[j]}.`;
        await sleep(document.getElementById("customRange1").value * 100);
      }
    }
  }
  if (!stopSorting) {
    instr[0].innerHTML = `All Elements are Sorted, Algo Executed successfully`;
  }
}
function Markcompare(j)
{
  let ele1 = "elem" + j;
  let ele2 = "elem" + (j + 1);
  let e1 = document.getElementById(ele1);
  let e2 = document.getElementById(ele2);
  e1.classList.add("Com_swapping");
  e2.classList.add("com_swapping");

  return new Promise((resolve) => {
    setTimeout(() => {
      // remove class to un-highlight elements being swapped
      e1.classList.remove("com_swapping");
      e2.classList.remove("com_swapping");
      resolve();
    }, 500);
  });
}
function swapNumber(arr, j) {
  let temp = arr[j];
  arr[j] = arr[j + 1];
  arr[j + 1] = temp;
}
function swapColorHeight(j) {
  let a = "elem" + j;
  let b = "elem" + (j + 1);
  let e1 = document.getElementById(a);
  let e2 = document.getElementById(b);
  let bg1 = e1.style.backgroundColor;
  let bg2 = e2.style.backgroundColor;
  let h1 = e1.clientHeight;
  let h2 = e2.clientHeight;
  let t1 = e1.innerText;
  let t2 = e2.innerText;

  // add class to highlight elements being swapped
  e1.classList.add("swapping");
  e2.classList.add("swapping");

  e1.style.backgroundColor = bg2;
  e2.style.backgroundColor = bg1;
  e1.style.height = h2 + "px";
  e2.style.height = h1 + "px";
  e1.innerText = t2;
  e2.innerText = t1;

  // wait for the transition to complete
  return new Promise((resolve) => {
    setTimeout(() => {
      // remove class to un-highlight elements being swapped
      e1.classList.remove("swapping");
      e2.classList.remove("swapping");
      resolve();
    }, 500);
  });
}

document
  .getElementById("selection_sort_link")
  .addEventListener("click", function () {
    // Selection Sort
    document.getElementById("home").innerHTML = `
  <div class="visual_box">
  <form class="my_form">
      <h2>Selection Sort</h2>
      <p>Enter an array of numbers below and click the "Sort" button to sort them using Bubble Sort.</p>
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
        In Selection sort , we are creating two arrays one sorted 2nd is unsorted then for , <br>Pass 1: we will take 1st element and then will check the whole array whether the elements less than the selected 1st element is present if yes then we will swap it <br>

        In Pass2 we will start with the 2nd element as the element at 1st index is already sorted similarly we will apply the same logic for other element 
      </div>
  </div>
  </div>
  `;
    // Add event listeners to the buttons
    let btn = document.getElementsByClassName("startbtn");
    let handleClick = () => {
      stopSorting = false;
      console.log("assigning handleListner");
      btn[0].style.display = "none";
      stopBtn.style.display = "inline-block";
      selectionSort(arr);
    };

    btn[0].addEventListener("click", handleClick);

    let stopBtn = document.getElementById("stopbtn");
    stopBtn.addEventListener("click", () => {
      stopBtn.style.display = "none";
      btn[0].style.display = "inline-block";
      stopSorting = true;
    });

    document.getElementById("sort-btn").addEventListener("click", function () {
      sortArray();
    });
    document.getElementById("back_btn").addEventListener("click", function () {
      btn[0].removeEventListener("click", handleClick);
      counter--;
      console.log(counter);
      previous_SV(counter, steps);
    });

    document
      .getElementById("forward_btn")
      .addEventListener("click", function () {
        btn[0].removeEventListener("click", handleClick);
        console.log(counter);
        next_SV(counter);
      });
  });
async function selectionSort(arr) {
  counter = -1;
  steps = [];
  for (let i = 0; i < arr.length - 1 && !stopSorting; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length && !stopSorting; j++) {
      if (arr[j] < arr[minIndex] && !stopSorting) {
        minIndex = j;
        console.log("MinIndex at this point is ", minIndex);
      }
    }
    if (minIndex != i && !stopSorting) {
      swapNumber_Selection(arr, i, minIndex);
      counter++;
      console.log("Value of counter", counter);
      console.log(arr);
      steps.push(arr.slice());
      let id1 = "elem" + i;
      let id2 = "elem" + minIndex;
      swapColorHeight_Selection(id1, id2);
      instr[0].innerHTML = `Swapping element ${arr[i]} with element ${arr[minIndex]} ,as the element ${arr[minIndex]} is the smallest element in the unsorted portion of the array.<br>`;
    }
    await sleep(1000);
  }
  console.log("STEPS", steps);
  if (!stopSorting) {
    instr[0].innerHTML = `All Elements are Sorted, Algo Executed successfully`;
  }
}
function swapNumber_Selection(arr, i, j) {
  console.log("i:", i, "j:", j, "arr:", arr);
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  console.log("After swap arr:", arr);
  let e1 = document.getElementById("elem" + i);
  let e2 = document.getElementById("elem" + j);
  e1.innerText = arr[i];
  e2.innerText = arr[j];
}
function swapColorHeight_Selection(id1, id2) {
  let e1 = document.getElementById(id1);
  let e2 = document.getElementById(id2);
  let bg1 = e1.style.backgroundColor;
  let bg2 = e2.style.backgroundColor;
  let h1 = e1.offsetHeight;
  let h2 = e2.offsetHeight;
  e1.classList.add("swapping");
  e2.classList.add("swapping");
  e1.style.backgroundColor = bg2;
  e2.style.backgroundColor = bg1;
  e1.style.height = h2 + "px";
  e2.style.height = h1 + "px";

  return new Promise((resolve) => {
    setTimeout(() => {
      // remove class to un-highlight elements being swapped
      e1.classList.remove("swapping");
      e2.classList.remove("swapping");
      resolve();
    }, 500);
  });
}

function previous_SV(index, steps) {
  let i = 0;
  let n_arr = [];
  console.log("Fetching from index", index);
  console.log(steps[index]);
  n_arr = steps[index];
  parentDiv[0].innerHTML = "";
  n_arr.forEach((e) => {
    if (isNaN(e)) {
      console.log(
        "It's either you are at last step or sorry we can't fetch that data"
      );
    } else {
      let innerDiv = document.createElement("div");
      innerDiv.style.height = e * 5 + "px";
      innerDiv.style.backgroundColor = "#695CFE";
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
  arr = [];
  arr = n_arr;
  btn[0].addEventListener("click", () => {
    stopSorting = false;
    selectionSort(n_arr);
  });
}

async function next_SV(counter) {
  let n_arr = [];
  n_arr = steps[counter];
  console.log(n_arr, "at index", counter);
  // parentDiv[0].innerHTML = "";
  stopSorting = false;
  for (let i = 0; i < n_arr.length - 1 && !stopSorting; i++) {
    let minIndex = i;
    console.log("Right Now the value of minindex", minIndex);
    for (let j = i + 1; j < n_arr.length && !stopSorting; j++) {
      if (n_arr[j] < n_arr[minIndex] && !stopSorting) {
        minIndex = j;
        console.log("MinIndex at this point is ", minIndex);
      }
    }
    if (minIndex != i && !stopSorting) {
      //swapNumber_Selection(n_arr, i, minIndex);
      let temp = n_arr[i];
      n_arr[i] = arr[minIndex];
      n_arr[minIndex] = temp;
      counter++;
      console.log("Updated Value of", counter);
      console.log(n_arr);
      steps.push(n_arr.slice());
      let i = 0;
      n_arr.forEach((e) => {
        if (isNaN(e)) {
          console.log(
            "It's either you are at last step or sorry we can't fetch that data"
          );
        } else {
          parentDiv[0].innerHTML = "";
          let innerDiv = document.createElement("div");
          innerDiv.style.height = e * 5 + "px";
          innerDiv.style.backgroundColor = "#695CFE";
          innerDiv.setAttribute("id", "ele" + i);
          i++;
          innerDiv.classList.add("innerDiv");
          let innerText = document.createElement("div");
          innerText.innerText = e.toString();
          innerText.classList.add("innerText");
          innerDiv.appendChild(innerText);
          parentDiv[0].appendChild(innerDiv);
        }
      });
      btn[0].addEventListener("click", () => {
        stopSorting = false;
        selectionSort(n_arr);
      });
      instr[0].innerHTML = `Swapping element ${n_arr[i]} with element ${n_arr[minIndex]} ,as the element ${n_arr[minIndex]} is the smallest element in the unsorted portion of the array.<br>`;
    }
    break;
  }
  console.log("STEPS", steps);
}
