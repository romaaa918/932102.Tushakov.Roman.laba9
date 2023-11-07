document.addEventListener('DOMContentLoaded', main);

function main() {
    const numbers = document.querySelectorAll('.num');
    numbers.forEach(num => {
        num.addEventListener('click', numberClick);
    });

    const operations = document.querySelectorAll('.op');
    operations.forEach(op => {
        op.addEventListener('click', operationClick)
    });
      
}

function numberClick() {
    const input = document.getElementById('input');

    const div = input.getElementsByTagName('div');

    if (this.textContent == '.') {
        if (div[1].textContent == '') {
            div[1].textContent += '0' + this.textContent;
        }
        if (div[1].textContent.indexOf('.') == -1) {
            div[1].textContent += this.textContent;
        }
    }
    else {  
        if (div[1].textContent == '0') {
            div[1].textContent = this.textContent;
        }
        else {
            div[1].textContent += this.textContent;
        }        
    }   
}

function operationClick() {
    const input = document.getElementById('input');

    const div = input.getElementsByTagName('div');

    if (div[1].textContent != '') {
        if (div[1].textContent.slice(-1) == '.') {
            div[1].textContent = div[1].textContent.replace('.', '');
        }

        div[0].textContent += div[1].textContent + ' ' + this.textContent + ' ';
    
        div[1].textContent = '0';
    }
}

function cleanAll() {
    const input = document.getElementById('input');

    const div = input.getElementsByTagName('div');

    div[0].textContent = '';
    div[1].textContent = '0';
}

function cleanLast() {
    const input = document.getElementById('input');

    const div = input.getElementsByTagName('div');

    div[1].textContent = div[1].textContent.replace(div[1].textContent[div[1].textContent.length - 1], '');

    if (div[1].textContent == '') {
        div[1].textContent = '0';
    }
}

function Calculate() {
    const input = document.getElementById('input');

    const div = input.getElementsByTagName('div');

    div[0].textContent += div[1].textContent;
    div[1].textContent = eval(div[0].textContent);
    div[0].textContent = '';
}