import { Badge, Card, Image, Button } from "react-bootstrap";

export default function NewsItem({
  id,
  pillarName,
  sectionName,
  webPublicationDate,
  webTitle,
  webUrl,
}) {
  const stringDate = new Date(webPublicationDate);
  return (
    <Card className="mb-3 rounded-3">
      <Card.Body>
        <Card.Title className="lh-1">{webTitle}</Card.Title>
        <p className="text-muted mb-2 small">{stringDate.toDateString()}</p>
        <div className="mb-2">
          <Badge bg="light" className="border text-muted fw-normal me-2">
            {pillarName}
          </Badge>
          <Badge bg="light" className="border text-muted fw-normal">
            {sectionName}
          </Badge>
        </div>
        <Button
          variant="primary"
          className="float-end"
          size="sm"
          onClick={() => (window.location.href = webUrl)}
        >
          View Article
        </Button>
      </Card.Body>
    </Card>
  );
}
