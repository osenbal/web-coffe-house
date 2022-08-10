import React, { useState } from "react";

import CardNews from "./CardNews/CardNews";
import dataNews from "./dataNews";

import "./News.modules.css";

const News = () => {
  const [news] = useState(dataNews);

  return (
    <section className="news" id="news">
      <div className="container container__section">
        <div className="section__header">
          <h3>News</h3>
          <span></span>
          <p>
            Stay updated on all the latest Coffee House products, events &
            community news.
          </p>
        </div>
        <div className="news__content">
          <div className="content row mt-5">
            {news &&
              news.map((item, index) => {
                return (
                  <div key={index} className="col-lg-4 col-12">
                    <CardNews {...item} />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
