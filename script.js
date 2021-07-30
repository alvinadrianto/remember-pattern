const kotakPreview = document.querySelectorAll('.preview');
const kotakAction = document.querySelectorAll('.action');
const kotak = document.querySelectorAll('.kotak');
const h1 = document.querySelector('h1');
const h4 = document.querySelector('h4');
const cling = document.querySelector('#cling');
const cool = document.querySelector('#cool');

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
  h4.innerHTML = `Generate...`;
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
        resultPola[i].style.background = '#44a8fe';
        cool.play();

        setTimeout(() => {
          resultPola[i].style.background = 'black';
        }, i + 1 * 300);
      }, i * 500);

      setTimeout(() => {
        click = true;
        h4.innerHTML = `Ready to Click`;
      }, resultPola.length * 500 + 100);
    }, 1000);
  });
}

function klik() {
  cling.play();
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
        h4.innerHTML = ``;
      }, 1000);
      setTimeout(() => {
        h1.innerHTML = `Stage ${stage + 1} <button class="btn btn-dark ms-4" onclick="window.location.reload();">Exit</button>`;
      }, 1000);
      setTimeout(() => {
        blink();
      }, 1000);
    }

    this.style.background = 'rgba(68, 168, 254, 0.6)';

    setTimeout(() => {
      this.style.background = 'url(img/button_Start_Reactor_sharpen.png)';

      if (screen.width >= 992) {
        this.style.backgroundSize = '6.7rem';
        this.style.backgroundPosition = 'center';
        return;
      } else {
        this.style.backgroundSize = '3.6rem';
        this.style.backgroundPosition = 'center';
      }
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
  h1.innerHTML = `Stage ${stage + 1} <button class="btn btn-dark ms-4" onclick="window.location.reload();">Exit</button>`;
  click = true;
  h4.innerHTML = ``;
  blink();
  kotakAction.forEach((k) => {
    k.addEventListener('click', klik);
  });
}
