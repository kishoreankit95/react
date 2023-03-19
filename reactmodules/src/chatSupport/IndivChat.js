import React, {useState} from 'react'

function IndivChat(props) {
    

    const [inMessage, setinMessage] = useState([...props.data.messageList]);
    
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
            <div className='upper'>
                {inMessage.length>0 ? (                    
                        inMessage.map((ele) => {
                            return (
                                <div className={ele.sender === "BOT"? "bot w100" : "sender w100"}>
                                    <div key={ele.messageId} className="msg">
                                        {ele.message}
                                    </div>
                                </div>
                            
                            )
                        })                    
                ) : "Send a message to start chatting"}
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