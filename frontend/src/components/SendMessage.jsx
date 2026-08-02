import React from "react"
import { LuSendHorizontal } from "react-icons/lu";
const SendMessage = () => {
  return (
    <div>
      <form>
        <div className="relative" >
          <input
            className="mt-2 px-3 py-3 pr-10 rounded-md w-full"
            type="text"
            placeholder="Send a message"
          />
          <button className="text-black text-xl absolute right-3 top-5" type="submit">
            <LuSendHorizontal />
          </button>
        </div>

      </form>

    </div>
  )
}
export default SendMessage