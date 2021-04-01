function SetDate()
{
   var d = new Date();
    d.setDate(1);
    document.getElementById("Date").innerHTML = d;
}