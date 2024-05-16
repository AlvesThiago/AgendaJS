const formContato = document.getElementById('form-number');
const tabelaContatos = document.querySelector('tbody');
const nomes = [];
const phones = [];

formContato.addEventListener('submit', function(event){
    event.preventDefault();
    adiconar();
})

function adiconar(){
    const inputNome = document.getElementById('name').value.trim();
    const inputTelefone = document.getElementById('phone').value.trim();

    if(phones.includes(inputTelefone)){
        alert(`Contato já está salvo!`)
    } else {
        nomes.push(inputNome);
        phones.push(inputTelefone);

        let newRow = tabelaContatos.insertRow();
        let cell1 = newRow.insertCell(0);
        let cell2 = newRow.insertCell(1);
        let cell3 = newRow.insertCell(2);
        let cell4 = newRow.insertCell(3);

        cell1.textContent = inputNome;
        cell2.textContent = inputTelefone;
        cell3.innerHTML = `<a href="https://wa.me/${inputTelefone}" target="_blank" class="btn-whats">WhatsApp</a>`;
        cell4.innerHTML = '<button class="btn-delete">Deletar</button>';
        

        let btnDelete = newRow.querySelector('.btn-delete');
        btnDelete.addEventListener('click', function(e) {

            let telefoneExcluido = cell2.textContent.trim();
            
            let index = phones.indexOf(telefoneExcluido);
            if (index !== -1) {
                phones.splice(index, 1);
            }

            let row = e.target.closest('tr');
            tabelaContatos.removeChild(row);
        });
    }

    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
}

