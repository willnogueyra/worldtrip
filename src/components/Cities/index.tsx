import {Heading, Grid} from "@chakra-ui/react"
import City from "./City"

export default function Cities() {
  return (
    <>
      <Heading
        fontWeight="500"
        fontSize={["2xl", "4xl"]}
        mb="10"
      >
        Cidades +100
      </Heading>

      <Grid 
        templateColumns={["1fr", "1fr 1fr", "repeat(3, 1fr)", "repeat(4, 1fr)"]}
        gap={["20px", "45px"]}
        alignItem="center"
        justifyContent="center"
        px={["30px", "0"]}
      >
        <City imagem="londres" pais="Reino Unido" cidade="Londres" bandeira="uk"/>
        <City imagem="paris" pais="França" cidade="Paris" bandeira="fr"/>
        <City imagem="roma" pais="Itália" cidade="Roma" bandeira="ita"/>
        <City imagem="praga" pais="República Tcheca" cidade="Praga" bandeira="rep"/>
        <City imagem="amsterda" pais="Holanda" cidade="Amsterdã" bandeira="hol"/>
      </Grid>
    </>
  );
}