function check() {
    let msv = document.querySelector(`[name="msv"]`);
    let hoten = document.querySelector(`[name="hoten"]`);
    let email = document.querySelector(`[name="email"]`);
    let ghichu = document.querySelector(`[name="ghichu"]`).value;
    let gioitinh = document.querySelectorAll(`[name="gioitinh"]`);
    let sothich = document.querySelectorAll(`[name="sothich"]`);
    let quoctich = document.querySelector(`[name="quoctich"]`);
    let choosegt = 0, choosest = 0;
    let msv_error = "";
    let hoten_error = "";
    let email_error = "";
    let gioitinh_error = "";
    let sothich_error = "";
    let quoctich_error = "";
    let ghichu_error = "";
    // check gioitinh stated
    for (const xx of gioitinh) {
        if (xx.checked == true) {
            choosegt++;
        }
    }
    if (choosegt == 0) {
        gioitinh_error = "Vui lòng chọn giới tính !!";
        document.getElementById("gioitinh").style.backgroundColor = "yellow";
    } else {
        document.getElementById("gioitinh").style.background = "none";
    }
    // check gioitinh ended
    // check sothich stated

    for (const xx of sothich) {
        if (xx.checked == true) {
            choosest++;
        }
    }
    if (choosest == 0) {
        sothich_error = "Vui lòng chọn sở thích !!";
        document.getElementById("sothich").style.backgroundColor = "yellow";
    } else {
        document.getElementById("sothich").style.background = "none";

    }
    // check sothich ended
    // check quoctich stated

    if (quoctich.value == "") {
        quoctich_error = "Vui lòng chọn quốc tịch !!";
        document.getElementById("quoctich").style.backgroundColor = "yellow";

    } else {
        document.getElementById("quoctich").style.background = "none";
    }
    // check quoctich ended
    // check ghichu stated

    if (ghichu.trim().length >= 200) {
        ghichu_error = "Ghi chú không vượt quá 200 kí tự !!";
        document.getElementById("ghichu").style.backgroundColor = "yellow";
    } else {
        document.getElementById("ghichu").style.background = "none";
    }
    // check ghichu ended
    // check ten stated
    let arrhoten = hoten.value.trim().split(" ");
    let arrhoten2 =arrhoten.filter(function (element){
        return element !="";
    });
    if(arrhoten2.length == 0){
        hoten_error = "Tên không được để trống !!";
        document.getElementById("hoten").style.backgroundColor = "yellow";
    }else if(arrhoten2.length <2){
        hoten_error="Tên bao gồm ít nhất 2 từ !!!";
        document.getElementById("hoten").style.backgroundColor = "yellow";
    }else{
        hoten_error="";
        document.getElementById("hoten").style.background= "none";
    }
    // check ten stated
    // check masv stated
    let maumsv = /^P[HDSM]{1}[0-9]{5}$/im;
    if (msv.value.trim().length == 0) {
        msv_error = "Mã sinh viên không được để trống !!";
        document.getElementById("msv").style.backgroundColor = "yellow";
    }else if(!maumsv.test(msv.value.trim())){
        msv_error = "Mã sinh viên sai định dạng !!";
        document.getElementById("msv").style.backgroundColor = "yellow";
    }else{
        document.getElementById("msv").style.background = "none";
        
    }
    // check masv ended
    // check email started

    if (email.value.trim().length == 0) {
        email_error = "Email không được để trống !!";
        document.getElementById("email").style.backgroundColor = "yellow";
    } else if(checkemail(email.value.trim() , "@" , 1) &&
     (email.value.trim().startsWith("@")
    ||email.value.trim().endsWith("@"))){
        email_error="Email sai định dạng";
        document.getElementById("email").style.backgroundColor = "yellow";
    }else{
        document.getElementById("email").style.background = "none";
    }
    function checkemail(emailxx, charater, sl){
        let arr = emailxx.split("");
        let x =0;
        for (const xx of arr) {
            if(xx=="@"){
                x++;
            }
        }
        if(x ==sl){
            return true;
        }else {
            return false;
        }
    }
    // check email ended
    // gan loi
    document.getElementById("msv_error").innerText = msv_error;
    document.getElementById("hoten_error").innerText = hoten_error;
    document.getElementById("email_error").innerText = email_error;
    document.getElementById("gioitinh_error").innerText = gioitinh_error;
    document.getElementById("sothich_error").innerText = sothich_error;
    document.getElementById("quoctich_error").innerText = quoctich_error;
    document.getElementById("ghichu_error").innerText = ghichu_error;
}   