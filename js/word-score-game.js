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
/* 游戏规则： 
 * 这是一个单词分数游戏。游戏的目标是通过从字母包中取出一个英文单词来获得最多的分数。
 * 每个字母都有一个分数，每个字母只能轮流使用一次。
 * 包里有100个字母。一旦你使用了一个字母，它将被丢弃。
 * 当所有的字母都从袋子中取出并且你的手是空的时，游戏结束了。
 * 
 * 如果你没有拼出任何单词，可以释放你的手（点击"retire the hand"），丢弃所有选取的字母，
 * 但你将不能得到这些字母的分数。       
 * 
 * 任务：
 * 写入逻辑以“结束游戏”，当所有的字母从包中取出使用，而且你已经释放了你的手。 
 * 编写Javascript以获取所有单词最高分（单词需要在字典"wordBank.js"中找到）
 *     
 * 进阶任务：
 * 编写JavaScript以允许"_"下划线为通配符。它可以是任何一个缺失的字母，但"_"不计分。
 * 例如，如果我有字母“H”“E”“L”“S”“S”“_”“_”我可以使用“H”“E”“L”“ _“”_“。 
 * （如果你更擅长其他编程语言，欢迎使用任何语言）    
 * 
 * 隐藏任务
 * 自动找出手上卡片能组成的一个单词（游戏提示）
 * 
 * 
 * 边线任务：
 * 让HTML页面更好看
 * 清理、改善现有的JavaScript代码格式，使其有更好的性能（无用的循环，只在需要时使用递归）
 * */

var YOUR_HAND = new Array();
var SCORE = 0;

//开始游戏（补卡，呈现）
function startGame() {

	addNumbersFromBag();
	displayHand();
	isGameOver();
};

/* Author:@Hui
 * 游戏结束的条件：①包中的卡片为0 ---->每次取卡片的函数 addNumbersFromBag()
 * 			  ②而且你已经释放了你的手。      ---->
 * 结束游戏*/
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

//从包里取出卡片补上用掉的或扔掉的卡片
function addNumbersFromBag(){
	console.log("your addNumber  hand has:" + YOUR_HAND.length);//组合单词后剩余的牌数
	//判断包里的字母卡片够不够补足手里的7张的卡片
	if(BAG_OF_LETTERS.length>=(7-YOUR_HAND.length)){
		//如果够的话，补齐
		for(i=YOUR_HAND.length; i < 7; i++){
			YOUR_HAND[i] = getAvailableLetter();
		}
	}else{
		//不够的话，有几张补几张
		for(i=YOUR_HAND.length; i < (YOUR_HAND.length+BAG_OF_LETTERS.length); i++){
			YOUR_HAND[i] = getAvailableLetter();
		}
		//未补齐的部分清除之前的样式
		for(ii=(YOUR_HAND.length + BAG_OF_LETTERS.length); ii < 7; ii++){
			$("#letter-" + (ii+1)).removeClass();
			$("#points-" + (ii+1)).removeClass();
		}
	}
	//补充手中的字母卡片

}

//后台打印手上卡片书，为卡片增加样式，每次组合完单词或释放掉手中的牌，都会进行卡片顺序的调整
function displayHand(){
	console.log("your display hand has:" + YOUR_HAND.length);
	for (i = 0; i < YOUR_HAND.length; i++) {

		console.log("#letter-" + (i+1) +" set to " + YOUR_HAND[i].letter);
		$( "#letter-" + (i+1)).addClass("letter-" + YOUR_HAND[i].letter);
		$( "#points-" + (i+1)).addClass("points-" + YOUR_HAND[i].pointsWhenLettersUsed);
		
		
		
		//html() 方法返回或设置被选元素的内容 (inner HTML)。  改变字母卡片的内容
		$( "#letter-" + (i+1)).html(YOUR_HAND[i].letter);
		
		$( "#points-" + (i+1)).html(YOUR_HAND[i].pointsWhenLettersUsed);
	}
	
}


//从包中随机抽取字母卡片
//Math.random() 返回值0.0 ~ 1.0 之间的一个伪随机数 
//Math.floor(x)取下界 小于等于x，且与x最接近的整数。
//splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。
function getAvailableLetter(){
	/*bagIsEmpty();*/
	var randomIndex = Math.floor(Math.random() * BAG_OF_LETTERS.length);
	var randomLetter = BAG_OF_LETTERS.splice(randomIndex, 1);//删除一个元素
	/*console.log("delete letter is:"+randomLetter[0]);*/
	return randomLetter[0];//返回删除的元素
}

/* Author:@Hui
 * Run your code to find a word:自动查找匹配的单词
 * （组合）单词长度不确定，可能为1——7,（排列）单词字母的前后顺序影响单词的有效性，
 * 
 * */
/*-----------------组合算法------------------------------------------*/

/*在数组中移除指定下标的元素，并返回移除后的新数组*/
function removeByIndex(list,index){
    var list2 = new Array();
    for(var i=0;i<list.length;i++){
        if(index!=i){
            list2.push(list[i]);
        }
    }
    return list2;
}

/*组合问求解递归函数
 * n，m为从n个中选取m个（n>m）
 * list为待选取的集合数组
 * s为所选取的m个元素的数组
 */
function combine(n,m,list,s){
    if(m==0){
        //document.write(s+"<br>");
    }
    else if(m==n){
        //倒序记录选取的元素
        s[m-1] = list[0]; 
        if(n!=1){
            for(var i=0;i<m;i++){
                s[m-i-1] = list[i]
            }
        }
        //document.write(s+"<br>")    
    }
    else{
        var list2 = new Array();//用于存放选取元素后剩余的选集
        list2 = removeByIndex(list,0);
        combine(n-1,m,list2,s);//除去最小编号后从n-1个元素中选取m个
        s[m-1] = list[0];//选取最小编号元素
        combine(n-1,m-1,list2,s); //除去最小编号后从n-1个元素中选取m-1个

    }
}


/*-----------------组合算法------------------------------------------*/

/*-----------------排列算法------------------------------------------*/
//交换顺序
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
    (function fn(n) { //为第n个位置选择元素  
        for(var i=n;i<arr.length;i++) {  
            swap(arr,i,n);  
            if(n+1<arr.length-1){
            	//判断数组中剩余的待全排列的元素是否大于1个  
                fn(n+1); //从第n+1个下标进行全排列  
            }else {
            	//show(arr); //显示一组结果  
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

/*-----------------排列算法------------------------------------------*/



//程序自动寻找可以组成的一个单词（需要自己写）
function findWordToUse(){
 //TODO Your job starts here.
	//alert("Your code needs to go here");
	//将手中卡片上的字母存入一个新的数组，方便排列组合
	var runFindWordAsArray = new Array();
	var s = new Array();
	var isFind=0;

	for(var i=0; i<YOUR_HAND.length; i++){
		//遇到通配符时跳过赋值
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
 * 获得从m中取n的所有组合
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


//手动找到一个单词，判断是否是一个有效地单词
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

//成功添加单词（清除样式，拿掉用过的卡片，添加新的字母，呈现，输入框清空）
function successfullyAddedWord(foundWord){
	$( "#word-history-list").append("<li>" + foundWord + "</li>");
	clearClasses();
	takeOutUsedLetters();
	addNumbersFromBag();
	displayHand();
	$( "#human-word-input").val('');
	
}

//添加分数
function addToScore(letterToAddToScore){
	SCORE = SCORE + letterToAddToScore.pointsWhenLettersUsed;
	console.log(letterToAddToScore.pointsWhenLettersUsed + "<-Points added for " + letterToAddToScore.letter);
	$( "#score-number").html(SCORE);
}

//取出用过的字母
function takeOutUsedLetters(){
	
	for(ii=0; ii < YOUR_HAND.length; ii++){
		if(YOUR_HAND[ii].used){
			addToScore(YOUR_HAND[ii]);
			//删掉用过的字母卡片
			YOUR_HAND.splice(ii, 1);
			ii = ii-1;
		}else{
			console.log(YOUR_HAND[ii].letter + "<- Not Used");
		}
	}
	
}

/* 进阶任务：通配符_匹配
 * aProposedWord是否可以组成单词（需要编写），需要考虑通配符_
 * wordAsArray是需检验的单词：
 * 						①组成单词的字母是否都是手上的卡片中
 *						②是否能构成有效地单词
 * 手上的卡片中有通配符的情况
 * 
*/
function haveLettersForWord(aProposedWord){
	//You could code the _ logic could go in this function
	//toUpperCase() 方法用于把字符串转换为大写。呈现的单词都是大写的
	//split() 方法用于把一个字符串分割成字符串数组。
	var wordAsArray = aProposedWord.toUpperCase().split("");
	
	for (i = 0; i < wordAsArray.length; i++) {
		var foundLetter = false;
		console.log(wordAsArray[i] + "<-For match");
		//判断aProposedWord中的字母是不是当前手上的卡片中的字母
		//通配符_的逻辑需要编写（需要取出当前手上的通配符卡片）
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
		//第一遍循环用于寻找匹配的字母，第二遍循环为了寻找不存在的字母与通配符匹配
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

//手中卡片重置为未被使用的状态
function resetHand(){
	
	for(ii=0; ii<YOUR_HAND.length; ii++){
		YOUR_HAND[i].used = false;
	}
}
//匹配字母组合是不是一个单词
function isThisAWord(aProposedWord){
	  if (Word_List.isInList(aProposedWord)) {
	      return true;
	  }
	  return false;
}

//对词库的单词进行预处理，将词库中的所有单词按照由A->Z的顺序进行排序
function processWordBank(){
	
	
	
}


//释放手中的卡片
function retireHand(){
	//Loose all the points in your hand
	clearClasses();
	YOUR_HAND = new Array();
	addNumbersFromBag();
	displayHand();
	isGameOver();

}

//清除样式（字母和数值）
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