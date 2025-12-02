var num = document.querySelectorAll(".drum").length;

for ( var i = 0 ; i < num ; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){

        var inner = this.innerHTML;
        sound(inner);
        animation(inner);

       
    })}
    
    document.addEventListener("keypress",function(event){
        sound(event.key);
        animation(event.key);
    })

function sound (key)
{
    switch (key) {
        case "a":
        var a = new Audio("./sounds/tom-1.mp3");
        a.play();
            break;
        
            case "s":
        var s = new Audio("./sounds/tom-2.mp3");
        s.play();
            break;
    
        
            case "d":
        var d = new Audio("./sounds/tom-3.mp3");
        d.play();
            break;
    
        
            case "f":
        var f = new Audio("./sounds/tom-4.mp3");
        f.play();
            break;
    
        
            case "g":
        var g = new Audio("./sounds/crash.mp3");
        g.play();
            break;
    
        
            case "h":
        var h = new Audio("./sounds/kick-bass.mp3");
        h.play();
            break;
    
        
            case "j":
        var j = new Audio("./sounds/snare.mp3");
        j.play();
            break;
    
        default:
            break;
    }
}

function animation(currentkey)
{
    var active = document.querySelector("." + currentkey);
    active.classList.add("pressed");

    setTimeout(function(){
        active.classList.remove("pressed")
    },100)
}