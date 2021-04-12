import beehive from './beehive.png';

console.log(beehive);

function Image(){
    return(
        <div>
            <img src={beehive} alt="beehive" style={{height: 200 ,width: 200}} />
        </div>
    );
}

export default Image;