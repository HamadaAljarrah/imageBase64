import React, { useEffect, useState } from "react";

const ImagePage = (props: any) => {
    const [image, setImage] = useState();

    useEffect(() => {
        (async () => {
            const response = await fetch("http://localhost:4000/image");
            const result = await response.json();
            setImage(result.data);
        })();
    }, []);

    return (
        <div>
            <img src={image} alt="" />
        </div>
    );
};

export default ImagePage;
