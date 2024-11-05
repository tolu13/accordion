import { useRef } from "react"



export default function ScrollToSection(){
    const ref = useRef()
    const data = [
        {
            label: 'First Card',
            style:{
                width: '100%',
                height: '600px',
                background: 'red'
            }
        },
        {
            label: 'Second Card',
            style:{
                width: '100%',
                height: '600px',
                background: 'blue'
            }
        },
        {
            label: 'Third Card',
            style:{
                width: '100%',
                height: '600px',
                background: 'green'
            }
        },
        {
            label: 'Fourth Card',
            style:{
                width: '100%',
                height: '600px',
                background: 'yellow'
            }
        },
        {
            label: 'Fifth Card',
            style:{
                width: '100%',
                height: '600px',
                background: 'orange'
            },
        },
    ];

        function handleScrollToSection(){
            let pos = ref.current.getBoundingClientRect().top

            window.scrollTo({
                top: pos,
                behavior: "smooth"
            })
        }

    return <div>
        <h2>Scroll to particular section</h2>
        <button onClick={handleScrollToSection}>Click to scroll</button>
        {
            data.map((dataItem, index) => <div  ref={index === 3 ? ref : null}style={dataItem.style}>
                <h3>{dataItem.label}</h3>
                </div>)
        }
    </div>
}