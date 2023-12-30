import { useEffect, useState } from "react";
import Section3 from '../views/Home/ChallengeFit';

const JsonServer = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        let fetchData = async () => {
            try {
                let response = await fetch('YOUR_API_ENDPOINT'); // Replace 'YOUR_API_ENDPOINT' with your actual API URL
                let jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <JsonServer />
            <Section3 data={data} />
        </>
    );
};

export default JsonServer;
