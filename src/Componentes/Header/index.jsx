import "./style.css"

export function Header(props) {

    return (
    <header>
      <h1>{props.title}</h1>
      <h2>{props.subTitulo}</h2>
    </header>
  );
}
