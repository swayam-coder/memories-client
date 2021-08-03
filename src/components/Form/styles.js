import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: "center",
      padding: "20px 20px 20px 20px",
      position: "fixed",
      [theme.breakpoints.down("md")]: {
        position: "static",
      },
    //   '& > *': {
    //     margin: theme.spacing(1),
    //     width: theme.spacing(16),
    //     height: theme.spacing(16),
    //   },
    },
  }));