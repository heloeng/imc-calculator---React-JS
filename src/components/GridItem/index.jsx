// import { Level } from "../../helpers/Imc";
import styles from './GridItem.module.css'
//importar as imagens qeu serão usadas 
 import upImage from '../../assests/up.png';
 import downImage from '../../assests/down.png'



export const GridItem = ({item}) => {

    return(
        // "style={{backgroundColor: item.color}}"  insere a cor que esta em item.color
        <div className={styles.main} style={{backgroundColor: item.color}}>

    <div className={styles.gridIcon}>
     
    {/* //PRIMEIRA FORMA DE COLOCAR A CONDICIONAL */}
        {/* //se for igual a up ira mostra a imagem up.png */}
    {/* {item.icon === 'up' && <img src={upImage} alt="" width="30" />}
    {item.icon === 'down' && <img src={downImage} alt="" width="30" />}
    */}
     
    {/* //PRIMEIRA FORMA DE COLOCAR A CONDICIONAL */}
   {/* //outra forma de colocar  a condicional */}
   <img src={item.icon === 'up' ? upImage : downImage} alt ="" width='30' />

    </div>
    <div className={styles.gridTitle}>{item.title}</div>
    <div className={styles.gridInfo}>
        <>
 {/* // "imc: [0, 18.5]"   pega o primeiro e segundo item do array */}
Imc está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
</>
    </div>
    </div>
    );
}