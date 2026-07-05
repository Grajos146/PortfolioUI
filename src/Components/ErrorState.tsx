import React, { useState } from 'react'
import { BiErrorCircle } from 'react-icons/bi';
import { IoRefreshOutline } from 'react-icons/io5';

const ErrorState: React.FC<{ message: string; onRetry: () => void }> = ({ message, onRetry }) => {
    const [isAnimating, setIsAnimating] = useState(false);
    const handleClick = async () => {
        setIsAnimating(true);

        try {
            if (onRetry) {
                await onRetry();
        } 
        } catch (e){
            console.error("Retry failed:", e);
        } finally {
            setIsAnimating(false);
        }

        setTimeout(() => {
            setIsAnimating(false);
        }, 1000); // Reset animation state after 1 second
    }
  return (
    <div className="flex mx-auto items-center justify-center">
        <div className="">
        <div className="flex items-center justify-center gap-2">
            <BiErrorCircle size={24} />
            <span className="text-sm text-red-500">{message}</span>
        </div>
        <button onClick={handleClick} disabled={isAnimating} className="" aria-label="Retry">
            <IoRefreshOutline size={24} className={`${isAnimating ? 'animate-spin text-blue-500' : 'text-slate-500'}`} />
        </button>
        </div>
    </div>
  )
}

export default ErrorState
