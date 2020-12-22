# Term-Project
### 1. 텀프로젝트(기말고사) 
 - 학번/이름: 2018023045 장하은
> 수업시간에 배운 다양한 기능들을 활용하여 서버를 구현해보고 웹사이트의 레이아웃과 기능을 구현해보았습니다. 
웹사이트에서는 방명록을 남기는 기능을 구현하였고, 이는 JS를 활용하여 구현했습니다. 또한 Express서버를 구동하여 웹 페이지를 구현하였습니다.  
기존에는 서버를 사용하지 않아서 gitpage를 통해 페이지를 생성할 수 있었지만 이번에는 express 서버를 사용하면서 heroku 클라우드를 통해 서버가 포함된 웹페이지를 생성할 수 있었습니다.

### 2. 세부 적용 내용(HTML, CSS, Js, Express서버)
 - 방명록 남기기, 방명록 페이지 이동하기, 홈화면 이동하기, 서버구현하기, 레이아웃 꾸미기, 등

 #### (1) HTML, CSS 사용한 웹페이지 디자인
        
        -layout.html을 이용해 기초 레이아웃을 잡아줌

        -<a href="/">를 이용해 상단의 HAEUN'S SPACE를 클릭하면 홈화면으로 돌아올 수 있도록 설정

        -index.css, main.css, write.css를 반복적으로 수정하며 세련된 웹사이트를 만듬

        -index.html에서 사용한 중앙의 글자의 css는 index.css의 banner-letter 클래스에서 확인 가능

        -write.html과 write.css에서 ul과 li를 이용하여 보기좋게 방명록 박스를 꾸밈

        -hover,grid속성 등을 활용

        -첫(홈)화면은 index.html, 방명록 작성 페이지는 write.html, 오류발생시 표시되는 페이지는 error.html에 작성함


 #### (2) JavaScript의 활용

        -page.router.js를 통해 같은 레이아웃 안에서 페이지를 변경할 수 있게 함
        
        -방명록을 남기기 위해 이름과 방명록을 작성하고 등록하는 과정에서 JavaScript를 활용

        -write.html에 <script>태그를 활용해 작성함
        
        -등록하기 버튼을 click하면 발생하는 상황을 button.addEventListener로 표현

        -작성한 방명록을 등록하면 아래에 박스형태로 방명록이 나열되도록 구현함


 #### (3) Express서버를 구동하여 웹페이지 구현

        -npm에 업로드된 패키지를 다운로드 받아 사용

        -패키지 간에 의존관계를 관리하기위해 package.json이 존재

        -package.json에 start 스크립트를 작성하고 npm start명령을 통해 실행할 수 있음
        
        -app.js에서 const app=express();를 통해 express application 객체를 생성하고 필요한 요소들을 require해줌

        -app.js에서 미들웨어를 등록해줌

        -heroku를 통해 서버가 포함된 페이지를 실행시킬 수 있었음

        -heroku create 하여 git과 연결시켜준 후, 그 페이지로 push하면 연결됨

        


       

### 3. 비고 및 고찰
----------------------------------------------------------------
  이번학기 웹응용프로그래밍 수업을 들으면서 처음 배우는 것들이 많았습니다. 
 html은 어느정도 뼈대만 알고 있었는데 과제와 실습을 통해 검색도 많이 해보며 더욱 자세히 알 수 있었고, html, css뿐 아니라 javascript와 서버를 구동하는 것 까지 배워서 매우 유익한 시간이었습니다. javascript와 express(node.js)서버는 처음 배우는 거라서 이해하기 쉽지는 않았지만 천천히 수업을 따라 실습해보며 익숙해질 수 있었고, 앞으로 더 많은 연습이 필요하다고 생각합니다.  
 이번 과제를 통해 javascript를 활용하는 거에 대해 많이 부족하다는 점을 알았습니다. 따라서 앞으로는 javascript를 더욱 공부하고 연습할 계획입니다. 