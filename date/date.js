function myfunction(){
    var t=new Date().toLocaleDateString();
    document.getElementById("demo").innerHTML = t;

    var d=new Date().toLocaleTimeString()
    document.getElementById("time").innerHTML=d;
}