import { useContext } from "react"
import Accordian from ".."
import LightDarkMode from "../light-dark-mode"
import QRCodeGenerator from "../qr-code-generator"
import RandomColor from "../random-color"
import TreeView from "../tree-view"
import { FeatureFlagsContext } from "./context"
import menus from "../tree-view/data"


export default function FeatureFlags(){
   const {loading, enabledFlags} = useContext(FeatureFlagsContext)
   
    const componentsToRender = [
        {
            key: "showLightAndDarkMode",
            component: <LightDarkMode />
        },
        {
            key: "showQrCodeGenerator",
            component: <QRCodeGenerator />
        },
        {
            key: "showRandomColorGenerator",
            component: <RandomColor />
        },
        {
            key: "showAccordian",
            component: <Accordian />
        },
        {
            key: "showTreeView",
            component: < TreeView menus={menus}/>
        },
    ]

    function checkEnabledFlags(getCurrentKey){
        return enabledFlags[getCurrentKey]
    }
    
    if (loading){
        return <div>Data Loading please wait</div>
    }

    return <div>
        <h1 className="feature-flags">Feature Flags</h1>
        {
            componentsToRender.map((componentItem) => 
             checkEnabledFlags(componentItem.key) ? componentItem.component : null
        )
        }
    </div>
}