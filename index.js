let heading = document.getElementById("count");
let peopleEntered = document.getElementById("entered");
let count = 0;

function increase(){
    count+=1;
    heading.innerHTML=count;
}

function save(){
    let countstr = count + " Peoples ";
    peopleEntered.textContent += countstr;
    heading.textContent = 0;
    count = 0;
}