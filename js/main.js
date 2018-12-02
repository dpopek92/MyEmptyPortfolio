const aboutMeText = document.querySelector('#aboutMeText');
const animatedCursor = document.querySelector('#animatedCursor');
const div = [...document.querySelectorAll('div')];

if (aboutMeText) {
  let indexForTyping = 0;
  let timeForTyping = 5;
  const writeSomething = 'Write something, or push ENTER...';
  let textAbout = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ab maiores esse beatae, ratione nemo voluptate. Consequuntur perspiciatis ducimus exercitationem.";

  setTimeout(() => {
    startTyping(writeSomething);
  }, 1000);

  //Typing in aboutMeTextContent
  function startTyping(a) {
    typingInterval = setInterval(addLetter, timeForTyping);

    function addLetter() {
      aboutMeText.textContent += a[indexForTyping];
      indexForTyping++;
      if (indexForTyping == a.length) {
        clearInterval(typingInterval);
        indexForTyping = 0;
        return;
      }
    }
  }
  //removing text char by char from aboutMeTextContent
  function reverseTyping(a, b) { //a - text to remove, b - text do add
    let index = a.length;
    removeInterval = setInterval(removeLetter, timeForTyping);

    function removeLetter() {
      aboutMeText.textContent = a.substring(0, index);
      index--;
      if (index === -1) {
        clearInterval(removeInterval);
        setTimeout(() => {
          startTyping(b);
        }, 500);
        return
      }
    }
  }
  //animated cursor for typing animation
  function cursorAnimation() {
    animatedCursor.classList.toggle('cursor-active');
  }
  setInterval(cursorAnimation, 600);

  let flag = false;
  let index = 0;

  function writeAboutMe(e) {
    if (e.keyCode == 13) { //jeśli enter, kasuje aktualną zawartość i dodaje tekst
      flag = false;
      index = 0;
      reverseTyping(aboutMeText.textContent, textAbout);
    } else { //w przypadku innych klawiszy, niezależnie od klikniętego dodaje kolejny znak tekstu.
      if (flag) {
        if (index === textAbout.length) {
          return
        }
        aboutMeText.textContent += textAbout[index];
        index++;
      } else {
        aboutMeText.textContent = '';
        flag = true;
      }
    }

  }

  window.addEventListener('keydown', writeAboutMe);
}




let timeForDivs = 170;
let indexForDivs = 0;

function showDivs() {
  div[indexForDivs].style.visibility = 'visible';
  indexForDivs++;
  if (indexForDivs == div.length) {
    clearInterval(blockInterval);
    indexForDivs = 0;
    return;
  }
}

function startShowingBlocks() {
  blockInterval = setInterval(showDivs, timeForDivs)
}
startShowingBlocks();