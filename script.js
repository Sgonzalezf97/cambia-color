function iniciar(){
    var colort = document.getElementsByTagName("input")[0].value;
    if(colort == "BLUE")
        document.getElementById('cambiac').style.color = '  #1e10a6 ';
    else {
        if(colort == "GREEN")
            document.getElementById('cambiac').style.color = '  #25f109  ';
        else {
            if(colort == "RED")
                document.getElementById('cambiac').style.color = '  #a61019  ';
            else {
        document.getElementById('cambiac').style.color =  ' #010101 ';
            }
        }
    }
}
