const Chat = () => {
    return (
        <div>
            <div className="container">
                <div className="header">
                    <div className="grp-img">
                        <img className="i1"
                             src="https://images.unsplash.com/photo-1660476705851-21e527337f9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                             alt=""/>
                            <img className="i2"
                                 src="https://images.unsplash.com/photo-1657299143482-4f4ea1ebd71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                                 alt=""/>
                                <img className="i3"
                                     src="https://images.unsplash.com/photo-1660481451479-7ad6d6ad0223?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                                     alt=""/>
                    </div>

                    <div className="grp-info">
                        <h3 className="grp-name">
                            Elnora, Lelia, Lucinda
                        </h3>
                        <p className="grp-status">
                            We tipically reply in a few minutes
                        </p>
                    </div>
                </div>

                <div className="chatbox">
                    <div className="chat">
                        <img
                            src="https://images.unsplash.com/photo-1657299143482-4f4ea1ebd71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                            alt=""/>
                            <p className="msg">
                                <ion-icon name="caret-back-outline"></ion-icon>
                                Hi there! <br/>
                                Looking to get started? I can help answer to your questions!
                            </p>
                    </div>
                    <div className="chat">
                        <img
                            src="https://images.unsplash.com/photo-1660481451479-7ad6d6ad0223?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                            alt=""/>
                            <p className="msg">
                                <ion-icon name="caret-back-outline"></ion-icon>
                                I need a laptop 😊
                            </p>
                    </div>
                    <div className="chat">
                        <img
                            src="https://images.unsplash.com/photo-1657299143482-4f4ea1ebd71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                            alt=""/>
                            <p className="msg">
                                <ion-icon name="caret-back-outline"></ion-icon>
                                What kind of laptop your looking for? Mam
                            </p>
                    </div>
                    <div className="chat">
                        <img
                            src="https://images.unsplash.com/photo-1660481451479-7ad6d6ad0223?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                            alt=""/>
                            <p className="msg">
                                <ion-icon name="caret-back-outline"></ion-icon>
                                A gaming one 😅
                            </p>
                    </div>
                </div>

                <div className="policy">
                    <p>
                        By using the chat, I confirm that I have read the <a href="#">privacy policy</a> and do not
                        object to the use of my personal data.
                    </p>
                    <a href="#" className="agree">
                        I agree
                    </a>
                </div>

                <a href="#" className="close">
                    <ion-icon name="close-outline"></ion-icon>
                </a>
            </div>
        </div>
    )
}
export default Chat
