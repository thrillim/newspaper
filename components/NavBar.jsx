import React from 'react';
import NavButton from './NavButton';

const NavBar = (props) => {
  const CATE = {
    top: 'Trang chủ',
    technology: 'Công nghệ',
    world: 'Thế giới',
    business: 'Kinh doanh',
    sports: 'Thể thao',
    entertainment: "Giải trí",
    science: "Khoa học",
    health: "Sức khoẻ"
  };
  return (
    <nav>
      <div className='navbar bg-secondary'>
        <div className='flex-1 gap-1'>
          {Object.entries(CATE).map((couple) => {
            return (
              <NavButton
                nav={couple[0]}
                active={couple[0] === props.cate}
                content={couple[1]}
              />
            );
          })}
        </div>
        <div className='dropdown dropdown-end'>
          <div
            tabIndex={0}
            role='button'
            className='btn m-1 btn-sm btn-primary normal-case text-white md:hidden'
          >
            Tất cả chuyên mục
          </div>
          <ul className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52'>
          {Object.entries(CATE).map((couple, index) => {
            if (index !== 0) {
              return (
                <li key={couple[0]}>
                  <a href={couple[0]} className="text-primary">{couple[1]}</a>
                </li>
              );
            }
          })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
