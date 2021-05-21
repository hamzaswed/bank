var frontSide = document.getElementsByClassName("front-face")[0],
    backSide = document.getElementsByClassName("back-face")[0],
    card = document.getElementsByClassName("card")[0],
    turnBut = document.getElementById("turnBut");

//turn the card
function turnCard(){
    if(backSide.style.opacity === "1"){
        card.style.transform = "rotatey(0deg)";
        backSide.classList.add("transitionClass");
        backSide.style.opacity = "0";
    }else{
        card.style.transform = "rotatey(180deg)";
        backSide.classList.add("transitionClass");
        backSide.style.opacity = "1";
    }
}
//turn the card on click the turn button
turnBut.onclick = turnCard;

//change the card of theme
var themeDiv = document.getElementsByClassName("theme"),
    themeArray = Array.from(themeDiv),
    icon = document.createElement("i");
    icon.classList.add("fa");
    icon.innerHTML = "&#xf058";
//if body hase no class of theme
function theme(){
    if(document.body.classList.length == 0){
        document.body.classList.add("red");
        themeDiv[0].appendChild(icon);
    }
}
theme();
//change theme onclick the theme buttons 
for(i=0; i<themeArray.length; i++){
    themeArray[i].onclick = function(){
        backSide.classList.remove("transitionClass");
        document.body.classList.remove("red" ,"yellow", "gray", "green", "blue");
        document.body.classList.add(this.getAttribute("data-color"));
        this.appendChild(icon);
    }
}

//set user informatin inputs
var put = document.getElementsByTagName("input"),
    frontNumber = document.getElementById("frontNumber"),
    frontName = document.getElementById("name"),
    frontDate = document.getElementById("date"),
    cvcNumber = document.getElementById("cvc"),
    sorryDiv = document.createElement("div");
    
    //function for user NAME
    put[0].onfocus = function test(){
        setInterval(() => {
            if(put[0].value.length == "0"){
                frontName.innerHTML = "---- ----"
            }else if(put[0].value.length > "14"){
                //if name of character more than 13 character change border color of input
                put[0].style.borderColor = "red";
                
            }else{
                frontName.innerHTML = put[0].value;
                put[0].style.border = "";
            }
        },)    
    }
    
    //function for credit card number
    put[1].onclick = function(){
        setInterval(() => {
            if(put[1].value.length == "0"){
                frontNumber.innerHTML = "---- ---- ---- ----";
            }else if(put[1].value.length > "16"){
                put[1].style.borderColor = "red";
            }else{
                frontNumber.innerHTML = put[1].value.match(/.{1,4}/g).join(" ");
                put[1].style.borderColor = "";
        }
    },);
}

//funciton for expiry year and month
put[2].onclick = function(){
    setInterval(() => {
        if(put[2].value.length == "0"){
            frontDate.innerHTML =  "-- / --";
        }else if(put[2].value.length > "4"){
            put[2].style.borderColor = "red";
        }else{
            frontDate.innerHTML = put[2].value.match(/.{1,2}/g).join(" / ");
            put[2].style.borderColor = "";
        }
    },);
}

//function for credit card cvc
put[3].onclick = function(){
    turnCard();
    setInterval(() => {
        if(put[3].value.length == "0"){
            cvcNumber.innerHTML = "---";
        }else if(put[3].value.length > 3){
            put[3].style.borderColor = "red";
        }else{
            cvcNumber.innerHTML = put[3].value;
            put[3].style.borderColor = "";
        }
    },);
}

//start functions for person info section
var nextBut = document.getElementById("nextBut"),
    userInfo = document.getElementsByClassName("person-info")[0],
    userControl = document.getElementsByClassName("person-control")[0],
    turnBut= document.getElementsByClassName("add")[0]; 
//next Buttton function
//next button onclick set person-info of opacity "0" and person control of opacity 1
nextBut.onclick = function(){
    //turn 
    if(backSide.style.opacity === "1"){
        card.style.transform = "rotatey(0deg)";
        backSide.classList.add("transitionClass");
        backSide.style.opacity = "0";
    }
    userControl.style.left = "50%";
    userInfo.style.left= "-150%";
}

//return to persotn info section if user want edit anytheing
turnBut.onclick = function(){
    userControl.style.left = "150%";
    userInfo.style.left= "50%";
}

//set user info  in user control panel
var userName = document.getElementById("userName");
var cardNo = document.getElementById("cardNo");
var expiry = document.getElementById("expiry");
var CvC0 = document.getElementById("CvC");

nextBut.addEventListener("click",function () {
    userName.innerHTML = frontName.innerHTML;
    cardNo.innerHTML = frontNumber.innerHTML;
    expiry.innerHTML = frontDate.innerHTML;
    CvC.innerHTML = cvcNumber.innerHTML;
})
