import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalMallIcon from '@mui/icons-material/LocalMall';
function SideBarAdmin() {
    return(
        <div>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div>
                    <h1>WonderLine</h1>
                </div>

             <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <AccountCircleIcon />
                <LocalMallIcon />
             </div>
           </div>
        </div>

    ) 
}
export default SideBarAdmin