var BAG_OF_LETTERS = [
		new Letter('_', 2, 0),
		new Letter('_', 2, 0),
		new Letter('A', 9, 1),
		new Letter('A', 9, 1),
		new Letter('A', 9, 1),
		new Letter('A', 9, 1),
		new Letter('A', 9, 1),
		new Letter('A', 9, 1),
		new Letter('A', 9, 1),
		new Letter('A', 9, 1),
		new Letter('A', 9, 1),
		new Letter('B', 2, 3),
		new Letter('B', 2, 3),
		new Letter('C', 2, 3),
		new Letter('C', 2, 3),
		new Letter('D', 4, 2),
		new Letter('D', 4, 2),
		new Letter('D', 4, 2),
		new Letter('D', 4, 2),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('E', 12, 1),
		new Letter('F', 2, 4),
		new Letter('F', 2, 4),
		new Letter('G', 3, 2),
		new Letter('G', 3, 2),
		new Letter('G', 3, 2),
		new Letter('H', 2, 4),
		new Letter('H', 2, 4),
		new Letter('I', 9, 1),
		new Letter('I', 9, 1),
		new Letter('I', 9, 1),
		new Letter('I', 9, 1),
		new Letter('I', 9, 1),
		new Letter('I', 9, 1),
		new Letter('I', 9, 1),
		new Letter('I', 9, 1),
		new Letter('I', 9, 1),
		new Letter('J', 1, 8),
		new Letter('K', 1, 5),
		new Letter('L', 4, 1),
		new Letter('L', 4, 1),
		new Letter('L', 4, 1),
		new Letter('L', 4, 1),
		new Letter('M', 2, 3),
		new Letter('M', 2, 3),
		new Letter('N', 6, 1),
		new Letter('N', 6, 1),
		new Letter('N', 6, 1),
		new Letter('N', 6, 1),
		new Letter('N', 6, 1),
		new Letter('N', 6, 1),
		new Letter('O', 8, 1),
		new Letter('O', 8, 1),
		new Letter('O', 8, 1),
		new Letter('O', 8, 1),
		new Letter('O', 8, 1),
		new Letter('O', 8, 1),
		new Letter('O', 8, 1),
		new Letter('O', 8, 1),
		new Letter('P', 2, 3),
		new Letter('P', 2, 3),
		new Letter('Q', 1, 10),
		new Letter('R', 6, 1),
		new Letter('R', 6, 1),
		new Letter('R', 6, 1),
		new Letter('R', 6, 1),
		new Letter('R', 6, 1),
		new Letter('R', 6, 1),
		new Letter('S', 4, 1),
		new Letter('S', 4, 1),
		new Letter('S', 4, 1),
		new Letter('S', 4, 1),
		new Letter('T', 6, 1),
		new Letter('T', 6, 1),
		new Letter('T', 6, 1),
		new Letter('T', 6, 1),
		new Letter('T', 6, 1),
		new Letter('T', 6, 1),
		new Letter('U', 4, 1),
		new Letter('U', 4, 1),
		new Letter('U', 4, 1),
		new Letter('U', 4, 1),
		new Letter('V', 2, 4),
		new Letter('V', 2, 4),
		new Letter('W', 2, 4),
		new Letter('W', 2, 4),
		new Letter('X', 1, 8),
		new Letter('Y', 2, 4),
		new Letter('Y', 2, 4),
		new Letter('Z', 1, 10),
];
/* ��Ϸ���� 
 * ����һ�����ʷ�����Ϸ����Ϸ��Ŀ����ͨ������ĸ����ȡ��һ��Ӣ�ĵ�����������ķ�����
 * ÿ����ĸ����һ��������ÿ����ĸֻ������ʹ��һ�Ρ�
 * ������100����ĸ��һ����ʹ����һ����ĸ��������������
 * �����е���ĸ���Ӵ�����ȡ������������ǿյ�ʱ����Ϸ�����ˡ�
 * 
 * �����û��ƴ���κε��ʣ������ͷ�����֣����"retire the hand"������������ѡȡ����ĸ��
 * ���㽫���ܵõ���Щ��ĸ�ķ�����       
 * 
 * ����
 * д���߼��ԡ�������Ϸ���������е���ĸ�Ӱ���ȡ��ʹ�ã��������Ѿ��ͷ�������֡� 
 * ��дJavascript�Ի�ȡ���е�����߷֣�������Ҫ���ֵ�"wordBank.js"���ҵ���
 *     
 * ��������
 * ��дJavaScript������"_"�»���Ϊͨ��������������κ�һ��ȱʧ����ĸ����"_"���Ʒ֡�
 * ���磬���������ĸ��H����E����L����S����S����_����_���ҿ���ʹ�á�H����E����L���� _����_���� 
 * ���������ó�����������ԣ���ӭʹ���κ����ԣ�    
 * 
 * ��������
 * �Զ��ҳ����Ͽ�Ƭ����ɵ�һ�����ʣ���Ϸ��ʾ��
 * 
 * 
 * ��������
 * ��HTMLҳ����ÿ�
 * �����������е�JavaScript�����ʽ��ʹ���и��õ����ܣ����õ�ѭ����ֻ����Ҫʱʹ�õݹ飩
 * */

var YOUR_HAND = new Array();
var SCORE = 0;

//��ʼ��Ϸ�����������֣�
function startGame() {

	addNumbersFromBag();
	displayHand();
	isGameOver();
};

/* Author:@Hui
 * ��Ϸ�������������ٰ��еĿ�ƬΪ0 ---->ÿ��ȡ��Ƭ�ĺ��� addNumbersFromBag()
 * 			  �ڶ������Ѿ��ͷ�������֡�      ---->
 * ������Ϸ*/
function isGameOver(){
	if(BAG_OF_LETTERS.length==0){
		console.log("The bag is empty!The bag is empty!The bag is empty!");
		if(YOUR_HAND.length==0){
			alert("Your score is " + $( "#score-number").html() +", Game is over!");
		}else{
			console.log("The remain letters of hand is:"+YOUR_HAND.length);
		}
	}else{
		console.log("The remain letters of bag is:"+BAG_OF_LETTERS.length);
	}
}

//�Ӱ���ȡ����Ƭ�����õ��Ļ��ӵ��Ŀ�Ƭ
function addNumbersFromBag(){
	console.log("your addNumber  hand has:" + YOUR_HAND.length);//��ϵ��ʺ�ʣ�������
	//�жϰ������ĸ��Ƭ���������������7�ŵĿ�Ƭ
	if(BAG_OF_LETTERS.length>=(7-YOUR_HAND.length)){
		//������Ļ�������
		for(i=YOUR_HAND.length; i < 7; i++){
			YOUR_HAND[i] = getAvailableLetter();
		}
	}else{
		//�����Ļ����м��Ų�����
		for(i=YOUR_HAND.length; i < (YOUR_HAND.length+BAG_OF_LETTERS.length); i++){
			YOUR_HAND[i] = getAvailableLetter();
		}
		//δ����Ĳ������֮ǰ����ʽ
		for(ii=(YOUR_HAND.length + BAG_OF_LETTERS.length); ii < 7; ii++){
			$("#letter-" + (ii+1)).removeClass();
			$("#points-" + (ii+1)).removeClass();
		}
	}
	//�������е���ĸ��Ƭ

}

//��̨��ӡ���Ͽ�Ƭ�飬Ϊ��Ƭ������ʽ��ÿ������굥�ʻ��ͷŵ����е��ƣ�������п�Ƭ˳��ĵ���
function displayHand(){
	console.log("your display hand has:" + YOUR_HAND.length);
	for (i = 0; i < YOUR_HAND.length; i++) {

		console.log("#letter-" + (i+1) +" set to " + YOUR_HAND[i].letter);
		$( "#letter-" + (i+1)).addClass("letter-" + YOUR_HAND[i].letter);
		$( "#points-" + (i+1)).addClass("points-" + YOUR_HAND[i].pointsWhenLettersUsed);
		
		
		
		//html() �������ػ����ñ�ѡԪ�ص����� (inner HTML)��  �ı���ĸ��Ƭ������
		$( "#letter-" + (i+1)).html(YOUR_HAND[i].letter);
		
		$( "#points-" + (i+1)).html(YOUR_HAND[i].pointsWhenLettersUsed);
	}
	
}


//�Ӱ��������ȡ��ĸ��Ƭ
//Math.random() ����ֵ0.0 ~ 1.0 ֮���һ��α����� 
//Math.floor(x)ȡ�½� С�ڵ���x������x��ӽ���������
//splice() ������/�����������/ɾ����Ŀ��Ȼ�󷵻ر�ɾ������Ŀ��
function getAvailableLetter(){
	/*bagIsEmpty();*/
	var randomIndex = Math.floor(Math.random() * BAG_OF_LETTERS.length);
	var randomLetter = BAG_OF_LETTERS.splice(randomIndex, 1);//ɾ��һ��Ԫ��
	/*console.log("delete letter is:"+randomLetter[0]);*/
	return randomLetter[0];//����ɾ����Ԫ��
}

/* Author:@Hui
 * Run your code to find a word:�Զ�����ƥ��ĵ���
 * ����ϣ����ʳ��Ȳ�ȷ��������Ϊ1����7,�����У�������ĸ��ǰ��˳��Ӱ�쵥�ʵ���Ч�ԣ�
 * 
 * */
/*-----------------����㷨------------------------------------------*/

/*���������Ƴ�ָ���±��Ԫ�أ��������Ƴ����������*/
function removeByIndex(list,index){
    var list2 = new Array();
    for(var i=0;i<list.length;i++){
        if(index!=i){
            list2.push(list[i]);
        }
    }
    return list2;
}

/*��������ݹ麯��
 * n��mΪ��n����ѡȡm����n>m��
 * listΪ��ѡȡ�ļ�������
 * sΪ��ѡȡ��m��Ԫ�ص�����
 */
function combine(n,m,list,s){
    if(m==0){
        //document.write(s+"<br>");
    }
    else if(m==n){
        //�����¼ѡȡ��Ԫ��
        s[m-1] = list[0]; 
        if(n!=1){
            for(var i=0;i<m;i++){
                s[m-i-1] = list[i]
            }
        }
        //document.write(s+"<br>")    
    }
    else{
        var list2 = new Array();//���ڴ��ѡȡԪ�غ�ʣ���ѡ��
        list2 = removeByIndex(list,0);
        combine(n-1,m,list2,s);//��ȥ��С��ź��n-1��Ԫ����ѡȡm��
        s[m-1] = list[0];//ѡȡ��С���Ԫ��
        combine(n-1,m-1,list2,s); //��ȥ��С��ź��n-1��Ԫ����ѡȡm-1��

    }
}


/*-----------------����㷨------------------------------------------*/

/*-----------------�����㷨------------------------------------------*/
//����˳��
function swap(arr,i,j){
    if(i!=j) {  
        var temp=arr[i];  
        arr[i]=arr[j];  
        arr[j]=temp;  
    }
}
var count=0; 

function show(arr) {  
	console.log("count: "+ ++count +",  arr: "+ arr.join("") );  
	if(isThisAWord(arr.join(""))){
		 if(haveLettersForWord(arr.join(""))){
			 successfullyAddedWord(arr.join(""));
			 alert("Auto find a word is : "+ arr.join(""));
			 return 1;
		 }
	 }
} 
//
function perm(arr) {
	var findCount=0;
    (function fn(n) { //Ϊ��n��λ��ѡ��Ԫ��  
        for(var i=n;i<arr.length;i++) {  
            swap(arr,i,n);  
            if(n+1<arr.length-1){
            	//�ж�������ʣ��Ĵ�ȫ���е�Ԫ���Ƿ����1��  
                fn(n+1); //�ӵ�n+1���±����ȫ����  
            }else {
            	//show(arr); //��ʾһ����  
            	console.log("count: "+ ++count +",  arr: "+ arr.join("") );  
            	if(isThisAWord(arr.join(""))){
            		 if(haveLettersForWord(arr.join(""))){
            			 successfullyAddedWord(arr.join(""));
            			 findCount++;
            			 alert("Auto find a word is : "+ arr.join(""));
            			 return false;
            		 }
            	}
		       
            }  
            swap(arr,i,n);  
        }  
    })(0);
    return findCount;
}

/*-----------------�����㷨------------------------------------------*/



//�����Զ�Ѱ�ҿ�����ɵ�һ�����ʣ���Ҫ�Լ�д��
function findWordToUse(){
 //TODO Your job starts here.
	//alert("Your code needs to go here");
	//�����п�Ƭ�ϵ���ĸ����һ���µ����飬�����������
	var runFindWordAsArray = new Array();
	var s = new Array();
	var isFind=0;

	for(var i=0; i<YOUR_HAND.length; i++){
		//����ͨ���ʱ������ֵ
		if((YOUR_HAND[i].letter)!="_"){
			runFindWordAsArray [i] = YOUR_HAND[i].letter;		
		}
	}
	
	var len=runFindWordAsArray.length;
	
	for(var ii=len-1;ii>=2;ii--){
		var s = new Array();
		s=getFlagArrs(len, ii);
        while(s.length) {
            var flagArr = s.shift();
            var combArr = [];
            for(var i = 0; i < len; i++) {
                flagArr[i] && combArr.push(runFindWordAsArray[i]);
            }
            /*resultArrs.push(combArr);*/
            console.log(combArr);
        }
		isFind=isFind+perm(combArr);
		console.log("---------------------------------------isFind:"+isFind);
	}
	
	if(isFind==0){
		alert("Can't find a word,please retire the hand!");
	}
	
	
}


 
/**
 * ��ô�m��ȡn���������
 */
function getFlagArrs(m, n) {
    if(!n || n < 1) {
        return [];
    }
 
    var resultArrs = [],
        flagArr = [],
        isEnd = false,
        i, j, leftCnt;
 
    for (i = 0; i < m; i++) {
        flagArr[i] = i < n ? 1 : 0;
    }
 
    resultArrs.push(flagArr.concat());
 
    while (!isEnd) {
        leftCnt = 0;
        for (i = 0; i < m - 1; i++) {
            if (flagArr[i] == 1 && flagArr[i+1] == 0) {
                for(j = 0; j < i; j++) {
                    flagArr[j] = j < leftCnt ? 1 : 0;
                }
                flagArr[i] = 0;
                flagArr[i+1] = 1;
                var aTmp = flagArr.concat();
                resultArrs.push(aTmp);
                if(aTmp.slice(-n).join("").indexOf('0') == -1) {
                    isEnd = true;
                }
                break;
            }
            flagArr[i] == 1 && leftCnt++;
        }
    }
    return resultArrs;
}


//�ֶ��ҵ�һ�����ʣ��ж��Ƿ���һ����Ч�ص���
function humanFindWordToUse(){
	
	 var humanFoundWord = $( "#human-word-input").val();
	 console.log("Checking human workd of:" + humanFoundWord);
	 if(isThisAWord(humanFoundWord)){
		 if(haveLettersForWord(humanFoundWord)){
			 successfullyAddedWord(humanFoundWord);
		 }else{
			 alert(humanFoundWord + " - Do not have the letters for this word");
		 }
	 }else{
		 alert(humanFoundWord + " is not a valid word.");
	 }
		
}

//�ɹ���ӵ��ʣ������ʽ���õ��ù��Ŀ�Ƭ������µ���ĸ�����֣��������գ�
function successfullyAddedWord(foundWord){
	$( "#word-history-list").append("<li>" + foundWord + "</li>");
	clearClasses();
	takeOutUsedLetters();
	addNumbersFromBag();
	displayHand();
	$( "#human-word-input").val('');
	
}

//��ӷ���
function addToScore(letterToAddToScore){
	SCORE = SCORE + letterToAddToScore.pointsWhenLettersUsed;
	console.log(letterToAddToScore.pointsWhenLettersUsed + "<-Points added for " + letterToAddToScore.letter);
	$( "#score-number").html(SCORE);
}

//ȡ���ù�����ĸ
function takeOutUsedLetters(){
	
	for(ii=0; ii < YOUR_HAND.length; ii++){
		if(YOUR_HAND[ii].used){
			addToScore(YOUR_HAND[ii]);
			//ɾ���ù�����ĸ��Ƭ
			YOUR_HAND.splice(ii, 1);
			ii = ii-1;
		}else{
			console.log(YOUR_HAND[ii].letter + "<- Not Used");
		}
	}
	
}

/* ��������ͨ���_ƥ��
 * aProposedWord�Ƿ������ɵ��ʣ���Ҫ��д������Ҫ����ͨ���_
 * wordAsArray�������ĵ��ʣ�
 * 						����ɵ��ʵ���ĸ�Ƿ������ϵĿ�Ƭ��
 *						���Ƿ��ܹ�����Ч�ص���
 * ���ϵĿ�Ƭ����ͨ��������
 * 
*/
function haveLettersForWord(aProposedWord){
	//You could code the _ logic could go in this function
	//toUpperCase() �������ڰ��ַ���ת��Ϊ��д�����ֵĵ��ʶ��Ǵ�д��
	//split() �������ڰ�һ���ַ����ָ���ַ������顣
	var wordAsArray = aProposedWord.toUpperCase().split("");
	
	for (i = 0; i < wordAsArray.length; i++) {
		var foundLetter = false;
		console.log(wordAsArray[i] + "<-For match");
		//�ж�aProposedWord�е���ĸ�ǲ��ǵ�ǰ���ϵĿ�Ƭ�е���ĸ
		//ͨ���_���߼���Ҫ��д����Ҫȡ����ǰ���ϵ�ͨ�����Ƭ��
		for(ii=0; ii<YOUR_HAND.length; ii++){
			console.log("              " + YOUR_HAND[ii].letter + "<-Checking");
			if(YOUR_HAND[ii].letter == wordAsArray [i]){
				if(!YOUR_HAND[ii].used && !foundLetter){
					console.log("     " + YOUR_HAND[ii].letter + "<-Found");
					YOUR_HAND[ii].used = true;
					foundLetter = true;
					
				}
			}
			
		}
		//��һ��ѭ������Ѱ��ƥ�����ĸ���ڶ���ѭ��Ϊ��Ѱ�Ҳ����ڵ���ĸ��ͨ���ƥ��
		for(ii=0; ii<YOUR_HAND.length; ii++){
			console.log("              " + YOUR_HAND[ii].letter + "<-Checking");
			if(YOUR_HAND[ii].letter == "_"){
				if(!YOUR_HAND[ii].used && !foundLetter){
					console.log("     " + YOUR_HAND[ii].letter + "<-Found");
					YOUR_HAND[ii].used = true;
					foundLetter = true;
					
				}
			}
			
		}
		
		
		
		if(!foundLetter){
			resetHand();
			return false;
		}
	}
	
	return true;
}

//���п�Ƭ����Ϊδ��ʹ�õ�״̬
function resetHand(){
	
	for(ii=0; ii<YOUR_HAND.length; ii++){
		YOUR_HAND[i].used = false;
	}
}
//ƥ����ĸ����ǲ���һ������
function isThisAWord(aProposedWord){
	  if (Word_List.isInList(aProposedWord)) {
	      return true;
	  }
	  return false;
}

//�Դʿ�ĵ��ʽ���Ԥ�������ʿ��е����е��ʰ�����A->Z��˳���������
function processWordBank(){
	
	
	
}


//�ͷ����еĿ�Ƭ
function retireHand(){
	//Loose all the points in your hand
	clearClasses();
	YOUR_HAND = new Array();
	addNumbersFromBag();
	displayHand();
	isGameOver();

}

//�����ʽ����ĸ����ֵ��
function clearClasses(){
	for(ii=0; ii < YOUR_HAND.length; ii++){
		$("#letter-" + (ii+1)).removeClass("letter-" + YOUR_HAND[ii].letter);
		$("#points-" + (ii+1)).removeClass("points-" + YOUR_HAND[ii].pointsWhenLettersUsed);
	}
}

$(document).ready(function() {
	startGame();
	//Run your code to find a word
	$("#find-word-button").click(function() {
		findWordToUse();
	});
	
	//human find a word
	$("#human-find-word-button").click(function() {
		humanFindWordToUse();
	});
	
	//Retire the hand
	$("#retire-hand-button").click(function() {
		retireHand();
	});
	
	$('#human-word-input').keypress(function(event) {
		if (event.which == 13) {
			humanFindWordToUse();
		}
	});
});