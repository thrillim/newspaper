import NavBar from "../../components/NavBar";
import NewsCard from '../../components/NewsCard';

// Newspaper page
const HomePage = ({ params }) => {
    return (
      <div className="newspaper-page bg-base-100">
        <div className="p-5 gap-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </div>
    );
}

export default HomePage;
