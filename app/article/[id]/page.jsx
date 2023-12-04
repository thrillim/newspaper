'use client';
import React, { useEffect, useState } from 'react';
import NavBar from '../../../components/NavBar';
import Speaker from '../../../components/Speaker';

import {
  IconName,
  HiOutlinePlusSm,
  HiOutlineMinusSm,
  HiBookmark,
} from 'react-icons/hi';
import { TbLineHeight } from 'react-icons/tb';

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
  const [lineHeight, setLineHeight] = useState(1.5);
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
  const changeLineHeight = () => {
    setLineHeight((prevHeight) => {
      const newHeight = prevHeight + 0.5;
      return newHeight <= 4 ? newHeight : 1.5;
    });
  }

  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(
          `http://localhost:3002/news/search?article_id=${params.id}`
        );
        const data = await response.json();
        console.log(data.result[0]);
        setArticle(data.result[0]);
      } catch (error) {
        console.error('Error fetching article:', error);
      }
    };
    fetchArticle();
  }, [params.id]);

  const comments = [
    {
      id: '656adecd3f64ce73218a084e',
      content: 'bài này hay đấy',
      dislike: 0,
      like: 1,
      name: 'Huan',
    },
  ];

  const sentences = article?.content?.split('. ') || [];
  const paragraphs = [];
  for (let i = 0; i < sentences.length; i += 3) {
    const paragraphSentences = sentences.slice(i, i + 3);
    // console.log(paragraphSentences);
    const temp = paragraphSentences.join('. ');
    // console.log(temp)
    const paragraph = (
      <div className='py-2'>
        {temp}.
        <Speaker content={temp} />
      </div>
    );
    paragraphs.push(paragraph);
  }

  return !article ? (
    <div className='bg-base-100 text-center pt-10'>Loading...</div>
  ) : (
    <div className='bg-base-100 w-screen text-primary'>
      <div id='nav'>
        <NavBar cate={article?.category[0]} />
        <div className='text-sm breadcrumbs p-10 pt-5'>
          <ul>
            <li>
              <a href={'http://localhost:3000/' + article?.category[0]}>
                {CATE[article?.category[0]]}
              </a>
            </li>
            <li>{article?.title}</li>
          </ul>
        </div>
      </div>
      <div
        id='content'
        className='flex px-10 gap-10 w-screen'
      >
        <div className='w-11/12'>
          <div id='article'>
            <div className='text-3xl font-bold'>{article?.title}</div>
            <p>{article?.pubDate.slice(0, 10)}</p>
            <div className='border border-primary my-2 p-10'>
              <img
                src={article?.image_url}
                alt='none'
                className='w-full md:w-1/2 md:mx-auto pb-5'
              />
              <div style={{ fontSize: textSize, lineHeight: lineHeight }}>{paragraphs}</div>
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
            <button
              onClick={changeLineHeight}
              className='text-4xl text-primary bg-base-100 rounded-full w-10 h-10 m-2 pt-0.5 pl-0.5'
            >
              <TbLineHeight />
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
