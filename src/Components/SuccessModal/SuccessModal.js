import { faRotateLeft, faX } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from "react";
import SucccessGif from "../../Media/check.gif"

export const SuccessModal = (props)=>{

    return (
        <div id="modalEl" tabindex="-1" aria-hidden="true" style={{backdropFilter: "blur(20px)"}} className="mx-auto w-[100%] h-[100%] overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full  ">
         <div className="relative p-4 w-full max-w-2xl mx-auto h-full md:h-auto">
           
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
             
                <div className="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
                        File Uploading was Successful!
                    </h3>
                    <button onClick={()=>{props.handleCloseModal();}} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                    </button>
                </div> 
                <div className="p-6 space-y-6 flex flex-row flex-wrap justify-center">
                    <img src={SucccessGif} width={300} />
                    <p className='text-xl'>Do you want to upload another file?</p>
                </div>     
                <div className="flex flex-row justify-around p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                    <button type="button" onClick={()=>{props.handleUploadAnother()}}  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Upload Another <FontAwesomeIcon icon={faRotateLeft} /> </button>
                    <button type="button" onClick={()=>{props.handleCloseModal();}} className="bg-red-600 text-white  focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5  focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600">Close <FontAwesomeIcon icon={faX} /></button>
                </div>
        
            </div>
        </div>
    </div>
    )
}