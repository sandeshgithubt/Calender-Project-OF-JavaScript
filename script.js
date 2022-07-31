
var dt = new Date();

function renderDate(){


//console.log(dt.getDay);

var day  = dt.getDay();

var today  = new Date();

var lastDt = new Date(
    dt.getFullYear(),
    dt.getMonth() + 1, 0
).getDate();
//console.log(lastDt);


var prevDate = new Date(
    dt.getFullYear(),
    dt.getMonth(), 0
).getDate();




var months = ["january", "February", "March", "April", "May", "June", "July", "August", "September",
                "October", "November" , "December"];

          //  console.log(months[dt.getMonth()]);

document.getElementById('date_start').innerHTML = dt.toDateString();

document.getElementById("month").innerHTML = months[dt.getMonth()];

var col = "";

for(a = day ; a > 0 ; a-- ){
    col += "<div class='previous'>" + (prevDate - a + 1)  + "</div>";
}

for(i = 1;  i <= lastDt ; i++){
    if(i == today.getDate() && dt.getMonth() == today.getMonth()){
        col += "<div class='today'>" + i + "</div>";
    }
    else{
       col +=  "<div>" + i +  "</div>";
    }
   
}

    document.getElementsByClassName("days")[0].innerHTML = col;
}

    function moveDate(para){
        if(para == 'prev'){
            dt.setMonth(dt.getMonth() - 1);
          

        }else if(para == 'next'){
            dt.setMonth(dt.getMonth() + 1);
        }
          renderDate();
    }

   
