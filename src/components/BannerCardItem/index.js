import './index.css'

const BannerCardItem = props => {
  const {BannerCardDetails} = props
  const {headerText, description, imgUrl, className} = BannerCardDetails

  return (
    <li className={`${className} banner-card-item`}>
      <h1 className="banner-card-title">{headerText}</h1>
      <p className="banner-card-description">{description}</p>
      <div className="img-container">
        <img className="card-img" src={imgUrl} alt={title} />
      </div>
      <div>
        <button>Show More</button>
      </div>
    </li>
  )
}

export default BannerCardItem
