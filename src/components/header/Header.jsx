import Navbar from "../navbar/Navbar";

export default function Header({ data }) {
  return (
    <>
      <Navbar />
      <div className="header">
        <div className="header-title">
          {data?.about_me_title && <h1> {data.about_me_title}</h1>}

          {data?.about_me_sub_title && (
            <h2> {data.about_me_sub_title}</h2>
          )}
        </div>
        <div className="header-img">
          {data?.main_picture1 && (
            <img src={data.main_picture1} alt={"image"} />
          )}
        </div>
      </div>
    </>
  );
}
