import "../styles/add.scss";
import { GridColDef } from "@mui/x-data-grid";

type Props = {
    columns: GridColDef[];
    slug: string;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }; 

const Add = (props:Props) => {
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //add new item
    // mutation.mutate();
    props.setOpen(false)
  };

  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => props.setOpen(false)}>
          X
        </span>
        <h1>Add new {props.slug}</h1>
        
        {/* handleSubmit Form for new user */}
        <form onSubmit={handleSubmit}>
          {props.columns
          .filter((item) => item.field !== "id" && item.field !== "img")
            .map((column) => (
              <div className="item">
                <label>{column.headerName}</label>
                <input type={column.type} placeholder={column.field} />
              </div>
            ))}
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Add
