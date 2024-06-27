const paragrafos = document.querySelector('.paragrafos');
const ps = document.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundcolorBody = estilosBody.backgroundColor;

for (let p of ps) {
    p.style.backgroundColor = backgroundcolorBody;
    p.style.color = "#FFFFFF";
}