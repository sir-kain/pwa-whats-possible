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
        const $span = createNode("span");

        $li.textContent = user.name;
        $span.textContent = user.email;
        
        append($li, $span);
        append($ul, $li);
      });
    })
    .catch((err) => console.log("err ", err));
});
