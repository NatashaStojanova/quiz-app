import { Column } from "react-table";
import { IUserScore } from "models/UserScore";

export const columns: Column<IUserScore>[] = [
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
          {score}/10 {isTopThree && "🔥"}
        </>
      );
    },
  },
];
