import { useEffect, useState } from "react"

export default function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useState("hex");
    const [color, setColor] = useState("#000");

    function randomColorUtility(length){
        return Math.floor(Math.random()*length)
    }


    function handleCreateRandomHexColor() {
        const hex = [1, 2, 3, 4, 5, 6, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = '#';

        for(let i=0; i<6; i++){
            hexColor += hex[randomColorUtility(hex.length)]
        }
        setColor(hexColor);
        
    }

    function handleCreateRandomRgbColor() {
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b =  randomColorUtility(256);

        setColor(`rgb(${r}, ${g}, ${b}) `);
    }

    useEffect(() => {
    if(typeOfColor === 'rgb') handleCreateRandomRgbColor();
    else handleCreateRandomHexColor();
    }, [typeOfColor])


    return (
        <div 
        style={{
            width: "100vw",
            height: "100vh",
            background: color
        }}
        className="container">
            <button onClick={() => setTypeOfColor('hex')}>Create Hex color</button>
            <button onClick={() => setTypeOfColor('rgb')}>Create Rgb color</button>
            <button onClick= { typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>Generate Random Colour</button>
            <div 
            style={{
                display: 'flex',
                justifyContent: "center",
                alignItems: "center",
                fontSize: '40px',
                color: "#fff",
                marginTop: '40px',
                flexDirection: 'column',
                gap: '20px'

            }}>
                <h1>{typeOfColor === 'rgb' ? 'RGB color' : 'hex color'}</h1>
                <h3>{color}</h3>
            </div>
        </div>
    )
}