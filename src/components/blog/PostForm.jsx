import React, { useState } from "react";
import supabase from "../../utils/client";

export default function PostForm() {
    const [error, setError] = useState(null);

  const insertRecord = async (title, content) => {
    const { data, error } = await supabase
      .from("posts")
      .insert([{ title, content, usuario: localStorage.getItem("user")}])
      .select();
    if (error) setError("Ocorreu um erro ao adicionar o post");
    else setError(null);
    window.location.reload()
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const content = e.target.content.value;
    insertRecord(title, content);
    e.target.reset();
  };

  return (
    <>
    {error && <div className="alert alert-danger">{error}</div>}
        <form action="#" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
            Título
        </label>
        <input type="text" className="form-control" id="title" />
      </div>
      <div className="mb-3">
        <label htmlFor="content" className="form-label">
          Conteudo
        </label>
        <textarea className="form-control" id="content" rows="3"></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Enviar
      </button>
    </form>
    </>
    
  );
}
