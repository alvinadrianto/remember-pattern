const kotakPreview = document.querySelectorAll('.preview');
const kotakAction = document.querySelectorAll('.action');
const kotak = document.querySelectorAll('.kotak');
const h4 = document.querySelector('h4');

let currentBlink;
let stage;
let resultPola = [];
let actionPola = [];
let tempPola = [];
let final;
let chance;
let click;

function randomkotak(kotak) {
  const r = Math.floor(Math.random() * kotak.length);
  return r;
}

function blink() {
  click = false;
  if (final) {
    for (currentBlink = stage; currentBlink <= stage; currentBlink++) {
      const rKotak = randomkotak(kotakPreview);
      resultPola.push(kotakPreview[rKotak]);
      actionPola.push(kotakAction[rKotak]);
    }
  }

  tempPola = actionPola.slice();
  resultPola.forEach((k, i) => {
    setTimeout(() => {
      setTimeout(() => {
        resultPola[i].style.background = 'black';

        setTimeout(() => {
          resultPola[i].style.background = 'transparent';
        }, i + 1 * 300);
      }, i * 500);

      setTimeout(() => {
        click = true;
      }, resultPola.length * 500 + 100);
    }, 1000);
  });
}

function klik() {
  if (click) {
    if (this == tempPola[0]) {
      tempPola.shift();
    } else {
      final = false;
      while (chance >= 0) {
        if (chance == 2) {
          alert(`You entered the wrong pattern, You have ${chance} more chance`);
          blink();
          break;
        } else if (chance == 1) {
          alert(`You entered the wrong pattern, You have ${chance} more chance`);
          blink();
          break;
        } else {
          alert(`Chance Run Out`);
          let replay = confirm('Want to play again?');
          if (replay == true) {
            mulai();
            return;
          } else {
            window.location.reload();
            return;
          }
        }
      }
      chance--;
      return;
    }

    if (tempPola.length == 0) {
      stage++;
      final = true;
      h4.innerHTML = `Correct`;

      setTimeout(() => {
        h4.innerHTML = `Stage ${stage + 1} <button class="btn btn-dark ms-4" onclick="window.location.reload();">Exit</button>`;
      }, 1000);
      blink();
    }

    this.style.background = 'black';

    setTimeout(() => {
      this.style.background = 'transparent';
    }, 100);

    return;
  }

  return;
}

function mulai() {
  resultPola = [];
  actionPola = [];
  stage = 0;
  currentBlink = 0;
  final = true;
  chance = 2;
  h4.innerHTML = `Stage ${stage + 1} <button class="btn btn-dark ms-4" onclick="window.location.reload();">Exit</button>`;
  click = true;
  blink();
  kotakAction.forEach((k) => {
    k.addEventListener('click', klik);
  });
}
