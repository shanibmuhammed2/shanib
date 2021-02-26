function check() {
    let regex = /^\w+\w*@(gmail.com|yahoo.in)$/g
    let data = document.getElementById(`data`).value
    //alert(data.match(regex))
    if (regex.test(data)) { }
    alert(data.match(regex)){
        alert("valid mobile number")
    }else {
        alert("invalid mobile number")
    }

    var input = "my phone number is9876541235 and office number" +
        "is(0484)-2245561" +
        "and fax no is 0484-2245902"
