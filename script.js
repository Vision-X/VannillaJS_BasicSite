var moreBtn = document.getElementById("more-btn");
var hero = document.querySelector(".hero");

moreBtn.addEventListener("click", function(e) {
  e.preventDefault();
  hero.style.display = "none";
  // section.innerHTML = showMore;
  document.querySelector('header').insertAdjacentHTML("afterend", showMore);
})

var showMore =
  `<section class="show-more">
    <div>
      <h2>Togakushi Shrine</h2>
      <p>The term Togakushi Shrine refers to a complex of Shinto shrines scattered in the forest at the foot of Mount Togakushi, within the Jōshin'etsu-kōgen National Park. The area is about one hour by bus from Nagano Station.
         There are a total of five Shinto shrines, in three separate areas around 2 kilometers away from each other, connected by paths and stairs that go through the forest, in a very charming atmosphere, especially on the way to the highest shrine, called Okusha.
      </p>
    </div>
  </section>`;
