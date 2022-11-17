// window.setMultipleAttributes = {
//     setAttributes: (el, attrs) => {
//         debugger
//         for(const key in attrs) {
//             el.setAttribute(key, attrs[key]);
//         }
//     }    
// }

/* Chamando o CSS */
function CallCSS(reference) {
    const link = document.createElement('link')
    SetMultipleAttributes(link, {
        'rel': 'stylesheet',
        'type': 'text/css',
        'href': reference  
    })
    document.body.appendChild(link);   
}

function SetMultipleAttributes(el, attrs) {
    for(const key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
}

function CreateElementWithAttribute (elName, attrType, attrName) {
    const newElement = document.createElement(elName);
    newElement.setAttribute(attrType, attrName)
    return newElement;
}

function CreateButton (btnText) {
    const newButton = document.createElement('button');
    newButton.textContent = btnText;
    return newButton;
}

function CreateTable (row, tableHead) {
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    tableHead.forEach(item => {
        const th = document.createElement('th')
        th.innerText = item;
        thead.appendChild(th);
        // const option = document.createElement('option')
        // option.innerText = item;
        // select.appendChild(option);
    });

    for (let i = 0; i < row.length; i++) {
        const tr = document.createElement("tr");
        for(let j = 0; j < tableHead.length; j++) {
            const td = document.createElement("td");
            const texto = document.createTextNode(Object.values(row[i])[j]);
            td.appendChild(texto);
            tr.appendChild(td);
        }
        tbody.appendChild(tr);

    }

    table.append(thead, tbody)

    return table;
};