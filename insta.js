'use strict';

const cd = document.getElementById('clickme1');
const id = document.getElementById('popup1');
const cc = document.getElementById("ccc");
const aa = document.getElementById("popup2")

cc.onmouseover=function(){
    document.getElementById("cimage2").style.display="inline";
}
cc.onmouseout=function(){
    document.getElementById("cimage2").style.display="none";
}

cd.onmouseover=function(){
    document.getElementById("cimage1").style.display="inline";
}

cd.onmouseout=function(){
    document.getElementById("cimage1").style.display="none";
}

cd.addEventListener('click',function(){
    if(id.style.display=="none"){
        id.style.display="inline";
    }
})
id.addEventListener('click',function(){
    id.style.display="none";
})

cc.addEventListener('click',function(){
    if(aa.style.display=="none"){
        aa.style.display="inline";
    }
})

aa.addEventListener('click',function(){
    aa.style.display="none";
})

