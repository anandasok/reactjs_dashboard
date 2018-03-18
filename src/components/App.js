import React, {Component} from 'react';

// Custom components
import SideMenu from './SideMenu';
import ContentArea from './ContentArea';

class App extends Component {
    render() {
        return(
            <div>
                <SideMenu />
                <ContentArea />
            </div>
        )
    }
}

export default App;