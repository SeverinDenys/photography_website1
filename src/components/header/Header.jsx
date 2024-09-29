export default function Header({ data }) {
  return (
    <>
      <div className="header">
        <div className="header-title">
          {data?.about_me_title && <h1> {data.about_me_title}</h1>}
          {data?.about_me_sub_title && (
            <h2> {data.about_me_sub_title}</h2>
          )}
        </div>
        <div className="header-img">
          {data?.main_picture1 && <img src={data.main_picture1} />}
        </div>
      </div>
      <div className="aboutMe">
        {data?.about_me_description && (
          <h3 className="aboutMe_description">
            {" "}
            {data.about_me_description}
          </h3>
        )}
      </div>
    </>
  );
}
