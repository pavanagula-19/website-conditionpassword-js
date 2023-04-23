let checkcap =(alph)=>{
    i=2;
    while(i<alph.length){
      if(alph.charCodeAt(i)>=65 && alph.charCodeAt(i)<=90){}
      else return false;
      i++;
    }
    return true;
  }
  let check1 = (aplha)=>{
    i=2;
    while(i<alph.length){
      if(alph.charCodeAt(i)>=97 && alph.charCodeAt(i)<=122){console.log(alph[i])}
      else return false;
      i++;
    }
    return true;
  }
  let check2 = (aplha)=>{
    i=2;
    while(i<alph.length){
      if(alph.charCodeAt(i)>=97&& alph.charCodeAt(i)<=122){}
      else return false;
      i++;
    }
    return true;
  }
  let alph = "SharperiuM";
  let flag = false
    if(alph.charCodeAt(0)>=65 && alph.charCodeAt(0)<=90 && alph.charCodeAt(1)>=65 && alph.charCodeAt(1)<=90){
          flag = check(alph)
       }
    else if(alph.charCodeAt(0)>=65 && alph.charCodeAt(0)<=90 && alph.charCodeAt(1)>=97 && alph.charCodeAt(1)<=122){
      flag = check1(alph)
   }
   else {
      flag = check2(alph)
   }
  console.log(flag)