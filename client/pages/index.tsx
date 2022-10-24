import type { NextPage } from "next";
import { useForm } from "react-hook-form";

const Home: NextPage = () => {
    const { register, handleSubmit } = useForm();

    const convertToBase64 = async (file: File) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => resolve(fileReader.result);
            fileReader.onerror = (error) => reject(error);
        });
    };

    const onSubmit = async (data: any) => {
        const image = await convertToBase64(data.image[0]);
        const dataToSend = {
            name: "hamada",
            image: image,
        };
        const res = await fetch("http://localhost:4000/upload", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataToSend),
        });
        console.log(await res.json());
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="file"
                    accept=".jpeg, .png, .jpg"
                    {...register("image")}
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Home;
