import { useAppSelector } from "./store/hooks";
import ChannelsPanel from "./components/ChannelsPanel";
import MessagesPanel from "./components/MessagesPanel";
import NewMessageForm from "./components/NewMessageForm";

function App() {
  const selectedChannel = useAppSelector((state) => state.channelsSlice.selectedChannel);
  return (
    <div className="flex p-10">
      <ChannelsPanel />
      {selectedChannel && <MessagesPanel selectedChannel={selectedChannel} />}
      {selectedChannel && <NewMessageForm selectedChannel={selectedChannel} />}
    </div>
  );
}

export default App;
