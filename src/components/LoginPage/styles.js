import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(
  (theme) => {
    return {
      mainContainer: {
        width: "100vw",
        height: "100vh",
        background: "url(/img/bg-login.jpg) center center",
        backgroundSize: "cover"
      },
      card: {
        width: "80vw",
        maxWidth: "450px",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        textAlign: "center"
      }
    }
  }
)
