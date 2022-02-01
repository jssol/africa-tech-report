const speakers = [
  {
    name: 'Elon Musk',
    job: 'Founder',
    photo: '',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Labore, necessitatibus.`
  },
  {
    name: 'Bill Gates',
    job: 'Founder',
    photo: '',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Labore, necessitatibus.`
  },
  {
    name: 'Sundar Pichai',
    job: 'Founder',
    photo: '',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Labore, necessitatibus.`
  },
  {
    name: 'Nikola Tesla',
    job: 'Founder',
    photo: '',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Labore, necessitatibus.`
  },
  {
    name: 'Jack Ma',
    job: 'Founder',
    photo: '',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Labore, necessitatibus.`
  }
];
const listOfSpeakers = document.querySelector('.speakers-list');
const expandList = document.querySelector('.ml');

const setSpeakers = (speakers, list) => {
  speakers.forEach((speaker) => {
    const li = document.createElement('li');
    if(speakers.indexOf(speaker) >= 2) {
      li.classList.add('speaker', 'speaker-hidden');
    }
    else {
      li.className = 'speaker';
    }
    const photo = document.createElement('div');
    photo.className = 'speaker-photo';
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
  if(listOfSpeakers.classList.contains('expanded')) {
    document.querySelector('.ml-text').innerText = 'Less';
    document.querySelector('.ml-arrow').innerText = 'expand_less';
  }
  else {
    document.querySelector('.ml-text').innerText = 'More';
    document.querySelector('.ml-arrow').innerText = 'expand_more';
  }
});