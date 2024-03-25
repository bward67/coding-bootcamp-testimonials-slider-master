const testimonials = [
  {
    id: 1,
    student: "Tanya Sinclair",
    position: "UX Engineer",
    quote:
      "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
    img: "images/image-tanya.jpg",
  },
  {
    id: 2,
    student: "John Tarkpor",
    position: "Junior Front-end Developer",
    quote:
      "“ If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
    img: "images/image-john.jpg",
  },
  {
    id: 3,
    student: "Barbara Ward",
    position: "Front-end Developer with LOTS to learn",
    quote:
      "“ I did NOT take this coding course but I wanted to add another item to click on. So this is a little photo of me - just for fun. Happy Coding everyone! ”",
    img: "images/image-barbara.jpg",
  },
];

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

const contentContainer = document.querySelector(".content-container");
const avatar = document.querySelector(".avatar");
const quote = contentContainer.querySelector(".quote");
const student = contentContainer.querySelector(".student");
const position = contentContainer.querySelector(".position");
console.log(position);

let currentItem = 0;

const showPerson = () => {
  let item = testimonials[currentItem];

  avatar.src = item.img;

  student.textContent = item.student;
  position.textContent = item.position;
  quote.textContent = item.quote;

  console.log(item.position);
};

nextBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem > testimonials.length - 1) {
    currentItem = 0;
  }
  showPerson();
});

prevBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = testimonials.length - 1;
  }
  showPerson();
});
