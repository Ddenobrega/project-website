var storeEndpoint = "https://fakestoreapi.com";

var dollar = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

function getFeatured() {
  console.log(storeEndpoint);
  fetch(`${storeEndpoint}/products/category/electronics?limit=10`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.status === 200) return response.json();
      else throw new Error("Cannot Connect to Backend please try again later");
    })
    .then((data) => {
      let itemContainer = document.getElementById("items");

      data.map((item) => {
        let el = document.createElement("div");
        let image = document.createElement("img");
        let title = document.createElement("span");
        let price = document.createElement("span");
        title.setAttribute("class", "item-title");
        image.setAttribute("src", item.image);
        title.innerText = item.title;
        price.innerText = dollar.format(item.price * 218);
        el.appendChild(image);
        el.appendChild(title);
        el.appendChild(price);
        itemContainer.appendChild(el);
      });
    })
    .catch((err) => alert(err));
}

getFeatured();
