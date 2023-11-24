import {Bar} from './Bar'
import {Container} from './Container'
import {useNProgress} from '@tanem/react-nprogress'

export const Progress=({isAnimating})=>{
    const {animationDuration,isFinished,progress}=useNProgress({
        isAnimating
    });
    return(
        <Container animationDuration={animationDuration} isFinished={isFinished}>
            <Bar animationDuration={animationDuration} progress={progress} />
            
        </Container>
    )
}