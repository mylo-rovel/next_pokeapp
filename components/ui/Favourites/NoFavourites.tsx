import Image from "next/image"
import type { CSS } from "@nextui-org/react";
import { Container } from "@nextui-org/react";

const outmostContainerStyleObj: CSS | undefined = {
    display: 'flex',
    flexDirection: 'column',
    height: 'calc(100vh - 100px)',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  }
  
  const imageSrcString = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png";
  

export const NoFavourites = () => {
  return (
    <Container css={outmostContainerStyleObj}>
      <h1>No hay favoritos</h1>
      <Image
          src={imageSrcString}
          alt="pokemon no hay favoritos"
          width={250}
          height={250}
          unoptimized
      />
    </Container>
  )
}
