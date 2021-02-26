function higlight(){
    let word=document.getElementById("word").Value;
    let content=document.getElementById("content").value;
    let regex=new RegExp(word,"g")
    let s=content.replace(regex,"<span style='background-color :yellow'>"+word+"</span>")
    document.getElementById("newcontent").innerHTML=s
    


}