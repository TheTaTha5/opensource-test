'use client'

import { useRouter } from "next/navigation";

const error = ({error,reset} : {error: Error; reset:()=> void}) => {

    return <div>opppss error : {error.message} occure T^T <button className="goBackButton"> Go Back
        </button></div>
}

export default error;