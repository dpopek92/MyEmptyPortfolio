function $(selector) {
  return document.querySelector(selector);
}
//classic view
if ($('.classic-view')) {
  const div = [...document.querySelectorAll('div')];
  let time = 170;

  function showDivs() {
    let index = 0;

    function start() {
      div[index].style.visibility = 'visible';
      index++;
      if (index == div.length) {
        clearInterval(a);
        index = 0;
        return;
      }
    }
    a = setInterval(start, time)
  }
  showDivs();
}


if ($('.terminal-view')) {
  //rzeczy do wczytania
  const load = [
    ['Scripts loading: ', 10, 10],
    ['CSS styles loading: ', 20, 10],
    ['Text data: ', 5, 1],
    ['Images: ', 50, 10],
    ['Languages: ', 20, 5],
    ['Classic Page: ', 30, 5],
  ]
  const commands = [
    'About',
    'Portfolio',
    'Contact',
    'Clear',
    'Commands'
  ]
  const commandsContact = [
    'Facebook',
    'LinkedIn',
    'Github',
    'Gmail'
  ]
  const commandsInfo = [
    'Displays basic information about the author of the page',
    'Displays the contents of the portfolio',
    'Displays ways to contact the author',
    'Cleaning the terminal',
    'Displays the available commands'
  ]
  const aboutElements = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore tempora minima adipisci, incidunt iste quaerat atque expedita delectus. Reiciendis, error itaque? Numquam sint impedit repudiandae nisi iure quos quam quasi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore tempora minima adipisci, incidunt iste quaerat atque expedita delectus. Reiciendis, error itaque? Numquam sint impedit repudiandae nisi iure quos quam quasi.\n\n',
    ' -lorem ipsum\n -dolor sit\n -amet conserctetur\n -random word\n\n',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore tempora minima adipisci, incidunt iste quaerat atque expedita delectus.\n'
  ]
  const portfolioElements = [{
    img: 'https://via.placeholder.com/200x150',
    text: 'Inventore tempora minima adipisci, incidunt iste quaerat atque expedita delectus.',
    link: '#'
  }, {
    img: 'https://via.placeholder.com/200x150',
    text: 'Numquam sint impedit repudiandae nisi iure quos quam quasi. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    link: '#'
  }, {
    img: 'https://via.placeholder.com/200x150',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore tempora minima adipisci,',
    link: '#'
  }]
  const contactElements = [{
      text: 'Facebook',
      link: 'http://www.facebook.pl/'
    },
    {
      text: 'LinkedIn',
      link: 'http://www.linkedin.com/'
    },
    {
      text: 'GitHub',
      link: 'http://www.github.com/'
    },
    {
      text: 'Gmail',
      link: '#'
    }
  ]
  //PL
  const loadPl = [
    ['Wczytywanie skryptów: ', 10, 10],
    ['Wczytywanie stylów CSS: ', 20, 10],
    ['Wczytywanie danych tekstowych: ', 5, 1],
    ['Pobieranie obrazów: ', 50, 10],
    ['Pobieranie wersji językowych: ', 20, 5],
    ['Wczytywanie klasycznego wygladu strony: ', 30, 5],
  ]
  const commandsPl = [
    'Omnie',
    'Portfolio',
    'Kontakt',
    'Wyczysc',
    'Komendy'
  ]
  const commandsInfoPl = [
    'Wyswietla podstawowe informacje o autorze strony',
    'Wyświetla zawartość portfolio',
    'Wyświetla sposoby kontaktu z autorem',
    'Czyści terminal',
    'Wyświetla dostepne komendy'
  ]
  const aboutElementsPl = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore tempora minima adipisci, incidunt iste quaerat atque expedita delectus. Reiciendis, error itaque? Numquam sint impedit repudiandae nisi iure quos quam quasi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore tempora minima adipisci, incidunt iste quaerat atque expedita delectus. Reiciendis, error itaque? Numquam sint impedit repudiandae nisi iure quos quam quasi.\n\n',
    ' -lorem ipsum\n -dolor sit\n -amet conserctetur\n -random word\n\n',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore tempora minima adipisci, incidunt iste quaerat atque expedita delectus.\n'
  ]
  const contactElementsPl = [{
      text: 'Facebook',
      link: 'http://www.facebook.pl/',
    },
    {
      text: 'LinkedIn',
      link: 'http://www.linkedin.com/',
    },
    {
      text: 'GitHub',
      link: 'http://www.github.com/',
    },
    {
      text: 'Gmail',
      link: '#',
    }
  ];
  const portfolioElementsPl = [{
    img: 'https://via.placeholder.com/200x150',
    text: 'Inventore tempora minima adipisci, incidunt iste quaerat atque expedita delectus.',
    link: '#'
  }, {
    img: 'https://via.placeholder.com/200x150',
    text: 'Numquam sint impedit repudiandae nisi iure quos quam quasi. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    link: '#'
  }, {
    img: 'https://via.placeholder.com/200x150',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore tempora minima adipisci,',
    link: '#'
  }];

  //pobranie elementów
  const animatedCursor = $('#animatedCursor');
  const commandline = $('.commandline');
  const getter = $('.getter');
  const textarea = $('#textarea');
  const terminal = $('.terminal');
  const pageButton = $('.button-page');
  const langButton = $('.button-language');
  const bottomTerminal = $('.bottom-terminal');
  const div = [...document.querySelectorAll('div')];

  //flaga dla języka
  let language = 'en';
  let loadingTab = null;
  let commandsTab = null;
  let commandsInfoTab = null
  let aboutTab = null;
  let portfolioTab = null;
  let contactTab = null;

  //sprawdzanie języka
  function checkLang() {
    if (language === 'en') {
      loadingTab = load;
      commandsTab = commands;
      commandsInfoTab = commandsInfo;
      aboutTab = aboutElements;
      portfolioTab = portfolioElements;
      contactTab = contactElements;
    } else {
      loadingTab = loadPl
      commandsTab = commandsPl;
      commandsInfoTab = commandsInfoPl;
      aboutTab = aboutElementsPl;
      portfolioTab = portfolioElementsPl;
      contactTab = contactElementsPl;
    }
  }

  //nowy div na końcu terminalu
  function newDiv(klasa1, klasa2) {
    const div = document.createElement('div');
    div.style.visibility = 'visible';
    if (klasa1, klasa2) {
      div.classList.add(klasa1, klasa2)
    } else {
      div.classList.add(klasa1)
    }
    terminal.appendChild(div);
  }

  //wczytywanie rzeczy
  let loadFirstIndex = 0;

  function loading(text, interval, addSpeed) {
    let i = 0;
    const p = document.createElement('p');
    terminal.lastElementChild.appendChild(p);

    p.textContent += `${text}`;
    const span = document.createElement('span');
    p.appendChild(span);
    span.textContent = `${i}%`;

    function start() {
      i += addSpeed;
      span.textContent = `${i}%\n`;
      if (loadFirstIndex === 4 && i === 90) {
        langButton.style.visibility = 'visible';
      } else if (loadFirstIndex === 5 && i > 90) {
        pageButton.style.visibility = 'visible';
      }
      if (i === 100) {
        i = 0;
        clearInterval(a)
        loadFirstIndex++;
        if (loadFirstIndex === loadingTab.length) {
          loadFirstIndex = 0;
          displayCommands();
          return
        } else {
          loading(loadingTab[loadFirstIndex][0], loadingTab[loadFirstIndex][1], loadingTab[loadFirstIndex][2]);
        }
      }
    }
    a = setInterval(start, interval)
  }

  //wyświetla komendy
  function displayCommands() {
    if (!$('.commands-div')) {
      newDiv('section', 'commands-div');

      const h2 = document.createElement('h2');
      h2.classList.add('commands-title');
      language === 'en' ? h2.textContent = 'AVAILABLE COMMANDS:\n' : h2.textContent = 'DOSTEPNE KOMENDY:\n';
      terminal.lastElementChild.appendChild(h2);
      let i = 0;

      const p = document.createElement('p');
      terminal.lastElementChild.appendChild(p);

      function start() {
        p.textContent += `  ${commandsTab[i]} - ${commandsInfoTab[i]}\n`
        bottomTerminal.scrollTop = bottomTerminal.scrollHeight;
        i++;
        if (i === commandsTab.length) {
          clearInterval(a);
          textarea.focus()
          return
        }
      }
      a = setInterval(start, 50)
    } else {
      $('.commands-title').scrollIntoView()
    }
  }

  function createAbout() {
    if (!$('.about-div')) {
      i = 0;
      newDiv('section', 'about-div');

      const h2 = document.createElement('h2');
      const p = document.createElement('p');
      h2.classList.add('about-title');
      language === 'en' ? h2.textContent = 'ABOUT:\n' : h2.textContent = 'O MNIE:\n';
      terminal.lastElementChild.appendChild(h2);
      terminal.lastElementChild.appendChild(p)

      function start() {
        p.textContent += aboutTab[i];
        bottomTerminal.scrollTop = bottomTerminal.scrollHeight;
        i++;
        if (i === aboutTab.length) {
          clearInterval(a);
          i = 0;
          return
        }
      }
      a = setInterval(start, 100)
    } else {
      $('.about-title').scrollIntoView()
    }
  }

  function createPortfolio() {
    if (!$('.portfolio-div')) {
      let i = 0;
      newDiv('section');

      const h2 = document.createElement('h2');
      h2.classList.add('portfolio-title');
      h2.textContent = 'PORTFOLIO';
      terminal.lastElementChild.appendChild(h2);

      function start() {
        if (i == portfolioTab.length) {
          i = 0;
          clearInterval(a);
          return
        } else {
          const div = document.createElement('div');
          div.classList.add('portfolio-div-text');
          div.style.visibility = 'visible'
          div.textContent = portfolioTab[i].text;

          const a = document.createElement('a');
          a.href = portfolioTab[i].link;
          a.innerHTML = `<img src="${portfolioTab[i].img}" alt="${portfolioTab[i].link}">`;

          newDiv('portfolio-div');
          terminal.lastElementChild.appendChild(a);
          terminal.lastElementChild.appendChild(div);
          bottomTerminal.scrollTop = bottomTerminal.scrollHeight;
          i++;
        }
      }
      a = setInterval(start, 100)
    } else {
      $('.portfolio-title').scrollIntoView()
    }

  }

  function createContact() {
    if (!$('.contact-div')) {
      let i = 0;
      newDiv('contact-div');
      const h2 = document.createElement('h2');
      h2.classList.add('contact-title');
      language === 'en' ? h2.textContent = 'CONTACT:\n' : h2.textContent = 'KONTAKT:\n';
      terminal.lastElementChild.appendChild(h2);

      function start() {
        if (i == contactTab.length) {
          i = 0;
          clearInterval(a);
          return
        } else {
          const a = document.createElement('a');
          a.href = contactTab[i].link;
          a.target = '_blank';
          a.textContent = contactTab[i].text;

          terminal.lastElementChild.appendChild(a);
          bottomTerminal.scrollTop = bottomTerminal.scrollHeight;
          i++;
        }
      }
      a = setInterval(start, 100)
    } else {
      $('.contact-title').scrollIntoView()
    }
  }

  //czyszczenie terminalu
  function clearTerminal() {
    terminal.textContent = '';
  }

  //animowany kursor w linii tekstu
  function cursorAnimation() {
    animatedCursor.classList.toggle('cursor-active');
  }

  //przenosi text z ukrytego textarea do spana przed kursorem
  function getValue(from, to) {
    to.textContent = from.value;
  }

  //przy wciśnięciu entera sprawdza komendę
  function confirmCommand(e) {
    if (e.keyCode === 13) {
      if (getter.textContent.toLowerCase().trim() === commandsTab[0].toLowerCase().trim()) {
        createAbout();
      } else if (getter.textContent.toLowerCase().trim() === commandsTab[1].toLowerCase().trim()) {
        createPortfolio();
      } else if (getter.textContent.toLowerCase().trim() === commandsTab[2].toLowerCase().trim()) {
        createContact();
      } else if (getter.textContent.toLowerCase().trim() === commandsTab[3].toLowerCase().trim()) {
        clearTerminal();
      } else if (getter.textContent.toLowerCase().trim() === commandsTab[4].toLowerCase().trim()) {
        displayCommands();
      } else if (getter.textContent.toLowerCase().trim() === commandsContact[0].toLowerCase().trim()) {
        if ($('.contact-div')) {
          window.open(contactElements[0].link, '_blank');
        }
      } else if (getter.textContent.toLowerCase().trim() === commandsContact[1].toLowerCase().trim()) {
        if ($('.contact-div')) {
          window.open(contactElements[1].link, '_blank');
        }
      } else if (getter.textContent.toLowerCase().trim() === commandsContact[2].toLowerCase().trim()) {
        if ($('.contact-div')) {
          window.open(contactElements[2].link, '_blank');
        }
      } else if (getter.textContent.toLowerCase().trim() === commandsContact[3].toLowerCase().trim()) {
        if ($('.contact-div')) {
          window.open(contactElements[3].link, '_blank');
          //DODAĆ FORMULARZ KONTAKTOWY
        }
      }
      textarea.value = '';
      getter.textContent = '';
    }
  }

  commandline.addEventListener('click', () => {
    textarea.focus()
  });
  textarea.addEventListener('input', () => {
    getValue(textarea, getter);
  });
  textarea.addEventListener('keydown', confirmCommand);
  langButton.addEventListener('click', () => {
    if (language === 'en') {
      language = 'pl';
      langButton.textContent = 'EN';
      pageButton.textContent = 'Klasyczny wyglad';
      langButton.style.visibility = 'hidden';
      pageButton.style.visibility = 'hidden';
    } else {
      language = 'en';
      langButton.textContent = 'PL';
      pageButton.textContent = 'Classic view';
      langButton.style.visibility = 'hidden';
      pageButton.style.visibility = 'hidden';
    }
    clearTerminal();
    checkLang();
    setTimeout(() => {
      newDiv('section');
      loading(loadingTab[loadFirstIndex][0], loadingTab[loadFirstIndex][1], loadingTab[loadFirstIndex][2]);
    }, 1000)
  })

  //wywołania początkowe
  div.forEach((el) => {
    el.style.visibility = 'visible'
  })
  checkLang();
  newDiv('section');
  loading(loadingTab[loadFirstIndex][0], loadingTab[loadFirstIndex][1], loadingTab[loadFirstIndex][2]);
  setInterval(cursorAnimation, 600);
}