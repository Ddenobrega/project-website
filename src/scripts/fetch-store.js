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
    .then((response) => response.json())
    .then((data) => {
      var featuredDiv = document.getElementById("featured");
      var featuredText = document.getElementById("featured-text");
      var featuredPrice = document.getElementById("featured-price");
      const featuredIndex = Math.floor(Math.random() * data.length);
      console.log(featuredIndex);
      console.log(data);
      featuredDiv.style.backgroundImage = `url('${data[
        featuredIndex
      ].image.toString()}')`;
      featuredText.innerText = data[featuredIndex].title;
      featuredPrice.innerText = `${dollar.format(
        data[featuredIndex].price * 218
      )}`;
    });
}

getFeatured();
