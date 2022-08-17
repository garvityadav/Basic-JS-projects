// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

// select elements
const button = document.getElementById("random-btn");
const names = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");
const buttons = document.querySelectorAll(".btn");
const img = document.getElementById("person-img");

let counter = 0;

buttons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("prev-btn")) {
      counter--;
      if (counter < 0) {
        counter = reviews.length - 1;
      }
    } else if (styles.contains("next-btn")) {
      counter++;
      if (counter >= reviews.length) {
        counter = 0;
      }
    }
    else if(styles.contains('random-btn')){
      counter = Math.floor(Math.random()*reviews.length);
    }
    names.textContent = reviews[counter].name;
    job.textContent = reviews[counter].job;
    info.textContent = reviews[counter].text;
    img.src = reviews[counter].img;
  });
});
