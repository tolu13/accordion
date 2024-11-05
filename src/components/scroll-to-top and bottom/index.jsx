import { useRef } from "react";
import useFetch from "../use-fetch";

export default function ScrollToTopAndBottom() {
    const {data, error, pending} = useFetch('https://dummyjson.com/products?limit=100', {})
    
    const bottomRef = useRef(null);

    function handleSCrollToBottom(){
        bottomRef.current.scrollIntoView({behavior: 'smooth'});
    }

    function handleScrollToTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }

    if(error) {
       <div>Error occured please try again</div> 
    }
    if(pending) {
        return <div>Loading ! please wait </div>
    }

    return (

        <div>
            <h2>Scroll to Top and Botttom Feature</h2>
            <h3>This is the top section</h3>
            <button onClick={handleSCrollToBottom}>Scroll to Bottom</button>
            <ul style={{listStyle: 'none'}}>
                {
                    data && data.products && data.products.length ?
                    data.products.map((item) => <li>{item.title}</li>) : null
                }
            </ul>

            <button onClick={handleScrollToTop}>Scroll to Top</button>
            <div ref={bottomRef}></div>
            <h3>This is the bottom of the page</h3>
        </div>
    )
}