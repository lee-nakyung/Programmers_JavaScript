function solution(x) {
    
    //x의 자릿수를 더해서(b) x가 나누어 져야함  x%a==0
    //자릿수 구하기 위해선 문자열로 바꿔야함
    
    var a= x.toString();
    var b=0;
    
    for(let i=0; i<a.length; i++){
        b+=parseInt(a[i]);
    }
    
    return x%b===0 ? true : false;
    
}