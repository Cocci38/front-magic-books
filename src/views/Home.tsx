import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


interface Props{}
export const Home: React.FC<Props> = () => {

    const [books, setBooks] = useState<any>([]);

    const fetchBooks = async () => {
        await axios
            .get('http://localhost/magic-books/backend/books')
            .then((res) => {
                //console.log(res.data)
                setBooks(res.data)
                
            })
            .catch((err) => {
                console.log(err)
                
            })
    }
    useEffect(() =>{
        fetchBooks()
    },[]);
    

    return (
        <main>
            <h1>Magic book</h1>
            <p>Magic book est une application dédié aux livres et aux lecteurs. Il permet de créer et d’organiser sa bibliothèque
                en ligne, d’obtenir des informations sur des œuvres.</p>

            <section>{!books ? '' : books
                    .map((book:any) => (
                    <div key={book.id} className="bookContainer">
                        <h2><Link to={'/book/' + book.id}>{ book.title }</Link></h2>
                        <p className="paragraphFlex"><span className="paragraphName">Auteur</span><span>{ book.author }</span></p>
                        <p className="paragraphFlex"><span className="paragraphName">Date de sortie</span><span> { new Date(book.release_date).toLocaleDateString("fr-FR") }</span> </p>
                        <p className="paragraphFlex"><span className="paragraphName">Catégorie</span><span>{ book.name }</span></p>
                        <p className="paragraphFlex"><span className="paragraphName">Résumé</span><span>{ book.summary.substring(0, 100) }</span></p>
                    </div>
                    
            ))}</section>
        </main>
    )
}
