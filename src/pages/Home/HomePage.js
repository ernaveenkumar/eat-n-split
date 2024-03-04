import { useState } from 'react';
import { AddFriend } from './component/AddFriend';
import { FriendList } from './component/FriendList';
import { SplitBill } from './component/SplitBill';
import { Button } from '../../components/elements/Button';

export const HomePage = () => {
  const [toggleAddFriend, setToggleAddFriend] = useState(false);

  const [initialFriends, setInitialFriends] = useState([
    {
      id: crypto.randomUUID(),
      name: 'Sarah',
      image: 'https://www.w3schools.com/html/pic_trulli.jpg',
      balance: 20,
    },
    {
      id: crypto.randomUUID(),
      name: 'Clark',
      image: 'https://www.w3schools.com/html/pic_trulli.jpg',
      balance: -7, //if value is in - minus thats means i owe him money
    },
    {
      id: crypto.randomUUID(),
      name: 'Anthony',
      image: 'https://www.w3schools.com/html/pic_trulli.jpg',
      balance: 0,
    },
  ]);

  const [billAmount, setBillAmount] = useState(null);
  const [userAmount, setUserAmount] = useState(null);
  const [friendAmount, setFriendAmount] = useState(null);
  const friendIsPaying = billAmount - userAmount;
  const [whoIsPaying, setWhoIsPaying] = useState('user');
  const [selectedFriend, setSelectedFriend] = useState([]);
  const [friendName, setFriendNameForSplit] = useState(null);

  function handleSetBillAmount(billval) {
    setBillAmount(billval);
  }
  function handleSetUserAmout(usramt) {
    setUserAmount(usramt);
  }
  function handleWhoIsPaying(whoispaying) {
    setWhoIsPaying(whoispaying);
  }

  function handleAddFriend(newFriendObj) {
    setInitialFriends((initialFriends) => [...initialFriends, newFriendObj]);
  }

  function handleToggleAddFriendClick() {
    setToggleAddFriend(!toggleAddFriend);
  }
  function onSelectFriend_SetBillExpenseFriendexpToEmpty() {
    handleSetBillAmount('');
    handleSetUserAmout('');
  }

  function handelOnSelect_FriendForSplit(selectedFrndObj) {
    setSelectedFriend(selectedFrndObj);
    setFriendNameForSplit(selectedFrndObj.name);
  }
  function onHandleSplitFormSubmit() {
    let friendtopay = 0;
    let amountadjust = 0;
    if (whoIsPaying === 'user') {
      friendtopay = billAmount - userAmount; // 50 =  100  - 50
      if (selectedFriend.balance < 0) {
        //already owes him some money
        amountadjust = friendtopay - -selectedFriend.balance;
      } else if (selectedFriend.balance >= 0) {
        amountadjust = selectedFriend.balance + friendtopay;
      } else {
      }
    }

    setInitialFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: amountadjust }
          : friend
      )
    );
  }
  return (
    <div className="home-wrap h-full flex flex-row ">
      <div className="aside w-6/12 md:flex md:flex-col justify-between">
        <div className="h-2/4">
          <div className="flex flex-col items-center">
            <FriendList
              friendlist={initialFriends}
              handelOnSelect_FriendForSplit={handelOnSelect_FriendForSplit}
              onSelectFriend_SetBillExpenseFriendexpToEmpty={
                onSelectFriend_SetBillExpenseFriendexpToEmpty
              }
              whoIsPaying={whoIsPaying}
              selectedFriend={selectedFriend}
            />
          </div>
        </div>
        <Button
          onClick={() => {
            handleToggleAddFriendClick();
          }}
        >
          {!toggleAddFriend ? 'Add Friend' : 'Close'}
        </Button>

        {toggleAddFriend && (
          <div className="h-fit border-2 border-solid ">
            <AddFriend
              handleToggleAddFriendClick={handleToggleAddFriendClick}
              handleAddFriend={handleAddFriend}
            />
          </div>
        )}
      </div>
      {friendName && (
        <div className="section w-6/12 bg-orange-50 text-center">
          <h1 className="mb-6">Split a Bill with {friendName}</h1>
          <SplitBill
            friendName={friendName}
            handleSetBillAmount={handleSetBillAmount}
            handleSetUserAmout={handleSetUserAmout}
            handleWhoIsPaying={handleWhoIsPaying}
            billAmount={billAmount}
            userAmount={userAmount}
            whoIsPaying={whoIsPaying}
            onHandleSplitFormSubmit={onHandleSplitFormSubmit}
          />
        </div>
      )}
    </div>
  );
};
