import { useEffect, useState } from "react";
import "./style.css"
const Comp1 = ()=>{
    const [typeOfColor,setTypeOfColor] = useState("hex");
    const [color,setColor] = useState("#000000")
    //random color
    const randomColor = (hexlength)=>{
        return Math.floor(Math.random()*hexlength)
    }


    // hex color generator
    const hexColorGenerator = ()=>{
        const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
        let hexColor = "#";
        for(let i=0;i<6;i++){
            hexColor += hex[randomColor(hex.length)]
        }
        setColor(hexColor)
        
        console.log(hexColor)
    }

    //rgb color generator
    const rgbColorGenerator = ()=>{
        const r = randomColor(256);
        const g = randomColor(256);
        const b = randomColor(256)

      setColor(`rgb(${r},${g},${b})`)

    }

    useEffect(()=>{
        if(typeOfColor === 'rgb'){
            rgbColorGenerator()
        }else{
            hexColorGenerator()
        }
    },[])

    return(
        <>
       <div className="container">
       <h2>Random Color Generator</h2>
       </div>
       <div className="btn_ele">
        <button onClick={()=> setTypeOfColor("hex")}>Create Hex color</button>
        <button onClick={()=> setTypeOfColor("rgb")}>Create RGB color</button>
        <button onClick={typeOfColor === "hex" ? hexColorGenerator : rgbColorGenerator}>Generator Random color</button>
       </div>
       <div className="back" style={{background:color}}>
        <div className="colorname">
            <h2>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h2>
            <h2>{color}</h2>
        </div>
       </div>
        </>
    )
}

export default Comp1;