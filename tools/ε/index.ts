import {Element} from './frameworkTypes';

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
        htmlElement.child = [child.render()]
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
    if (typeof htmlElement.child !== "string") {
        htmlElement.child.forEach(element => {
            parent.appendChild(injectInDOM(element))
        })
    } else {
        parent.innerHTML = htmlElement.child
    }
    return parent
}


function start(rootComponent, rootHtml: HTMLElement): void {
    const rootInstance = new rootComponent();
    const rootRender = rootInstance.render();
    let site = injectInDOM(rootRender)
    console.log(rootRender)
    rootHtml.appendChild(site)

}

export {
    Component,
    start,
    createHtmlElement,
    injectInDOM
};