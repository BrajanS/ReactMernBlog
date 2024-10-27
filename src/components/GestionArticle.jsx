import React, { useEffect, useState } from 'react';
import '../App.css'; // Import the CSS file

export default function GestionArticle() {
  const [articles, setArticles] = useState([]);
  const [newArticle, setNewArticle] = useState({ title: '', content: '' });
  const [editArticle, setEditArticle] = useState(null);

  const fetchArticles = async () => {
    try {
      const response = await fetch('http://localhost:3035/article');
      const data = await response.json();
      setArticles(data);
    } catch (error) {
      console.error('Erreur lors de la récupération des articles:', error);
    }
  };

  const createArticle = async () => {
    try {
      const response = await fetch('http://localhost:3035/article', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newArticle),
      });

      if (response.ok) {
        fetchArticles();
        setNewArticle({ title: '', content: '' });
      }
    } catch (error) {
      console.error('Erreur lors de la création de l\'article:', error);
    }
  };

  const updateArticle = async (id) => {
    try {
      const response = await fetch(`http://localhost:3035/article/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editArticle),
      });

      if (response.ok) {
        fetchArticles();
        setEditArticle(null); // Réinitialise l'état editArticle
      }
    } catch (error) {
      console.error('Erreur lors de la mise à jour de l\'article:', error);
    }
  };

  const deleteArticle = async (id) => {
    try {
      const response = await fetch(`http://localhost:3035/article/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        fetchArticles();
      }
    } catch (error) {
      console.error('Erreur lors de la suppression de l\'article:', error);
    }
  };

  const cancelEdit = () => {
    setEditArticle(null); // Réinitialise l'état editArticle
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div className="gestion-article">
      <h1>Gestion des Articles</h1>

      <div className="article-list">
        {articles.map(article => (
          <div key={article._id} className="article-item">
            <label>Titre:</label>
            <h3 className='py-1 pl-2 rounded-[5px] border-solid border-[#0000004f] border-[1px]'>{article.title}</h3>
            <label>Contenu:</label>
            <p className='py-1 pl-2 rounded-[5px] border-solid border-[#0000004f] border-[1px]'>{article.content}</p>
            <button onClick={() => setEditArticle(article)} className="edit-button">Edit</button>
            <button onClick={() => deleteArticle(article._id)} className="delete-button">Delete</button>
          </div>
        ))}
      </div>

      <div className="new-article-form">
        <h2>Ajouter un article</h2>
        <label htmlFor="new-title">Titre:</label>
        <input
          type="text"
          id="new-title"
          placeholder="Titre"
          value={newArticle.title}
          onChange={(e) => setNewArticle({ ...newArticle, title: e.target.value })}
          className="input-field"
        />
        <label htmlFor="new-content">Contenu:</label>
        <textarea
          id="new-content"
          placeholder="Contenu"
          value={newArticle.content}
          onChange={(e) => setNewArticle({ ...newArticle, content: e.target.value })}
          className="textarea-field"
        />
        <button onClick={createArticle} className="create-button">Créer</button>
      </div>

      {editArticle && (
        <div className="edit-article-form">
          <h2>Modifier l'article</h2>
          <label htmlFor="edit-title">Titre:</label>
          <input
            type="text"
            id="edit-title"
            value={editArticle.title}
            onChange={(e) => setEditArticle({ ...editArticle, title: e.target.value })}
            className="input-field"
          />
          <label htmlFor="edit-content">Contenu:</label>
          <textarea
            id="edit-content"
            value={editArticle.content}
            onChange={(e) => setEditArticle({ ...editArticle, content: e.target.value })}
            className="textarea-field"
          />
          <button onClick={() => updateArticle(editArticle._id)} className="update-button">Modifier</button>
          <button onClick={cancelEdit} className="cancel-button">Annuler</button> {/* Bouton pour annuler l'édition */}
        </div>
      )}
    </div>
  );
}
