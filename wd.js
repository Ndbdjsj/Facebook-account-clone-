var a = document.querySelector("#btn1")
x=1
a.addEventListener("click",function(){
    if(x==1){
    a.innerHTML="Friends"
    a.style.color="green"
    x==0
    }else{
        a.innerHTML="Add Friends"
    a.style.color="red"
    x==1
    }
})