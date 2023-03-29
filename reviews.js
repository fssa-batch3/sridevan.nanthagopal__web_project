let reviews = [
  {
    image: "./assets/images/maheshwarpng.png",
    altImage: "maheshwarpng",
    review_title: "Maheswaran Shivam",
    review_text:
      "The tamizhan hotel not just a hotel... Every time when we had food in there, we feel completely feel very homely... Bcoz, they made the food very delicious and taste... Last four years they care us like our mom...Thank god... ",
    star_img: "../assets/images/4starrating.png",
    star_img_alt: "4star",
  },
  {
    image: "./assets/images/periyasamyreview.png",
    altImage: "periyasamyreview",
    review_title: "Periya Samy",
    review_text:
      "This hotel is totally vegetarian . It is present near the A.P.A collage of arts and culture and A.P.A polytechnic college . Food idems are good and tasty . check it now .",
    star_img: "./assets/images/3stars-rating.png",
    star_img_alt: "3star",
  },
  {
    image: "./assets/images/sureshreviewpng.png",
    altImage: "sureshreviewpng",
    review_title: "Suresh Kumar",
    review_text:
      "one of the better hotel in local town in that college surrounding area.. cheap and better..",
    star_img: "./assets/images/4starrating.png",
    star_img_alt: "4star",
  },
  {
    image: "./assets/images/vijayreview.png",
    altImage: "vijayreview",
    review_title: "Vijayashankar Aruchamy",
    review_text: "Parota are good here, onion dosa my fab",
    star_img: "./assets/images/4starrating.png",
    star_img_alt: "4star",
  },
];
// let other_review = [
//   {
//     review_text:
//       "Parota are good here, onion dosa my fab"
//   }
// ]

let other_review = JSON.parse(localStorage.getItem("other_review"));
if (!other_review) {
  other_review = [];
  localStorage.setItem("other_review", JSON.stringify(other_review));
}
const reviewWrapper = document.querySelector(".other-testimoninal-items-wrapper");

console.log(other_review);

function createOtherReview(){
  reviewWrapper.textContent = ""
  for (let i = 0; i < other_review.length; i++) {
    const element = other_review[i];
  console.log(element);
  // Create a div element with class "testimonial-item"
  const testimonialDiv = document.createElement("div");
  testimonialDiv.classList.add("testimonial-item");
  
  // Create a paragraph element with class "testimonial-item-text"
  const testimonialParagraph = document.createElement("p");
  testimonialParagraph.classList.add("testimonial-item-text");
  testimonialParagraph.textContent = element.review_text;
  
  // Add the paragraph element to the div element
  testimonialDiv.appendChild(testimonialParagraph);
  
  
  reviewWrapper.appendChild(testimonialDiv)
}
}

createOtherReview()

const reviewMsg = document.getElementById("message");
const sendReview = document.getElementById("send-review");

sendReview.addEventListener("click", (e) => {
  e.preventDefault();
  const reviewObj = {
    review_text: reviewMsg.value,
  };
  other_review.push(reviewObj);
  localStorage.setItem("other_review", JSON.stringify(other_review));
  createOtherReview()
  console.log(reviewMsg.value);
});

let n = 3;
for (let i = 0; i <= n; i++) {
  {
    /* <div class="testimonial-item"> */
  }
  let review_item;
  review_item = document.createElement("div");
  review_item.setAttribute("class", "testimonial-item");
  console.log(review_item);

  {
    /* <div class="testimonial-item-img"> */
  }
  let review_item_img;
  review_item_img = document.createElement("div");
  review_item_img.setAttribute("class", "testimonial-item-img");
  review_item.append(review_item_img);

  {
    /* <img class="reviwer-img" src="./assets/images/maheshwarpng.png"alt=""/> */
  }

  let reviwer_img;
  reviwer_img = document.createElement("img");
  reviwer_img.setAttribute("class", "reviwer-img");
  reviwer_img.setAttribute("src", reviews[i]["image"]);
  reviwer_img.setAttribute("alt", reviews[i]["altImage"]);
  review_item_img.append(reviwer_img);

  {
    /* <div class="testimonial-item-info"> */
  }

  let review_item_info;
  review_item_info = document.createElement("div");
  review_item_info.setAttribute("class", "testimonial-item-info");
  review_item.append(review_item_info);

  {
    /* <h3 class="testimonial-item-name">Maheswaran Shivam</h3> */
  }

  let review_item_name;
  review_item_name = document.createElement("h3");
  review_item_name.setAttribute("class", "testimonial-item-name");
  review_item_name.innerText = reviews[i]["review_title"];
  review_item_info.append(review_item_name);

  {
    /* <div class="testimonial-item-stars"> */
  }

  let review_item_stars;
  review_item_stars = document.createElement("div");
  review_item_stars.setAttribute("class", "testimonial-item-stars");
  review_item_info.append(review_item_stars);

  {
    /* <img src="./assets/images/5starrating.png" alt="" /> */
  }

  let review_item_stars_img;
  review_item_stars_img = document.createElement("img");
  review_item_stars_img.setAttribute("src", reviews[i]["star_img"]);
  review_item_stars_img.setAttribute("alt", reviews[i]["star_img_alt"]);
  review_item_stars.append(review_item_stars_img);

  {
    /* <p class="testimonial-item-text"> */
  }

  let review_item_text;
  review_item_text = document.createElement("p");
  review_item_text.setAttribute("class", "testimonial-item-text");
  review_item_text.innerText = reviews[i]["review_text"];
  review_item_info.append(review_item_text);

  document.querySelector("div.testimoninal-items-wrapper").append(review_item);
}
