import React from 'react';

export default class Menu extends React.Component {


     constructor(props) {
         super(props);
         this.handleClick = this.handleClick.bind(this);
     }


    state = {
        visible: true
    };

    handleClick() {
      this.setState({visible: !this.state.visible});
    }


    render() {
        console.log('visible', this.state.visible);
        let switchStyle = this.state.visible ?  "switch open" : "switch close";
        return (
            <nav className="menu-container">
                <div className={switchStyle} onClick={this.handleClick}></div>
                { this.state.visible ?
                    <ul>
                        <li><a href="#">1651615651</a></li>
                        <li><a href="#">Item</a></li>
                        <li><a href="#">Ite222m</a></li>
                        <li><a href="#">Item</a></li>
                        <li><a href="#">Item</a></li>
                    </ul> : null}
            </nav>


        );
    }
}


