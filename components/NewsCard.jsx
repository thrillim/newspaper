const NewsCard = (props) => {
  return (
    <a href="/abcs" className="card card-compact w-full bg-base-100 shadow-xl">
      <figure className="h-1/2"><img src={props.article.image_url} alt="none" className="min-h-full min-w-full object-cover"/></figure>
      <div className="card-body">
        <h2 className="card-title text-primary">{props.article.title}</h2>
      </div>
    </a>
  )
}

export default NewsCard;