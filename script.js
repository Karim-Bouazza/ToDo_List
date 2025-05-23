const authors = document.getElementById("authors");
const says = document.getElementById("says");

let users = [
  //   {
  //    id: 1,
  //     user: "Karim Bouazza",
  //     email: "karim19215@gmail.com",
  //     selected: false,
  //   },
  //   {
  //     user: "Html Frontend",
  //     email: "html@gmail.com",
  //     selected: false,
  //   },
];

let said = [
  //   {
  //     title: "usthb univeristy of student",
  //     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At nobis vitae distinctio minima quidem ipsa accusantium in veniam, commodi quod.",
  //   },
  //   {
  //     title: "usthb univeristy of student",
  //     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At nobis vitae distinctio minima quidem ipsa accusantium in veniam, commodi quod.",
  //   },
  //   {
  //     title: "usthb univeristy of student",
  //     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At nobis vitae distinctio minima quidem ipsa accusantium in veniam, commodi quod.",
  //   },
  //   {
  //     title: "usthb univeristy of student karim",
  //     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At nobis vitae distinctio minima quidem ipsa accusantium in veniam, commodi quod.",
  //   },
];

function displayUsers() {
  authors.innerHTML = "";
  let index = 0;
  for (x of users) {
    let content = `
    <div class="box ${
      x.selected ? "border" : ""
    }" onclick="displayBorder(${index}), getSaidId(${index + 1})">
        <h3>${x.user}</h3> 
        <p>${x.email}</p>
        </div>
        `;
    authors.innerHTML += content;
    index++;
  }
}

function displayContent() {
  says.innerHTML = '';
  for (x of said) {
    let content = `
      <div class="said">
            <h3>${x.title}</h3>
            <hr />
            <p>${x.body}</p>
          </div>
    `;
    says.innerHTML += content;
  }
}

function displayBorder(i) {
  users[i].selected = !users[i].selected;
  for (let j = 0; j < users.length; j++) {
    if (j == i) {
      continue;
    }
    users[j].selected = false;
  }
  displayUsers();
}

function getAllUser() {
  const request = new XMLHttpRequest();
  request.open("GET", "https://jsonplaceholder.typicode.com/users");
  request.responseType = "json";
  request.send();
  request.onload = function () {
    let allUser = request.response;

    for (x of allUser) {
      let obj = {
        user: x.name,
        email: x.email,
        selected: false,
      };
      users.push(obj);
    }
    displayUsers();
  };
}

function getSaidId(userId) {
  said = [];
  const request = new XMLHttpRequest();
  request.open(
    "GET",
    `https://jsonplaceholder.typicode.com/users/${userId}/posts`
  );
  request.send();
  request.responseType = "json";
  request.onload = function () {
    let allSaid = request.response;
    console.log(said);
    for (x of allSaid) {
      let obj = {
        title: x.title,
        body: x.body,
      };
      said.push(obj);
    }
    console.log(said);
    displayContent();
  };
}
getAllUser();
displayContent();
