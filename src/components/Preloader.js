import React from 'react';

const Preloader = ({ text, style, indicatorStyle={} }) => {
    let baseStyle = {
        textDecoration: 'none',
        position: 'relative',
        color: '#fff',
        boxSizing: 'border-box',
        display: 'flex',
        WebkitBoxPack: 'center',
        MsFlexPack: 'center',
        WebkitJustifyContent: 'center',
        justifyContent: 'center',
        WebkitBoxAlign: 'center',
        MsFlexAlign: 'center',
        WebkitAlignItems: 'center',
        alignItems: 'center',
        padding: '0 16px',
        minWidth: '48px',
    }
    baseStyle = Object.assign({}, baseStyle, style);
    return(
        <div style={baseStyle}>
            <span className="preloader preloader-white" style={indicatorStyle}>
                <span className="preloader-inner">
                    <span className="preloader-inner-gap"></span>
                    <span className="preloader-inner-left">
                        <span className="preloader-inner-half-circle" style={{borderColor: indicatorStyle.color ? indicatorStyle.color : baseStyle.color}}></span>
                    </span>
                    <span className="preloader-inner-right">
                        <span className="preloader-inner-half-circle" style={{borderColor: indicatorStyle.color ? indicatorStyle.color : baseStyle.color}}></span>
                    </span>
                </span>
            </span>
            <span style={{marginLeft: '5px'}}>{text}</span>
        </div> 
    );
}

export default Preloader;