const id = document.querySelector("#id");
const password = document.querySelector("#pass");
const login = document.querySelector("button");

login.addEventListener("click", function log(){
  const req = {
    id: id.value,
    password: password.value,
  }
  console.log(req);
  console.log(JSON.stringify(req));

  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(req)
  })
})