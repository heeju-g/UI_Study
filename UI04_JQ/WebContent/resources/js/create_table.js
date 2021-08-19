//엘리먼트들에 대한 데이터를 테이블 형식으로 화면에 표현하기

function makeTable(elem){
	$table = $("<table border=1>");
	
	//컬럼 정의하기
	for(var i =0; i<1;i++){
		$tr=$("<tr>");
		//일단 rowlist에서 첫번째 ROW의 첫번째 자식(employee_id)부터 마지막(hire_date)까지 반복
		for(var j=0; j<elem.eq(0).children().length;j++){
		//tagName이니까 EMLOYEE_ID, LASTNAME, EMAIL 등등이 될 것. append : 자식요소의 젤 뒤에 추가
			$td=$("<td>").append(elem.eq(0).children().eq(j).prop("tagName"));
			//tagName사용해서 td 만들기. 결과적으로 컬럼들이 만들어 질 것
			$tr.append($td);
		}
		$table.append($tr);
	}
	
	//데이터 넣기
	//여기선 rowlist의 처음row부터 마지막까지 반복할 것
	for(var i =0; i<elem.length;i++){
		$tr=$("<tr>");
		for(var j=0; j<elem.eq(i).children().length;j++){
		//row의 자식요소(employee_id, lastname, email등) text값을 가져오기. 0번붙터 마지막 hiredate까지
			$td=$("<td>").append(elem.eq(i).children().eq(j).text());
			$tr.append($td);
		}
		//이전에 만든 컬럼 밑에 각각의 row가 가진 데이터들로 테이들이 만들어 질 것
		$table.append($tr);
	}
	
	//만들어진 테이블 반환
	return $table;
}



