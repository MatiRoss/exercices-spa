// Ecrivez le type des clés d'un élément
import {Component} from "./index";

export interface Element {
    tagName: string,
    child: Element[] | any,
    attributes: Attributes[],
}

interface Attributes {
    key: any
}
