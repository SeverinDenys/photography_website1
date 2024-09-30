export default function Header({ data }) {
  return (
    <>
      <div className="header">
        <div className="header-title">
          {data?.about_me_title && <h1> {data.about_me_title}</h1>}
          <div className="hamburgerIcon">
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 18L20 18"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M4 12L20 12"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M4 6L20 6"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </div>
          {data?.about_me_sub_title && (
            <h2> {data.about_me_sub_title}</h2>
          )}
        </div>
        <div className="header-img">
          {data?.main_picture1 && <img src={data.main_picture1} />}
        </div>
      </div>
    </>
  );
}
