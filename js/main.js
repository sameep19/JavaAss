// WEB303 Assignment 2
// Sameep Pradeep
// 0822247
// 2023-09-29

$(document).ready(()=>{
    $("#prospect,#convert,#retain").on("click",(event)=>{
        var xhr=new   XMLHttpRequest()
        if(event.target.id==="prospect"){
            xhr.open("get","prospect.html",true)
        }
        else if(event.target.id==="convert"){
            xhr.open("get","convert.html",true)
        }
        else{
            xhr.open("get","retain.html",true)
        }
        xhr.onload=function(){
            if(this.status===200){
                var element=document.getElementById("content")
                element.innerHTML=xhr.responseText
            }
        }
        $("#content").slideDown()
        xhr.send()
    })
})
