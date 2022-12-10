let solsp = document.querySelectorAll(`tr.sp`);
let mucgia = document.querySelector(`[name="mucgia"]`);
// lọc sản phấm theo khoảng giá started
function displaysp() {
    for (const xx of solsp) {
        xx.style.display = "none";
    }
    for (let i = 1; i <= solsp.length; i++) {
        let textgiasp = document.querySelector(`.sp${i}`).innerText;
        let giasp = parseInt(textgiasp)
        if (giasp <= mucgia.value) {
            document.querySelector(`tr#sp${i}`).style.display = "table-row";
        }
    }
}
document.querySelector(`[name="chontatca"]`).onclick = function () {
    let checkboxs = document.querySelectorAll(`[class="checkbox"]`);
    for (var checkbox of checkboxs) {
        checkbox.checked = this.checked;
    }
}
// lọc sản phấm theo khoảng giá ended
// sử lý dữ liệu của bảng started
function xulydulieu() {
    let sum = 0;
    let count = 0;
    let checkboxs = document.querySelectorAll(`[class="checkbox"]`);
    for (var checkbox of checkboxs) {
        if (checkbox.checked == true) {
            count++;
        }
    }
    if (count < checkboxs.length) {
        document.querySelector(`[name="chontatca"]`).checked = false;
    } else {
        document.querySelector(`[name="chontatca"]`).checked = true;
    }
    for (let i = 1; i <= solsp.length; i++) {
        let textgiasp = document.querySelector(`.sp${i}`).innerText;
        let slsp = document.querySelector(`[name="slsp${i}"]`).value;
        let giasp = parseInt(textgiasp);
        document.getElementById(`price_sp${i}`).innerText = giasp * slsp;
        if (document.querySelector(`[name="sp${i}"]`).checked == true) {
            sum += giasp * slsp;
        }
    }
    document.getElementById("sum").innerText = sum;
}
// sử lý dữ liệu của bảng ended
// Chức năng xắp xêp stated
// hàm onchage của select xap xep 
let mytable = document.getElementById("mytable");
function sapxep(){
    let sapxepx = document.querySelector(`[name="sapxep"]`).value;
    if(sapxepx =="tang"){
        tang();
    }
    if(sapxepx =="giam"){
        giam();
    }
    }
// sắp xếp tăng
function tang() {
    for (let i = 1; i < mytable.rows.length - 2; i++) {
        for (let j = i+1; j < mytable.rows.length-1; j++) {
            let a= parseInt(mytable.rows[i].cells[2].innerHTML);
            let b= parseInt(mytable.rows[j].cells[2].innerHTML);
            let rowa = mytable.rows[i];
            let rowb = mytable.rows[j];
            if(a > b){
                rowa.parentNode.insertBefore(rowb,rowa);
            }
        }
    }
}
// sắp xếp  giảm

function giam(){
    for (let i = 1; i < mytable.rows.length - 2; i++) {
        for (let j = i+1; j < mytable.rows.length-1; j++) {
            let a= parseInt(mytable.rows[i].cells[2].innerHTML);
            let b= parseInt(mytable.rows[j].cells[2].innerHTML);
            let rowa = mytable.rows[i];
            let rowb = mytable.rows[j];
            if(a < b){
                rowa.parentNode.insertBefore(rowb,rowa);
            }
        }
    }
}
// Chức năng xắp xêp ended
