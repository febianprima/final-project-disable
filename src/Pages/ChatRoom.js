import { ChatEngine } from 'react-chat-engine';
import HeaderFeed from '../Components/HeaderFeed';
import ChatFeed from '../Components/ChatFeed';
import '../Css/Chat.css';
import axios from 'axios';
import { GET_CHATROOM } from '../Utils/Query';
import { useQuery } from '@apollo/client';

const Chatroom = () => {
    const user = JSON.parse(localStorage.getItem('userData'));
    const id = user.id;

    const { loading, error, data } = useQuery(GET_CHATROOM, {
        variables: { id: id}
    });

    if(loading){
    return <div>Loading</div>
    }

    if (error){
    return <div>{error.toString()}</div>
    }

    const userData = {
        'username': data.users[0].username,
        'secret': data.users[0].password,
        'email': data.users[0].email,
        'first_name': data.users[0].profile[0].firstName,
        'last_name': data.users[0].profile[0].lastName
    }
    console.log(userData);

    axios.get('https://api.chatengine.io/users', 
        {headers: {'PRIVATE-KEY': '18b60e43-a4f3-41be-a102-086d0299604d'}}
    )
    .then((res)=>{
        const usernames = res.data.map((item,index)=>(item.username));
        let condition = false;
        
        for (const e of usernames){
            if (e === userData.username){
                condition = true
                break
            }
        }

        if(condition === false){
            axios.post('https://api.chatengine.io/users/', 
                {
                    'username': userData.username,
                    'secret': userData.secret,
                    'email': userData.email,
                    'first_name': userData.first_name,
                    'last_name': userData.last_name
                },
                {'headers': {'PRIVATE-KEY': '18b60e43-a4f3-41be-a102-086d0299604d'}}
            )
            .then((res)=>{
                console.log(res.data);
                condition = true;
            })
            .catch((err)=>{
                console.log(err);
            })
        }

        // if (condition === true){
        //     axios.get('https://api.chatengine.io/chats', 
        //         {headers: {
        //             'PRIVATE-KEY': '18b60e43-a4f3-41be-a102-086d0299604d',
        //             'User-Name': userData.username,
        //             'User-Secret': userData.secret
        //         }}
        //     )
        //     .then((res)=>{
        //     const admin = res.data.map((item,index)=>(item.admin.username));
        //     condition = false;
            
        //     if(admin[0] === userData.username){
        //         condition = true;
        //     }

        //     console.log(admin,condition)

        //     if(condition === false){
        //         axios.post('https://api.chatengine.io/chats/', 
        //             {
        //                 'title': 'D-IS-ABLE CHATROOM',
        //                 'is_direct_chat': true
        //             },
        //             {'headers': {
        //                 'PRIVATE-KEY': '18b60e43-a4f3-41be-a102-086d0299604d',
        //                 'User-Name': userData.username,
        //                 'User-Secret': userData.secret
        //             }}
        //         )
        //         .then((res)=>{
        //             console.log(res.data);
        //             condition = true;
        //         })
        //         .catch((err)=>{
        //             console.log(err);
        //         })
        //     }
        // })
        // .catch((err)=>{
        //     console.log(err);
        // })
        // }
    })
    .catch((err)=>{
        console.log(err);
    })

    

    return(
        <div>
            <HeaderFeed />
            <ChatEngine
                height='85vh'
                projectID='8a530897-5d7d-4884-b1d4-ecc5bd6094a9'
                userName={userData.username}
                userSecret={userData.secret}
                renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} />}
            />
        </div>
    )
}

export default Chatroom;