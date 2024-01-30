import { IonInput, IonItem } from "@ionic/react";

export default function Input() {
    return (
        <IonItem>
            <div style={{width:'50%',float:'left'}}>
                                        
                <IonInput  className='slide2_item' name='libelles' labelPlacement="stacked" style={{width:"92%",marginLeft:"5%"}} label="Libelle" type="text"/>   
            </div>
            
            <div style={{width:'50%',float:'right'}}>
            
                <IonInput name='valeurs'  labelPlacement="stacked" style={{width:"92%",marginLeft:"5%"}} label="Valeur" type="text"/>
                
            </div>

        </IonItem>
    );   
}