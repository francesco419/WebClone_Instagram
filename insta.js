const cd = document.getElementById('clickme1');
const id = document.getElementById('popup1');
const cc = document.getElementById("ccc");
const aa = document.getElementById("popup2")

cc.onmouseover=function(){
    document.getElementById("cimage2").style.display="block";
}
cc.onmouseout=function(){
    document.getElementById("cimage2").style.display="none";
}

cd.onmouseover=function(){
    document.getElementById("cimage1").style.display="block";
}
cd.onmouseout=function(){
    document.getElementById("cimage1").style.display="none";
}

cd.addEventListener('click',function(){
    if(id.style.display=="none"){
        id.style.display="inline";
    }else{
        id.style.display="none";
    }
})

cc.addEventListener('click',function(){
    if(aa.style.display=="none"){
        aa.style.display="inline";
    }else{
        aa.style.display="none";
    }
})

