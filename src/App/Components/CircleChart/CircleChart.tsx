import { useEffect, useState } from 'react'
import * as CC from './CircleChart.styles'

export interface CircleChartProps{
   size: number
   progress: number
   caption?: string
   theme?: 'default' | 'primary'
   strokewidth?: number 
}

    function CircleChart (props: CircleChartProps){

    const getThemeColor = ()=>
    props.theme === 'primary' ? '#09f' : '#274060';

    const THEME = getThemeColor()
    const STROKE_WIDTH = props.strokewidth || 8
    const STROKE_COLOR = THEME

    const CENTER = props.size / 2
    const RADIUS = props.size / 2 - STROKE_WIDTH / 2
    const CIRCUNFERENCE = 2 * Math.PI * RADIUS

    const [offset, setoffset] = useState(CIRCUNFERENCE)

    useEffect(()=>{
        const progressOffset = ((100 - props.progress) / 100) * CIRCUNFERENCE
        setoffset(progressOffset)
    },[setoffset, CIRCUNFERENCE, props.progress, offset])

    return <CC.Wrapper>
        <CC.SvgWrapper style= {{ width: props.size, height: props.size }}>

            <CC.Svg width={ props.size } height={ props.size }>

                <CC.CircleBG 
                cy={CENTER} 
                cx={CENTER}
                r={RADIUS}
                />

                <CC.Circle
                fill= 'none'
                cy={CENTER} 
                cx={CENTER}
                r={RADIUS}

                stroke = { STROKE_COLOR }
                strokeWidth = { STROKE_WIDTH }   
                strokeDasharray = { CIRCUNFERENCE }
                strokeDashoffset = { offset }

                />
        </CC.Svg>

            <CC.Percentage style={{color: '#09f' }}>

                { props.progress }%

            </CC.Percentage>
        </CC.SvgWrapper>

        {
            props.caption && <CC.Caption>
                { props.caption }
            </CC.Caption>
        }
    </CC.Wrapper>
}

export default CircleChart