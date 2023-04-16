import React, {useState, useEffect, useRef} from 'react';
import './style.scss';
import IndivChat from './IndivChat';

function Chat(props) {

  const [chatFirst, setChatFirst] = useState([]);
  const [chatFilter, setchatFilter] = useState([]);
  const [chatWinDirty, setChatWinDirty] = useState(false);
  const [inputDirty, setinputDirty] = useState(false);
  const [tempData, setTempData] = useState([]);

  const inputRef = useRef();

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/codebuds-fk/chat/chats").then((res) => {return res.json()}).then((reso) => {
      // console.log(reso);
      setChatFirst(() => {return [...reso]});
      
    });
  }, []);

  useEffect(() => {
    let chatFirst = document.getElementById("chatFirst");
  }, [chatWinDirty]);

  const chatElemHandler = (d) => {
    console.log(d);
    setChatWinDirty((p) => {return true});
    setTempData((p) => {return d});
  }

  const inputHandler = (e) => {
    let value = inputRef.current.value;
    if(value.length>0){
      setinputDirty(true);
      setChatWinDirty((p) => {return false});
    }
    else{
      setinputDirty(false);
      setChatWinDirty((p) => {return false});
    }
    let copy = [...chatFirst];
    copy = copy.filter((el, index) => {
      let split = el.title.split(" ");
      let flag =false;
      split = split.map((ele) => {
        return ele.toLowerCase();
      });
      
      if(split.includes(value)){
        console.log("found");
        return true;
      }
      else{
        console.log("not found");
        return false;
      }
    });
    
    setchatFilter((p) => {return [...copy]});
  }

  // console.log(inputDirty);
    
  return (
    <div className='container outer'>
      <div className="chatWindow d-flex">
        <div id="chatFirst" className={chatWinDirty ? "half chatFirst w50": "full chatFirst w100"}>
          <div className="chatHeading pd10 d-flex fldc">
            <label className='taLeft' htmlFor="filterById">Filter by Title/Order Id</label>
            <input id="filterById" className='mt10' type="text" placeholder='Start typing to search' onChange={inputHandler} ref={inputRef} />
          </div>
          <div className='chatList '>
            {!inputDirty ? (chatFirst.map((elem) => {
                return (
                  <div key={elem.id} id={elem.id} className="chatElem d-flex jc-sb pd20 " onClick={() => {chatElemHandler(elem)}}>
                    <div className="d-flex pd10 w100 alc">
                      <div className="imgWrapper">
                        <img src={elem.imageURL} alt=""/>
                      </div>            
                      <div className="w100 taLeft pd10">
                        <div>{elem.title}</div>
                        <div>Order {elem.orderId}</div>
                      </div>
                    </div>
                    <div className='pd10'>
                      {elem.latestMessageTimestamp}
                    </div>
                  </div>
                )
            })) : (chatFilter.map((elem) => {
              return (
                <div key={elem.id} id={elem.id} className="chatElem d-flex jc-sb pd20 " onClick={() => {chatElemHandler(elem)}}>
                  <div className="d-flex pd10 w100 alc">
                    <div className="imgWrapper">
                      <img src={elem.imageURL} alt=""/>
                    </div>            
                    <div className="w100 taLeft pd10">
                      <div>{elem.title}</div>
                      <div>Order {elem.orderId}</div>
                    </div>
                  </div>
                  <div className='pd10'>
                    {elem.latestMessageTimestamp}
                  </div>
                </div>
              )
          }))}
          </div>
        </div>
        {chatWinDirty ? <IndivChat data={tempData} />: null}
        
      </div>
    </div>
    
  )
}

export default Chat