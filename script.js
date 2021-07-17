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
      resultPola[i].style.backgroundColor = 'black';

      setTimeout(() => {
        resultPola[i].style.backgroundColor = 'white';
      }, i + 1 * 300);
    }, i * 500);
  });

  setTimeout(() => {
    click = true;
  }, resultPola.length * 500);
}

function klik() {
  if (click) {
    if (this == tempPola[0]) {
      tempPola.shift();
    } else {
      final = false;
      while (chance >= 0) {
        if (chance == 2) {
          alert(`Anda memasukkan pola yang salah, anda mempunyai kesempatan ${chance} kali lagi`);
          blink();
          break;
        } else if (chance == 1) {
          alert(`Anda memasukkan pola yang salah, anda mempunyai kesempatan ${chance} kali lagi`);
          blink();
          break;
        } else {
          alert(`Kesempatan anda sudah habis`);
          let replay = confirm('Mau Main Lagi ?');
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
      h4.textContent = `Stage ${stage + 1}`;
      blink();
    }

    this.style.backgroundColor = 'black';

    setTimeout(() => {
      this.style.backgroundColor = 'white';
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
  h4.textContent = `Stage ${stage + 1}`;
  click = true;
  blink();
  kotakAction.forEach((k) => {
    k.addEventListener('click', klik);
  });
}
