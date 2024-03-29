import { useRouteError } from "react-router-dom";

export function ErroPage() {
  const error = useRouteError();
  console.log(error);


  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected erros has ocurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )


}