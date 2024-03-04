import { useState } from 'react';

export const SplitBill = ({
  friendName,
  handleSetBillAmount,
  handleSetUserAmout,
  handleWhoIsPaying,
  billAmount,
  userAmount,
  whoIsPaying,
  onHandleSplitFormSubmit,
}) => {
  const friendExpense = billAmount ? billAmount - userAmount : '';
  function onChangeBillAmount(billval) {
    handleSetBillAmount(billval);
  }
  function onChangeUserAmount(usramt) {
    handleSetUserAmout(usramt);
  }
  function handleSplitFormSubmit(e) {
    e.preventDefault();
    if (!billAmount || !whoIsPaying) return;
    onHandleSplitFormSubmit();
  }
  function handelOnChangeWhoisPaying(whoispaying) {
    handleWhoIsPaying(whoispaying);
  }
  return (
    <>
      <form className="w-full max-w-sm" onSubmit={handleSplitFormSubmit}>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-bill-value"
            >
              $ Bill value
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-bill-value"
              type="text"
              value={billAmount}
              onChange={(e) => onChangeBillAmount(Number(e.target.value))}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="text"
            >
              Your Expense
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-user-amount"
              type="text"
              placeholder="Please mention amount you are paying"
              value={userAmount}
              onChange={(e) =>
                onChangeUserAmount(
                  Number(e.target.value) < billAmount
                    ? Number(e.target.value)
                    : ''
                )
              }
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="friend-inline-enxpense"
            >
              {friendName} Expense
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="friend-inline-enxpense"
              type="text"
              placeholder=""
              value={friendExpense}
              disabled
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="friend-inline-enxpense"
          >
            Who is paying the bill
          </label>
          <select
            value={whoIsPaying}
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => handelOnChangeWhoisPaying(e.target.value)}
          >
            <option value="user">You</option>
            <option value="friend">Friend Name</option>
          </select>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Split bill
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
