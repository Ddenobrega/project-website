const header = document.createElement("header");

header.innerHTML = `
      <div id="logo">
        <img src="/src/assets/img/logo.png" alt="logo" />
        <h1>Techshop Inc.</h1>
      </div>
      <div id="links">
        <a href="/src/">Home</a>
        <a href="/src/store.html">Store</a>
        <a href="/src/index.html#contact-section">Contact</a>
      </div>
`;
document.body.appendChild(header);
