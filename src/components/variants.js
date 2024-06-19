export const fadeIn = (dir,delay) =>{
    return {
        hidden:{
            y: dir === 'up' ? 200 : dir === 'down' ? -200 : 0,
            x: dir === 'left' ? 200 : dir === 'right' ? -200 : 0,
            opacity:0
        },
        show:{
            y:0,
            x:0,
            opacity:1,
            transition:{
                type:'tween',
                duration:1.2,
                delay:delay,
                ease:[0.25,0.25,0.25,0.75],
            }
        }
    }
}