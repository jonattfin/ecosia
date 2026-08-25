import {Pagination, Stack} from "@mui/material";
import {useState} from "react";
import styled from "@emotion/styled";
import {ResultQuery} from "@/app/api/interfaces";

export type SearchListProps = {
  page: number;
  size: number;
  count: number;
  searches: ResultQuery[];
}

export default function Component({
                                    page,
                                    size,
                                    count,
                                    searches,
                                  }: SearchListProps) {

  const [currentPage, setCurrentPage] = useState(1);

  const data = showWindow(searches, PAGE_SIZE, currentPage);
  const numberOfPages = parseInt((searches.length / PAGE_SIZE).toString(), 10);

  const handleChange = (_ev: any, value: number) => {
    setCurrentPage(value)
  };

  return (
    <ExtraSection>
      <Stack spacing={2}>
        {data.map(({url, snippet, name}, index) => (
          <div key={`index_${index}`}>
            <NameDiv>
              <a href={url} target="_blank" rel="noreferrer">
                {name}
              </a>
            </NameDiv>
            <UrlDiv>
              <a href={url} target="_blank" rel="noreferrer">
                {url}
              </a>
            </UrlDiv>
            <div>{snippet}</div>
          </div>
        ))}
      </Stack>
      <h5>{count} results</h5>
      <div>
        <Pagination
          variant="outlined"
          color="primary"
          count={numberOfPages}
          page={currentPage}
          onChange={handleChange}
        />
      </div>
    </ExtraSection>
  );
}

const PAGE_SIZE = 10;

function showWindow(data: Array<any>, pageSize: number, pageNumber = 1) {
  return data.filter((_v, index) => {
    return (
      index >= pageSize * (pageNumber - 1) && index < pageSize * pageNumber
    );
  });
}

// Styled Components

const ExtraSection = styled.section`
  margin: 25px 0;
`;

const NameDiv = styled.div`
  color: #660066;
`;

const UrlDiv = styled.div`
  color: green;
`;
