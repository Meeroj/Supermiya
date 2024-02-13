import StartSpeedNumber from "../components/SpeedNumber/StartSpeedNumber";
import { useSelector } from "react-redux";


const SpeedNumber = () => {
    const {}= useSelector(state=>state.number)
    return(<StartSpeedNumber />)

}    

export default SpeedNumber;
