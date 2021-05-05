import React from "react";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "left",
    margin: theme.spacing(1),
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

const bonds = ["Aluno", "Docente", "Pós-graduando", "Pesquisador"];
function BondForm() {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h4">Vínculo com a USP</Typography>
      <Typography variant="subtitle1">
        Informe o vínculo mais recente do sócio com a universidade
      </Typography>
      <div className={classes.root}>
        {bonds.map((bond) => {
          return (
            <Chip
              color="primary"
              label={bond}
              onClick={(event) => selectBond(event)}
            />
          );
        })}
      </div>
    </>
  );
}

function selectBond(event) {
  console.log(event.target.innerText);
}

export default BondForm;
