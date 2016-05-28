/**
 * Created by Love Barca on 5/25/2016.
 */
var month_name = new Array("January", "February","March","April","May","June","July","August","September","October","November","December");
var day_name = new Array("Su", "M", "Tu","W","Th","F","Sa");
var month_day = new Array(31,28,31,30,31,30,31,31,30,31,30,31);

var today = new Date();


var now = new Date();// tra ve thu,thang,ngay,nam,h mui h cua he thong. thu co ten,thang co ten, ngay theo dung thu tu

display();
function backMonth(){
    today.setDate(1);
    today.setMonth(today.getMonth()-1);
    display();
}
function nextMonth() {
    today.setDate(1);
    today.setMonth(today.getMonth()+1);
    display();
}
// this: luu thoi diem hien tai theo he thong
// now: luu thoi gian thay doi theo hien thi
function display() {
    var thisDay = today.getDay();// lấy thứ theo số thứ tự của mảng 0-6, lưu giá trị hiển thị
    var thisMonth = today.getMonth();// lấy tháng theo index 0-11, lưu giá trị hiển thị
    var thisYear = today.getFullYear();// lấy năm đủ 4 chữ số, lưu giá trị hiển thị
    var thisDate = today.getDate();// lấy ra ngày 1-31, lưu giá trị hiển thị
    var nowDate = now.getDate();// lay ngay
    console.log(nowDate);
    var nowMonth = now.getMonth();// lay thang
    var nowYear = now.getFullYear();// lay nam
    var text = "";

    if (nowYear % 4 == 0) month_day[1]=29;
    console.log(nowYear);
    var first_date = new Date(thisYear, thisMonth, 1);// trả về kết quả đầy đủ h, ngày 1 tháng năm ở thời điểm được trỏ tới
    var first_day = first_date.getDay();// trả về thứ của ngày mùng 1 = so
    console.log(first_day);
    title = month_name[thisMonth] + ' ' + thisYear;
    document.getElementById('title').innerHTML = title;
    text += '<table border = 2 style="height: 300px;width: 440px;">';
    text += '<tr><td  style="color: orangered;">' + "Sunday" + '</td><td  style="color: orangered;">' + "Monday" + '</td><td  style="color: orangered;">' + "Tuesday" + '</td><td  style="color: orangered;">' + "Wednesday" + '</td><td  style="color: orangered;">' + "Thursday" + '</td><td  style="color: orangered;">' + "Friday" + '</td><td  style="color: orangered;">' + "Saturday" + '</td></tr>';
    text+='<tr>';
    for (i = 0; i < first_day; i++) {
        console.log(i);
        console.log(first_day);
        text += "<td> </td>";
    }
    date = 1;
    while (date <= month_day[nowMonth]){
        for (j = first_day; j < 7; j++) {
            if ( date <= month_day[thisMonth]){
                if (nowDate == date && nowMonth == thisMonth && nowYear == thisYear){
                    text +='<td id = "nowDate"><b style="color: orangered;">' + date + '</b></td>';
                }else {
                    text +='<td class = "date">' + date + '</td>';
                }
            } else {
                text += "&nbsp";
            }
            date++;
        }
        text += '</tr>';
        first_day = 0;
    }
    text += '</table>';
    document.getElementById("display").innerHTML = text;
}