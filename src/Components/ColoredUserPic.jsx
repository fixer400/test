import { useState } from "react"

export default function ColoredUserPic(props){
    const {
        src,
        size,
        margin,
        backgroundColor,
        colors,
        hoverColors,
        colorWidth
    } = props

    const [onHover, setOnHover] = useState(false)

    const outerWrapperStyle = {
        width: size,
        height: size,
        boxSizing: 'border-box',
        borderRadius: '50%',
        padding: colorWidth,
        background: `linear-gradient(to right, ${onHover ? hoverColors.join(', ') : colors.join(', ')})`,
        transition: 'background 3s',
    }

    const innerWrapperStyle = {
        width:'100%',
        height: '100%',
        boxSizing: 'border-box',
        padding: margin,
        backgroundColor: backgroundColor,
        borderRadius: '50%',
    }

    const imgStyle = {
        backgroundSize: 'cover',
        width: '100%',
        height: '100%',
        borderRadius: '50%',
    }

    return(
        <div 
            onMouseEnter={() => setOnHover(true)} 
            onMouseLeave={() => setOnHover(false)} 
            style={outerWrapperStyle}
        >
            <div style={innerWrapperStyle}>
                <img src={src} alt="avatar" style={imgStyle}/>
            </div>
        </div>
    )
}