var t1_A = document.getElementById("task1_1");
var t1_B = document.getElementById("task1_2");
var t1_angel = document.getElementById("task1_3");

var t2_R = document.getElementById("task2_1");

var t3_vr = document.getElementById("task3_1");
var t3_hr = document.getElementById("task3_2");

var t4_A = document.getElementById("task4_1");

var t5_A = document.getElementById("task5_1");
var t5_B = document.getElementById("task5_2");

var t6_A = document.getElementById("task6_1");
var t6_B = document.getElementById("task6_2");

var numberInputs = document.querySelectorAll('input[type=number]');
var output = document.querySelectorAll("span");
var state = 0;

function switchIC(){
    if(state==0){
        numberInputs.forEach(element => {
            element.addEventListener('input', calculate);
        });
        state=1;
    }
    else{
        numberInputs.forEach(element => {
            element.removeEventListener('input', calculate);
        });
        state=0;
    }
    
}

function allred(){
    document.body.style.backgroundColor = "red"
}
function allred1(){
    document.body.style.backgroundColor = "white"
}
function calculate(){
    if(t1_A.value>0&&t1_B.value>0&&t1_angel.value<180&&t1_angel.value>0){
        output[0].innerText=Math.abs((t1_A.value*t1_B.value*Math.sin(t1_angel.value))).toFixed(2);
        output[1].innerText=(output[0].innerHTML/t1_A.value).toFixed(2);
    }
    else{
        output[0].innerText="-";
        output[1].innerText="-";       
    }
    if(t2_R.value>0){
        output[2].innerText=(t2_R.value*t2_R.value*Math.PI).toFixed(2);
        output[3].innerText=(2*(t2_R.value*Math.PI)).toFixed(2);
    }
    else{
        output[2].innerText="-";
        output[3].innerText="-";
    }  
    if(t3_vr.value>0&&t3_hr.value>0){
        output[4].innerText=(Math.PI*t3_vr.value*t3_hr.value).toFixed(2);
        output[5].innerText=(2*Math.PI*Math.sqrt((t3_vr.value*t3_vr.value+t3_hr.value*t3_hr.value)/8)).toFixed(2);
    }
    else{
        output[4].innerText="-";
        output[5].innerText="-";
    }
    if(t4_A.value>0){
        output[6].innerText=(Math.SQRT2*t4_A.value).toFixed(2);
        output[7].innerText=(t4_A.value*t4_A.value).toFixed(2);
    }
    else{
        output[6].innerText="-";
        output[7].innerText="-";
    }
    if(t5_A.value>0&&t5_B.value>0){
        output[8].innerText=(Math.sqrt(t5_A.value*t5_A.value+t5_B.value*t5_B.value)).toFixed(2);
        output[9].innerText=(t5_A.value*t5_B.value).toFixed(2);
    }
    else{
        output[8].innerText="-";
        output[9].innerText="-";
    }
    if(t6_A.value>0&&t6_B.value>0){
        output[10].innerText=(Math.sqrt(t6_A.value*t6_A.value+t6_B.value*t6_B.value)).toFixed(2);
        output[11].innerText=(Math.atan(t6_A.value/t6_B.value)*180/Math.PI).toFixed(2);
        output[12].innerText=(Math.atan(t6_B.value/t6_A.value)*180/Math.PI).toFixed(2);
        output[13].innerText=90;
        output[14].innerText=(t6_A.value*t6_B.value/2).toFixed(2);
        output[15].innerText=(+output[14].innerText/+output[10].innerText).toFixed(2);
    }
    else{        
        output[10].innerText="-";
        output[11].innerText="-";
        output[12].innerText="-";
        output[13].innerText="-";
        output[14].innerText="-";
        output[15].innerText="-";        
    }
}
