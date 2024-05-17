let dataEntry = document.querySelector('[data-entry]')
function display(value) { dataEntry.value += value};

document.querySelector('[equals]').addEventListener('click', ()=>{
    let entry = dataEntry.value
    dataEntry.value = eval(entry)
});

