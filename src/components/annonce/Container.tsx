import { IonIcon } from "@ionic/react";
import { addCircleOutline, removeCircleOutline } from "ionicons/icons";
import React from "react";
import { useState } from "react";
import Input from "./Input";

export default function Container() {
    const [inputs,setInputs] = useState([]);
    const add_specifique = () => {
        if (inputs.length <4) {
            
            setInputs([...inputs , <Input/>])
        }
    }


    const remove_specifique = () => {
        const updatedInputs = [...inputs];
        updatedInputs.splice(inputs.length - 1, 1);
        setInputs(updatedInputs);
    }
    return(
        <>
            {inputs.map((mine ,index)=>(
                React.cloneElement(mine,{key:index})
            ))}
        <div className="button_specifique">
            <button  style={{backgroundColor:'transparent'}} type="button">
                <IonIcon onClick={()=>{add_specifique()}}  className='add_specifique' icon={addCircleOutline} />
            </button>

            <button onClick={()=>{remove_specifique()}}  style={{backgroundColor:'transparent'}} type="button">
                <IonIcon  className='remove_specifique' icon={removeCircleOutline} />
            </button>
            
        </div>
        </>
    );
} 