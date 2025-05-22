const create = document.getElementById("create");
const ul = document.getElementById("ul");

create.addEventListener("click", function () {
  let ajouter = prompt("Enter the Task");

  if (ajouter !== "") {
    const li = document.createElement("li");
    const div1 = createDev("li-container");
    const div2 = createDev("right-container");
    const div3 = createDev("calender");
    const div4 = createDev("icon");

    const h3 = document.createElement("h3");
    let text = document.createTextNode(ajouter);

    const i1 = createI("ri-calendar-2-line");
    const i2 = createI("ri-pencil-fill");
    const i3 = createI("ri-check-fill");
    const i4 = createI("ri-close-circle-fill");
    const i5 = createI("ri-delete-bin-6-fill");

    const p = document.createElement("p");
    const p1 = createP("cercle icon-1 click");
    const p2 = createP("cercle icon-2 click");
    const p3 = createP("cercle icon-4 click");
    const p4 = createP("cercle icon-3 click");

    insert(p1, i2, div4);
    insert(p2, i3, div4);
    insert(p3, i4, div4);
    insert(p4, i5, div4);

    Update(p1, text);
    changeColor(p2, p3, li);
    Delete(p4, ul, li);

    const textP = time();

    p.appendChild(textP);
    h3.appendChild(text);
    div2.appendChild(h3);

    div3.appendChild(i1);
    div3.appendChild(p);

    div2.appendChild(div3);
    div1.appendChild(div2);
    div1.appendChild(div4);

    li.appendChild(div1);
    ul.appendChild(li);
  } else {
    console.log("Enter task");
  }
});

function changeColor(p1, p2, li) {
  p1.addEventListener("click", function () {
    li.style.background = "rgba(0, 255, 0, 1)";
    p1.style.display = "none";
    p2.style.display = "block";
  });

  p2.addEventListener("click", function () {
    li.style.background = "white";
    p2.style.display = "none";
    p1.style.display = "block";
  });
}

function Delete(p, ul, li) {
  p.addEventListener("click", function () {
    ul.removeChild(li);
  });
}

function Update(p, textM) {
  p.addEventListener("click", function () {
    const textModify = prompt("Modify Text");
    if (textModify !== "") {
      textM.textContent = textModify;
    }
  });
}

function time() {
  const date = new Date();
  const time1 = date.getFullYear();
  const time2 = date.getMonth() + 1;
  const time3 = date.getDate();
  const textP = document.createTextNode(`${time3}/${time2}/${time1}`);
  return textP;
}

function insert(p, i, div) {
  p.appendChild(i);
  div.appendChild(p);
}

function createP(text) {
  var pp = document.createElement("p");
  pp.setAttribute("class", text);
  return pp;
}

function createI(text) {
  var i = document.createElement("i");
  i.setAttribute("class", text);
  return i;
}

function createDev(text) {
  const div = document.createElement("div");
  div.setAttribute("class", text);
  return div;
}
