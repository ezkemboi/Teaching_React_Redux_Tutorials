import React from 'react';
import SimpleComponent from './simplecomponent';

class ContainerComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            header: 'Getting started with React Redux',
            paragraph: 'This is a web page created with simple react redux'
        }
    }
    render() {
        const { header, paragraph } = this.state;
        return (
            <div>
                <SimpleComponent header={header} paragraph={paragraph}/>
                <SimpleComponent header={header} paragraph={paragraph} />
            </div>
        )
    }
}

export default ContainerComponent;
