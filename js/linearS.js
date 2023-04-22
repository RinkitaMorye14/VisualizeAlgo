let parentsc = document.getElementsByClassName("parentsc");
let searchsk = document.getElementsByClassName("searchsk");
let pauseSort = false;
let cont = -1;
// let i = 0;
let stepcounter = -1;
document.getElementById("Linear_search").addEventListener("click", function () {
  document.getElementById("home").innerHTML = `
  <div class="visual_box">
  <form class="my_form">
      <h2>Linear Search</h2>
      <p>Enter an array of numbers below and click the "Visualize" button to view them.</p>
      <input type="text" id="array_input" name="array_input" placeholder="Type..."/>
      <input type="button" value="Sort" id="sort-btn" />
      <p>Enter the element to search</p>
      <input type="text" id="search_ele" name="search_ele" placeholder="Search Element..."/>
      <input type="button" value="SEARCH" id="search_btn" />
      </form>  
      <div class="parentDiv" id="parentDiv">
      <div class="parentsc" id="parentsc"></div>
      <div class="searchsk" id="searchsk"></div>
      </div>
      <div class="all_controls">
            <label for="customRange1" class="form_label">Speed</label> 
            <input type="range" class="form_range" id="customRange1">
            <img src="image/goToBeginning.png" class="btn face_left" id="back_btn" alt="Previous" />
            <img src="image/play.png" class="startbtn btn" id="startbtn" alt="Start"/>
            <img src="image/pause.png" class="stopbtn btn" id="stopbtn" alt="Stop" style="display:none;"/>
            <img src="image/goToEnd.png" class="btn" id="forward_btn" alt="Next"/>
    </div>
      <div class="text_instr" id="text_instr">
      Linear search is a simple searching algorithm that searches for a target value in a list or array by sequentially checking each element from the beginning until the target value is found or the end of the list is reached. It is also known as a brute-force search or sequential search.
      </div>
  </div>
  </div>
  `;
  document.getElementById("sort-btn").addEventListener("click", function () {
    InsertArray();
  });
  document.getElementById("search_btn").addEventListener("click", function () {
    get_find();
  });
  document.getElementById("startbtn").addEventListener("click", function () {
    pauseSort = false;
    document.getElementById("startbtn").style.display="inline-block";
    document.getElementById("stopbtn").style.display="none";
    linearSearch();
  });
  document.getElementById("stopbtn").addEventListener("click", function () {
    pauseSort = true;
    console.log("STOPPPPP");
    document.getElementById("startbtn").style.display="none";
    document.getElementById("stopbtn").style.display="inline-block";
  });
  document.getElementById("back_btn").addEventListener("click", function () {
    stepcounter--;
    prevStep(stepcounter);
  });
  document.getElementById("forward_btn").addEventListener("click",function(){
    stepcounter++;
    nextStep(stepcounter);
    //stepcounter++;
  })
});

let queue = [];
async function prevStep(cont) {
  console.log("Starting from index", cont);
  currentIndex--;
  for (let i =currentIndex;i<=queue.length;i++){
    let blockDiv = document.getElementById("elem" + i);
    // blockDiv.style.backgroundColor = "#1CB5E0";
    // "#" + (((1 << 24) * Math.random()) | 1).toString(16);
  }
  for (let i = cont; i <= queue.length; i++) {
    cont++;
    if (pauseSort) {
      console.log("value", pauseSort);
      document.getElementById("text_instr").innerHTML = `Searching stopped`;
      currentIndex = i;
      break;
    } else if (i == queue.length) {
      document.getElementById("text_instr").innerHTML = `Element not found`;
    } else {
      let blockDiv = document.getElementById("elem" + i);
      blockDiv.style.backgroundColor = "grey";
      await delayby(600);
      blockDiv.style.backgroundColor = "white";
      await delayby(1000);
      if (queue[i] == data) {
        blockDiv.style.backgroundColor = "green";
        index = i;
        await delayby(1000);
        break;
      } else {
        blockDiv.style.backgroundColor = "red";
      }
    }
  }
  console.log(index)
  stepcounter = i;
  if (index != -1 && !pauseSort) {
    let SearchBlock = document.getElementById("Search_elem");
    SearchBlock.style.backgroundColor = "green";
    console.log(pauseSort);
    document.getElementById(
      "text_instr"
    ).innerHTML = `Element found at index ${index}`;
  }
}


function InsertArray() {
  let i = 0;
  var input = document.getElementById("array_input").value.trim();
  queue = input.split(" ").map(Number);
  if (queue.length <= 1) {
    instr[0].innerHTML = `Enter More Elements`;
  } else {
    queue.forEach((e) => {
      if (isNaN(e)) {
        instr[0].innerHTML = `Enter Integer Input Only`;
      } else {
        let blockDiv = document.createElement("div");
        blockDiv.style.height = 60 + "px";
        blockDiv.style.width = 60 + "px";
        // blockDiv.style.backgroundColor = "#1CB5E0"
          // "#" + (((1 << 24) * Math.random()) | 1).toString(16);
        blockDiv.setAttribute("id", "elem" + i);
        i++;
        blockDiv.classList.add("blockDiv");
        let blockText = document.createElement("div");
        blockText.innerText = e.toString();
        blockText.classList.add("blockText");
        blockDiv.appendChild(blockText);
        parentsc[0].appendChild(blockDiv);
      }
    });
  }
}
let data = 0;
function get_find() {
  let ele = document.getElementById("search_ele").value.trim();
  data = ele;
  let SearchBlock = document.createElement("div");
  SearchBlock.style.height = 60 + "px";
  SearchBlock.style.width = 60 + "px";
  // SearchBlock.style.backgroundColor = "#9289f1";
    // "#" + (((1 << 24) * Math.random()) | 1).toString(16);
  SearchBlock.setAttribute("id", "Search_elem");
  SearchBlock.classList.add("SearchBlock");
  let searchText = document.createElement("div");
  searchText.innerText = data.toString();
  searchText.classList.add("searchText");
  SearchBlock.appendChild(searchText);
  searchsk[0].appendChild(SearchBlock);
}

const delayby = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

let currentIndex = 0;

async function linearSearch() {
  let ele = document.getElementById("search_ele").value.trim();
  data = ele;
  let index = -1;
  for (let i = currentIndex; i <= queue.length; i++) {
    cont++;
    if (pauseSort) {
      console.log("value", pauseSort);
      document.getElementById("text_instr").innerHTML = `Searching stopped`;
      currentIndex = i;
      break;
    } else if (i == queue.length) {
      document.getElementById("text_instr").innerHTML = `Element not found`;
    } else {
      let blockDiv = document.getElementById("elem" + i);
      console.log("ELEMENT : S", "elem" + i);
      blockDiv.style.backgroundColor = "grey";
      await delayby(document.getElementById("customRange1").value * 100);
      blockDiv.style.backgroundColor = "white";
      await delayby(document.getElementById("customRange1").value * 100);
      console.log(queue[i]);
      if (queue[i] == data) {
        blockDiv.style.backgroundColor = "green";
        index = i;
        await delayby(document.getElementById("customRange1").value * 100);
        break;
      } else {
        blockDiv.style.backgroundColor = "red";
      }
    }
    stepcounter = i;
  }
  if (index != -1 && !pauseSort) {
    let SearchBlock = document.getElementById("Search_elem");
    SearchBlock.style.backgroundColor = "green";
    console.log(pauseSort);
    document.getElementById(
      "text_instr"
    ).innerHTML = `Element found at index ${index}`;
  }
}

async function nextStep(cont){
  let index=-1;
  if(index==-1)
  {
    for (let i = cont; i <= cont+1; i++) {
      console.log("Comparing",i,"with",data);
      cont++;
      console.log("COMPARING...");
      let blockDiv = document.getElementById("elem" + i);
      blockDiv.style.backgroundColor = "grey";
      await delayby(600);
      blockDiv.style.backgroundColor = "white";
      await delayby(1000);
      if (queue[i] == data) {
          blockDiv.style.backgroundColor = "green";
          index = i;
          let SearchBlock = document.getElementById("Search_elem");
          SearchBlock.style.backgroundColor = "green";
          document.getElementById("text_instr").innerHTML = `Element found at index ${index}`;
          break;
        } 
      else {
          blockDiv.style.backgroundColor = "red";
        }
      stepcounter = i++;
      break;
    }
  }
  else{
    document.getElementById("text_instr").innerHTML = `Element already found at index ${index}`;
  }
}
