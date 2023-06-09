import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { StoreState } from "../../redux/store";
import { doneSlice } from "../../redux/slice/done";
import ColumnLayout from "../ColumnLayout";
import "../../styles/index.css";

export function DoneColumn() {
  const { done } = useSelector((state: StoreState) => state);
  const {
    actions: { completeStatus, remove, add, updateTextShowed },
  } = doneSlice;

  return (
    <>
      <Typography mb={3}>All done tasks: {done.length}</Typography>
      <div className="container_content__card">
        <ColumnLayout
          droppableId="done"
          labelText="Type 'done' item"
          completedHandler={completeStatus}
          removeHandler={remove}
          addHandler={add}
          selectorState={done}
          updateTextShowed={updateTextShowed}
        />
      </div>
    </>
  );
}
