import {Element} from './frameworkTypes';

// parent class for components
abstract class Component {
    abstract render(): Element
}

function createHtmlElement(tagName, attributes, child) {
    let htmlElement = {
        tagName: tagName,
        attributes: [attributes],
        child: [child],
    }
    if (typeof child !== "string") {
        htmlElement.child = [child.render()]
    }
    console.log(htmlElement)
    return htmlElement
}

function injectInDOM(htmlElement) {
    let mainDiv = document.createElement(htmlElement.tagName)
    htmlElement.child.forEach(element => {
        let header = document.createElement(element.tagName)
        header.setAttribute("class", element.attributes[0].class)
        mainDiv.appendChild(header)
        element.child.forEach(elem => {
            let subTag = document.createElement(elem.tagName)
            subTag.setAttribute("type", elem.attributes[0].type)
            subTag.innerHTML = elem.child
            header.appendChild(subTag)
        })
    })
    return mainDiv
}




function start(rootComponent, rootHtml: HTMLElement): void {
    const rootInstance = new rootComponent();
    const rootRender = rootInstance.render();
    console.log(rootRender)
    let site = injectInDOM(rootRender)
    rootHtml.appendChild(site)

}

export {
    Component,
    start,
    createHtmlElement,
    // setVirtualDom,
    injectInDOM
};