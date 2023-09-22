let button = document.querySelector('#new-quote')
let quote = document.querySelector('.quote')
let person = document.querySelector('.person')

const quotes = [
  {
    quote: '" Coding like poetry should be short and concise."',
    person: 'Santosh Kalwar'
  },
  {
    quote: " It`s not a bug; it`s an undocumented feature.",
    person: 'Anonymous'
  },
  {
    quote: " No matter which field of work you want to go in, it is of great importance to learn at least one programming language.",
    person: " Ram Ray"
  },
  {
    quote: '" First, solve the problem. Then, write the code."',
    person: 'John Johnson'
  },
  {
    quote: '" Code is like humor. When you have to explain it, it`s bad."',
    person: "Cory House"
  },
  {
    quote: '" Make it work, make it right, make it fast."',
    person: "Kent Beck"
  },
  {
    quote: '" Clean code always looks like it was written by someone who cares."',
    person: " Robert C. Martin"
  },
  {
    quote: '" Of course, bad code can be cleaned up. But it`s very expensive."',
    person: "Robert C. Martin"
  },
  {
    quote: '" Programming is the art of algorithm design and the craft of debugging errant code."',
    person: "Ellen Ullman"
  },
  {
    quote: '" Programming today is a race between software engineers striving to build bigger and better idiot-proof programs and the Universe trying to produce bigger and better idiots. So far, the Universe is winning."',
    person: "Rick Cook"
  },
  {
    quote: '" Any fool can write code that a computer can understand. Good programmers write code that humans can understand."',
    person: "Martin Fowler"
  },
  {
    quote: '" Experience is the name everyone gives to their mistakes. "',
    person: "Oscar Wilde"
  },
  {
    quote: '" Programming is the art of telling another human being what one wants the computer to do."',
    person: "Donald Ervin Knuth"
  },
  {
    quote: '" Confusion is part of programming."',
    person: "Felienne Hermans"
  },
  {
    quote: '" Quality is a product of a conflict between programmers and testers."',
    person: "Yegor Bugayenk"
  },
  {
    quote: '" Everybody should learn to program a computer because it teaches you how to think."',
    person: "Steve Jobs"
  },
  {
    quote:' " Web development is difficult, only then it is fun to do. You just have to set your standards. If it were to be easy, would anyone do it?"',
    person: "Olawale Daniel"
  },
  {
    quote: '" Programmers seem to be changing the world. It would be a relief, for them and for all of us, if they knew something about it."',
    person: "Ellen Ullman"
  },
  {
    quote:' " Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program."',
    person: "Linus Torvalds"
  },
  {
    quote: '" If debugging is the process of removing bugs, then programming must be the process of putting them in."',
    person: "Sam Redwine"
  }
];

button.addEventListener('click', function () {
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerHTML = quotes[random].quote;
  person.innerHTML = quotes[random].person

})