import { useEffect, useState } from "react";
import { projectFireStore } from "../firebase/config";

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const unsubscribe = projectFireStore
            .collection(collection)
            .orderBy("createdAt", "desc")
            .onSnapshot((snap) => {
                let documents = [];
                snap.forEach((doc) => {
                    documents.push({ ...doc.data(), id: doc.id });
                });
                setDocs(documents);
            });

        return () => unsubscribe();
    }, [collection]);
    return {docs};
};

export default useFirestore;
