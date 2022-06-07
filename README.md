# 쇼핑몰 모바일사이트

### demo 보기 : https://yuuuk94.github.io/shoppingmal-mibile/

##### 기획 및 분석 보기 : https://docs.google.com/presentation/d/1qKkIC2dFphhFpk-0cHlPljO89DGUhBUWRlv_4Zr2lAE/edit?usp=sharing

## 개요

* 트렌디하고 힙한 2030 남성 의류 쇼핑몰인 NSAD*의 모바일 사이트를 분석, 제작, 배포한 프로젝트입니다.

## 기능

* 다양한 애니메이션 효과

* 드래그 배너

* 상품 리스트 보기 및 상세보기 API 연동

* 장바구니 담기

* 로그인 화면


## 분석 및 보완 이슈

* 아날로그 노이즈 감성의 감각적인 UI/UX를 구현하기 위해 CSS와 js/jQuery를 섬세하게 다뤄보았습니다. 특히 CSS에서 clip속성을 활용한 애니메이션 효과와 jQuery의 fadein/out메소드를 사용해보며 많은 공부가 됐습니다.

* 메인 배너 및 상품 상세 페이지의 드래그 배너에 draggable메소드를 적용하여 기능을 구현하였습니다.

* 상품 리스트에 들어가는 상품들을 AJAX 비동기 처리했습니다.

* 상품을 장바구니에 담을 때 세션스토리지 활용했습니다. 세션스토리지에 선택된 상품코드와 사이즈, 갯수 등을 객체 타입으로 저장하여 사용합니다. 장바구니는 세션스토리지를 로그인은 쿠키를 사용한다는 규칙과 각각의 장단점을 알게 되었습니다. 

* 현재는 해당 프로젝트를 React와 Typescript로 리팩토링하며 공부 중입니다.

