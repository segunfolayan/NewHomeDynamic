
const words = ["Bars", "Cathedral", "Cinema", "Museum", "Bull ring"]

function changeWord(){
  const randomWord
  =words[Math.floor(Math.random()*words.length)];
 document.getElementById("placestovisit").textContent=randomWord;}
       
document.getElementById("placestovisit").addEventListener("click", changeWord);

              
              
var dice, rolls, SumRolls, item;

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}

// Describe this function...
function display_the_rolls() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  SumRolls = rolls.reduce((a,b) => a+b, 0);
  let element_list2 = document.getElementById('list');
  rolls.forEach((item) => {
    let new_li = document.createElement('li');
    new_li.innerText = item;

    element_list2.appendChild(new_li);
  });
  let element_total = document.getElementById('total');
  element_total.innerText = SumRolls;
  let element_info = document.getElementById('info');
  if (SumRolls < 11) {
    element_info.innerText = 'Keep playing';
  } else if (SumRolls == 11) {
    element_info.innerText = 'You won';
  } else {
    element_info.innerText = 'You lost';
  }
}


dice = [1, 2, 3, 4, 5, 6];
rolls = [];
display_the_rolls();


document.getElementById('button_roll').addEventListener('click', (event) => {
  rolls.push(randomMember(dice));
  let element_list = document.getElementById('list');
  element_list.replaceChildren();
  display_the_rolls();

});

document.getElementById('button_remove').addEventListener('click', (event) => {
  rolls.pop();
  let element_list3 = document.getElementById('list');
  element_list3.replaceChildren();
  display_the_rolls();

});

document.getElementById('button_restart').addEventListener('click', (event) => {
  rolls = [];
  let element_list4 = document.getElementById('list');
  element_list4.replaceChildren();
  let element_total2 = document.getElementById('total');
  element_total2.innerText = 0;

});
