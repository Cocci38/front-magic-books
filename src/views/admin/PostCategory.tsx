import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";

type FormData = {
    name: string,
};
export const PostCategory = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const onSubmit: SubmitHandler<FormData> = (data: any) => {
        //console.log(data);
        axios
            .post(
                'http://localhost/magic-books/backend/create/category',
                console.log({data}),
                
                {data},
                // { headers: { 'Content-Type': 'application/json' } }
            )
            .then(response => { console.log(response.data) })
            .catch(error => { console.log(error.data) });
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} method='POST'>
            <label>Nom de la catégorie</label>
            <input type="text" id="name" {...register("name")} />
            <button type="submit">Enregistrer</button>
        </form>
    )
}