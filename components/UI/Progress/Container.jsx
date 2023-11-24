export const Container=({animationDuration,children,isFinished})=>{
    return <div className="pointer-enents-none" style={{
        opacity:isFinished?0:1,
        transition:`opacity ${animationDuration}ms linear`
    }}>
        {children}
    </div>
}