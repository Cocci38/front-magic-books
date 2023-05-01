import React from 'react';
import axios from "axios";
//import { error } from "console";
//import ReactDOM from "react-dom";
import { useForm, SubmitHandler } from "react-hook-form";

type FormData = {
    // title: string;
    // author_id: number;
    // editor: string;
    // summary: string;
    // release_date: string;
    // cover: string;
    // category_id: number;
    title: string,
    author_id: number,
    editor: string,
    summary: string,
    release_date: string,
    cover: string,
    category_id: number,
};

//const baseURL = "http://localhost/magic-books/backend/create/book";

export const PostBook = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    // const { register, handleSubmit } = useForm();
    //const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);
    // const onSubmit: SubmitHandler<FormData> = (data) => {
    //     console.log(data);
    //     let newData = JSON.stringify({data});
    //     console.log(newData);

    //     axios
    //         .post(
    //             'http://localhost/magic-books/backend/create/book',
    //             newData,
    //             { headers: { 'Content-Type': 'application/json' } }
    //         )
    //         .then((res) => { console.log(res.data) })
    //         .catch((error) => { console.log(error.newData) });
    // };
    // const onSubmit: SubmitHandler<FormData> = async ({ data }: any) => {
    //     console.log(data);
    //     await axios
    //         .post('http://localhost/magic-books/backend/create/book', data, { headers: { 'Content-Type': 'application/json' } })
    //         .then((res) => { console.log(res.data) })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // };
    const onSubmit: SubmitHandler<FormData> = (data: any) => {
        // console.log(data);
        axios
            .post(
                'http://localhost/magic-books/backend/create/book',
                data = FormData,
                { headers: { 'Content-Type': 'application/json' } }
            )
            .then(response => { console.log(response.data) })
            .catch(error => { console.log(error.data) });
    };
    // const onSubmit: SubmitHandler<FormData> = async ({data}: any) => {
    // await axios({
    //     method: "post",
    //     headers: { 'Content-Type': 'application/json'},
    //     url: `http://localhost/magic-books/backend/create/book`,
    //     data,
    // })
    // .then((res) => { console.log(res.data) })
    // .catch((error) => {
    //     console.log(error);
    // });
    // };

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