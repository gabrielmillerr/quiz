import { Botao } from "./styles";

export function Button({ title, evento, classe }) {
  return(
  <Botao 
    className=""
    type="button"
    onClick={evento}
  > { title } </Botao>
  );
}