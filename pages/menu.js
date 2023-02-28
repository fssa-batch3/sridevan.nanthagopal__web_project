/* <div class="dishgrid-item">
<div class="dishgrid-item-img">
  <img src="../assets/images/vegmeals3.jfif" alt="" />
</div>
<div class="dishgrid-item-info">
  <h3 class="dishgrid-item-title">Veg Meals</h3>
  <h3 class="dishgrid-item-price">$50</h3>
  <div class="dishgrid-item-stars">
    <img src="../assets/images/4starrating.png" alt="" />
  </div>
</div>
</div> */

let top_dishes = [
  {
    image: "../assets/images/pexels-saveurs-secretes-5560763.jpg",
    altImage: "plain-dosa",
    item_title: "Plain Dosa",
    item_price: "$50",
    star_img: "../assets/images/4starrating.png",
  },

  {
    image: "../assets/images/Chappathi.jpg",
    altImage: "Chappathi",
    item_title: "Chappathi",
    item_price: "$50",
    star_img: "../assets/images/4starrating.png",
  },

  {
    image: "../assets/images/vegmeals3.jfif",
    altImage: "vegmeals3",
    item_title: "Veg Meals",
    item_price: "$50",
    star_img: "../assets/images/4starrating.png",
  },
];

let n = 2;
for (let i = 0; i <= n; i++) {
  let dishgrid_item;
  dishgrid_item = document.createElement("div");
  dishgrid_item.setAttribute("class", "dishgrid-item");
  console.log(dishgrid_item);

  let dishgrid_item_img;
  dishgrid_item_img = document.createElement("div");
  dishgrid_item_img.setAttribute("class", "dishgrid-item-img");
  dishgrid_item.append(dishgrid_item_img);

  let item_img;
  item_img = document.createElement("img");
  item_img.setAttribute("src", top_dishes[i]["image"]);
  item_img.setAttribute("alt", top_dishes[i]["altImage"]);
  dishgrid_item_img.append(item_img);

  let dishgrid_item_info;
  dishgrid_item_info = document.createElement("div");
  dishgrid_item_info.setAttribute("class", "dishgrid-item-info");
  dishgrid_item.append(dishgrid_item_info);

  let dishgrid_item_title;
  dishgrid_item_title = document.createElement("h3");
  dishgrid_item_title.setAttribute("class", "dishgrid-item-title");
  dishgrid_item_title.innerText = top_dishes[i]["item_title"];
  dishgrid_item_info.append(dishgrid_item_title);

  let dishgrid_item_price;
  dishgrid_item_price = document.createElement("h3");
  dishgrid_item_price.setAttribute("class", "dishgrid-item-price");
  dishgrid_item_price.innerText = top_dishes[i]["item_price"];
  dishgrid_item_info.append(dishgrid_item_price);

  let dishgrid_item_stars;
  dishgrid_item_stars = document.createElement("div");
  dishgrid_item_stars.setAttribute("class", "dishgrid-item-stars");
  dishgrid_item_info.append(dishgrid_item_stars);

  let item_star_img;
  dishgrid_star_img = document.createElement("img");
  dishgrid_star_img.setAttribute("src", top_dishes[i]["star_img"]);
  dishgrid_item_stars.prepend(dishgrid_star_img);

  document.querySelector("div.dishgrid-wrapper").append(dishgrid_item);
}
// End of top dishes

// Breakfast

let breakfast = [
  {
    image: "../assets/images/Idly.jpeg",
    altImage: "Idly",
    item_title: "Idly [2pcs]",
    item_price: "$28",
    star_img: "../assets/images/4starrating.png",
  },

  {
    image:
      "../assets/images/Instant Dosa From Leftover Rice (easy and crispy dosa) - Cooking Carnival.jfif",
    altImage: "plain-dosa",
    item_title: "Plain Roast",
    item_price: "$62",
    star_img: "../assets/images/4starrating.png",
  },

  {
    image: "../assets/images/oniondosa.jpeg",
    altImage: "oniondosa",
    item_title: "Onion Roast",
    item_price: "$50",
    star_img: "../assets/images/4starrating.png",
  },
  {
    image: "../assets/images/Uttapam.jpeg",
    altImage: "Uttapam",
    item_title: "Uttapam",
    item_price: "$80",
    star_img: "../assets/images/3stars-rating.png",
  },
  {
    image: "../assets/images/egg-uthappam.jpeg",
    altImage: "egg-uthappam",
    item_title: "Egg Uthapam",
    item_price: "$70",
    star_img: "../assets/images/3stars-rating.png",
  },
  {
    image: "../assets/images/podi-dosa.jpeg",
    altImage: "podi-dosa",
    item_title: "Podi Dosa",
    item_price: "$50",
    star_img: "../assets/images/4starrating.png",
  },
  {
    image: "../assets/images/kaldosa.jpeg",
    altImage: "kaldosa",
    item_title: "Kal Dosa",
    item_price: "$70",
    star_img: "../assets/images/4starrating.png",
  },
  {
    image: "../assets/images/pongal.jpeg",
    altImage: "pongal",
    item_title: "Ven Pongal",
    item_price: "$30",
    star_img: "../assets/images/5starrating.png",
  },
  {
    image: "../assets/images/poori.jpeg",
    altImage: "poori",
    item_title: "Poori",
    item_price: "$50",
    star_img: "../assets/images/3stars-rating.png",
  },
];

let m = 8;
for (let i = 0; i <= m; i++) {
  let dishgrid_item;
  dishgrid_item = document.createElement("div");
  dishgrid_item.setAttribute("class", "dishgrid-item");
  console.log(dishgrid_item);

  let dishgrid_item_img;
  dishgrid_item_img = document.createElement("div");
  dishgrid_item_img.setAttribute("class", "dishgrid-item-img");
  dishgrid_item.append(dishgrid_item_img);

  let item_img;
  item_img = document.createElement("img");
  item_img.setAttribute("src", breakfast[i]["image"]);
  item_img.setAttribute("alt", breakfast[i]["altImage"]);
  dishgrid_item_img.append(item_img);

  let dishgrid_item_info;
  dishgrid_item_info = document.createElement("div");
  dishgrid_item_info.setAttribute("class", "dishgrid-item-info");
  dishgrid_item.append(dishgrid_item_info);

  let dishgrid_item_title;
  dishgrid_item_title = document.createElement("h3");
  dishgrid_item_title.setAttribute("class", "dishgrid-item-title");
  dishgrid_item_title.innerText = breakfast[i]["item_title"];
  dishgrid_item_info.append(dishgrid_item_title);

  let dishgrid_item_price;
  dishgrid_item_price = document.createElement("h3");
  dishgrid_item_price.setAttribute("class", "dishgrid-item-price");
  dishgrid_item_price.innerText = breakfast[i]["item_price"];
  dishgrid_item_info.append(dishgrid_item_price);

  let dishgrid_item_stars;
  dishgrid_item_stars = document.createElement("div");
  dishgrid_item_stars.setAttribute("class", "dishgrid-item-stars");
  dishgrid_item_info.append(dishgrid_item_stars);

  let item_star_img;
  dishgrid_star_img = document.createElement("img");
  dishgrid_star_img.setAttribute("src", breakfast[i]["star_img"]);
  dishgrid_item_stars.prepend(dishgrid_star_img);

  document
    .querySelector("div#dishgrid-wrapper-breakfast")
    .append(dishgrid_item);
}

// End of top breakfast

// ///////////////////////////////////////////////Lunch//////////////////////////////////
// Lunch
let lunch = [
  {
    image: "../assets/images/Vegmeals.jpeg",
    altImage: "Vegmeals",
    item_title: "Veg Meals",
    item_price: "$28",
    star_img: "../assets/images/5starrating.png",
  },

  {
    image: "../assets/images/Poratta.jpeg",
    altImage: "Poratta",
    item_title: "Porotta",
    item_price: "$62",
    star_img: "../assets/images/4starrating.png",
  },

  {
    image: "../assets/images/tomatorice.jpg",
    altImage: "tomatorice",
    item_title: "Tomato Rice",
    item_price: "$50",
    star_img: "../assets/images/4starrating.png",
  },
  {
    image: "../assets/images/Indian Lemon Rice.jfif",
    altImage: "Indian Lemon Rice",
    item_title: "Lemon Rice",
    item_price: "$80",
    star_img: "../assets/images/3stars-rating.png",
  },
  {
    image: "../assets/images/curd rice.jfif",
    altImage: "curd-rice",
    item_title: "Curd Rice",
    item_price: "$70",
    star_img: "../assets/images/3stars-rating.png",
  },
  {
    image: "../assets/images/Kothuporatta1.jpeg",
    altImage: "Kothuporatta1",
    item_title: "Veg Kothu Parotta",
    item_price: "$50",
    star_img: "../assets/images/4starrating.png",
  },
  {
    image: "../assets/images/eggkothu.jpeg",
    altImage: "eggkothu",
    item_title: "Egg Kothu Parotta",
    item_price: "$70",
    star_img: "../assets/images/4starrating.png",
  },
];

// let k = 6;
for (let i = 0; i <= lunch.length - 1; i++) {
  let dishgrid_item;
  dishgrid_item = document.createElement("div");
  dishgrid_item.setAttribute("class", "dishgrid-item");
  console.log(dishgrid_item);

  let dishgrid_item_img;
  dishgrid_item_img = document.createElement("div");
  dishgrid_item_img.setAttribute("class", "dishgrid-item-img");
  dishgrid_item.append(dishgrid_item_img);

  let item_img;
  item_img = document.createElement("img");
  console.log(lunch[i]["image"]);
  item_img.setAttribute("src", lunch[i]["image"]);
  item_img.setAttribute("alt", lunch[i]["altImage"]);
  dishgrid_item_img.append(item_img);

  let dishgrid_item_info;
  dishgrid_item_info = document.createElement("div");
  dishgrid_item_info.setAttribute("class", "dishgrid-item-info");
  dishgrid_item.append(dishgrid_item_info);

  let dishgrid_item_title;
  dishgrid_item_title = document.createElement("h3");
  dishgrid_item_title.setAttribute("class", "dishgrid-item-title");
  dishgrid_item_title.innerText = lunch[i]["item_title"];
  dishgrid_item_info.append(dishgrid_item_title);

  let dishgrid_item_price;
  dishgrid_item_price = document.createElement("h3");
  dishgrid_item_price.setAttribute("class", "dishgrid-item-price");
  dishgrid_item_price.innerText = lunch[i]["item_price"];
  dishgrid_item_info.append(dishgrid_item_price);

  let dishgrid_item_stars;
  dishgrid_item_stars = document.createElement("div");
  dishgrid_item_stars.setAttribute("class", "dishgrid-item-stars");
  dishgrid_item_info.append(dishgrid_item_stars);

  let item_star_img;
  dishgrid_star_img = document.createElement("img");
  dishgrid_star_img.setAttribute("src", lunch[i]["star_img"]);
  dishgrid_item_stars.prepend(dishgrid_star_img);

  document.querySelector("div#dishgrid-wrapper-lunch").append(dishgrid_item);
}

// Dinner//
/////////////////////////////////////////////////////////////////////////////////////////////////////////

let dinner = [
  {
    image: "../assets/images/Idly.jpeg",
    altImage: "Idly",
    item_title: "Idly [2pcs]",
    item_price: "$28",
    star_img: "../assets/images/4starrating.png",
  },

  {
    image:
      "../assets/images/Instant Dosa From Leftover Rice (easy and crispy dosa) - Cooking Carnival.jfif",
    altImage: "plain-dosa",
    item_title: "Plain Roast",
    item_price: "$62",
    star_img: "../assets/images/4starrating.png",
  },

  {
    image: "../assets/images/oniondosa.jpeg",
    altImage: "oniondosa",
    item_title: "Onion Roast",
    item_price: "$50",
    star_img: "../assets/images/4starrating.png",
  },
  {
    image: "../assets/images/Uttapam.jpeg",
    altImage: "Uttapam",
    item_title: "Uttapam",
    item_price: "$80",
    star_img: "../assets/images/3stars-rating.png",
  },
  {
    image: "../assets/images/egg-uthappam.jpeg",
    altImage: "egguthappam",
    item_title: "Egg Uthapam",
    item_price: "$70",
    star_img: "../assets/images/3stars-rating.png",
  },
  {
    image: "../assets/images/podi-dosa.jpeg",
    altImage: "podidosa",
    item_title: "Podi Dosa",
    item_price: "$50",
    star_img: "../assets/images/4starrating.png",
  },
  {
    image: "../assets/images/kaldosa.jpeg",
    altImage: "kaldosa",
    item_title: "Kal Dosa",
    item_price: "$70",
    star_img: "../assets/images/4starrating.png",
  },

  {
    image: "../assets/images/Kothuporatta1.jpeg",
    altImage: "Kothuporatta1",
    item_title: "Veg Kothu Parotta",
    item_price: "$30",
    star_img: "../assets/images/5starrating.png",
  },
  {
    image: "../assets/images/eggkothu.jpeg",
    altImage: "eggkothu",
    item_title: "Egg Kothu Parotta",
    item_price: "$50",
    star_img: "../assets/images/3stars-rating.png",
  },
  {
    image: "../assets/images/Chappathi.jpg",
    altImage: "Chappathi",
    item_title: "Chappathi",
    item_price: "$50",
    star_img: "../assets/images/3stars-rating.png",
  },
  {
    image: "../assets/images/vegkothuchappathi.jpeg",
    altImage: "vegkothuchappathi",
    item_title: "Kothu Chappathi",
    item_price: "$50",
    star_img: "../assets/images/3stars-rating.png",
  },
  {
    image: "../assets/images/eggkothuchappathi.jpeg",
    altImage: "eggkothuchappathi",
    item_title: "Egg Chappathi",
    item_price: "$50",
    star_img: "../assets/images/3stars-rating.png",
  },
];

let updates = JSON.parse(localStorage.getItem("new_card"));

for (let i = 0; i < updates.length; i++) {
  dinner.push(updates[i]);
}

for (let i = 0; i <= dinner.length - 1; i++) {
  let dishgrid_item;
  dishgrid_item = document.createElement("div");
  dishgrid_item.setAttribute("class", "dishgrid-item");
  console.log(dishgrid_item);

  let dishgrid_item_img;
  dishgrid_item_img = document.createElement("div");
  dishgrid_item_img.setAttribute("class", "dishgrid-item-img");
  dishgrid_item.append(dishgrid_item_img);

  let item_img;
  item_img = document.createElement("img");
  item_img.setAttribute("src", dinner[i]["image"]);
  item_img.setAttribute("alt", dinner[i]["altImage"]);
  item_img.setAttribute("alt", "");
  dishgrid_item_img.append(item_img);

  let dishgrid_item_info;
  dishgrid_item_info = document.createElement("div");
  dishgrid_item_info.setAttribute("class", "dishgrid-item-info");
  dishgrid_item.append(dishgrid_item_info);

  let dishgrid_item_title;
  dishgrid_item_title = document.createElement("h3");
  dishgrid_item_title.setAttribute("class", "dishgrid-item-title");
  dishgrid_item_title.innerText = dinner[i]["item_title"];
  dishgrid_item_info.append(dishgrid_item_title);

  let dishgrid_item_price;
  dishgrid_item_price = document.createElement("h3");
  dishgrid_item_price.setAttribute("class", "dishgrid-item-price");
  dishgrid_item_price.innerText = dinner[i]["item_price"];
  dishgrid_item_info.append(dishgrid_item_price);

  let dishgrid_item_stars;
  dishgrid_item_stars = document.createElement("div");
  dishgrid_item_stars.setAttribute("class", "dishgrid-item-stars");
  dishgrid_item_info.append(dishgrid_item_stars);

  let item_star_img;
  dishgrid_star_img = document.createElement("img");
  dishgrid_star_img.setAttribute("src", dinner[i]["star_img"]);
  dishgrid_item_stars.prepend(dishgrid_star_img);

  document.querySelector("div#dishgrid-wrapper-dinner").append(dishgrid_item);
}
