function solution(s) {
    var answer = '';
    
    if(s.length%2==0){
        var a= (s.length/2)-1;
        var b=(s.length/2)+1;
        answer = s.slice(a,b);
    }
    else if(s.length%2!=0){
        var c=(s.length/2)+1;
        answer =s.split("")[c-1.5];
    }
    return answer;
}