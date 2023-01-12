import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import './App.css'

const App = () => {
    return (
        <ChatEngine
            height= "100vh"
            projectID="95513f6f-bba5-43c7-95dd-71981193ec48"
            userName="JavaScriptMastery"
            userSecret="123456"
            renderChatFeed={(chatAppProps) => <ChatFeed { ... chatAppProps}/>}
        />
    )
}

export default App;