function solution(n) {
    var answer = 0;
    
   
    
    //문자열을 배열로 바꾸고... 배열을 정렬한뒤에 문자열로 다시 바꾸기??
    
    answer = parseInt(n.toString().split('').sort((a,b)=>b-a).join(''))
    return answer;
}