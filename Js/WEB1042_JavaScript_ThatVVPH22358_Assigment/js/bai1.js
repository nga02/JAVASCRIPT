let i = 0;
let imgList = ["url('https://luv.vn/wp-content/uploads/2021/09/hinh-anh-gai-xinh-trung-quoc-96-edited.jpg')",
    "url('https://haycafe.vn/wp-content/uploads/2022/03/Anh-gai-Trung-Quoc.jpg')",
    "url('https://vieclamthemonline.com/wp-content/uploads/2021/10/anh-girl-trung-quoc.jpg')",
    "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3oAN7jsrv3IcAjGolZAzJ2ADQYcaLuzh5MA&usqp=CAU')",
    "url('https://adsense.sgp1.digitaloceanspaces.com/tophinhdep.com/2021/12/1640727536_466_Tong-hop-999-hinh-anh-cac-co-gai-dep-hot.jpg')",
    "url('https://freenice.net/wp-content/uploads/2021/09/hinh-anh-gai-trung-quoc-tuoi-tre.jpg')",
    "url('https://img3.thuthuatphanmem.vn/uploads/2019/06/17/anh-dep-hot-girl-trung-quoc-dang-yeu_103850174.jpg')",
    "url('https://danviet.mediacdn.vn/upload/1-2020/images/2020-02-03/b---o-h--n2-1580714867-width650height547.jpg')",
    "url('https://genk.mediacdn.vn/2019/12/26/photo-1-157733327602315996740.jpg')"
]
let imgBackground = document.getElementById("album");
imgBackground.style.backgroundImage = imgList[i];
let tonganh = document.getElementById("tonganh").innerHTML = imgList.length - 1;
let count = document.getElementById("count");
function prev() {
    if (i == 0) {
        i = tonganh - 1;
    } else {
        i--;
    }
    count.innerHTML = i + 1;
    imgBackground.style.backgroundImage = imgList[i];
}
function next() {
    if (i == tonganh - 1) {
        i = 0;
    } else {
        i++;
    }
    count.innerHTML = i + 1;
    imgBackground.style.backgroundImage = imgList[i];
}
