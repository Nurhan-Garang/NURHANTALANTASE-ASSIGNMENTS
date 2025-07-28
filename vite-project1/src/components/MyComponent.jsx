import { userEffect,useState }from 'react';
import axios from 'axios';

const MyComponent =() => {
    const [data,setData]=useState(null);
    const[loading,setLoading]=useState(true);
    const[error,setError]=useState(null);

    userEffect(() => {
       
        const fetchData = async () => {
            try{
            const response=await axios.get('https://api.example.com/data');
            setData(response.data);
        } catch(err){
            setError(err);
        }finally{
            setLoading(false);
        }
    };
        fetchData();
    },[]);
  
    if(loading)return<p>Loading...</p>;
    if(error)return<p>Error:{error.message}</p>
    return(
        <div>
            {data?<pre>{JSON.stringify(data,null,2)}</pre> :<p>Loading...</p>}
        </div>
    );
};

export default MyComponent;