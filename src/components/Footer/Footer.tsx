const Footer = () => {
  return (
    <>
      <footer className="text-[#abb7c4] text-sm font-['Nunito'] md:text-left text-center bg-[url('/banner-bg.jpeg')] bg-cover">
        <div className="container mx-auto">
          <div className="flex flex-col items-center gap-5 py-20 lg:gap-16 md:flex-row md:items-stretch">
            <div className="flex flex-col justify-between md:w-1/4">
              <img
                className="mx-auto w-36 md:mx-0"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/FPT_Polytechnic.png/1200px-FPT_Polytechnic.png"
                alt=""
              />
              <div>
                <p className="mt-10 mb-4 font-light lg:mt-0">
                  13 Trịnh Văn Bô, Phương Canh, Nam Từ Liêm, TP.Hà Nội
                </p>
                <div className="font-light">
                  SĐT:{" "}
                  <span className="text-lg font-light text-white">
                    (024) 7300 1955
                  </span>
                </div>
              </div>
            </div>
            <div className="grid gap-8 md:w-2/4 sm:gap-3 sm:grid-cols-3 ">
              <div>
                <h4 className="text-lg font-bold text-white mb-7">Thông tin</h4>
                <ul className="space-y-1.5">
                  <li>
                    <a href="#">Giới thiệu</a>
                  </li>
                  <li>
                    <a href="#">Liên hệ</a>
                  </li>
                  <li>
                    <a href="#">Diễn đàn</a>
                  </li>
                  <li>
                    <a href="#">Bài viết</a>
                  </li>
                  <li>
                    <a href="#">Trung tâm trợ giúp</a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-7">
                  Chính sách
                </h4>
                <ul className="space-y-1.5">
                  <li>
                    <a href="#">Điều khoản sử dụng</a>
                  </li>
                  <li>
                    <a href="#">Chính sách bảo mật</a>
                  </li>
                  <li>
                    <a href="#">Các câu hỏi thường gặp</a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-7">Tài khoản</h4>
                <ul className="space-y-1.5">
                  <li>
                    <a href="#">Tài khoản của tôi</a>
                  </li>
                  <li>
                    <a href="#">Danh sách theo dõi</a>
                  </li>
                  <li>
                    <a href="#">Bộ sưu tập</a>
                  </li>
                  <li>
                    <a href="#">Yêu thích</a>
                  </li>
                  <li>
                    <a href="#">Hướng dẫn sử dụng</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:w-1/4">
              <h4 className="text-lg font-bold text-white mb-7">
                Đăng ký nhận tin
              </h4>
              <p>Đăng ký để nhận tin tức mới nhất từ chúng tôi.</p>
              <div className="relative mt-4 mb-5">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Nhập email..."
                  className=" placeholder:text-xs h-8 w-full py-1.5 pl-3 pr-8 outline-none bg-transparent border border-[#405266] rounded"
                />
                <div className="absolute top-0 right-0 flex items-center justify-center w-8 h-8">
                  <i className="fa-regular fa-envelope" />
                </div>
              </div>
              <button className="text-[#F27221] uppercase font-semibold">
                Đăng ký ngay <i className="fa-solid fa-chevron-right" />
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-[#405266] py-4">
          <div className="container mx-auto text-center">
            © 2024 FPT Polytechnic. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
