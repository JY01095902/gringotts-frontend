import React, { Component } from 'react';
import Overlay from '../../components/Overlay';
import Prompt from '../../components/Prompt';
import Confirm from '../../components/Confirm';
import {closePrompt, closeConfirm} from '../../actions/application';
import { connect } from 'react-redux';

class ApplicationContainer extends Component {
    render() {
        const {application, closePrompt, closeConfirm} = this.props;
        const {prompt, confirm} = application;
        return (
            <div>
                <Overlay show={prompt.show || confirm.show} />
                <Prompt show={prompt.show}
                    title={prompt.config.title} 
                    text={prompt.config.text}
                    value={prompt.config.value}
                    helpBlock={prompt.config.helpBlock}
                    onCancel={() => {
                        closePrompt();
                        if(prompt.config.onCancel){
                            prompt.config.onCancel();
                        }
                    }}
                    onOk={(value) => {
                        closePrompt();
                        if(prompt.config.onOk){
                            prompt.config.onOk(value);
                        }
                    }} />
                <Confirm show={confirm.show}
                    title={confirm.config.title} 
                    text={confirm.config.text}
                    helpBlock={confirm.config.helpBlock}
                    onCancel={() => {
                        closeConfirm();
                        if(confirm.config.onCancel){
                            confirm.config.onCancel();
                        }
                    }}
                    onOk={() => {
                        closeConfirm();
                        if(confirm.config.onOk){
                            confirm.config.onOk();
                        }
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
        closePrompt: () => dispatch(closePrompt()),
        closeConfirm: () => dispatch(closeConfirm())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationContainer);