$(function(){

var clock = document.querySelector('p')



//  setInterval(function(){
//     var time = moment().format('h:mm:ss a')
//     clock.innerHTML = time
// },1000)


red = 1
green = 1
blue = 1
 
setInterval(function(){
    red = Math.floor(Math.random() * 255) + 1
    green = Math.floor(Math.random() * 255) + 1
    blue = Math.floor(Math.random() * 255) + 1
    

    var time = moment().format('h:mm:ss a')
    clock.innerHTML = time
    
    $('p').css("color", `rgb(${red},${green},${blue})`)
},1000)



})