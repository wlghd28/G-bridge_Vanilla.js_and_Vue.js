/*

19.11.08(금))

===============================복습

객체(Object)
    -네이티브 객체(ECMAScript) 
    :Object, Strig, Nuba..... => API
    
    -호스트 객체(실행환경)
    :window, navigator, history => 실행하는 곳에서만 존재
    실행환경 = node, browser

    -사용자정의 객체
    :사용자(개발자)가 만들어 사용하는 모든 객체

객체 생성 방법
    -리터럴
    :var card = {suit: "하트", rank : "A"};
    
    -생성자
    :function Card(suit, rank) {
        this.suit = suit;
        this.rank = rank;
    }

    -내장객체
    : Object, String, Array
    
    -함수객체
    : function sugar(x) {
        return x*x;
    }

    -클래스(ES6)
====================================복습끝
*/
// 80. class(ECMAScript 2015, es6)

// class와 비슷하게 객체를 먼저 표현해보기
// function Health(name) {
//     this.name = name;
// }

// Health.prototype.showHealth = function() {
//     console.log(this.name+", nice to mee u");    
// }

// const h = new Health("Lee");
// h.showHealth();

//class
// class Health {
//     constructor(name, lastTime) {
//         this.name = name;
//         this.lastTime = lastTime;
//     }
    
//     showHealth() {
//         console.log("hello "+this.name+" sir");
        
//     }
// }

// const myHealth = new Health("gil");
// myHealth.showHealth();

// Object.create()
// new 키워드를 사용하지 않고 순수한 오브젝트를 만드는 방법
// var healthObj = {
//     showHealth : function () {
//         console.log("오늘 운동시간은 "+ this.healthTime);
        
//     }
// }

// const myHealth = Object.create(healthObj);
// myHealth.healthTime = "13:00";
// myHealth.name = "사용자";
// myHealth.showHealth();
// console.log(myHealth);

/*
vue 설명
이벤트 리스너와 모델 바인딩을 통해 화면에 출력되게 함
컴포넌트 기반 프레임워크 

View Model 
화면과 데이터 사이를 연결하는 틀

리액트의 장점 : 상위 컴포넌트에서 하위 컴포넌트 방향으로만 전달 => 대용량 화면 처리시 굳
데이터는 부모로 보낼 수 없음. 실제로 흘러가는 데이터의 흐름은 단방향

앵귤러의 장점 : 값의 동기화로 인해 한 쪽 변경시 다른 한 쪽도 자동 변경

<뷰 컴포넌트>

화면을 컴포넌트 단위로 분할, 자료구조의 트리와 유사함
코드의 재사용성이 증가
지역컴포넌트 , 전역 컴포넌트 => 특정 인스턴스에서만 유효한가?

<뷰 컴포넌트 통신>
초창기 앵귤러 : 1개의 화면을 1개의 뷰로 = 한 화면의 데이터를 해당화면 어디든 호출 가능
뷰 : 같은 웹 페이지라도 데이터 공유x = 유효범위(scope)때문에
따라서 다른 컴포넌트의 값을 직접적으로 접근 할 수 없다.

상위 => 하위 : props(=데이터)만 전달
하위 => 상위 : 기본적으로 이벤트만 전달


*/

