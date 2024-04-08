import { useCallback } from "react";
import { useGetAllChannelsQuery } from "../store/channelsApi";
import { setSelectedChannel } from "../store/channelsSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

export default function ListChannels() {
  const selectedChannel = useAppSelector((state) => state.channelsSlice.selectedChannel);
  const { data: channels, isLoading, isError } = useGetAllChannelsQuery();
  const dispatch = useAppDispatch();

  const onSelectChannel = useCallback(
    (channelId: number) => {
      dispatch(setSelectedChannel(channelId));
    },
    [selectedChannel]
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <div className="basis-1/3 border-slate-100 border p-3 mr-3 rounded-lg">
      <h2 className="text-2xl text-center text-violet-700 font-bold">Channels</h2>
      <hr className="my-1"></hr>
      <ul>
        {channels?.map((channel) => (
          <li
            key={channel.id}
            onClick={() => onSelectChannel(channel.id)}
            className={`${
              selectedChannel === channel.id ? "text-amber-500 font-bold" : "text-gray-800"
            } cursor-pointer text-center text-xl py-1 hover:text-amber-500 hover:underline underline-offset-4`}
          >
            {channel.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
