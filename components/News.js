import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import NewsItem from "../components/NewsItem";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import NavButtons from "./NavButtons";

const News = () => {
  // Vars, states
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState();
  const titleRef = useRef();

  // Use Effect
  useEffect(() => {
    getNews();
  }, []);

  // Funcs
  const getNews = async () => {
    const data = await axios.get(
      `https://content.guardianapis.com/search?api-key=d7a7f67c-fa61-4aac-9c34-2a48f90b8ec0&page=${currentPage}`
    );
    setNews(data.data.response.results);
    setCurrentPage(data.data.response.currentPage);
    setTotal(data.data.response.total);
    setLoading(false);
  };

  // Load more news
  const showNext = () => {
    window.scrollTo(0, titleRef.current.offsetTop);
    setLoading(true);
    setCurrentPage(currentPage++);
    getNews();
  };

  const showPrev = () => {
    window.scrollTo(0, titleRef.current.offsetTop);
    setLoading(true);
    setCurrentPage(currentPage--);
    getNews();
  };

  return (
    <div className="container mt-4 mb-4">
      {loading ? (
        <Skeleton height={100} count={4} />
      ) : (
        <div>
          <p className="fs-10 text-uppercase" ref={titleRef}>
            NEWS
          </p>
          {news.map((n, i) => {
            return (
              <NewsItem
                key={i}
                id={n.id}
                pillarName={n.pillarName}
                sectionName={n.sectionName}
                webPublicationDate={n.webPublicationDate}
                webTitle={n.webTitle}
                webUrl={n.webUrl}
              />
            );
          })}

          <Row>
            <Col xs={6} md={8} lg={8}>
              <NavButtons
                showNext={showNext}
                showPrev={showPrev}
                currentPage={currentPage}
                total={total}
              />
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
