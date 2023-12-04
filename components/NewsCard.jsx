const NewsCard = (props) => {
  const link = "article/"+props.article.article_id;
  return (
    <a href={link} className="card card-compact w-full bg-base-100 shadow-xl border border-primary rounded-md">
      <figure className="h-1/2"><img src={props.article.image_url} alt="none" className="min-h-full min-w-full object-cover"/></figure>
      <div className="card-body">
        <h2 className="card-title text-primary">{props.article.title}</h2>
      </div>
    </a>
  )
}

export default NewsCard;