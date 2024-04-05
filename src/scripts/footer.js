const footer = document.createElement("footer");

footer.innerHTML = `
      <div>
        <div>
          <h4>Our Company</h4>
          <ul>
            <a href="">Profile</a
            ><a href="">Vacancies</a
            ><a href="">Privacy Policy</a>
          </ul>
        </div>
        <ul>
          <h4>Technical</h4>
          <a href="">Sitemap</a
          ><a href="">Robots.txt</a>
        </ul>
        <ul>
          <h4>Legal</h4>
          <a href="">Partner with Us</a>
          <a href="">File a complaint</a>
        </ul>
      </div>
      <div id="copyright">
        <span>Copyright Techstore </span><span id="date"></span>
      </div>
  `;

document.body.appendChild(footer);
