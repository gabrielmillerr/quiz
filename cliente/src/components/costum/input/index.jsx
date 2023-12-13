import { Container } from "./styles";

export function Input({type, evento, placeholder}) {
  return (
    <Container
    type = { type }
    onBlur={ evento }
    placeholder={ placeholder }
    >
    </Container>
  )
}