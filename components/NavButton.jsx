// import Link from 'next/link'

const NavButton = (props) => {
  const link="http://localhost:3000/"+props.nav;
  return props.active ?
    <a href={link} className='btn btn-sm btn-primary text-white'>{props.content}</a> :
    <a href={link} className='btn btn-sm btn-ghost'>{props.content}</a>;
};

export default NavButton;