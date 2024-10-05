import React from "react";

export default function AuthorInfo({ data }) {
  return (
    <div className="authorInfo">
      <div className="authorInfo__img">
        {data?.author_img && (
          <img src={data.author_img} alt="Author" />
        )}
      </div>
      <div className="authorInfo__title">
        {data?.author.author_title && (
          <h1>{data?.author.author_title}</h1>
        )}
      </div>
      <div className="authorInfo__subTitle">
        {data?.author.author_subTitle && (
          <h3>{data?.author.author_subTitle}</h3>
        )}
      </div>
      <div className="authorInfo__description">
        {data?.author.author_description1 && (
          <p>{data?.author.author_description1}</p>
        )}

        {data?.author.author_description2 && (
          <p>{data?.author.author_description2}</p>
        )}

        {data?.author.author_description3 && (
          <p>{data?.author.author_description3}</p>
        )}
      </div>
    </div>
  );
}
