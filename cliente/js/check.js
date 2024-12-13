export class Check {
    constructor(parent, client) {
        this.parent = parent;
        this.client = client;
        // Array de estados
        this.states = [];
    }

    changeValue(name, value) {
        // Busca en el array de estados el objeto con el nombre indicado
        const data = this.states.find((item) => item.name == name);
        // Si lo encuentra, cambia su valor por el nuevo que le entra
        if (data) {
            data.state = value;
            // Busca el elemento correspondiente con el nombre que se le pasa
            const label = this.parent.querySelector(`label[data-name="${name}"] span`);
            // Si lo encuentra y el valor es true, cambia el texto a ON, si no, a OFF
            if (label && value) {
                label.textContent = 'ON';
            }else label.textContent = 'OFF';
        }
    }

    addCheck(name) {
        this.states.push({
            name: name,
            state: false
        });
        const check = document.createElement("label");
        check.classList.add("form-switch");
        check.setAttribute('data-name', name);
        this.parent.appendChild(check);
        const input = document.createElement("input");
        input.setAttribute('type', 'checkbox');
        check.appendChild(input);
        check.appendChild(document.createElement("i"));
        const span = document.createElement('span');
        const text = document.createTextNode('OFF');
        span.appendChild(text);
        check.appendChild(span);
        input.addEventListener('change', (event) => {
            this.changeValue(name, event.target.checked);
        });
    }
}