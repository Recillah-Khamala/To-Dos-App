import React from 'react';

const InputToDo = () => (
  <form action="input" className="rounded-full border flex-row pl-2">
    <input type="text" placeholder="Add todos..." />
    <button type="submit" className="text-netral-50 bg-green-600 rounded-full">
      +
    </button>
  </form>
);

export default InputToDo;
