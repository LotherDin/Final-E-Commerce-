import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import iconaSearch from '../../assets/iconaSearch.png';
import wl from '../../assets/wl.png';
function SideBarHome() {
    return (
        <div style={{width: '100%'}}>
            <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '100%', backgroundColor: 'rgb(222 222 222)'}}>
                <div>
                    <img src={iconaSearch} width="30" alt="search" />
                </div>
                
                <div>
                    <img src={wl} width="100" alt="" />
                </div>
                

             <div style={{display: 'flex', justifyContent: 'space-between',gap:"10px" }}>
                <button style={{backgroundColor:"transparent", border:"none",cursor:"pointer"}}>Login</button>
                <AccountCircleIcon />
                <LocalMallIcon />
             </div>
           </div>
           <div style={{width:'100%',backgroundColor:"rgb(222 222 222)", height:"1px"}}>
           <div style={{width:"80%", height:"1px", backgroundColor:"#80808059", marginLeft:"10%",marginRight:"10%"}}></div>

           </div>
           
        </div>
    )
}
export default SideBarHome