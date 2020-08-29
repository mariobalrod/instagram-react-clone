import React, { useEffect, useContext ,useState} from "react";
import { Auth } from "../context/AuthContext";
import { withRouter } from "react-router";
import { db } from '../firebase/Config';

// Components
import Header from '../components/Header';
import Posts from '../components/Posts';
import UploadModal from '../components/UploadModal';

const Home = ({history}) => {

    const { user } = useContext(Auth);
    const [ name, setName ] = useState("");
    const [ posts, setPosts ] = useState([]);

    useEffect(() => {
        if (user===null) {
            history.push("/");
        }
        user?user.displayName?setName(user.displayName):setName(user.email):setName(null)
    }, [history, user]);

    useEffect(() => {
        
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            // every time a new post is added
            setPosts(snapshot.docs.map(doc => ({
                id: doc.id,
                post: doc.data()
            })));
        })
    }, []);

    return (
        <div>
            <Header name={name} />
            <UploadModal username={name}/>
            <Posts posts={posts} name={name}/>
        </div>
    )
}

export default withRouter(Home);
