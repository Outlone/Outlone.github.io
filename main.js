const MASSIV = [
	"visor",
	"hat-nike",
	"hat",
	"сylinder",
	"fur-hat",
	"cap",
	"red-hat",
	"ushanka",
	"beret",
	"garrison-cap"
];

// https://stackoverflow.com/a/2450976
const shuffle = array => {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
    array[randomIndex], array[currentIndex]];
    }

  return array;
}

const shuffledObjects = shuffle(MASSIV);
let currentIndex = 0;

const addEventListener = () => {
  if (currentIndex >= shuffledObjects.length) {
    document.getElementById("message").innerText = "Вы прошли игру!";
    return;
    }

  document.getElementById("message").innerText = "Найди головной убор " + shuffledObjects[currentIndex];

  document.getElementById(shuffledObjects[currentIndex]).addEventListener('click', function (event) {
      event.preventDefault();

      this.style.opacity = '0';
      this.style.transition = '0.5s';

      ++currentIndex;

      addEventListener();
    });
};

addEventListener();