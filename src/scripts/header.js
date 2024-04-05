const header = document.createElement("header");

header.innerHTML = `
      <div id="logo">
        <img src="/src/assets/img/logo.png" alt="logo" />
        <h1>Techshop Inc.</h1>
      </div>
      <div id="links">
        <a href="">Home</a>
        <a href="">Store</a>
        <a href="">Contact</a>
      </div>
`;
document.body.appendChild(header);
