import * as ε from '../tools/ε/';


class Input extends ε.Component {
    render() {

        return ε.createHtmlElement('input', {
            id: "input", class: "w-full flex justify-center items-center border-2 bg-gray-300", type: "text",
            value: "VALEUR DE L INPUT"
        }, "")
    }
}

export default Input