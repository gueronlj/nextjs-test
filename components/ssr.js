import useSWR from 'swr';
import axios from 'axios';

function SSR( ) { 
    const URL = `https://hangrypanda-backend.herokuapp.com/checklist`
    const fetchData = async () => {
        try {
            const response = await axios.get(`${URL}`)
            return response.data
        } catch (error) {
            console.log(`Error fetching data`, error);
        }
    }

    const { data, error, isLoading } = useSWR(`${URL}`, fetchData)
    
    if (error) {
        return(<p>Error fetching data</p>)
    }
    
    if ( isLoading){
        return (<h1>LOading...</h1>)
    }

    return ( 
        <div> 
            <h1>I got this from the server!</h1> 
            {data.map((item) => {
                return (
                    <div key={item._id}>
                        <p style={item.status||item.quantity>0?{color:"green"}:{color:"red"}}>{item.name}</p>
                        <p>{item.quantity}</p>
                    </div>)
            })}
        </div> 
    ); 
} 

export default SSR; 