let result = document.querySelector(".result");

// Define the squareclicked function
const squareclicked = e => {
    if (e.target.classList.contains("piece")) {
    let tempsq = e.target.parentElement.id;
    let pieceType = e.target.classList[1]; // Assuming the class list contains the piece type class
    result.innerHTML = `Square ID: <strong>${tempsq}</strong><br>Piece Type: <strong>${pieceType}</strong>`;
    }
};

//make all squares on board a variable
const a1 = document.querySelector("#a1");
const a2 = document.querySelector("#a2");
const a3 = document.querySelector("#a3");
const a4 = document.querySelector("#a4");
const a5 = document.querySelector("#a5");
const a6 = document.querySelector("#a6");
const a7 = document.querySelector("#a7");
const a8 = document.querySelector("#a8");
const b1 = document.querySelector("#b1");
const b2 = document.querySelector("#b2");
const b3 = document.querySelector("#b3");
const b4 = document.querySelector("#b4");
const b5 = document.querySelector("#b5");
const b6 = document.querySelector("#b6");
const b7 = document.querySelector("#b7");
const b8 = document.querySelector("#b8");
const c1 = document.querySelector("#c1");
const c2 = document.querySelector("#c2");
const c3 = document.querySelector("#c3");
const c4 = document.querySelector("#c4");
const c5 = document.querySelector("#c5");
const c6 = document.querySelector("#c6");
const c7 = document.querySelector("#c7");
const c8 = document.querySelector("#c8");
const d1 = document.querySelector("#d1");
const d2 = document.querySelector("#d2");
const d3 = document.querySelector("#d3");
const d4 = document.querySelector("#d4");
const d5 = document.querySelector("#d5");
const d6 = document.querySelector("#d6");
const d7 = document.querySelector("#d7");
const d8 = document.querySelector("#d8");
const e1 = document.querySelector("#e1");
const e2 = document.querySelector("#e2");
const e3 = document.querySelector("#e3");
const e4 = document.querySelector("#e4");
const e5 = document.querySelector("#e5");
const e6 = document.querySelector("#e6");
const e7 = document.querySelector("#e7");
const e8 = document.querySelector("#e8");
const f1 = document.querySelector("#f1");
const f2 = document.querySelector("#f2");
const f3 = document.querySelector("#f3");
const f4 = document.querySelector("#f4");
const f5 = document.querySelector("#f5");
const f6 = document.querySelector("#f6");
const f7 = document.querySelector("#f7");
const f8 = document.querySelector("#f8");
const g1 = document.querySelector("#g1");
const g2 = document.querySelector("#g2");
const g3 = document.querySelector("#g3");
const g4 = document.querySelector("#g4");
const g5 = document.querySelector("#g5");
const g6 = document.querySelector("#g6");
const g7 = document.querySelector("#g7");
const g8 = document.querySelector("#g8");
const h1 = document.querySelector("#h1");
const h2 = document.querySelector("#h2");
const h3 = document.querySelector("#h3");
const h4 = document.querySelector("#h4");
const h5 = document.querySelector("#h5");
const h6 = document.querySelector("#h6");
const h7 = document.querySelector("#h7");
const h8 = document.querySelector("#h8");


//waiting for a square to be clicked
a1.addEventListener("click", squareclicked);
a2.addEventListener("click", squareclicked);
a3.addEventListener("click", squareclicked);
a4.addEventListener("click", squareclicked);
a5.addEventListener("click", squareclicked);
a6.addEventListener("click", squareclicked);
a7.addEventListener("click", squareclicked);
a8.addEventListener("click", squareclicked);
b1.addEventListener("click", squareclicked);
b2.addEventListener("click", squareclicked);
b3.addEventListener("click", squareclicked);
b4.addEventListener("click", squareclicked);
b5.addEventListener("click", squareclicked);
b6.addEventListener("click", squareclicked);
b7.addEventListener("click", squareclicked);
b8.addEventListener("click", squareclicked);
c1.addEventListener("click", squareclicked);
c2.addEventListener("click", squareclicked);
c3.addEventListener("click", squareclicked);
c4.addEventListener("click", squareclicked);
c5.addEventListener("click", squareclicked);
c6.addEventListener("click", squareclicked);
c7.addEventListener("click", squareclicked);
c8.addEventListener("click", squareclicked);
d1.addEventListener("click", squareclicked);
d2.addEventListener("click", squareclicked);
d3.addEventListener("click", squareclicked);
d4.addEventListener("click", squareclicked);
d5.addEventListener("click", squareclicked);
d6.addEventListener("click", squareclicked);
d7.addEventListener("click", squareclicked);
d8.addEventListener("click", squareclicked);
e1.addEventListener("click", squareclicked);
e2.addEventListener("click", squareclicked);
e3.addEventListener("click", squareclicked);
e4.addEventListener("click", squareclicked);
e5.addEventListener("click", squareclicked);
e6.addEventListener("click", squareclicked);
e7.addEventListener("click", squareclicked);
e8.addEventListener("click", squareclicked);
f1.addEventListener("click", squareclicked);
f2.addEventListener("click", squareclicked);
f3.addEventListener("click", squareclicked);
f4.addEventListener("click", squareclicked);
f5.addEventListener("click", squareclicked);
f6.addEventListener("click", squareclicked);
f7.addEventListener("click", squareclicked);
f8.addEventListener("click", squareclicked);
g1.addEventListener("click", squareclicked);
g2.addEventListener("click", squareclicked);
g3.addEventListener("click", squareclicked);
g4.addEventListener("click", squareclicked);
g5.addEventListener("click", squareclicked);
g6.addEventListener("click", squareclicked);
g7.addEventListener("click", squareclicked);
g8.addEventListener("click", squareclicked);
h1.addEventListener("click", squareclicked);
h2.addEventListener("click", squareclicked);
h3.addEventListener("click", squareclicked);
h4.addEventListener("click", squareclicked);
h5.addEventListener("click", squareclicked);
h6.addEventListener("click", squareclicked);
h7.addEventListener("click", squareclicked);
h8.addEventListener("click", squareclicked);

//checking what square has been clicked

document.addEventListener("DOMContentLoaded", () => {
  // Adding event listener to the entire chessboard
  const chessboard = document.querySelector(".chessboard");
  chessboard.addEventListener("click", squareclicked);

  // Set initial content for the result element
  result.innerHTML = "Click a square to see its details";
});