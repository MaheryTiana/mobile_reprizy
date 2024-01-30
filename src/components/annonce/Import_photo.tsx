
import { IonButton, IonIcon } from '@ionic/react';
import { add, starOutline,star } from 'ionicons/icons';
import React, { useEffect, useState } from 'react'; 
import { Camera, CameraResultType } from '@capacitor/camera';


export default function Import_photo() {
    const takePicture = async () => {
        const image = await Camera.getPhoto({
          quality: 90,
          allowEditing: true,
          resultType: CameraResultType.Uri
        });
      
        // image.webPath will contain a path that can be set as an image src.
        // You can access the original file using image.path, which can be
        // passed to the Filesystem API to read the raw data of the image,
        // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
        
        var web = image.webPath;
        var local = image.path;
        // Can be set to the src of an image now
        
        alert("srouce web : "+web);
        alert("srouce local : "+local);
      };

 
    return (
    
        <button onClick={()=>{
            takePicture();
        }}>Take </button>
        
    
    );
}




        