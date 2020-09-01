import React from 'react';
import Header from '../Header/HeaderComponent'
import data from "../../JsonData/articles.json";
import './style.scss';

export const Home = () => {
    return (
        <div className="home">
            <Header/>
            <div className="article">
            {
              data.map((article) => {
                  return <div>
                      <img src={article.image} alt="" className="art-img"/>
                      <div>{article.author} </div>
                      <button>show more</button>
                      <div>{article.description} </div>
                  </div>
              })
            }
            </div>
        </div>
    );
}

export default Home;
