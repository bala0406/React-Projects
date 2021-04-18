import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        const blog = { title, body, author };

        setIsLoading(true);

        fetch("http://localhost:8000/blogs", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(blog),
        }).then(() => {
            setIsLoading(false);
            history.push("/");
        });
    };
    return (
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={(event) => handleSubmit(event)}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(event) => setBody(event.target.value)}
                ></textarea>
                <label>Blog author</label>
                <select
                    value={author}
                    onChange={(event) => setAuthor(event.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!isLoading && <button>Add Blog</button>}
                {isLoading && <button disabled>Adding Blog...</button>}
            </form>
        </div>
    );
};

export default Create;
