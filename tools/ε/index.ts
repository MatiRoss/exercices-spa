import {Element} from './frameworkTypes';
import Observable from './Observable';

// parent class for components
abstract class Component {
    abstract render(): Element
}

function createHtmlElement(tagName, attributes, child) {
    let htmlElement = {
        tagName: tagName,
        attributes: attributes,
        child: child,
    }
    if (typeof child !== "string") {
        for (let i = 0; i < htmlElement.child.length; i++) {
            htmlElement.child[i] = htmlElement.child[i].render()
        }
    }
    return htmlElement
}

function injectInDOM(htmlElement) {
    let parent = document.createElement(htmlElement.tagName)
    if (Object.keys(htmlElement.attributes).length > 0) {
        for (let i = 0; i < Object.keys(htmlElement.attributes).length; i++) {
            parent.setAttribute(Object.keys(htmlElement.attributes)[i], Object.values(htmlElement.attributes)[i])
        }
    }
    if (Array.isArray(htmlElement.child)) {
        htmlElement.child.forEach(element => {
            parent.appendChild(injectInDOM(element))
        })
    } else {
        parent.innerHTML = htmlElement.child
    }
    return parent
}

function updateValue(e) {
    let content = document.getElementById("content")
    content.textContent = e.target.value
}

function start(rootComponent, rootHtml: HTMLElement): void {
    const rootInstance = new rootComponent();
    const rootRender = rootInstance.render();
    let site = injectInDOM(rootRender)
    rootHtml.appendChild(site)

}


export {
    Component,
    start,
    createHtmlElement,
    injectInDOM,
    updateValue
};