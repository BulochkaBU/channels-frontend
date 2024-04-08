import { useGetMessagesByChannelQuery } from "../store/channelsApi";

export default function ListMessagesByChannel({ selectedChannel }: { selectedChannel: number }) {
  const { data: messages } = useGetMessagesByChannelQuery(selectedChannel);

  return (
    <div className="basis-1/3 border-slate-100 border p-3 mr-3 rounded-lg">
      <h2 className="text-2xl text-center text-violet-700 font-bold">Messages</h2>
      <hr className="my-1"></hr>
      <ol className="list-decimal px-8">
        {messages?.map((msg, index) => (
          <li key={index} className="text-xl py-1">
            {msg}
          </li>
        ))}
      </ol>
    </div>
  );
}
