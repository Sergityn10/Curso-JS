

function valTel(telefono){
    //let regExp = /^[\+][0-9]{1,2}?[0-9]{9}$/;
    let regExp = /^[\+][0-9]{1,2}?[\s][0-9]{9}$/;
    if(regExp.test(telefono)){
        return true;
    }else{
        return false;
    }

}

function valComments(comentario){
    let regExp = /^[\+][0-9]{1,2}?[\s][0-9]{9}$/;
    if(regExp.test(telefono)){
        return true;
    }else{
        return false;
    }
}

console.log(valTel("+3 888888888"));
