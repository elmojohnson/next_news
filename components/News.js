import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Row, Col, Spinner, Form } from "react-bootstrap";
import NewsItem from "../components/NewsItem";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const News = () => {
  // Vars, states
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(10);
  const [loadingButton, setLoadingButton] = useState(true);
  const [showButton, setShowButton] = useState(true);

  // Use Effect
  useEffect(() => {
    getNews();
  }, []);

  // Funcs
  const getNews = async () => {
    setLoadingButton(true);
    limit === limit && setLimit(limit + 10);
    const data = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=au&pageSize=${limit}&apiKey=79414c232982492faa1a6a7339124041`
    );
    setNews(data.data.articles);
    setLoading(false);
    setLoadingButton(false);
    limit >= data.data.totalResults && setShowButton(false);
  };

  // Load more news
  const loadMore = () => {
    setLimit(limit + 5);
    getNews();
  };

  return (
    <div className="container mt-4 mb-4">
      <p className="fs-10 text-uppercase">NEWS</p>
      {loading ? (
        <Skeleton height={200} count={3} />
      ) : (
        <div>
          {news.map((n, i) => {
            return (
              <NewsItem
                key={i}
                author={n.author}
                title={n.title}
                description={n.description}
                url={n.url}
                source={n.source.name}
                image={n.urlToImage}
                category={n.category}
                published_at={n.publishedAt}
              />
            );
          })}

          <Row>
            <Col xs={6} md={8} lg={8}>
              {loadingButton ? (
                <Button className="w-100" disabled>
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                  &nbsp; Loading...
                </Button>
              ) : showButton ? (
                <Button className="w-100" onClick={loadMore}>
                  Load More
                </Button>
              ) : (
                <Button className="w-100" disabled>
                  End of news articles
                </Button>
              )}
            </Col>
            <Col xs={6} md={4} lg={4}>
              <Button
                variant="outline-primary"
                className="w-100"
                onClick={() => window.scrollTo(0, 0)}
              >
                Back to top
              </Button>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
};

export default News;
