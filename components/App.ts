import * as ε from '../tools/ε/';
import Header from './Header';
import Section from "./Section";


class App extends ε.Component {

    render() {

        const section = new Section()
        const header = new Header()
        return ε.createHtmlElement('div', {id: "main"}, [header, section])

    }
}

export default App;