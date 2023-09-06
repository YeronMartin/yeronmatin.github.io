var apiURL = 'http://localhost:8080';

//#region  USERS 

export async function getUsers (){
    const response = await fetch(apiURL+'/users', {
        method: 'GET'
    }).then(response => response.json());
    return response;
}

export async function getUserById (id){
    const response = await fetch(apiURL+'/users/'+id, {
        method: 'GET'
    }).then(response => response.json());
    return response;
}

export async function getUserByNick (nick){
    const response = await fetch(apiURL+'/users/nick/'+nick,  {
        method: 'GET'
    }).then(response => response.json());
    return response;
}

export async function getUserByUserName (userName){
    const response = await fetch(apiURL+'/users/userName/'+userName,  {
        method: 'GET'
    }).then(response => response.json());
    return response;
}

export async function getChatsByUserId (id){
    const response = await fetch(apiURL+'/users/'+id+'/chats', {
        method: 'GET'
    }).then(response => response.json());
    return response;
}

export async function postUser (user){
    const response = await fetch(apiURL+'/users', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                "userName": "Manolo",
                "nick": "MeLaSudaSoyManolo",
                "email": "manolo@gmail.com"
            }
        )
    }).then(response => response.json());
    return response;
}

export async function putUserUserName (id, userName){
    const response = await fetch(apiURL+'/users/'+id+'/userName', {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: userName
    }).then(response => response.json());
    return response;
}

export async function putUserNick (id, nick){
    const response = await fetch(apiURL+'/users/'+id+'/nick', {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: nick
    }).then(response => response.json());
    return response;
}

export async function putUserEmail (id, email){
    const response = await fetch(apiURL+'/users/'+id+'/email', {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: email
    }).then(response => response.json());
    return response;
}

export async function clearUserList (){
    fetch(apiURL+'/users', {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });
}

export async function deleteUserById (id){
    fetch(apiURL+'/users/'+id, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });
}

//#endregion

//#region USER_CHAT

export async function postUserChat (userId, chatId){
    fetch(apiURL+'/users/saveUserChat/'+userId+'/'+chatId, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
}

export async function deletetUserChat (userId, chatId){
    fetch(apiURL+'/users/deleteUserChat/'+userId+'/'+chatId, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
}

//#endregion

//#region CHATS

export async function getChats (){
    const response = await fetch(apiURL+'/chats', {
        method: 'GET'
    }).then(response => response.json());
    return response;
}

export async function getChatById (id){
    const response = await fetch(apiURL+'/chats/'+id, {
        method: 'GET'
    }).then(response => response.json());
    return response;
}

export async function getChatListByUserId (id){
    const response = await fetch(apiURL+'/chats/'+id+'/users', {
        method: 'GET'
    }).then(response => response.json());
    return response;
}

export async function postChat (chat){
    const response = await fetch(apiURL+'/chats', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                "creationDate" :  "2023-07-15T21:50:04.091+00:00",
                "lastUpdateDate" :  "2023-07-15T21:50:04.091+00:00"
            }
        )
    }).then(response => response.json());
    return response;
}


export async function putChat (id, chat){
    const response = await fetch(apiURL+'/chats/'+id, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                "id" : id,
                "creationDate" :  "2024-07-15T21:50:04.091+00:00",
                "lastUpdateDate" :  "2024-07-15T21:50:04.091+00:00"
            }
        )
    }).then(response => response.json());
    return response;
}

export async function clearChatList (){
    var response = await fetch(apiURL+'/chats', {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    }).then(response => response.json());
    return await response;
}

export async function deleteChatById (id){
    var response = await fetch(apiURL+'/chats/'+id, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    }).then(response => response.json());
    return await response;
}

//#endregion

//#region MESSAGES

export async function getMessageList (){
    const response = await fetch(apiURL+'/messages', {
        method: 'GET'
    }).then(response => response.json());
    return response;
}

export async function getMessageById (id){
    const response = await fetch(apiURL+'/messages/'+id, {
        method: 'GET'
    }).then(response => response.json());
    return response;
}

export async function getMessageListByChatId (id){
    const response = await fetch(apiURL+'/messages/'+id+'/chat', {
        method: 'GET'
    }).then(response => response.json());
    return response;
}


export async function getMessageListByUserId (id){
    var response = await fetch(apiURL+'/messages/'+id+'/user', {
        method: 'GET'
    }).then(response => response.json());
    return response;
}

export async function getUserUserNameListChatId (id){
    const response = await fetch(apiURL+'/messages/'+id+'/chat/userUserName', {
        method: 'GET'
    }).then(response => response.json());
    return response;
}

export async function postMessage (userId, chatId, message){
    var response = await fetch(apiURL+'/messages/'+userId+'/'+chatId, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                "text" : message.text,
                "time" :  message.time,
                "state" : message.state
            }
        )
    }).then(response => response.json());
    return response;
}

export async function putMessage (id){
    const response = await fetch(apiURL+'/messages/'+id, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                "id" : id,
                "text" : "",
                "time" :  "2023-07-15T21:50:04.091+00:00",
                "state" : ""
            }
        )
    }).then(response => response.json());
    return response;
}

export async function clearMessageList (){
    const response = await fetch(apiURL+'/messages', {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(response => response.json());
    return response;
}

export async function deleteMessageById (id){
    const response = await fetch(apiURL+'/messages/'+id, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(response => response.json());
    return response;
}

//#endregion

