import React, {useEffect, useState} from 'react'

function IndivChat(props) {
    

    const [inMessage, setinMessage] = useState([]);

    useEffect(() => {
        setinMessage((p) => {return props.data.messageList});
    });
    
    console.log("Indivchat.js");
    console.log(inMessage);
    const buttonHanlder = () => {

    }

  return (
    <div className='chatSecond w50'>
        <div className="heading pd20 d-flex alc bg-white">
            <div className='imgWrapper'><img src={props.data.imageURL}/></div>
            <div className='pd10'>
                {props.data.title}
            </div>
            
        </div>
        
        <div className='body'>
            <div className={inMessage.length>0?"upper bottom" : "upper center"}>
                {inMessage.length>0 ? (                    
                        inMessage.map((ele) => {
                            return (
                                <div key={ele.messageId} className="">
                                    <div  className={ele.sender === "BOT"? "bot w100" : "sender w100"}>
                                        <div className="msg">
                                            {ele.message}
                                        </div>
                                    </div>
                                </div>
                            )
                        })                    
                ) : (<div className=''>Send a message to start chatting</div>)}
            </div>
            <div className='lower'>
                <input type="text" placeholder='Type a Message...' />
                <button type="button" onClick={buttonHanlder}>Add</button>
            </div>
        </div>
    </div>
  )
}

export default IndivChat