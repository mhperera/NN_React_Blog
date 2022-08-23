import { useState } from "react";

const Create = () => {

    const [ title, setTitle ] = useState('');
    const [ body, setBody ] = useState('');
    const [ author, setAuthor ] = useState('S Mario');

    return ( 
        <div className="create">
            
            <h2>Add a New Blog</h2>

            <form>

                <label>Blog Title : </label>
                <input 
                    type="text" 
                    required
                    value={ title }
                    onChange = {(e)=>setTitle(e.target.value)}
                /> 

                <label>Blog Body : </label>
                <textarea
                    required
                    value={ body }
                    onChange = {(e)=>setBody(e.target.value)}
                ></textarea>

                <label>Blog Author : </label>
                <select
                    required
                    value={ author }
                    onChange = {(e)=>setAuthor(e.target.value)}
                >
                    <option value="S Mario">S Mario</option>
                    <option value="Jonathan F">Jonathan F</option>
                    <option value="Bucky Robberts">Bucky Robberts</option>
                    <option value="Luke Bean">Luke Bean</option>
                </select>

                <button>Add Blog</button>

                <p>{ title }</p>
                <p>{ body }</p>
                <p>{ author }</p>

            </form>

        </div>
    );
}
 
export default Create;