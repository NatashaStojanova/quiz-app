import { Column } from "react-table";
import { TOTAL_QUESTIONS_NUMBER } from "consts/index";
import { IUserScore } from "models/UserScore";

export const columns: Column<IUserScore>[] = [
  { Header: "Ranked", accessor: "id" },
  { Header: "Name", accessor: "user" },
  {
    Header: "Score",
    accessor: "score",
    Cell: ({
      row: { index, original },
    }: {
      row: { index: number; original: IUserScore };
    }) => {
      const { score } = original;
      const isTopThree = index < 3;
      return (
        <>
          {score}/{TOTAL_QUESTIONS_NUMBER} {isTopThree && "🔥"}
        </>
      );
    },
  },
];
