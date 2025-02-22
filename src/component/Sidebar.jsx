import React, { useContext } from 'react'
import { Context } from './Context';

function Sidebar() {
    const { sentRequest, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

    const showPrevPrompt = async (prompt) => {
        try {        
            setRecentPrompt(prompt);
            await sentRequest(prompt);
        } catch (error) {
            console.error("Error fetching data for the selected prompt:", error);
        }
    };

  return (
    <div className={`px-6 py-4 w-[250px] h-screen hidden md:inline-flex flex-col justify-between bg-[#f9f9f9]`}>
        <div>
            <div className='p-2 inline-block rounded-full duration-200 hover:bg-gray-200 cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" onClick={() => setVisible(prev => !prev)} className='fill-black w-[30px] cursor-pointer' >
                    <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
                </svg>
            </div>

            <div onClick={() => newChat()} className='mt-10 px-4 py-1 bg-[#ececec] rounded-full flex items-center justify-center gap-1 transition-all duration-200 hover:bg-[#cdcdcd] cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className='fill-black w-[24px]'>
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                </svg>
                <p className='text-black text-sm'>New Chat</p>
            </div>

            <div className='flex flex-col'>
                <p className='mt-5 mb-3 text-black text-sm'>Recent</p>
                {prevPrompts.map((prompt, index) => (
                    <div key={index} onClick={() => showPrevPrompt(prompt)} className='px-4 py-2 rounded-full flex items-center justify-start gap-2 cursor-pointer duration-200 transition-all hover:bg-gray-200'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className='w-[14px] fill-black'>
                            <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"/>
                        </svg>
                        <p className='text-sm'>{prompt.slice(0, 20)} {prompt.length > 15 ? "..." : ""}</p>
                    </div>
                ))}
            </div>
        </div>

        <div className='flex flex-col gap-1'>
            <div className='px-4 py-2 rounded-full flex items-center gap-3 cursor-pointer duration-200 transition-all hover:bg-gray-200'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className='fill-black w-[20px]'>
                    <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1z"/>
                    <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94"/>
                </svg>
                <p className='text-sm'>Help</p>
            </div>
            <div className='px-4 py-2 rounded-full flex items-center gap-3 cursor-pointer duration-200 transition-all hover:bg-gray-200'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className='fill-black w-[20px]'>
                    <path d="M610-760q-21 0-35.5-14.5T560-810q0-21 14.5-35.5T610-860q21 0 35.5 14.5T660-810q0 21-14.5 35.5T610-760Zm0 660q-21 0-35.5-14.5T560-150q0-21 14.5-35.5T610-200q21 0 35.5 14.5T660-150q0 21-14.5 35.5T610-100Zm160-520q-21 0-35.5-14.5T720-670q0-21 14.5-35.5T770-720q21 0 35.5 14.5T820-670q0 21-14.5 35.5T770-620Zm0 380q-21 0-35.5-14.5T720-290q0-21 14.5-35.5T770-340q21 0 35.5 14.5T820-290q0 21-14.5 35.5T770-240Zm60-190q-21 0-35.5-14.5T780-480q0-21 14.5-35.5T830-530q21 0 35.5 14.5T880-480q0 21-14.5 35.5T830-430ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880v80q-134 0-227 93t-93 227q0 134 93 227t227 93v80Zm132-212L440-464v-216h80v184l148 148-56 56Z"/>
                </svg>
                <p className='text-sm'>Activity</p>
            </div>
            <div className='px-4 py-2 rounded-full flex items-center gap-3 cursor-pointer duration-200 transition-all hover:bg-gray-200'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className='fill-black w-[20px]'>
                    <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"/>
                    <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"/>
                </svg>
                <p className='text-sm'>Settings</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar