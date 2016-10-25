import React, { Component } from 'react';
import Overlay from '../../components/Overlay';
import Prompt from '../../components/Prompt';
import {closePrompt} from '../../actions/application';
import { connect } from 'react-redux';

class ApplicationContainer extends Component {
    render() {
        const {application, closePrompt} = this.props;
        const {prompt} = application;
        return (
            <div>
                <Overlay show={prompt.show} />
                <Prompt show={prompt.show}
                    title={prompt.config.title} text={prompt.config.text}
                    onCancel={() => {
                        closePrompt();
                        prompt.config.onCancel();
                    }}
                    onOk={(value) => {
                        closePrompt();
                        prompt.config.onOk(value);
                    }} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { 
        application: state.application
    };
}

function mapDispatchToProps(dispatch) {
    return {
        closePrompt: () => dispatch(closePrompt())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationContainer);