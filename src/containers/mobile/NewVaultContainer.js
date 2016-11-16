import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewVaultForm from '../../components/mobile/NewVaultForm';

class NewVaultContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            vault: null,
            focusInput: null
        };
        this.handleVaultChange = this.handleVaultChange.bind(this);
        this.handleComplete = this.handleComplete.bind(this);
    }
    handleVaultChange(vault){
        this.setState({'vault': vault});
    }
    handleComplete(){
        console.log(this.state.vault)
    }
    render() {
        const types = {
            cash: '现金',
            weChatPay: '微信支付',
            aliPay: '支付宝',
            creditCard: '信用卡',
            savingsCard: '储蓄卡'  
        };
        const {location} = this.props;
        const {type = 'cash'} = location.query;
        return (
            <div className="view view-main">
                <div className="pages navbar-fixed">
                    <div className="page" data-page="home">
                        <div className="navbar">
                            <div className="navbar-inner">
                                <div className="center">创建{types[type]}金库</div>
                            </div>
                        </div>
                        <div className="toolbar toolbar-bottom">
                            <div className="toolbar-inner">
                                <a href="#/mobile/vaults" className="link"><i className="material-icons">arrow_back</i></a>
                                <a className="link"
                                    onClick={this.handleComplete}>
                                    <i className="material-icons">done</i>{}<span style={{marginLeft: '3px'}}>完成</span>
                                </a>
                            </div>
                        </div>
                        <div className="page-content">
                            <NewVaultForm type={type} onChange={(vault) => this.handleVaultChange(vault)} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { 
    };
}

function mapDispatchToProps(dispatch) {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewVaultContainer);