$(document).ready(function(){
 $('#one').click(function(){
 $('.body').css("background-color","#004999")

 })
 $('#two').click(function(){
    $('.body').css("background-color","#ED0223")
   
    })
    $('#three').click(function(){
        $('.body').css("background-color","#0F1112")
       
        })
});
var img=document.getElementById("dui");
       function blue(){
               img.src='pepsi001.png';
       }
       function red(){
        img.src='pepsi002.png';
    }
    function black(){
        img.src='pepsi003.png';
    }