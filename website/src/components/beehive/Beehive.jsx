import './Beehive.css';
import Image from './image.jsx'



export const Beehive = () => {
    const time = new Date ();
    const timeRightNow = time.getHours();
    
    const isSleeping = timeRightNow < 6 || timeRightNow >= 18; 
    
    const text = isSleeping ? 'The Bees Are Sleeping':'The Bees Are Happy'
    /* return (
        <div>
            <p> The Bees Are Happy </p>
            <Image />
        </div>
    ) */

    
    /* else if (Weather = 'Rainy'){
        return (
            <body>
                <p>The Bees Are Displeased</p>
                <img src='beehive.png' alt = 'beehive'/>
            </body>
        )
    } */
    
    return (
        <body>
            <p> {text} </p>
            <Image />
        </body>
    )
}

export default Beehive