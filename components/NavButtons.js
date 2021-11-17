import { Button, ButtonGroup } from "react-bootstrap";

export default function NavButtons({ showNext, showPrev, currentPage, total }) {
  return (
    <div>
      <ButtonGroup>
        {currentPage !== 1 && <Button onClick={showPrev}>Prev</Button>}
        {total !== currentPage && <Button onClick={showNext}>Next</Button>}
      </ButtonGroup>
    </div>
  );
}
