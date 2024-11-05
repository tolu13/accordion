import useFetch from ".";


export default function UseFetchHookTest(){
    const {data, error, pending} = useFetch('https://dummyjson.com/products', {})
    console.log(error, data, pending);
    
    return <div>
        <h3>use Fetch Hook</h3>
        {
            pending ? <h4>Pending ! please waIT </h4> : null
        }
        {
            error ? <h2>{error}</h2> : null
        }
        {
            data && data.products && data.products.length ?
            data.products.map(productItem => <p key={productItem.key}>{productItem.title}</p>)
            : null
        }
    </div>
}