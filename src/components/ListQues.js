import React,{useState} from "react"

function ListQues(props){
    const [expand, setExpand] = useState(false);
    const [angle, setAngle] = useState('0deg');
    
    function isClicked(){
        if (expand === false) {
            setExpand(true);
            setAngle('180deg');
        } else {
            setExpand(false);
            setAngle('0deg');
        }
    }

    return(
        <>
        <li>
            <div onClick={isClicked}>
                <strong style={{fontWeight: `${expand ? 700 : 400}`}}>{props.ques}
                <div className="arrow-down" style={{transform: `rotate(${angle})`}}>
                    <img src="images/icon-arrow-down.svg" alt="arrow down" />
                </div>
                </strong>
            </div>
            {expand && <span>{props.ans}</span>}
        </li>
        <hr />
        </>
    );
}

export default ListQues;