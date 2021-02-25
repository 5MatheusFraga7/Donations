function donate_for_user() {

    var input_donate_for_user =  parseFloat(document.getElementById('input_donate_for_user').value);
    var obtained_value        =  parseFloat(document.getElementById('obtained_value').value);
    
    const q = (input_donate_for_user + obtained_value);
    const u = document.getElementById('input_donate_user').value;
    
    if(q > 0 && 1 != "" && q != undefined) {
        window.location.href = 'donate_for_user'.split('?').shift() + '?q=' + q + '&u='+ u;
    }
    else {
        alert('INSIRA ALGUM VALOR');
        window.location.href = '/';
    } 

}