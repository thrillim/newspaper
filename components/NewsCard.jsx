const NewsCard = (props) => {
  return (
    <a href="/abcs" className="card card-compact w-full bg-base-100 shadow-xl">
      <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title text-primary">Shoes! Each child in a list should have a unique "key" prop.</h2>
      </div>
    </a>
  )
}

export default NewsCard;