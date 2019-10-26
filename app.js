// creating maing divs and setting up main constants
const button = document.querySelector("button");
const containerDiv = document.querySelector(".container");
const friends = ["John", "Mary", "Brad", "Ann", "Steve", "Joseph", "Matt"];
const lines = n => (n === 1 ? "line" : "lines");

// add event listenet to button element
button.addEventListener("click", singSong);

// function that display friends name and line of codes
function singSong(e) {
  // loop trough friends names in friend array and creating dom elements
  for (let friend of friends) {
    friendDiv = document.createElement("div");
    friendDiv.className = "card friends";

    mainTextDiv = document.createElement("div");
    mainTextDiv.className = "card-body";

    friendName = document.createElement("h3");
    friendName.className = "card-title";

    containerDiv.appendChild(friendDiv);
    friendDiv.appendChild(mainTextDiv);

    friendDiv.appendChild(mainTextDiv);

    friendName.innerText = friend;
    mainTextDiv.appendChild(friendName);

    // loop for creating text of the song for each friend and creating dom element for each line. in this case loop creates 10 lines of codes.
    for (let j = 10; j >= 1; j--) {
      songText = document.createElement("p");
      songText.className = "card-text";

      let text = `${j} ${lines(j)} of code in the file, ${friend} strikes one out; ${j -
        1 || "no more"} ${lines(j - 1)} of code in the file!`;

      songText.innerText = text;
      mainTextDiv.appendChild(songText);
    }
  }
}
