// material-ui
import { Button, CssBaseline} from '@mui/material';

// project imports
import { useRef, useState} from 'react';
import Login from './login'

// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => {
    const [messages, setMessage] = useState([]);
    const [value, setValue] = useState('');
    const socket = useRef()
    const [connected, setConnected] = useState(false);
    const [username, setUsername] = useState('');

    function connect() {
        socket.current = new WebSocket('ws://localhost:5000')

        socket.current.onopen = () => {
            setConnected(true)
            const message = {
                event: 'connection',
                username,
                id: Date.now(),
                date: new Date(Date.now())
            }
            socket.current.send(JSON.stringify(message))

            console.log('Успешное подключение')
        }
        socket.current.onmessage = (event) => {
            const message = JSON.parse(event.data)
            setMessage(prev => [ ...prev, message])
        }
        socket.current.onclose = () => {
            console.log('Socket закрылся')
        }
        socket.current.onerror = () => {
            console.log('Socket произошла ошибка')
        }
    }


    const sendMessage = async () => {
        const message = {
            username,
            message: value,
            id: Date.now(),
            event: 'message',
        }
        socket.current.send(JSON.stringify(message))
        setValue('')
    };
    function change(val) {
        setUsername(val)
    }
    function sendWithEnter(v) {
        if (v === 'Enter') {
            sendMessage()
        }
    }

    if (!connected) {
        return (
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
                <Login
                    chanFunc={change}
                    connect={connect}
                ></Login>
            </div>
        )
    }


    return (
        <div>
            <CssBaseline />
            <div className="container">
                <div className="section1">
                    <div className="mobile">
                        <div className="mobile-top">
                            <div className="mobile-top-left"></div>
                            <div className="mobile-top-center">
                                <div className="prof-img"><img
                                    src="https://rvs-chat-app-css-illustration.netlify.app/images/avatar.jpg" alt=""/></div>
                                <div className="prof-det">
                                    <div className="prof-name">{username}</div>
                                    <div className="prof-status">Онлайн</div>
                                </div>
                            </div>
                            <div className="mobile-top-right"></div>
                        </div>
                        <div className="mobile-center">
                            {messages.map(mess => (
                                <div key={mess.id} >
                                    {mess.event === 'connection'
                                        ? <div className="chat chat-left" >Пользователь {mess.username} подключился</div>
                                        : <div className="chat chat-right">{mess.username}. {mess.message}</div>
                                    }
                                </div>
                            ))}
                        </div>
                        <div className="mobile-bottom">
                            <div className="form" style={{display: 'flex'}}>
                                <input
                                    type="text"
                                    value={value}
                                    placeholder="Type a message…"
                                    onChange={(e) => setValue(e.target.value)}
                                    onKeyDown={ev => sendWithEnter(ev.key)}
                                />
                                <Button variant="contained" className="back" onClick={sendMessage}>Отправить</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SamplePage;
