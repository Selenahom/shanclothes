let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let four = document.querySelector('.four');
let five = document.querySelector('.five');
let loading = document.querySelector('.loading');

fetch('https://raw.githubusercontent.com/AonMao888/Tt/refs/heads/main/clothelist').then(r=>r.json()).then(all=>{
    loading.style.display = 'none';
    for (let i = 0; i < 3; i++) {
        one.innerHTML += `<a href="../html/order.html?id=${i}&cate=trending">
                <img src="${all[i].img}" alt="">
            </a>`;
    }
    for (let i = 3; i < 6; i++) {
        two.innerHTML += `<a href="../html/order.html?id=${i}&cate=trending">
                <img src="${all[i].img}" alt="">
            </a>`;
    }
    for (let i = 6; i < 9; i++) {
        three.innerHTML += `<a href="../html/order.html?id=${i}&cate=trending">
                <img src="${all[i].img}" alt="">
            </a>`;
    }
    for (let i = 9; i < 12; i++) {
        four.innerHTML += `<a href="../html/order.html?id=${i}&cate=trending">
                <img src="${all[i].img}" alt="">
            </a>`;
    }
    for (let i = 12; i < all.length; i++) {
        five.innerHTML += `<a href="../html/order.html?id=${i}&cate=trending">
                <img src="${all[i].img}" alt="">
            </a>`;
    }
})