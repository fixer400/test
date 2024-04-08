import styled from "styled-components"

const shouldForwardProp = (prop) => 
    prop !== 'size' && 
    prop !== 'colorWidth' && 
    prop !== 'colors' && 
    prop !== 'hoverColors' && 
    prop !== 'backgroundColor' && 
    prop !== 'margin'; 


const OuterWrapper = styled.div.withConfig({ shouldForwardProp })`
        width: ${props => props.size}px;
        height: ${props => props.size}px;
        box-sizing: border-box;
        border-radius: 50%;
        padding: ${props => props.colorWidth}px;
        background: linear-gradient(to right, ${props => props.colors.join(', ')});
        &:hover {
            background: linear-gradient(to right, ${props => props.hoverColors.join(', ')});
        }
    `;

    const InnerWrapper = styled.div.withConfig({ shouldForwardProp })`
        width:100%;
        height: 100%;
        box-sizing: border-box;
        padding: ${props => props.margin}px;
        background-color: ${props => props.backgroundColor};
        border-radius: 50%;
    `;

    const StyledImg = styled.img`
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-size: cover;
    `;

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

    return(
        <OuterWrapper 
            size={size} 
            colors={colors} 
            hoverColors={hoverColors} 
            colorWidth={colorWidth}
        >
            <InnerWrapper 
                margin={margin} 
                backgroundColor={backgroundColor}
            >
                <StyledImg src={src}/>
            </InnerWrapper>
        </OuterWrapper>
    )
}