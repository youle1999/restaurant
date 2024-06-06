/* 入力チェック用 javascript */


function check(){
    
    var name = nameCheck();
    var mail = eMailCheck();
    var textArea = textCheck();
    if (name == true
        && mail == true
        && textArea == ture){
        return true;
    }
    return false;
}

function nameCheck(){
    var name = document.getElementById("name").value; 
    if (name.length == 0){
        document.getElementById("noName").innerHTML = "名前が入力されていません。";
        return false;
    }
    return true;
}

function eMailCheck(){
    var eMail01 = document.getElementById("eMail01").value;
    var eMail02 = document.getElementById("eMail02").value;
    if (eMail01.length == 0){
        document.getElementById("noMail01").innerHTML = "メールアドレスが入力されていません。";
    } else if (eMail01 != eMail02){
        document.getElementById("noMail02").innerHTML = "メールアドレスが一致ししません。";
    }
    else {
        return true;
    }
    return false;
}

function textCheck(){
    var textArea = document.getElementById("textArea").value;
    if (textArea.length==0){
        document.getElementById("noTextArea").innerHTML = "内容が入力されていません。";
        return false;
    }
    return true;
}
