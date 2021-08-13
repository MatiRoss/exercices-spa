import * as ε from '../tools/ε/';
import Content from "./Content";
import Input from "./Input";

class Section extends ε.Component {
    render() {
        const input = new Input()
        const content = new Content()
        return ε.createHtmlElement('section', {
            id: "section",

        }, [input, content])
    }
}

export default Section