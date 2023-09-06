
import { useState, useContext, useEffect } from 'react';
import React from 'react'

import * as social from '../../js/MediaApp/mediaScript'

export const MediaAppManagerContext = React.createContext();

export function MediaAppManagerContextProvider (props) {

    /* VARIABLES */
    //Global
    const [windowSize, setWindowSize] = useState([window.innerWidth, window.innerHeight,]);
    const [inputText, setInputText] = useState ('');
    const [messageType, setMessageType] = useState('Text');
    const [user, setUser] = useState ('@Manolo');

    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedFileName, setSelectedFileName] = useState("No selected file");
    

    const [messageID, setMessageID] = useState (3);
    const [messageList, setMessafeList] = useState([
    ]);

    useEffect (() => {
        /*const interval = setInterval(() => {
            a(1);
        }, 100);*/
    }, []);

    const a = async function (id){
        const messageListJSON= await social.getMessageListByChatId(id);
        const users = await social.getUserUserNameListChatId(id);

        var s = "[";
        for(let i= 0; i < messageListJSON.length ; i++){
            s += JSON.stringify(
                {
                    "text" : ""+messageListJSON[i].text,
                    "hour" :  ""+parseTimeStampToTime(messageListJSON[i].time),
                    "messageState" : "" + messageListJSON[i].state,
                    "author" : "" + users[i],
                    "id" : i
                }
            );
            if(i !=  messageListJSON.length-1){
                s += ',' 
            }
        }
        s += "]";
            
        setMessafeList(JSON.parse(s));

    }

    /* FUNCTIONS */
    const handleSubmit =  function(e) {
        // Prevent the browser from reloading the page
        console.log(selectedFile);
        e.preventDefault();
        if(inputText !='' || selectedFile != null){
            addNewMessaage ();
        }

    } 

    const onChangeHandle = function (e) {
        setInputText(e.target.value);
        
    };

    const handleClickImageUpload = function (e){
        setSelectedFileName(e.target.files[0].name);
        if (e.target.files){
          setSelectedFile(URL.createObjectURL(e.target.files[0]));
        }
      }

    const handleClickRecordAudio =  function(e){

    }

    const addNewMessaage = async function (){
        const chat = {
            "text" : ""+inputText,
            "time" :  getTimeJavaFormat(),
            "state" : "Send"
        }
        //console.log(chat);
        //const userId = (await social.getUserByUserName(user)).id;
        //social.postMessage(userId, 1, chat);

        setMessafeList([...messageList, {
            "text" : ""+inputText,
            "time" :  getTimeJavaFormat(),
            "state" : "Send",
            "id": messageID
        }])

        setMessageID(messageID +1);
        setInputText('');

    }

    const parseTimeStampToTime = function (timeStamp){
        let time = timeStamp.slice(11, 16)
        time += (parseInt(time.slice(0, 2), 10) <=12) ?  " a.m." : " p.m.";
        return time;
    }

    const getTimeJavaFormat= function (){
        const date = new Date();
        let time = ""; 
        let mouth = parseInt(""+date.getMonth()) +1;
        let day = parseInt(""+date.getDate());
        let hour = parseInt(""+date.getHours());
        let minute = parseInt(""+date.getMinutes());
        let second = parseInt(""+date.getSeconds());
        let miliseconds = parseInt(""+date.getMilliseconds());

        time+= date.getFullYear() + "-";
        time+= (mouth <10)? "0" + mouth + "-" :  mouth +"-";
        time+= (day <10)? "0" + day + "T" : day +"T";
        time+= (hour <10)? "0" + hour + ":" : hour +":";
        time+= (minute <10)? "0" + minute + ":" : minute +":";
        time+= (second <10)? "0" + second + "." : second +".";
        time+= (miliseconds <10)? "0" + miliseconds : miliseconds;
        time+="+00:00"

        return time;
    }
    

    return (
        <>
            <MediaAppManagerContext.Provider value={{windowSize, inputText, setInputText, 
                messageType, handleSubmit, onChangeHandle, user, messageList, handleClickImageUpload
                , selectedFile}}>
                {props.children}
            </MediaAppManagerContext.Provider>
        </>
    );
}
