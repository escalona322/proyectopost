import React, { Component } from "react";
import imagenespanyol from "./../../assets/fotoespanyol.jpg";
import imageningles from "./../../assets/fotoingles.jpg";
import imagenfrances from "./../../assets/fotofrances.jpg"
export default class MiComponente extends Component {

    state = {
        idioma: "",
    }

  
    
    comprobarIdioma = () => {
        const browserLanguage = navigator.language
        || navigator.userLanguage;

      
        if(browserLanguage.includes("es")){
            console.log("dentro del if")
            this.setState({
                idioma: "español",
            })
        }else if(browserLanguage.includes("en")){          
                this.setState({
                    idioma: "English",
                })
            }else if(browserLanguage.includes("fr")){
                
                    this.setState({
                        idioma: "Français",
                    })
                }
    }


    verNavigator = () => {
        console.log(navigator);
    }

    componentDidMount() {
        this.comprobarIdioma();
    }

    render() {
        if(this.state.idioma=="español"){
            return (<div>
                    <h1>
                       Titulo en {this.state.idioma}
                    </h1>
                    <h2> Este es un texto de relleno para demostrar que la aplicacion esta <br/>
                        leyendo el idioma del navegador y cargando los datos segun <br/> 
                        el idioma del navegador. </h2>
                    <img src={imagenespanyol} alt="" ></img>
                    <br/>
                    <button onClick={this.verNavigator()}>
                        Ver Navigator
                    </button>
                </div>)
        }else if(this.state.idioma=="English"){
            return (<div>
                    <h1>
                       Title in {this.state.idioma}
                    </h1>
                    <h2>
                        This is filler text in order to prove that the aplication is <br/>
                        reading the browser's language and loading the data according <br/> 
                        to the browser's language
                    </h2>
                    <img src={imageningles} alt="" height="600px" width="520px"></img>
                </div>)
        }else if(this.state.idioma=="Français"){
            return (<div>
                    <h1>
                       Titre an {this.state.idioma}
                    </h1>
                    <h2>
                        Ceci est un texte de remplissage afin de prouver que l'application est <br/>
                        lire la langue du navigateur et charger les données selon <br/>
                        à la langue du navigateur
                    </h2>
                    <img src={imagenfrances} alt="" ></img>
                </div>)
        }else{
            return (
                <h1>Cargando idioma...</h1>
            )
        }
        
    }
}