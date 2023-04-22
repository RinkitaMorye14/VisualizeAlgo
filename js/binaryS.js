let pdiv = document.getElementsByClassName("parentDiv");
let ptsk = document.getElementsByClassName("parentsk");
let shsk = document.getElementsByClassName("searchsk");
let ins = document.getElementsByClassName("text_instr");
let stopSt = false;
let array = [];
let index = -1;
let B_stack = [];
let left,right;
// let i = 0;
// let steps = [];
// let index = -1;
document.getElementById("Binary_search").addEventListener("click", function () {
  document.getElementById("home").innerHTML = `
    <div class="visual_box">
    <form class="my_form">
        <h2>Binary Search</h2>
        <p>Enter an array of numbers below and click the "Visualize" button to view them.</p>
        <input type="text" id="array_input" name="array_input" placeholder="Type..."/>
        <input type="button" value="Sort" id="sort-btn" />
        <p>Enter the element to search</p>
        <input type="text" id="search_ele" name="search_ele" placeholder="Search Element..."/>
        <input type="button" value="SEARCH" id="search_btn" />
        </form>  
        <div class="parentDiv" id="parentDiv">
        <div class="parent" id="parent">
        <div class="dir" id="dir">
        <span>Color Indicates :<br>
              Orange : Left to Right Range<br>
              Violet : Middle<br> 
              Cyan   : Other Elements<br>
        </span>
        </div>
        <div class="parentsk" id="parentsk"></div>
        <div class="searchsk" id="searchsk"></div>
        </div>
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
        Binary search is a searching algorithm used to quickly find the position of a target value in a sorted array or list. It works by repeatedly dividing the search interval in half, comparing the middle element with the target value, and then narrowing down the search interval by half until the target value is found or the search interval is empty.
        </div>
    </div>
    </div>
    `;
  document.getElementById("stopbtn").addEventListener("click", function () {
    stopSorting = true;
    
    console.log("STOPPPPP");
  });
  document.getElementById("sort-btn").addEventListener("click", function () {
    getArr();
  });
  document.getElementById("search_btn").addEventListener("click", function () {
    search_data();
  });
  document.getElementById("startbtn").addEventListener("click", function () {
    stopSorting = false;
    console.log(stopSorting);
    binarySearch(left,right);
  });
  document.getElementById("back_btn").addEventListener("click", function () {
    index--;
    previous_bs(index);
  });
  document.getElementById("forward_btn").addEventListener("click", function () {
    index++;
    next_V(index);
    //index++;
  });
});
function getArr() {
  let i = 0;
  var input = document.getElementById("array_input").value.trim();
  array = input.split(" ").map(Number);
  array.sort((a, b) => a - b);
  if (array.length <= 1) {
    instr[0].innerHTML = `Enter More Elements`;
  } else {
    array.forEach((e) => {
      if (isNaN(e)) {
        instr[0].innerHTML = `Enter Integer Input Only`;
      } else {
        let blockDiv = document.createElement("div");
        blockDiv.style.height = 60 + "px";
        blockDiv.style.width = 60 + "px";
        // blockDiv.style.backgroundColor = "#695CFE";
        //   "#" + (((1 << 24) * Math.random()) | 1).toString(16);
        blockDiv.setAttribute("id", "elem" + i);
        i++;
        blockDiv.classList.add("blockDiv");
        let blockText = document.createElement("div");
        blockText.innerText = e.toString();
        blockText.classList.add("blockText");
        blockDiv.appendChild(blockText);
        parentsk[0].appendChild(blockDiv);
      }
    });
  }
  left=0;
  right=array.length-1;
}
function search_data() {
  let ele = document.getElementById("search_ele").value.trim();
  let find = ele;
  let SearchBlock = document.createElement("div");
  SearchBlock.style.height = 60 + "px";
  SearchBlock.style.width = 60 + "px";
  // SearchBlock.style.backgroundColor = "#9289f1";
  SearchBlock.setAttribute("id", "Search_elem");
  SearchBlock.classList.add("SearchBlock");
  let searchText = document.createElement("div");
  searchText.innerText = find.toString();
  searchText.classList.add("searchText");
  SearchBlock.appendChild(searchText);
  searchsk[0].appendChild(SearchBlock);
}

const zopa = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

async function binarySearch(l, r) {
  const target = Number(document.getElementById("search_ele").value.trim());
  left = l;
  right = r;
  while (left <= right && !stopSorting) {
    const mid = Math.floor((left + right) / 2);
    await zopa(800);
    markrange(left, mid, right);
    if (array[mid] == target) {
      let mid_m = document.getElementById("elem" + mid);
      mid_m.style.backgroundColor = "green";
      document.getElementById("Search_elem").style.backgroundColor = "green";
      document.getElementById(
        "text_instr"
      ).innerText = `Element Found at Index ${mid}`;
      B_stack.push([left, right]);
      index++;
      break;
    } else if (target > array[mid]) {
      index++;
      await zopa(600);
      left = mid + 1;
      B_stack.push([mid + 1, right]);
    } else if (target < array[mid]) {
      await zopa(600);
      right = mid - 1;
      index++;
      B_stack.push([left, mid - 1]);
    }
  }
}
async function markrange(l, m, r) {
  let range_l = document.getElementById("elem" + l);
  let range_r = document.getElementById("elem" + r);
  let mid_m = document.getElementById("elem" + m);
  console.log("MARKING RANGE",l,m,r);
    for (let i = 0; i < array.length; i++) {
    document.getElementById("elem" + i).style.backgroundColor = "#1CB5E0";
  }
  range_l.style.backgroundColor = "orange";
  range_r.style.backgroundColor = "orange";
  mid_m.style.backgroundColor = "purple";
}

// async function previous_bs(index) {
//   console.log(B_stack);
//   left=B_stack[index][0];
//   right=B_stack[index][1];
//   NextbinarySearch(left,right);
// }

// async function NextbinarySearch(l,r){
//   const target = Number(document.getElementById("search_ele").value.trim());
//   left = l;
//   right = r;
//   stopSorting=false;
//   console.log(left,right);
//   while (left <= right && !stopSorting) {
//     const mid = Math.floor((left + right) / 2);
//     await zopa(800);
//     markrange(left, mid, right);
//     if (array[mid] == target) {
//       let mid_m = document.getElementById("elem" + mid);
//       mid_m.style.backgroundColor = "green";
//       document.getElementById("Search_elem").style.backgroundColor = "green";
//       document.getElementById(
//         "text_instr"
//       ).innerText = `Element Found at Index ${mid}`;
//       B_stack.push([left, right]);
//       index++;
//       stopSorting=true;
//       break;
//     } else if (target > array[mid]) {
//       index++;
//       await zopa(600);
//       left = mid + 1;
//       B_stack.push([mid + 1, right]);
//       stopSorting=false;
//     } else if (target < array[mid]) {
//       await zopa(600);
//       right = mid - 1;
//       index++;
//       B_stack.push([left, mid - 1]);
//       stopSorting=false;
//     }
//   }
// }