'use client';
import React, { useEffect, useState } from 'react';
import NavBar from '../../../components/NavBar';
import {
  IconName,
  HiOutlinePlusSm,
  HiOutlineMinusSm,
  HiSpeakerphone,
  HiBookmark,
} from 'react-icons/hi';

const ArticlePage = ({ params }) => {
  const CATE = {
    top: 'Trang chủ',
    technology: 'Công nghệ',
    world: 'Thế giới',
    business: 'Kinh doanh',
    sports: 'Thể thao',
    entertainment: 'Giải trí',
    science: 'Khoa học',
    health: 'Sức khoẻ',
  };
  const [textSize, setTextSize] = useState('1em'); // Initial text size
  const increaseSize = () => {
    setTextSize((prevSize) => {
      const newSize = parseFloat(prevSize) + 0.1;
      return newSize <= 4 ? newSize + 'em' : prevSize;
    });
  };
  const decreaseSize = () => {
    setTextSize((prevSize) => {
      const newSize = parseFloat(prevSize) - 0.1;
      return newSize >= 1 ? newSize + 'em' : prevSize;
    });
  };
  const [article, setArticle] = useState({
    article_id: '7126667075ba60a95346da583d2717a4',
    title: "'Cắt giảm lao động ở TP HCM có dấu hiệu hạ nhiệt'",
    link: 'https://vnexpress.net/cat-giam-lao-dong-o-tp-hcm-co-dau-hieu-ha-nhiet-4684001.html',
    keywords: null,
    creator: null,
    video_url: null,
    description:
      'Tình hình cắt giảm lao động có dấu hiệu hạ nhiệt khi người đăng ký trợ cấp thất nghiệp giảm gần 25% so với hồi giữa năm, theo lãnh đạo ngành lao động TP HCM.',
    content:
      'Thông tin được ông Lê Văn Thinh, Giám đốc Sở Lao động, Thương binh và Xã hội TP HCM, nói tại hội nghị Ban chấp hành đảng bộ thành phố, chiều 2/12. Theo đó, 11 tháng qua, toàn thành phố có hơn 156.300 người thất nghiệp đăng ký nhận trợ cấp, tăng 9,7% so với cùng kỳ. Tuy nhiên, nếu so với các tháng trong năm số người mất việc có dấu hiệu giảm dần. "Tình hình cắt giảm lao động trên địa bàn có dấu hiệu hạ nhiệt những tháng cuối năm", ông Thinh nói. Cụ thể, tháng 11 có hơn 13.300 người đăng ký nhận trợ cấp thất nghiệp, giảm gần 25% so với lúc cao điểm. Theo đó, hồi tháng 6, thành phố ghi nhận người mất việc tăng vọt với hơn 17.700 người. Tương tự, các tháng tháng 9, 10 con số này lần lượt là hơn 12.100 và 14.200 người. Ông Lê Văn Thinh phát biểu tại hội nghị, chiều 2/12. Ảnh: An Phương Phân tích nguyên nhân, lãnh đạo ngành lao động thành phố cho rằng một số doanh nghiệp sản xuất có đơn hàng phục vụ lễ, hội cuối năm nên thị trường thêm nhiều việc làm. Một số công ty còn có nhu cầu tuyển mới. Tính cả các công việc thời vụ, dịp cuối năm, các doanh nghiệp trên địa bàn có nhu cầu tuyển 20.000 - 25.000 lao động. Theo ông Thinh, còn có một số nguyên nhân khiến tỷ lệ người đăng ký nhận trợ cấp thất nghiệp giảm như cuối năm nhân sự ít "nhảy việc" do liên quan đến lương, thưởng Tết. Các thông tin về điều chỉnh Luật Bảo hiểm xã hội được Quốc hội bàn luận công khai cũng giúp lao động an tâm, bớt xáo trộn. Ông Lê Văn Thinh cho biết trong tháng 12 và đầu năm sau, ngành lao động sẽ tập trung theo dõi, giám sát việc việc trả lương, thưởng Tết và các khoản hỗ trợ trước Tết cho người lao động. Với nhóm mất việc, khó khăn, đơn vị sẽ phối hợp với tổ chức công đoàn chăm lo cho khoảng 139.000 trường hợp, tổng kinh phí 71 tỷ đồng. Ngoài ra, Ủy ban MTTQ thành phố và các quận, huyện có kế hoạch riêng về chăn lo người lao động, diện chính sách dịp Tết. Công nhân Khu chế xuất Tân Thuận, quận 7, sau giờ làm việc, tháng 11/2023. Ảnh: Quỳnh Trần Cũng tại hội nghị Ban chấp hành đảng bộ thành phố hôm nay, Bí thư Thành uỷ Nguyễn Văn Nên, cho biết dự báo tăng trưởng cả năm của thành phố đạt 5,8% (mục tiêu đề ra là 7,5%). Nguyên nhân là tình hình thế giới phức tạp, kinh tế toàn cầu gặp nhiều khó khăn, các yếu tố khó khăn bất lợi đã xuất hiện và vượt ngoài dự báo ban đầu. Về nhiệm vụ năm 2024, Chủ tịch UBND TP HCM Phan Văn Mãi, cho biết ngoài các chỉ tiêu kinh tế - xã hội cụ thể, thành phố sẽ tập trung đẩy mạnh chuyển đổi số và thực hiện hiệu quả Nghị quyết 98 của Quốc hội về thí điểm các cơ chế, chính sách đặc thù phát triển thành phố. Lê Tuyết',
    pubDate: '2023-12-02 13:16:57',
    image_url:
      'https://vcdn1-vnexpress.vnecdn.net/2023/12/02/233a0777-1701521622-6538-1701521677.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=L6u5bqL9KY22YaVGuOWZLw',
    source_id: 'vnexpress',
    source_priority: 4822,
    country: ['vietnam'],
    category: ['top'],
    language: 'vietnamese',
  });

  // const [article, setArticle] = useState(null);

  // useEffect(() => {
  //   const fetchArticle = async () => {
  //     try {
  //       const response = await fetch(`/api/articles/${params.id}`);
  //       const data = await response.json();
  //       setArticle(data);
  //     } catch (error) {
  //       console.error('Error fetching article:', error);
  //     }
  //   };

  //   fetchArticle();
  // }, [articleId]);

  if (!article) {
    return <div>Loading...</div>;
  }

  const comments = [
    {
      id: '656adecd3f64ce73218a084e',
      content: 'bài này hay đấy',
      dislike: 0,
      like: 1,
      name: 'Huan',
    },
  ];

  return (
    <div className='bg-base-100 w-screen'>
      <div id='nav'>
        <NavBar cate={article.category[0]} />
        <div className='text-sm breadcrumbs p-10 pt-5'>
          <ul>
            <li>
              <a href={'http://localhost:3000/' + article.category[0]}>
                {CATE[article.category[0]]}
              </a>
            </li>
            <li>{article.title}</li>
          </ul>
        </div>
      </div>
      <div
        id='content'
        className='flex px-10 gap-10 w-screen'
      >
        <div className='w-11/12'>
          <div id='article'>
            <div className='text-3xl font-bold'>{article.title}</div>
            <p>{article.pubDate.slice(0, 10)}</p>
            <div className='border border-primary my-2 p-10'>
              <img
                src={article.image_url}
                alt='none'
                className='w-full md:w-1/2 md:mx-auto pb-5'
              />
              <p style={{ fontSize: textSize }}>{article.content}</p>
            </div>
          </div>
          <div
            id='comment'
            className='w-full mt-5'
          >
            <div className='text-2xl font-bold'>
              Bình luận ({comments.length})
            </div>
            <form className='my-6'>
              <div className='py-2 px-4 mb-4 bg-base-100 border border-primary '>
                <label
                  for='comment'
                  class='sr-only'
                >
                Bình luận của bạn
                </label>
                <textarea
                  id='comment'
                  rows='2'
                  className='px-0 w-full bg-base-100 text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none'
                  placeholder='Bình luận của bạn...'
                  required
                ></textarea>
              </div>
              <button
                type='submit'
                className='btn inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800'
              >
                Gửi
              </button>
            </form>
          </div>
        </div>
        <div
          id='sideTools'
          className='max-h-screen w-1/12'
        >
          <div className='bg-primary rounded-full h-fit  my-auto fixed mr-20'>
            <button
              onClick={decreaseSize}
              className='text-4xl text-primary bg-base-100 rounded-full w-10 h-10 m-2 pl-0.5'
            >
              <HiOutlineMinusSm />
            </button>
            <button
              onClick={increaseSize}
              className='text-4xl text-primary bg-base-100 rounded-full w-10 h-10 m-2 pt-0.5 pl-0.5'
            >
              <HiOutlinePlusSm />
            </button>
            <button className='text-3xl text-primary bg-base-100 rounded-full w-10 h-10 m-2 pt-1 pl-0.5'>
              <HiSpeakerphone />
            </button>
            <button className='text-3xl text-primary bg-base-100 rounded-full w-10 h-10 m-2 pt-1 pl-1'>
              <HiBookmark />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
