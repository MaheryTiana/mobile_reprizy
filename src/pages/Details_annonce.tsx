import { IonButton, IonContent, IonIcon, IonItem, IonList, IonPage } from '@ionic/react';

import {My_header} from "../components/include/My_header";


import Carousel from '../components/main/Carousel';
import  "../assets/css/details_annonce.css";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination, Navigation } from 'swiper/modules';
import { useHistory, useParams } from 'react-router';
import { useEffect, useState } from 'react';
import My_url from '../My_url';
import { get } from "../axios_utils.js";
import Loader from '../components/loader/Loader';



const Details_annonce: React.FC = () => {
    const {id} = useParams();
    const [etat,setEtat] = useState(40);
    const [mine,setMine] = useState(false);
    const [loader,setLoader] = useState(true);
    const [images,setImages] =useState([]) ;
    const [proprietaire,setProprietaire] = useState("");
    const [categorie,setCategorie] = useState("");
    const [type,setType] = useState("");
    const [marque,setMarque]= useState("");
    const [modele,setModele] = useState("");
    const [transmission,setTransmission] = useState("");
    const [annee,setAnnee] = useState("");
    const [place,setPlace] = useState("");
    const [etat_vehicule,setEtat_vehicule] = useState("");
    const [energie,setEnergie] = useState("");
    const [kilometrage,setKilometrage]= useState("");
    const [prix,setPrix] = useState("");
    const [description,setDescription] = useState("");

    const histo = useHistory();
    function go_vente() {
        let url = '/vente/'+id;
        histo.push(url);
    }
  useEffect(()=>{
    // Assuming the `get` function is imported or available in scope

    async function fetchData() {
        try {

        const url = My_url+"/Annonces/"+id; // Replace with your actual URL
        const response = await get(url);
        // console.log("data deteails.data : "+response.data.data[0].annee); // Access the data property of the response object
        if (response.data.data[0].user.prenom) {
            
            setProprietaire(response.data.data[0].user.prenom+" "+response.data.data[0].user.nom);
        }
        if (response.data.data[0].cat) {
            
            setCategorie(response.data.data[0].cat.nom);
        }
        if (response.data.data[0].marque) {
            
            setMarque(response.data.data[0].marque.nom);
        }
        if (response.data.data[0].modele) {
            
            setModele(response.data.data[0].modele.nom);
        }
        if (response.data.data[0].annee) {
            
            setAnnee(response.data.data[0].annee);
        }
        
        if (response.data.data[0].place) {
            setPlace(response.data.data[0].place);
            
        }
        if (response.data.data[0].kilometrique) {
            setKilometrage(response.data.data[0].kilometrique);
            
        }
        if (response.data.data[0].energie) {
            setEnergie(response.data.data[0].energie.nom);
            
        }
        if (response.data.data[0].prix) {
            setPrix(response.data.data[0].prix);
            
        }
        if (response.data.data[0].description) {
            setDescription(response.data.data[0].description);
            
        }
        if (response.data.data[0].transmission) {
            setTransmission(response.data.data[0].transmission.nom);
            
        }
        if (response.data.data[0].type) {
            setType(response.data.data[0].type.nom);
            
        }
        if (response.data.data[0].etatVehicule) {
            setEtat_vehicule(response.data.data[0].etatVehicule.nom);
            
        }
        if (response.data.data[0].images) {
            setImages(response.data.data[0].images);
            
        }

        if (response.data.data[0].etatAnnonce) {
            setEtat(response.data.data[0].etatAnnonce);
            
        }
        var user_str = localStorage.getItem('user');
        var user = JSON.parse(user_str);
        // var st 
        
        if (user.id === response.data.data[0].user.id) {
            setMine(true);
        }
        console.log(mine);
        //   setData(response.data.data);
        setLoader(false);
        } catch (error) {
        console.error('There was an error fetching the data:', error);
        }
    }
    
    fetchData();

},[]);

    return (
    <IonPage>
        <My_header titre="Details Annonce"></My_header>
      <IonContent fullscreen>
      {loader==true ? (<Loader/>):(

      
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


                        {etat === 10 ? (
                            <center style={{marginTop:'30px',padding:"20px"}}>
                                
                                <IonButton color={"tertiary"}  onClick={go_vente}>Vendre</IonButton>
                               
                            </center>
                        ):(
                            <center style={{marginTop:'30px',padding:"20px"}}>
                                <IonButton color={"tertiary"} type="disabled" ></IonButton>
                                
                            </center>
                        )}

                        


                    </IonList>

                    
                    

                </SwiperSlide>

            </Swiper>
            </>

        </div>
                  
                  ) }   
      </IonContent>
    </IonPage>
  );
};

export default Details_annonce;
