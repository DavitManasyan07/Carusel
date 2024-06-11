const div = document.getElementById("parentDiv");
const img = document.getElementById("img");
const arrowR = document.getElementById("arrowRigth");
const arrowL = document.getElementById("arrowLeft");
const btnsDiv = document.getElementById("btns");

let n = 0;
let picArr = [
  "./Pictures/Nissan-GT-R_Nismo-2020-1280-01-1046x616.2.jpg",
  "./Pictures/Toyota-Supra-MK4.2.jpg",
  "./Pictures/Mazda rx-7.10.jpg",
];

function addPicture(url) {
  picArr.push(url);
  addButton(url, picArr.length - 1);
}

function addButton(url, id) {
  let btn = document.createElement("button");
  btn.id = `btn${id}`;
  btn.classList.add("miniBtns");
  btn.addEventListener("click", () => {
    img.src = url;
    hovBtn.classList.remove("btnN");
    btn.classList.add("btnN");
    hovBtn = btn;
    n = id;
  });
  btnsDiv.append(btn);
}

let hovBtn;

picArr.forEach((picUrl, picId) => {
  addButton(picUrl, picId);
});

img.src = picArr[0];
let btn = document.getElementById(`btn0`);
btn.classList.add("btnN");
hovBtn = btn;

arrowR.addEventListener("click", () => {
  btn = document.getElementById(`btn${n}`);
  btn.classList.remove("btnN");
  if (n + 1 <= picArr.length - 1) {
    n++;
  } else {
    n = 0;
  }
  img.src = picArr[n];
  btn = document.getElementById(`btn${n}`);
  btn.classList.add("btnN");
});

arrowL.addEventListener("click", () => {
  btn = document.getElementById(`btn${n}`);
  btn.classList.remove("btnN");
  if (n - 1 >= 0) {
    n--;
  } else {
    n = picArr.length - 1;
  }
  img.src = picArr[n];
  btn = document.getElementById(`btn${n}`);
  btn.classList.add("btnN");
});

//slayd Show
let slaydShow;

const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");

startBtn.addEventListener("click", () => {
  slaydShow = setInterval(() => {
    btn = document.getElementById(`btn${n}`);
    btn.classList.remove("btnN");
    if (n + 1 <= picArr.length - 1) {
      n++;
    } else {
      n = 0;
    }
    img.src = picArr[n];
    btn = document.getElementById(`btn${n}`);
    btn.classList.add("btnN");
  }, 2000);
});

stopBtn.addEventListener("click", () => {
  clearInterval(slaydShow);
});
