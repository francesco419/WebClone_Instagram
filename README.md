# WebClone_Instagram

==>basic format of instagram profile page. 페이지의 외형만을 clone.

1.

/ 팝업레이어의 이미지의 position : absolute임에도 '부모(조상)'블록에의해 이미지의 시작좌표가 부모의 시작좌표에서 시작하는 문제 발생.

=>팝업레이어블록을 pictureline 내부가 아닌, main블록 밑으로 넣으므로 문제해결.
  /팝업레이어블록을 이동함으로 팝업레이어가 팝업이 되었을시 기존의 
  
    cd.addEventListener('click',function(){
      if(id.style.display=="none"){
          id.style.display="inline";
        }else{
            id.style.display="none";
        }
     })
     
     에서
     
    cd.addEventListener('click',function(){
      if(id.style.display=="none"){
          id.style.display="inline";
        }
    })
    id.addEventListener('click',function(){
        id.style.display="none";
    })
    
   로 변경, 팝업레이어의 이미지를 클릭시 팝업레이어의 display를 none으로 변경.
    
/ onmouseover에 의해서만 보여야할 'id="cimage"'가 웹페이지 로드순간부터 보여지는 문제 발생.

=>insta.js의 onmouseover=function내부의 display의 값을 "block"에서 "inline"으로 변경함으로 문제 해결.

대부분의 그림요소는 instagram페이지에서 추출.
