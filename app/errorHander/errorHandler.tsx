'use client'

import { useRouter } from "next/navigation";

const error = ({error,reset} : {error: Error; reset:()=> void}) => {
    const router = useRouter();
    return <div>opppss error : {error.message} occure T^T <button onClick={router.back} className="goBackButton"> Go Back
        </button></div>
}

export default error;