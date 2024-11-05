import useWindowResize from "./index";


export default function UseWindowResizeTest(){
    const windowSize = useWindowResize();
    const {width, height} = windowSize;

    return (
        <div>
            <h2>Use Window Resize Hook</h2>
            <p>Width is {width}</p>
            <p>Height is {height}</p>
        </div>
    )
}