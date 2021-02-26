function validate(){
    let(name=document.getElementById("name")
    let name=document.getElementById("mobile")

    
if(name.value==""){
    alert("name field can't be empty")
    name.focus()
    return false

}
if(isNaN(mobile.value))||mobile.value.length!=10){
  alert("mobile number is invalid")
  mobile.focus()
  return false

)