const d = document,
  $content = d.querySelector(".content");

d.addEventListener("keypress", (e) => {
  let $template = `
  <div>
  <h2>Event Key</h2>
  <p>${e.key.toUpperCase()}</p>
  </div>

  <div>
  <h2>Event Code</h2>
  <p>${e.keyCode}</p>
  </div>

  <div>
  <h2>Event Code</h2>
  <p>${e.code}</p>
  </div>
  `;

  $content.innerHTML = $template;
});
