import * as ε from '../tools/ε/';

// import components
import Title from './Title';

// We want to render html like: 

//     <div class="w-full flex justify-center items-center border-2 bg-gray-300">
//       <Title type="h1" >HELLO WORLD</Title>
//     </div>

class Header extends ε.Component {
    render() {
        const title = new Title()
        return ε.createHtmlElement('div', {
            id: "header",
            class: "w-full flex justify-center items-center border-2 bg-gray-300"
        }, title)
    }
}

export default Header;