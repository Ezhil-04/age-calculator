let date=document.getElementById("date")

date.max=new Date().toISOString().split("T")[0];


function ismobile()
{
if('undefined'!==typeof navigator.userAgentData && navigator.userAgentData.mobile)
{
    return true;
}
}

if(ismobile())
{

    date.classList.add("addbefore")
}
function istouchdevice(){
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}
if(istouchdevice())
{
    date.classList.add("addbefore")
}

console.log(istouchdevice())

function removeplaceholder(){
    if(date.value)
    {
     date.classList.add("removebefore")
    }
}

date.addEventListener("change",removeplaceholder)


function checkage(){
    let dob=new Date(date.value);
    let m1,d1,y1;
    m1=dob.getMonth();
    d1=dob.getDate();
    y1=dob.getFullYear();
    
    
    let currdate=new Date();
    let m2,d2,y2;
    m2=currdate.getMonth();
    d2=currdate.getDate();
    y2=currdate.getFullYear();
    
    let m3,d3,y3
  y3=y2-y1
    if(date.value==""){
        alert("Enter Date Of Birth to find age")
    }
else{


  if(y1>y2){
    alert("Enter a valid birth year")
  }
  else if(y1==y2 && m1>m2){
   alert("Enter  valid date of birth")
  }
  else{


  if(m1>m2){
    y3--;
    m3=12-(m1-m2)
  }
if(m1<m2){
    m3=m2-m1;
}
if(m2==m1){
    m3=m2-m1
    if(m3<0){
        m3=0
    }
}


if(d1>d2){
    m3--;
    d3=(30-d1)+d2
    if(m3<0){
        m3=0
    }
    
}
if(d1<d2 || d1==d2){
    d3=d2-d1
}
if(y2==y1 && m2==m1){
    y3=0;
    m3=0
}


 
  
    
    let final=document.getElementById("age")
    final.innerHTML=`You are ${y3} years,${m3} months,${d3} days old`
    
    
    
    }
}
}

