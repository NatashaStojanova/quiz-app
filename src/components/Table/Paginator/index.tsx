import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  PaginatorArrow,
  PaginatorCell,
  PaginatorCellDots,
  PaginatorContent,
  PaginatorWrapper,
} from "./style";

type ContentProps = {
  handlePageChange: (pageNumber: number, params: object) => void;
  currentPage: number;
  lastPage: number;
  params: object;
};

const Content = ({
  handlePageChange,
  lastPage,
  currentPage,
  params,
}: ContentProps) => {
  const isCurrentLast = currentPage === lastPage;
  const isCurrentFirst = currentPage === 1;

  const generatePagination = (currentPage: number, lastPage: number) => {
    const pages = [];
    const range = 2;

    if (currentPage > range + 2) {
      pages.push(1, "dots-left");
    } else {
      for (let i = 1; i < Math.min(currentPage, range + 3); i++) {
        pages.push(i);
      }
    }

    for (
      let i = Math.max(1, currentPage - range);
      i <= Math.min(lastPage, currentPage + range);
      i++
    ) {
      if (!pages.includes(i)) pages.push(i);
    }

    if (currentPage < lastPage - range - 1) {
      pages.push("dots-right", lastPage);
    } else {
      for (let i = currentPage + 1; i <= lastPage; i++) {
        if (!pages.includes(i)) pages.push(i);
      }
    }

    return pages;
  };

  const pagination = generatePagination(currentPage, lastPage);

  return (
    <PaginatorContent p={0} justifyContent="center" alignItems="center">
      <PaginatorArrow
        onClick={() => handlePageChange(currentPage - 1, params)}
        disabled={isCurrentFirst}
        type="button"
      >
        <FontAwesomeIcon icon={faChevronLeft} size="xs" />
      </PaginatorArrow>
      {pagination.map((item, index) => {
        if (item === "dots-left" || item === "dots-right") {
          return (
            <PaginatorCellDots key={`dots-${index}`}>...</PaginatorCellDots>
          );
        }

        return (
          <PaginatorCell
            key={`page-${item}`}
            current={item === currentPage}
            onClick={() => handlePageChange(item as number, params)}
            type="button"
          >
            {item}
          </PaginatorCell>
        );
      })}
      <PaginatorArrow
        onClick={() => handlePageChange(currentPage + 1, params)}
        disabled={isCurrentLast}
        type="button"
      >
        <FontAwesomeIcon icon={faChevronRight} size="xs" />
      </PaginatorArrow>
    </PaginatorContent>
  );
};

type PaginatorProps = {
  lastPage: number;
  currentPage: number;
  handlePageChange: (pageNumber: number, params: object) => void;
  params?: object;
};

export const Paginator = ({
  lastPage,
  currentPage,
  handlePageChange,
  params = {},
}: PaginatorProps) => {
  return lastPage > 1 ? (
    <PaginatorWrapper alignItems="center" justifyContent="center" m="sm">
      <Content
        handlePageChange={handlePageChange}
        currentPage={currentPage}
        lastPage={lastPage}
        params={params}
      />
    </PaginatorWrapper>
  ) : null;
};
