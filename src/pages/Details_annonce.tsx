import { IonButton, IonContent, IonItem, IonList, IonPage } from '@ionic/react';

import {My_header} from "../components/include/My_header";


import Carousel from '../components/main/Carousel';
import  "../assets/css/details_annonce.css";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination, Navigation } from 'swiper/modules';



const Details_annonce: React.FC = () => {
    const mine = false;
    
    const images = ['image1','image2'];
    const proprietaire = 'Max';
    const categorie = "Camion";
    const type = "6*6";
    const marque = "Mercedes";
    const modele = "1935";
    const transmission = "manuelle";
    const annee = 2010;
    const place = 3;
    const etat_vehicule = "Bon";
    const energie = "Gasoil";
    const kilometrage= 20000;
    const prix = 54000;
    const description = "Moteur : v6 bi-turbo , Echappement normal sans silencieux,Moteur : v6 bi-turbo , Echappement normal sans silencieux,Moteur : v6 bi-turbo , Echappement normal sans silencieux,"
    // const description ="";
    return (
    <IonPage>
        <My_header titre="Details Annonce"></My_header>
      <IonContent fullscreen>
        
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
                {images !==null && images.length!==0 &&(
                //    <div className="image_container">
                      
                //    </div>
                    <div className="image_container">                   
                        <Carousel image={images}/>                       
                    </div>
                )}

                <div className='slide1_contains'>
                    <IonList>
                    
                        { mine !== true && (
                            <IonItem className='slide2_item'>
                            <div className='details_row'>
                                <div className='details_column1'>Proprietaire : </div>
                                <div className='details_column2'>{proprietaire}</div>
                            </div>
                        </IonItem>
                        )}
                        <IonItem className='slide2_item'>
                            <div className='details_row'>
                                <div className='details_column1'>Categorie : </div>
                                <div className='details_column2'>{categorie}</div>
                            </div>
                        </IonItem>

                        <IonItem className='slide2_item'>
                            <div className='details_row'>
                                <div className='details_column1'>Type : </div>
                                <div className='details_column2'>{type}</div>
                            </div>
                        </IonItem>
                        

                        <IonItem className='slide2_item'>
                            <div className='details_row'>
                                <div className='details_column1'>Marque : </div>
                                <div className='details_column2'>{marque}</div>
                            </div>
                        </IonItem>

                        <IonItem className='slide1_item'>
                            <div className='details_row'>
                                <div className='details_column1'>Modele : </div>
                                <div className='details_column2'>{modele}</div>
                            </div>
                        </IonItem>
                        
                    </IonList>
                </div>



                </SwiperSlide>


                <SwiperSlide key={2}>

                <div className='slide2_contains'>
                    <IonList>
                        <IonItem className='slide2_item'>
                            <div className='details_row'>
                                <div className='details_column1'>Transmission : </div>
                                <div className='details_column2'>{transmission}</div>
                            </div>
                        </IonItem>

                        <IonItem className='slide2_item'>
                            <div className='details_row'>
                                <div className='details_column1'>Energie : </div>
                                <div className='details_column2'>{energie}</div>
                            </div>
                        </IonItem>
                        

                        <IonItem className='slide2_item'>
                            <div className='details_row'>
                                <div className='details_column1'>Etat du Vehicule : </div>
                                <div className='details_column2'>{etat_vehicule}</div>
                            </div>
                        </IonItem>

                        <IonItem className='slide2_item'>
                            <div className='details_row'>
                                <div className='details_column1'>Annee : </div>
                                <div className='details_column2'>{annee}</div>
                            </div>
                        </IonItem>

                        <IonItem className='slide2_item'>
                            <div className='details_row'>
                                <div className='details_column1'>Nombre de Place : </div>
                                <div className='details_column2'>{place}</div>
                            </div>
                        </IonItem>

                        <IonItem className='slide2_item'>
                            <div className='details_row'>
                                <div className='details_column1'>Kilometrage : </div>
                                <div className='details_column2'>{kilometrage}</div>
                            </div>
                        </IonItem>

                        <IonItem className='slide2_item'>
                            <div className='details_row'>
                                <div className='details_column1'>Prix : </div>
                                <div className='details_column2'>{prix}</div>
                            </div>
                        </IonItem>

                    </IonList>
                </div>

                </SwiperSlide>

                <SwiperSlide className='slide3_contains' key={3}>
                    <IonList>
                        <IonItem >

                            <div style={{width:'100%', height:'70px'}}>
                                <h4 className='annonce_title'>Description : </h4>
                            </div>
                        </IonItem>
                        <IonItem>
                            <div className='details_description'>
                                {description==='' ?(
                                    <p>Neant</p>
                                ):(
                                    <p>{description}</p>
                                )}
                            </div>
                        </IonItem>


                        {mine === true ? (
                            <center style={{marginTop:'30px',padding:"20px"}}>
                                
                                <IonButton color={"tertiary"} type="submit" >Vendre</IonButton>
                                <IonButton color={"danger"} type="submit" >Supprimer</IonButton>
                            </center>
                        ):(
                            <center style={{marginTop:'30px',padding:"20px"}}>
                                {/* <IonButton color={"tertiary"} type="submit" >Acheter</IonButton> */}
                                
                            </center>
                        )}

                        


                    </IonList>

                    
                    

                </SwiperSlide>

            </Swiper>
            </>

        </div>
                  
        
      </IonContent>
    </IonPage>
  );
};

export default Details_annonce;
