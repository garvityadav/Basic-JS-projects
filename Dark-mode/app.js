const button = document.querySelector(".btn");
const heading = document.querySelector("h2");
const article = document.querySelector(".articles");

button.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-theme");
});

let newArticle = articles.map((items) => {
   const {title, date, length,snippet} = items;
   return `<section class="articles">
   <article class="post">
     <h2>${title}</h2>
     <div class="post-info">
       <span>${new Date(date).toDateString()}</span> <span>${length} min read</span>
       </div>
        <p>${snippet}</p>
      </article>
    </section>`
}).join('');

article.innerHTML = newArticle;
