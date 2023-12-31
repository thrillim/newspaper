import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from "../components/NavBar";
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='navbar bg-base-100'>
          <div className='navbar-start'>
            <a className='btn btn-ghost text-xl text-primary'>LOGO</a>
          </div>
          <div className="navbar-center">
            <div className='form-control'>
              <input
                type='text'
                placeholder='Tìm kiếm'
                className='w-20 input input-sm rounded-none	input-bordered border-primary text-primary sm:w-60 md:w-80'
              />
            </div>
          </div>
          <div className='navbar-end gap-1'>
            <button className='btn btn-sm btn-outline normal-case'>
              Đăng ký
            </button>
            <button className='btn btn-sm btn-primary normal-case	text-white'>
              Đăng nhập
            </button>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
