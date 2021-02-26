let arr=[]
function add(){
    let name=document.getElementById('t1').value
    console.log(name)
    arr.push(name)
    console.log(arr)
    let li=document.createElement('li')
    li.innerHTML=name
    document.getElementById('ul1').appendChild(li)
}
function view(){
    for(a of arr){
        s+=`<li>${a}</li>`
    }
    
}