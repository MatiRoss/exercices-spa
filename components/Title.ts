import * as ε from '../tools/ε/';

class Title extends ε.Component {

    render() {
        return ε.createHtmlElement('h1', {}, "CECI EST UN HEADER")
    }
}

export default Title;