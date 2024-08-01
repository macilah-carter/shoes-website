import { useEffect, useState } from 'react'


const Fetch = (url) => {
    const [shoes, setShoes] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        const token = localStorage.getItem('token');
        fetch(url,{
            method:"GET",
            headers: {
                'Authorization': `Bearer ${token}`
            },
        })
        .then((res) => {
            if (!res.ok){
                throw Error("could not get data")
                
            }
            return res.json()
        })
        .then((data) => {
            // console.log(data)
            setShoes(data)
            setError(null)
        })
        .catch((error) => {
            setError(error.message)
        })
    },[url])
    return { shoes, error }
}

export default Fetch;