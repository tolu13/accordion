import Tabs from "./tabs";
import "./tabs.css";

//function RandomComponent() {
//    return <h1>Some Random content</h1>;
//}



export default function  TabTest() {
    const tabs = [
        {
            label : "Tab 1",
            content: <div>This content is for Tab 1</div>
        },
        {
            label: "Tab 2",
            content: <div>This is the content for Tab 2</div>
        },
        {
            label: "Tab 3",
            content: <div>This is Tab 3</div>
        }
    ]
    
    function handleChange(currentTabIndex){
        console.log(currentTabIndex);
        
    }
    
    return <Tabs tabsContent={tabs}  onChange={handleChange}/>
}