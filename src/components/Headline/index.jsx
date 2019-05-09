import React, { Component } from 'react';

class Headline extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        const { header, desc } = this.props;

        if (!header) {
            return null;
        }

        return (
            <div data-testid="Headline-root">
                <h1 data-testid="header">{header}</h1>
                <p data-testid="desc">{desc}</p>
            </div>
        );
    }
}

export default Headline;
