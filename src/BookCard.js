import React from "react";

export default function BookCard (prop){
    return (
        <div class="card-container">
        <img
          src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
          alt="Books"
          height="200"
        />
        <div class="desc">
          <h2><a href={prop.id}>{prop.title}</a></h2>
          <h3>{prop.author}</h3>
          <p>{prop.description}</p>
        </div>
        
        <div class="card-btns">
               <button type="button" class="btn btn-outline-danger" onClick={()=>{prop.delete(prop.id)}}>X</button>
          </div>
      </div>
    );
}
    