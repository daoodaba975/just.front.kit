function init(){
    const out=document.getElementById("output");
    const chars=['\\','|','/','—'];
    let index=0;
    let count=0;
    let n=0;
    function animate(){
       n=parseInt((count/10)%10);
       out.innerHTML="["+("#").repeat(n)+("-").repeat(10-n)+"]"+chars[index]+"<br>"+parseInt(count)+"%";
       index++;
       count++;
       count%=100;
       index%=4;
       setTimeout(animate,100);
    }
    setTimeout(animate,100);
}