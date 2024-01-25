function solution(s){
    var answer = true;
    var countP=0;
    var countY=0;
    s=s.toLowerCase();
    
    for(var i=0; i<s.length; i++){
        if(s[i]==='p')
            countP++;
        else if(s[i]==='y')
            countY++;
    }
    
    return countP===countY ? true:false;
}