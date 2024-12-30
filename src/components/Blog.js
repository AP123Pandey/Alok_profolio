import Link from "next/link";

const Blog = () => {
  return (
    <section
      id="blog"
      data-nav-tooltip="Blog"
      className="pp-section pp-scrollable section"
    >
      <div className="container">
        <div className="title">
          <h3>Latest Project.</h3>
        </div>
        <div className="row">
          <div className="col-md-6 m-15px-tb">
            <div className="blog-grid">
              <div className="blog-img">
                <Link href="/single-blog">
                  <a>
                    <img className="img22" src="static/img/img_1.png" title="" alt="" />
                  </a>
                </Link>
              </div>
              <div className="blog-info">
                <div className="meta">29/FEB/2024 - WEBSITE </div>
                <h6>
                  <Link href="/single-blog">
                    <a>
                    The project is built entirely with React and fully functional.
                    </a>
                  </Link>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 m-15px-tb">
            <div className="blog-grid">
              <div className="blog-img">
                <Link href="/single-blog">
                  <a>
                    <img  className="img22" src="static/img/img_2_of_netflix_clone.png" title="" alt="" />
                  </a>
                </Link>
              </div>
              <div className="blog-info">
                <div className="meta">15/Apr/2024 - WEBSITE </div>
                <h6>
                  <Link href="/single-blog">
                    <a>
                    Netflix clone only the frontend-part,
                    utilizing React and its frameworks for learning purpose.
                    </a>
                  </Link>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 m-15px-tb">
            <div className="blog-grid">
              <div className="blog-img">
                <Link href="">
                  <a>
                    <img className="img22" src="static/img/Admin_img.jpg" title="" alt="" />
                  </a>
                </Link>
              </div>
              <div className="blog-info">
                <div className="meta">29/FEB/2022 - WEBSITE - 1 COMMENT</div>
                <h6>
                  <Link href="">
                    <a>
                    The project is built entirely with React and fully functional for admin dashboard.
                    </a>
                  </Link>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 m-15px-tb">
            <div className="blog-grid">
              <div className="blog-img">
                <Link href="">
                  <a>
                    <img className="img22" src="static/img/getfly.png" title="" alt="" />
                  </a>
                </Link>
              </div>
              <div className="blog-info">
                <div className="meta">Devlope - WEBSITE </div>
                <h6>
                  <Link href="">
                    <a>
                    I developed a professional website for Getlfy Technologies. 
                    
                    </a>
                  </Link>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-12 read-more-blog text-center">
            <Link href="/">
              <a className="px-btn px-btn-theme">More Projects</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Blog;

