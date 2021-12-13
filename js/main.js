        // Bài 1 Quản lý Tuyển Sinh 
/** Sơ Đồ 3 Khối 
 * Khối 1 :input
 *  Khai báo biến / gán giá trị 
 * 
 * Khối 2 :
 *  B1 : Lấy giá trị từ form
 * 
 *  B2 : 
 *  Kiểm tra , gán giá trị = 0 >> bị điểm liệt (rớt)
 * 
 *  tongDiem >= diemChuan >>> Đậu
 *  tongDiem < diemchuan >>> rớt 
 * 
 *  khối 3 :
 * 
 * Xuất kết quả của thí sinh 
 * 
 */

function btndiemSo(){
    var diemChuan = Number(document.getElementById("inpdiemChuan").value);
    var kVuc = Number(document.getElementById("khuVuc").value);
    var dTuong = Number(document.getElementById("doiTuong").value);
    var d1 = Number(document.getElementById("Diemt1").value);
    var d2 = Number(document.getElementById("Diemt2").value);
    var d3 = Number(document.getElementById("Diemt3").value);

    var o = d1 + d2 + d3 + kVuc +dTuong ;
    if( d1<=0  || d2<=0 || d3<=0 ) {
        document.getElementById("txtketQua").innerHTML = "Bạn đã thi trượt , vì đã có môn bị điểm liệt = 0 .";
    }else{
        if (o >= diemChuan){
            document.getElementById("txtketQua").innerHTML = "Chúc mừng Bạn đã thi đỗ . Tổng điểm :" + o ;
        }else{
            document.getElementById("txtketQua").innerHTML = "Bạn đã rớt, Tổng điểm: " +o ;
        }
    }
    document.getElementById("txtketQua").style.display="block";
}

                // Bài Tập 2 Tính Tiền Điện
/*** Mô hình 3 khối 
 * Khối 1 : input
 *  khai báo biến / gán giá trị 
 * 
 * khối 2 :
 *   tính tiền theo KW 
 *  giakwDau = 500 ;
 *  gia50Kw = 650 ;
 *  gia100Kw = 850 ;  
 *  gia150Kw = 1100 ; 
 *  giakwconLai = 1300 ;
 * khối 3 : output
 * 
 *  xuất giá trị 
 * 
 */

 const giakwDau = 500 ;
 const gia50Kw = 650 ;
 const gia100Kw = 850 ; 
 const gia150Kw = 1100 ;
 const giakwconLai = 1300 ;
    function tinhTien(){
        var hoTen = document.getElementById("inpHoTen").value;
        var kw = Number(document.getElementById("inpKw").value);
        var total = tinhtienkW(kw,giakwDau,gia50Kw,gia100Kw,gia150Kw,giakwconLai) ;
        var fomatTotal =  new Intl.NumberFormat("vn-VN").format(total);
    document.getElementById("txttienDien").innerHTML = "Họ và tên: " + hoTen  + "<br>" + "  Tiền điện : "+ fomatTotal +"  VND";
    document.getElementById("txttienDien").style.display="block";
}
document.getElementById("btntinhTien").onclick = tinhTien ;


function tinhtienkW(kw,giakwDau,gia50Kw,gia100Kw,gia150Kw,giakwconLai){
    if(0 < kw && kw <= 50){
        return kw * giakwDau ;
    }else if(50 < kw && kw <=100){
        return (50 * giakwDau) + (kw - 50) * gia50Kw ;
    }else if (100 < kw && kw <= 200){
        return ( 50 * giakwDau) +  (50*gia50Kw) + (kw -100)*gia100Kw ;
    }else if (200 < kw && kw <= 350){
        return (50 * giakwDau) + ( 50 *gia100Kw ) + (kw - 200)*gia150Kw ;
    }else if (350 <= kw){
        return (50 * giakwDau) + (50 *gia150Kw) + (kw -350)*giakwconLai ;
    }else{
        alert("hãy nhập lại kw")
        return 0 ;
    }
}
