import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import { CountryFetch} from './actions'; 

const CountryComponents = () => {
    const { loading, error, products } = useSelector((state) => state.products); 
    const dispatch = useDispatch(); 
    console.log(products);
    

    useEffect(() => {
        dispatch(CountryFetch()); 
    }, [dispatch]); 

    // return (
    //     <div>
    //         {loading && <p>Loading...</p>}
    //         {error && <p>{error}</p>}
    //         <ul>
    //             {products.map((product, index) => (
    //                 <li key={index}>{product.title}</li> 
    //             ))}
    //         </ul>
    //     </div>
    // );
};

export default CountryComponents;
