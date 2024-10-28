import { useState } from "react"


export default function Tabs({tabsContent, onChange}) {

    const [currentTabIndex, setCurrentTabIndex] = useState(0);

    function handleOnClick(getCurrentIndex){
       setCurrentTabIndex (getCurrentIndex);
       onChange(getCurrentIndex);
    }
   
   
   return <div className="wrapper">
        <div className="heading">
            {
                tabsContent.map((tabItem, index ) => (
                 <div 
                 style={{
                    display: 'inline-flex',
                    fontSize: '30px',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    padding: '10px 15px',
                    cursor: 'pointer',
                    border: 'none',
                    color: currentTabIndex === index ? 'white' : 'black', // Change text color based on active state
                    background: currentTabIndex === index ? '#a1d600' : '#4e016a', // Change background based on active state
                }}
                 onClick={() => handleOnClick(index)} key={tabItem.label}>
                <span className="label">{tabItem.label}</span>
                </div>)
            )}
        </div> 
        <div className="content" style={{color: 'red'}}>
            
                {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
        </div>
    </div>
}