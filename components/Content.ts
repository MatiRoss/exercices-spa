import * as ε from '../tools/ε/';

class Content extends ε.Component {
    render() {
        return ε.createHtmlElement('h2', {
                id: "content",
                color: "red",
                textContent: ""
            },
            "CECI EST UN PARAGRAPHE TEST : LOREMIPSUM" +
            "LOREMIPSUM")
    }
}

export default Content