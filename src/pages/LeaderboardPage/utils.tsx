import { Column } from "react-table";
import { TOTAL_QUESTIONS_NUMBER } from "consts/index";
import { IUserScore } from "models/UserScore";

export const columns: Column<IUserScore>[] = [
  { Header: "Ranked", accessor: "id" },
  { Header: "Name", accessor: "user" },
  {
    Header: "Score",
    accessor: "score",
    Cell: ({ row: { original } }: { row: { original: IUserScore } }) => {
      const { id, score } = original;
      const isTopThree = Number(id) <= 3;
      return (
        <>
          {score}/{TOTAL_QUESTIONS_NUMBER} {isTopThree && "🔥"}
        </>
      );
    },
  },
];
