import NavBar from "../../components/NavBar";

// Header component
// class Header extends React.Component {
//   render() {
//     return (
//       <div className="header">
//         <h1>{this.props.category}</h1>
//       </div>
//     );
//   }
// }

// News component
// class NewsComponent extends React.Component {
//   render() {
//     return (
//       <div className="news-component">
//         <img src={this.props.image} alt={this.props.title} />
//         <h2>{this.props.title}</h2>
//       </div>
//     );
//   }
// }

// Newspaper page
const NewspaperPage = ({ params }) => {
    return (
      <div className="newspaper-page">
        <div></div>
        {/* <Header category="Sports" />

        <div className="news-grid">
          <NewsComponent
            image="news1.jpg"
            title="Breaking News 1"
          />
          <NewsComponent
            image="news2.jpg"
            title="Breaking News 2"
          />
          <NewsComponent
            image="news3.jpg"
            title="Breaking News 3"
          />
          <NewsComponent
            image="news4.jpg"
            title="Breaking News 4"
          />
        </div> */}
      </div>
    );
}

export default NewspaperPage;
