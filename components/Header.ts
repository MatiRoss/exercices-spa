import * as ε from '../tools/ε/';

import Title from './Title';

class Header extends ε.Component {
    render() {
        const title = new Title()
        return ε.createHtmlElement('div', {
            id: "header",
            class: "w-full flex justify-center items-center border-2 bg-gray-300"
        }, [title])
    }
}

export default Header;