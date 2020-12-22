# Term-Project
### 1. 텀프로젝트(기말고사) 
 - 2018023045 장하은
> 수업시간에 배운 다양한 기능들을 활용하여 서버를 구현해보고 웹사이트의 레이아웃과 기능을 구현해보았습니다. 
웹사이트에서는 방명록을 남기는 기능을 구현하였고, 이는 JS를 활용하여 구현했습니다. 또한 Express서버를 구동하여 웹 페이지를 구현하였습니다.

### 2. 주요 코드와 기능의 사용(HTML, CSS, Js, Express서버)

 #### (1) HTML, CSS 사용한 웹페이지 디자인

        -layout.html을 이용해 기초 레이아웃을 잡아줌

        -<a href="/">를 이용해 상단의 HAEUN'S SPACE를 클릭하면 홈화면으로 돌아올 수 있도록 설정

        -index.css, main.css, write.css를 반복적으로 수정하며 세련된 웹사이트를 만듬

        -write.html과 write.css에서 ul과 li를 이용하여 보기좋게 방명록 박스를 꾸밈

        -hover,grid속성 등을 활용

        -첫(홈)화면은 index.html, 방명록 작성 페이지는 write.html, 오류발생시 표시되는 페이지는 error.html에 작성함


 #### (2) JavaScript의 활용

        -방명록을 남기기 위해 이름과 방명록을 작성하고 등록하는 과정에서 JavaScript를 활용

        -write.html에 <script>태그를 활용해 작성함
        
        -등록하기 버튼을 click하면 발생하는 상황을 button.addEventListener로 표현


 #### (3) Express서버를 구동하여 웹페이지 구현

        -app.js에서 const app=express();를 통해 express application 객체를 생성하고 필요한 요소들을 require해줌

        -app.js에서 미들웨어를 등록해줌

        


       

### 3. 비고 및 고찰
----------------------------------------------------------------
  이번학기 웹응용프로그래밍 수업을 들으면서 처음 배우는 것들이 많았습니다. 
 html은 어느정도 뼈대만 알고 있었는데 과제와 실습을 통해 검색도 많이 해보며 더욱 자세히 알 수 있었고, html, css뿐 아니라 javascript와 서버를 구동하는 것 까지 배워서 매우 유익한 시간이었습니다. javascript와 express(node.js)서버는 처음 배우는 거라서 이해하기 쉽지는 않았지만 천천히 수업을 따라 실습해보며 익숙해질 수 있었고, 앞으로 더 많은 연습이 필요하다고 생각합니다.  
 이번 과제를 통해 javascript를 활용하는 거에 대해 많이 부족하다는 점을 알았습니다. 따라서 앞으로는 javascript를 더욱 공부하고 연습할 계획입니다. 