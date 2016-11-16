import React from 'react';

const Preloader = ({ text, style, indicatorConfig={} }) => {
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
    const indicatorBorderStyle = `${indicatorConfig.thickness? indicatorConfig.thickness : '4px'} solid ${indicatorConfig.color ? indicatorConfig.color : baseStyle.color}`

    return(
        <div style={baseStyle}>
            <span className="preloader preloader-white" style={{
                    width: indicatorConfig.width,
                    height: indicatorConfig.height,
                    left: indicatorConfig.left,
                    top: indicatorConfig.top
                }}>
                <span className="preloader-inner">
                    <span className="preloader-inner-gap" style={{borderColor: 'transparent'}}></span>
                    <span className="preloader-inner-left">
                        <span className="preloader-inner-half-circle" 
                            style={{
                                border: indicatorBorderStyle
                            }}></span>
                    </span>
                    <span className="preloader-inner-right">
                        <span className="preloader-inner-half-circle" 
                            style={{
                                border: indicatorBorderStyle
                            }}></span>
                    </span>
                </span>
            </span>
            <span style={{marginLeft: '5px'}}>{text}</span>
        </div> 
    );
}

export default Preloader;