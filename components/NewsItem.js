import { Badge, Card, Image, Button } from "react-bootstrap";

export default function NewsItem({
  author,
  title,
  description,
  url,
  source,
  image,
  category,
  published_at,
}) {

  const createMarkup = () => {
    return {__html: description}
  }

  const viewNews = () => {
    window.location.href = url
  }

  const stringDate = new Date(published_at);
  return (
    <Card className="mb-3 rounded-3">
      {image && <Image src={image} />}
      <Card.Body>
        <Card.Title className="lh-1">{title}</Card.Title>
        <p className="text-muted mb-2 small">{stringDate.toDateString()}</p>
        <div dangerouslySetInnerHTML={createMarkup()} />
        <div className="mb-2">
          {source && (
            <Badge bg="light" className="border text-muted fw-normal me-2">
              {source}
            </Badge>
          )}
          {author && (
            <Badge bg="light" className="border text-muted fw-normal">
              {author}
            </Badge>
          )}
        </div>
        <Button className="float-end" size="sm" onClick={viewNews}>View Article</Button>
      </Card.Body>
    </Card>
  );
}
