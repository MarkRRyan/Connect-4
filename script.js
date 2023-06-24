const spaces = document.querySelectorAll('.space');
const spaceRow = document.getElementsByTagName('tr');
const spaceCell = document.getElementsByTagName('td');
const restartBtn = document.querySelector('.reset');
const playerOne = 'Blue'
const playerTwo = 'Green'
let currentPlayer = playerOne;

const changeColor = (coord) => {
    let column = coord.target.cellIndex;
    let row = [];
  
    for (let i = 5; i > -1; i--) {
      if (spaceRow[i].children[column].style.backgroundColor == 'white') {
        row.push(spaceRow[i].children[column]);
        if (currentPlayer === playerOne) {
          document.getElementById('playerText').innerText = `Green's Turn`;
          row[0].style.backgroundColor = 'rgb(0, 174, 255)';
          if (hasPlayerWon()) {
            return (document.getElementById('playerText').innerText = 'Blue is the Winner!!!');
          } else if (draw()) {
            return (document.getElementById('playerText').innerText = `It's a Draw!`);
          } else {
            return (currentPlayer = playerTwo);
          }
        } else {
          document.getElementById('playerText').innerText = `Blue's Turn`;
          row[0].style.backgroundColor = 'rgb(14, 192, 14)';
          if (hasPlayerWon()) {
            return (document.getElementById('playerText').innerText = 'Green is the Winner!!!');
          } else if (draw()) {
            return (document.getElementById('playerText').innerText = `It's a Draw!`);
          } else {
            return (currentPlayer = playerOne);
          }
        }
      }
    }
  };
  

Array.prototype.forEach.call(spaceCell, (cell) => {
    cell.addEventListener('click', changeColor);
    cell.style.backgroundColor = 'white';
});

const inRow = (one, two, three, four) => {
    return (one === two && one === three && one === four && one !== 'white');
}

const hasPlayerWon = () => {
    for (let i = 0; i < 7; i++){
        for (let row = 0; row < 3; row++){
            if (inRow(spaceRow[row].children[i].style.backgroundColor, spaceRow[row+1].children[i].style.backgroundColor,
                                spaceRow[row+2].children[i].style.backgroundColor,spaceRow[row+3].children[i].style.backgroundColor)){
                return true;
            };
        }   
    } for (let row = 0; row < spaceRow.length; row++){
        for (let i =0; i < 4; i++){
           if (inRow(spaceRow[row].children[i].style.backgroundColor,spaceRow[row].children[i+1].style.backgroundColor, 
                                spaceRow[row].children[i+2].style.backgroundColor, spaceRow[row].children[i+3].style.backgroundColor)){
               return true;
           }
        }
    }  for(let i = 0; i < 4; i++){
        for (let row = 5; row > 2; row--){
            if (inRow(spaceRow[row].children[i].style.backgroundColor, spaceRow[row-1].children[i+1].style.backgroundColor,
                spaceRow[row-2].children[i+2].style.backgroundColor,spaceRow[row-3].children[i+3].style.backgroundColor)){
                    return true;
            }
        }
    }for(let i = 0; i < 4; i++){
        for (let row = 0; row < 3; row++){
            if (inRow(spaceRow[row].children[i].style.backgroundColor, spaceRow[row+1].children[i+1].style.backgroundColor,
                spaceRow[row+2].children[i+2].style.backgroundColor,spaceRow[row+3].children[i+3].style.backgroundColor)){
                    return true;
                }
            }
        }
    }
const draw = () => {
    let fullSpaces = []
    for (i = 0; i < spaceCell.length; i++) {
        if (spaceCell[i].style.backgroundColor !== 'white') {
            fullSpaces.push(spaceCell[i]);
        }
        if (fullSpaces.length === spaceCell.length) {
            return true;
        }
    }
}

restartBtn.addEventListener('click', () => {
    spaces.forEach(gameSlot => {
        gameSlot.style.backgroundColor = 'white';
    });
    return (currentPlayer === 1),
    document.getElementById('playerText').innerText = 'Click on a Spot to begin'
});

// Sidebar Javascript
const hamburgerMenu = document.querySelector('.hamburger-menu');
const sideMenu = document.querySelector('.side-menu');
const burger = document.querySelectorAll('.hamburger')
console.log(burger)

hamburgerMenu.addEventListener('click', function() {
  hamburgerMenu.classList.toggle('active');
  sideMenu.classList.toggle('active');
  // hamburgerMenu.style.display = 'none'
});

document.addEventListener('click', function(event) {
  const target = event.target;
  if (!target.closest('.side-menu-container')) {
    hamburgerMenu.classList.remove('active');
    sideMenu.classList.remove('active');
    // hamburgerMenu.style.display = 'block'
  }
});

