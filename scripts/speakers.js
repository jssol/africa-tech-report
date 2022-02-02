const speakers = [
  {
    name: 'Elon Musk',
    job: 'CEO of Tesla Motors',
    photo: './assets/images/elon.jpg',
    description: 'Entrepreneur, founder, CEO, and Chief Engineer at SpaceX.'
  },
  {
    name: 'Bill Gates',
    job: 'American businessman',
    photo: './assets/images/bill.jpg',
    description: 'William Henry Gates III is a software developer, investor, author, and philanthropist.'
  },
  {
    name: 'Sundar Pichai',
    job: 'CEO of Alphabet',
    photo: './assets/images/sundar.jpg',
    description: 'Sundar Pichai, Indian-born American executive who is CEO of Google and Alphabet.'
  },
  {
    name: 'Nikola Tesla',
    job: 'Inventor',
    photo: './assets/images/tesla.jpg',
    description: 'Serbian-American inventor, electro-mechanical engineer, and futurist.'
  },
  {
    name: 'Jack Ma',
    job: 'Philanthropist',
    photo: './assets/images/ma.jpg',
    description: 'He is the co-founder and former executive chairman of Alibaba Group.'
  },
];
const listOfSpeakers = document.querySelector('.speakers-list');
const expandList = document.querySelector('.ml');

const setSpeakers = (speakers, list) => {
  speakers.forEach((speaker) => {
    const li = document.createElement('li');
    if (speakers.indexOf(speaker) >= 2) {
      li.classList.add('speaker', 'speaker-hidden');
    } else {
      li.className = 'speaker';
    }
    const behind = document.createElement('div');
    behind.className = 'speaker-behind';
    const photo = document.createElement('div');
    photo.className = 'speaker-photo';
    photo.appendChild(behind);
    photo.style.backgroundImage = `url(${speaker.photo})`;
    const infos = document.createElement('div');
    infos.className = 'speaker-infos';
    const name = document.createElement('h3');
    name.className = 'speaker-name';
    name.innerText = speaker.name;
    const job = document.createElement('h4');
    job.className = 'speaker-job';
    job.innerText = speaker.job;
    const about = document.createElement('p');
    about.className = 'speaker-about';
    about.innerText = speaker.description;
    infos.append(name, job, about);
    li.append(photo, infos);
    list.appendChild(li);
  });
};

document.addEventListener('DOMContentLoaded', () => {
  setSpeakers(speakers, listOfSpeakers);
});

expandList.addEventListener('click', () => {
  listOfSpeakers.classList.toggle('expanded');
  if (listOfSpeakers.classList.contains('expanded')) {
    document.querySelector('.ml-text').innerText = 'Less';
    document.querySelector('.ml-arrow').innerText = 'expand_less';
  } else {
    document.querySelector('.ml-text').innerText = 'More';
    document.querySelector('.ml-arrow').innerText = 'expand_more';
  }
});
