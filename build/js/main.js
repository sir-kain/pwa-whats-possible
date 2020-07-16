function createNode(el) {
  return document.createElement (el);
}

function append(parent, el) {
  return parent.appendChild(el);
}

window.addEventListener("DOMContentLoaded", () => {
  const $ul = document.getElementById("users");

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((users) => {
      users.forEach((user) => {
        const $li = createNode("li");
        const $p = createNode("p");
        const $span = createNode("span");

        $p.textContent = user.name;
        $span.textContent = user.email;
        
        append($li, $p);
        append($li, $span);
        append($ul, $li);
      });
    })
    .catch((err) => console.log("err ", err));
});
