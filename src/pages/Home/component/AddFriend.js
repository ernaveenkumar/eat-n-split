import { useState } from 'react';

export const AddFriend = ({ handleToggleAddFriendClick, handleAddFriend }) => {
  const [name, setname] = useState('');
  const [image, setimage] = useState('');

  function handleToggleAddFriend_form() {
    handleToggleAddFriendClick(false);
  }
  function handleAddFriend_click(e) {}
  function onFormValueChange(e) {
    if (e.target.name == 'friend_name') {
      setname(e.target.value);
    }
    if (e.target.name == 'url') {
      setimage(e.target.value);
    }
  }
  function handleFormSubmit(e) {
    e.preventDefault();
    if (!name || !image) return;
    //let ranNum = Math.floor(Math.random() * 100);
    const id = crypto.randomUUID();
    const newFrienObj = {
      id,
      name,
      image: 'https://picsum.photos/seed/picsum/200/300',
      balance: 0,
    };

    console.log(newFrienObj);
    handleAddFriend(newFrienObj);
  }
  return (
    <>
      <form
        className="w-full max-w-sm md:flex md:flex-col md:justify-center md:items-center"
        onSubmit={handleFormSubmit}
      >
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name"
            >
              Friend Name
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              name="friend_name"
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              value={name}
              onChange={(event) => onFormValueChange(event)}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="url"
            >
              🌅 Image Url
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              name="url"
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="url"
              type="url"
              placeholder=""
              value={image}
              onChange={(event) => onFormValueChange(event)}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-2/3">
            <input
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
              value="Add"
            />
          </div>
        </div>
        <div className="md:flex md:items-center ">
          <div className="md:w-2/3">
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
              onClick={() => {
                handleToggleAddFriend_form();
              }}
            >
              Close
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
