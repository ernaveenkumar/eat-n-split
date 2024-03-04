export const FriendList = ({
  friendlist,
  handelOnSelect_FriendForSplit,
  onSelectFriend_SetBillExpenseFriendexpToEmpty,
  whoIsPaying,
  selectedFriend,
}) => {
  function onSelect_FriendForSplit(friend) {
    onSelectFriend_SetBillExpenseFriendexpToEmpty();
    handelOnSelect_FriendForSplit(friend);
  }
  const listItems = friendlist.map((friend) => (
    <div className="flex flex-row flex-wrap items-center mt-1" key={friend.id}>
      <img
        src={friend.image}
        alt="Italian Trulli"
        className="rounded-full w-16 h-16"
      />
      <div className="w-72 mx-1.5">
        <div className="friend-name ">
          <h1 className="text-2xl">{friend.name}</h1>
        </div>
        <div className="fl-message">
          {friend.balance < 0 && (
            <p className="text-base text-rose-500">
              You owe {friend.name} ${Math.abs(friend.balance)}
            </p>
          )}
          {friend.balance > 0 && (
            <p className="text-base">
              {friend.name} owe's you ${Math.abs(friend.balance)}
            </p>
          )}
          {friend.balance === 0 && (
            <p className="text-base text-green-500">
              You and your friend {friend.name} both are even $
              {Math.abs(friend.balance)}
            </p>
          )}
        </div>
      </div>
      <button
        className="px-3.5 py-2.5 rounded-lg bg-amber-500"
        onClick={() => {
          onSelect_FriendForSplit(friend);
        }}
      >
        Select
      </button>
    </div>
  ));
  return listItems;
};
