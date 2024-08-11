import { useState } from "react"

export default function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useState("hex");
    const [color, setColor] = useState("#000");


    return (
        <div>
            <button>Create Hex color</button>
            <button>Create Rgb color</button>
        </div>
    )
}