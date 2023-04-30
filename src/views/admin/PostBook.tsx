import React from 'react';
import axios from "axios";
//import { error } from "console";
//import ReactDOM from "react-dom";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormData {
    title: string;
    author_id: number;
    editor: string;
    summary: string;
    release_date: string;
    cover: string;
    category_id: number;
    // status: number;
    // description: string;
    // date: Date;
    // location: string;
    // firstname: string;
    // lastname: string;
    // email: string;
};

//const baseURL = "http://localhost/magic-books/backend/create/book";

export const PostBook = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    // const { register, handleSubmit } = useForm();
    const onSubmit = async ({data}: any) => {
        // await axios
        //     // .post('http://localhost/magic-books/backend/create/book', data, { headers: { 'Content-Type': 'application/json' } })
        //     .post('http://localhost/magic-books/backend/create/book', data, {
        //         headers: {
        //             'Access-Control-Allow-Headers': 'Content-Type',
        //             'Accept': 'application/json',
        //             'Content-Type': 'application/json',
        //             'Access-Control-Allow-Origin': '*',
        //             'Access-Control-Allow-Methods': 'POST',
        //             // 'Access-Control-Allow-Credentials': false,
        //         }
        //     })
            
        //     .then((res) => { console.log(res.data) })
        //     .catch((error) => {
        //         console.log(error);
        //     });
        await axios({
            method: "post",
            headers: { 'Content-Type': 'application/json'},
            url: `http://localhost/magic-books/backend/create/book`,
            //withCredentials: true,
            data,
        })
        .then((res) => { console.log(res.data) })
        .catch((error) => {
            console.log(error);
        });
    };

    //const [postBook, setPostBook] = React.useState(null);

    // React.useEffect(() => {
    //     axios.post(`http://localhost/magic-books/backend/create/book`).then((res) => {
    //         setPostBook(res.data);
    //     });
    // }, []);

    // const createBook = async () => {



    //     axios.post(baseURL, {
    //         title: "",
    //         author_id: "",
    //         editor: "",
    //         summary: "",
    //         release_date: "",
    //         cover: "",
    //         category_id: ""
    //     })
    //         .then((res) => {
    //             setPostBook(res.data);
    //         });
    // }

    // if (!postBook) {
    //     return "Pas de livre"
    // }

    return (
        // <form onSubmit={handleSubmit(onSubmit)}>
        //     <input type="text" name="title" id="title" {...register("title")} />
        //     <input type="text" name="author_id" id="author_id" />
        //     <input type="text" name="editor" id="editor" />
        //     <textarea name="summary" id="summary" ></textarea>
        //     <input type="date" name="release_date" id="release_date" />
        //     <input type="file" name="cover" id="cover" />
        //     <input type="text" name="category_id" id="category_id" />
        //     <button type="submit">Enregistrer</button>
        // </form>
        <form onSubmit={handleSubmit(onSubmit)} method='POST'>
            <label>Titre</label>
            <input type="text" id="title" {...register("title")} />
            <label>Auteur</label>
            <input type="text" id="author_id" {...register("author_id")} />
            <label>Éditeur</label>
            <input type="text" id="editor" {...register("editor")} />
            <label>Description</label>
            <textarea id="summary" {...register("summary")} ></textarea>
            <label>Date de sortie</label>
            <input type="date" id="release_date" {...register("release_date")} />
            <label>Image de couverture</label>
            <input type="file" id="cover" {...register("cover")} />
            <label>Catégorie</label>
            <input type="text" id="category_id" {...register("category_id")} />
            <button type="submit">Enregistrer</button>
        </form>
        // <form onSubmit={handleSubmit(onSubmit)}>
        //     <label>Status</label>
        //     <input type="text" id="status" {...register("status")} />
        //     <label>Lieux</label>
        //     <input type="text" id="location" {...register("location")} />
        //     <label>Description</label>
        //     <textarea id="description" {...register("description")} ></textarea>
        //     <label>Date de sortie</label>
        //     <input type="date" id="date" {...register("date")} />
        //     <label>Nom</label>
        //     <input type="text" id="lastname" {...register("lastname")} />
        //     <label>Catégorie</label>
        //     <input type="text" id="firstname" {...register("firstname")} />
        //     <label>Catégorie</label>
        //     <input type="email" id="email" {...register("email")} />
        //     <button type="submit">Enregistrer</button>
        // </form>
    );

}