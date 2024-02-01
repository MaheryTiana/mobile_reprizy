import { IonButton, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonList, IonPage, IonSelect, IonSelectOption, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import Import_photo from '../components/annonce/Import_photo';

import {My_header} from "../components/include/My_header";


import { Camera, CameraResultType } from '@capacitor/camera';
import Carousel from '../components/main/Carousel';
import  "../assets/css/new_annonce.css";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination, Navigation } from 'swiper/modules';
import { addCircleOutline, removeCircleOutline } from 'ionicons/icons';
import Container from '../components/annonce/Container';

const New_annonce: React.FC = () => {

    const [images,setImages] = useState([]);

    const [categorie,setCategorie] = useState([]);
    const [type,setType] = useState([]);
    const [marque,setMarque] = useState([]);
    const [modele,setModele] = useState([]);
    const [transmission,setTransmission] = useState([]);
    const [energie,setEnergie] = useState([]);
    const [etat,setEtat] = useState([]);

    function get_categorie() {
        var data = ['Plaisir','Camion'];
        setCategorie(data);
    }
    function get_type() {
        var data = ['4*4','4*2'];
        setType(data);
    }

    function get_marque() {
        var data = ['Mercedes','AUdi'];
        setMarque(data);
    }

    function get_modele() {
        var data = ['C63', 'Maybach'];
        setModele(data);
    }

    function get_transmission() {
        var data = ['autom', 'manuelle'];
        setTransmission(data);
    }
    
    function get_energie() {
        var data = ['essence', 'sans plomb'];
        setEnergie(data);
    }

    function get_etat() {
        var data = ['bon', 'moyen'];
        setEtat(data);
    }

    useEffect(()=>{
        get_categorie();
        get_type();
        get_marque();
        get_modele();
        get_transmission();
        get_energie();
        get_etat();
    },[]);



    //one
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
        var local = image.base64String;
        // Can be set to the src of an image now
        
        // alert("srouce web : "+web);
        // alert("srouce local : "+local);
        
        };
        // many
        const take_many = async () =>{
            const many =  await Camera.pickImages();
            var photo = many.photos;
            for (let i = 0; i < photo.length; i++) {
                var src = photo[i].webPath
                console.log("many : "+src);
            }
            setImages(photo);

        };
    
     

  return (
    <IonPage>
        <My_header titre="Nouvelle Annonce"></My_header>
      <IonContent fullscreen>
        <form action="" method="post">
        <div className='form_card'>

                <>
            <Swiper
                direction={'vertical'}
                pagination={{
                type: 'progressbar',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >



                <SwiperSlide key={1}>
                {images !==null && images.length!==0 ?(

                    <div className="image_container">                   
                        <Carousel image={images}/>                       
                    </div>
                ):(
                    <>
                    <button type='button' onClick={()=>{take_many();}}  >
                        <div className="take_container"> 
                            <div className="take_header"> 
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> 
                                <path d="M7 10V9C7 6.23858 9.23858 4 12 4C14.7614 4 17 6.23858 17 9V10C19.2091 10 21 11.7909 21 14C21 15.4806 20.1956 16.8084 19 17.5M7 10C4.79086 10 3 11.7909 3 14C3 15.4806 3.8044 16.8084 5 17.5M7 10C7.43285 10 7.84965 10.0688 8.24006 10.1959M12 12V21M12 12L15 15M12 12L9 15" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> <p>Importer des images</p>
                            </div>  
                        </div>

                    </button>

                </>

                )}

                <div className='slide1_contains'>
                    <IonList>
                        <IonItem className='slide1_item'>
                            <IonSelect name='categorie' >
                            <div slot="label">
                                Categorie
                            </div>
                            {
                                categorie.map((cat,ind)=>(
                                    <IonSelectOption key={ind} value={cat}>{cat}</IonSelectOption>
                                ))
                            }
                            </IonSelect>
                        </IonItem>

                        <IonItem className='slide1_item'>
                            <IonSelect name='type' >
                            <div slot="label">
                                Type
                            </div>

                            {
                                type.map((tp,ind)=>(
                                    <IonSelectOption key={ind} value={tp}>{tp}</IonSelectOption>
                                ))
                            }
                            
                            </IonSelect>
                        </IonItem>
                        

                        <IonItem className='slide1_item'>
                            <IonSelect name='marque' >
                            <div slot="label">
                                Marque
                            </div>
                            {
                                marque.map((mq,ind)=>(
                                    <IonSelectOption key={ind} value={mq}>{mq}</IonSelectOption>
                                ))
                            }
                            </IonSelect>
                        </IonItem>

                        <IonItem className='slide1_item'>
                            <IonSelect name='modele' >
                            <div slot="label">
                                Modele
                            </div>
                            {
                                modele.map((md,ind)=>(
                                    <IonSelectOption key={ind} value={md}>{md}</IonSelectOption>
                                ))
                            }
                            </IonSelect>
                        </IonItem>
                        
                    </IonList>
                </div>



                </SwiperSlide>


                <SwiperSlide key={2}>

                <div className='slide2_contains'>
                    <IonList>
                        <IonItem className='slide2_item'>
                            <IonSelect name='transmission' >
                            <div slot="label">
                                Transmission
                            </div>
                            {
                                transmission.map((trs,ind)=>(
                                    <IonSelectOption key={ind} value={trs}>{trs}</IonSelectOption>
                                ))
                            }
                            </IonSelect>
                        </IonItem>

                        <IonItem className='slide2_item'>
                            <IonSelect name='energie'  >
                            <div slot="label">
                                Energie
                            </div>
                            {
                                energie.map((eg,ind)=>(
                                    <IonSelectOption key={ind} value={eg}>{eg}</IonSelectOption>
                                ))
                            }
                            </IonSelect>
                        </IonItem>
                        

                        <IonItem className='slide2_item'>
                            <IonSelect name='etat' >
                            <div slot="label">
                                Etat du vehicule
                            </div>
                            {
                                etat.map((et,ind)=>(
                                    <IonSelectOption key={ind} value={et}>{et}</IonSelectOption>
                                ))
                            }
                            </IonSelect>
                        </IonItem>

                        <IonInput name='annee' className='slide2_item' style={{width:"92%",marginLeft:"5%"}} label="Année" type="number" min={0} max={3000} placeholder="Tapez pour ecrire"></IonInput>
                        <IonInput name='place' className='slide2_item' style={{width:"92%",marginLeft:"5%"}} label="Nombre de place" type="number" min={0} placeholder="Tapez pour ecrire"></IonInput>
                        <IonInput name='kilometrage' className='slide2_item' style={{width:"92%",marginLeft:"5%"}} label="Kilometrage" type="number" min={0} placeholder="Tapez pour ecrire"></IonInput>
                        <IonInput name='prix' className='slide2_item' style={{width:"92%",marginLeft:"5%"}} label="Prix" type="number" min={0} placeholder="Tapez pour ecrire"></IonInput>
                        
                        
                    </IonList>
                </div>

                </SwiperSlide>

                <SwiperSlide key={3} className='slide3_contains'>
                    <IonList>
                        <IonItem >

                            <div style={{width:'100%', height:'70px'}}>
                                <h4 className='annonce_title'>Description : </h4>
                            </div>
                        </IonItem>
                        

                        <div className='new_description'>
                        <IonItem >
                        
                            <IonTextarea
                                label="Description"
                                labelPlacement="floating"
                                fill="outline"
                                placeholder="Tapez pour ecrire"
                            ></IonTextarea>
                        
                        </IonItem>
                        </div>



                        <center style={{marginTop:'30px'}}>
                            <IonButton color={"tertiary"} type="submit" >Poster</IonButton>
                        </center>


                    </IonList>

                    
                    

                </SwiperSlide>

            </Swiper>
            </>

        </div>
        </form>           
        
      </IonContent>
    </IonPage>
  );
};

export default New_annonce;
