import { useState } from "react";
import Corazon from "./Corazon"

export default function CorazonBtn() {
    const [like, setLike] = useState(false)
    const toggleHeart = () => {
        setLike((like) => !like)
      }
      return (
        <button
        className={`CorazonBtn ${like ? 'CorazonBtn--liked' : ''}`}
        type="button"
        onClick={toggleHeart}
        >
         <Corazon />   
        </button>
      )
}