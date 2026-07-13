export default class CreateTag {
    constructor(tag, className, text, id) {
        this.tag = document.createElement(tag);

        if (className) this.tag.className = className;
        if (text) this.tag.textContent = text;
        if (id) this.tag.id = id;
    }

    append(node) {
        this.tag.appendChild(node);
    }

    setAttribute(name, value) {
        this.tag.setAttribute(name, value);
    }

    on(event, callback) {
        this.tag.addEventListener(event, callback);
    }

    get element() {
        return this.tag;
    }
}