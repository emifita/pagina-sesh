export default class CreateTag {
    // Centralize creation of DOM elements with optional initial attributes and text.
    constructor(tag, className, text, id) {
        this.tag = document.createElement(tag);

        if (className) this.tag.className = className;
        if (text) this.tag.textContent = text;
        if (id) this.tag.id = id;
    }

    append(node) {
        // Append a child to the wrapped DOM element.
        this.tag.appendChild(node);
    }

    setAttribute(name, value) {
        this.tag.setAttribute(name, value);
    }

    on(event, callback) {
        // Register an event listener on the wrapped element.
        this.tag.addEventListener(event, callback);
    }

    get element() {
        // Expose the native element for DOM APIs not wrapped by this helper.
        return this.tag;
    }
}
