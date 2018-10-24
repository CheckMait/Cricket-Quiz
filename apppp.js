
var points=0;
function show()
{alert("Thanks,welcome to the Cricket Quiz")

var ghy;
ghy=document.getElementById("name").value;
document.getElementById("bkchodi").innerHTML="Hello " + ghy;
}
function letusplay()
{

var ans=document.getElementById("abc");
if(ans.value=="5")
{ document.getElementById("cir1").style.fill="green";
    alert("Correct Answer");
points+=4;
}
else{ document.getElementById("cir1").style.fill="red";
    alert("Wrong");
points=-1;}
}
function frends()
{
    var as=document.getElementById("question2");
    var as1;
    
    if(document.getElementById ("r1").checked)
  {    document.getElementById("cir2").style.fill="red"
      as1=document.getElementById ("r1").value;
  points-=1;

     }
 else if(document.getElementById ("r2").checked)
    { document.getElementById("cir2").style.fill="red";
        as1=document.getElementById ("r2").value;
    points-=1;
    }
    else if(document.getElementById ("r3").checked)
    { document.getElementById("cir2").style.fill="green"
        as1=document.getElementById("r3").value;
    
    points+=4;}
else{ document.getElementById("cir2").style.fill="red"
as1=document.getElementById ("r4").value;
points-=1;
}
    alert(as1);
    }
function question3()
    
   {var za;
    if(document.getElementById ("z1").checked)
    { document.getElementById("cir3").style.fill="red"
        za=document.getElementById ("z1").value;
    
    points-=1;}
    else if(document.getElementById ("z2").checked)
    { document.getElementById("cir3").style.fill="green"
    za=document.getElementById ("z2").value;
    points+=4 ;}
     else {
        document.getElementById("cir3").style.fill="red"
            za=document.getElementById ("z3").value;
    points-=1;}
    alert(za);
    
    
}
function question4()
{
var jpp=document.getElementById("Emma");
if(jpp.value=="Virat kohli"||jpp.value=="virat kohli"||jpp.value=="Virat Kohli")
{
    document.getElementById("cir4").style.fill="green"
alert("Correct");
points+=4;}
else{
    document.getElementById("cir4").style.fill="red"
alert("Incorrect");
points-=1;
}

}
function question5()
{
    if(document.getElementById("n1").checked)
    { document.getElementById("cir5").style.fill="red"
        alert("Incorrect");
    points-=1;}
else if(document.getElementById("n2").checked)
{ document.getElementById("cir5").style.fill="green"
    alert("Correct");
points+=4;
}
else if(document.getElementById("n3").checked)
{ document.getElementById("cir5").style.fill="red"
    alert("Incorrect");
points-=1;
}
else
{ document.getElementById("cir5").style.fill="red"
    alert("Incorrect")
points-=1;
}

}
function timeshow()
{

var d=new Date();
var hours=d.getHours();
var minutes=d.getMinutes();
var seconds=d.getSeconds();
document.getElementById("a1").innerHTML=hours+":"+minutes+":"+seconds;
}
setInterval(timeshow,1000);

function question7()
{
    var gg;
    
    if(document.getElementById ("f1").checked)
  { document.getElementById("cir7").style.fill="green"
      gg=document.getElementById ("f1").value;
  points+=4;
     }
 else if(document.getElementById ("f2").checked)
    { document.getElementById("cir7").style.fill="red"
        gg=document.getElementById ("f2").value;
    points-=1;
    }
    else if(document.getElementById ("f3").checked)
    { document.getElementById("cir7").style.fill="red"
        gg=document.getElementById("f3").value;
    points-=1;
    }
else{ document.getElementById("cir7").style.fill="red"
    gg=document.getElementById ("f4").value;
points-=1;}
alert(gg);
}

function question8()
{
    if(document.getElementById("Muriel").value=="Brian Lara"||document.getElementById("Muriel").value=="Brian lara"||document.getElementById("Muriel".value=="brian lara"))
    {
        document.getElementById("cir8").style.fill="green"
        alert("You are damn right");
        points+=4;
    }
else{
    document.getElementById("cir8").style.fill="red"
    alert("Not a great fan you are,my friend!");
    points-=1;
}
}
function question9()
{
    var ab;
    
    if(document.getElementById ("u1").checked)
  { document.getElementById("cir9").style.fill="red"
      ab=document.getElementById ("u1").value;
  points-=1;
     }
 else if(document.getElementById ("u2").checked)
    { document.getElementById("cir9").style.fill="green"
        ab=document.getElementById ("u2").value;
    points+=4;
    }
    else if(document.getElementById ("u3").checked)
    { document.getElementById("cir9").style.fill="red"   
        ab=document.getElementById("u3").value
    points-=1;
    }
else{ document.getElementById("cir9").style.fill="red"
    ab=document.getElementById ("u4").value;
points-=1;}
alert(ab);
}

function finalfunction()
{
var ghy;
  ghy=document.getElementById("name").value;
  document.getElementById("score").innerHTML= ghy + ",you have got " + points +"points";
  if(points>=24){document.getElementById("fanlevel").innerHTML="You are a Cricket God Dude!";}
  else if((points>=15)||(points<24)){document.getElementById("fanlevel").innerHTML="Well done,but it could have been better";}
  else{document.getElementById("fanlevel").innerHTML="Call yourselves a Cricket Fan,I doubt that! xD";}
  
}
