			 var hours = new Date().getHours();
			if(hours<12)
			document.write("Good Morning User!!!<br />");
			else if( hours>=12 & hours<16 )
			document.write("Good Morning User!!!<br />");
			else if( hours>=20 & hours<16 )
			document.write("Good Evening User!!!<br />");
			else 
			document.write("Good night User!!!<br />");


		

		document.write(formatAMPM(new Date()));

		function formatAMPM(date) {
		    var hours = date.getHours();
		    var days = date.getDay();
		    var minutes = date.getMinutes();
		    var ampm = hours >= 12 ? 'pm' : 'am';
		    hours = hours % 12;
		    hours = hours ? hours : 12; 
		    minutes = minutes < 10 ? '0'+ minutes : minutes;
		    var time = hours + ':' + minutes + ' ' + ampm;
		    var match = date.toString().match(/\w{3} \w{3} \d{1,2} \d{4}/);
		    return match[0] + ' ' + time;
		}




$(function () {
    var now = new Date();

    $('#demo').mobiscroll().calendar({
        display: 'inline',
        layout: 'liquid',
        theme: 'ios',
        markedDisplay: 'bottom',
        marked: [{
            d: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 6),
            color: 'rgb(28, 161, 227)'
        }, {
            d: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 8),
            color: 'rgb(28, 161, 227)'
        }, {
            d: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 9),
            color: 'rgb(28, 161, 227)'
        }, {
            d: new Date(now.getFullYear(), now.getMonth() + 1, 15),
            color: 'rgb(28, 161, 227)'
        }, {
            d: '11/30',
            color: 'rgb(163, 0, 38)'
        }, {
            d: '5/23',
            color: 'rgb(163, 0, 38)'
        }, {
            d: '3/12',
            color: 'rgb(163, 0, 38)'
        }, {
            d: '14',
            color: 'rgb(204,204,0)'
        }, {
            d: 'w5',
            color: 'rgb(34, 139, 34)'
        }, {
            d: '1/1',
            color: 'rgb(250,104,0)'
        }, {
            d: '1/2',
            color: 'rgb(250,104,0)'
        }, {
            d: '6/4',
            color: 'rgb(250,104,0)'
        }, {
            d: '8/4',
            color: 'rgb(250,104,0)'
        }, {
            d: '12/25',
            color: 'rgb(250,104,0)'
        }, {
            d: '12/26',
            color: 'rgb(250,104,0)'
        }]
    });

    $('.md-marked-list').mobiscroll().listview({
        theme: 'ios',
        swipe: false
    });

});






function displayCalendar()
{
var htmlContent ="";
var FebNumberOfDays ="";
var counter = 1;
var dateNow = new Date();
var month = dateNow.getMonth();

var nextMonth = month+1; 
var prevMonth = month -1;
var day = dateNow.getDate();
var year = dateNow.getFullYear();

if (month == 1){
if ( (year%100!=0) && (year%4==0) || (year%400==0)){
FebNumberOfDays = 29;
}else{
FebNumberOfDays = 28;
}
}

var monthNames = ["January","February","March","April","May","June","July","August","September","October","November", "December"];
var dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday", "Saturday"];
var dayPerMonth = ["31", ""+FebNumberOfDays+"","31","30","31","30","31","31","30","31","30","31"]



var nextDate = new Date(nextMonth +' 1 ,'+year);
var weekdays= nextDate.getDay();
var weekdays2 = weekdays
var numOfDays = dayPerMonth[month];

while (weekdays>0){
htmlContent += "<td class='monthPre'></td>";


weekdays--;
}


while (counter <= numOfDays){


if (weekdays2 > 6){
weekdays2 = 0;
htmlContent += "</tr><tr>";
}


if (counter == day){
htmlContent +="<td class='dayNow' onMouseOver='this.style.background=\"#FF0000\"; this.style.color=\"#FFFFFF\"' "+
"onMouseOut='this.style.background=\"#FFFFFF\"; this.style.color=\"#00FF00\"'>"+counter+"</td>";
}else{
htmlContent +="<td class='monthNow' onMouseOver='this.style.background=\"#FF0000\"'"+
" onMouseOut='this.style.background=\"#FFFFFF\"'>"+counter+"</td>"; 

}

weekdays2++;
counter++;
}

var calendarBody = "<table class='calendar'> <tr class='monthNow'><th colspan='7'>"
+monthNames[month]+" "+ year +"</th></tr>";
calendarBody +="<tr class='dayNames'> <td>S</td> <td>M</td> <td>T</td>"+
"<td>W</td> <td>T</td> <td>F</td> <td>S</td> </tr>";
calendarBody += "<tr>";
calendarBody += htmlContent;
calendarBody += "</tr></table>";

document.getElementById("calendar").innerHTML=calendarBody;

}

$(document).ready(function(){
$("#hide2").click(function(){
$("#hide1").hide();
});});
$(document).ready(function(){
$("#hide4").click(function(){
$("#hide3").hide();
});});
$(document).ready(function(){
$("#hide6").click(function(){
$("#hide5").hide();
});});







