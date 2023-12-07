import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
const BtnSlider = ({direction , moveSlide}) => {
    return ( 
        <button  className={direction === "next" ? "btn-slide next" : "btn-slide prev"}onClick={moveSlide}>
           {direction === "next" && <ArrowForwardRoundedIcon></ArrowForwardRoundedIcon>}
           {direction === "prev" && <ArrowBackRoundedIcon></ArrowBackRoundedIcon>} 
        </button>
     );
}
 
export default BtnSlider;