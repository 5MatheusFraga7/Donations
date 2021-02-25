function save_new_donate() {

    const responsible = document.getElementById('new_reponsible').value;
    const sector      = document.getElementById('new_action').value;
    const values      = document.getElementById('new_values').value;

    if(responsible != "" && responsible != undefined) {
        
        window.location.href = 'save_new_donate'.split('?').shift() + '?responsible=' + responsible + '&sector='+ sector+'&values='+ values;
    }
    else {
        alert('INSIRA ALGUM VALOR');
        window.location.href = '/';
    } 

}