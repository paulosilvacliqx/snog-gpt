import {
  ChakraProvider,
  Box,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import imgTeste from '../../../assets/imgs/img-carousel.png';

export function DataTable() {
  return (
    <ChakraProvider>
      <Box p={6} className="w-1200 h-150 bg-white mt-6">
        <Table>
          <Thead>
            <Tr>
              <Th color={"#949494"} textTransform="revert-layer">Experiências</Th>
              <Th color={"#949494"} textTransform="revert-layer">Preço</Th>
              <Th color={"#949494"} textTransform="revert-layer">Pessoas</Th>
              <Th color={"#949494"} textTransform="revert-layer">Valor Total</Th>
              <Th color={"#949494"} textTransform="revert-layer">Consultor</Th>
              <Th color={"#949494"} textTransform="revert-layer">Data de Compra</Th>
            </Tr>
          </Thead>

          <Tbody>
            <Tr>
              <Td className="w-80">
                <div className="flex items-center">
                  <img className="w-14 h-14" src={imgTeste} alt="Imagem Itália" />
                  <h1 className="font-normal text-base text-B300 ml-4">Conheça Cultura da Itália</h1>
                </div>
              </Td>
              <Td className="font-normal text-base text-B300">R$ 1.500,00</Td>
              <Td className="font-normal text-base text-B300">01</Td>
              <Td className="font-normal text-base text-B300">R$ 1.500,00</Td>
              <Td className="font-normal text-base text-B300">[nomedoconsultor]</Td>
              <Td className="font-normal text-base text-B300">00/00/0000</Td>
            </Tr>
          </Tbody>
          
          <Tbody>
            <Tr>
              <Td className="w-80">
                <div className="flex items-center">
                  <img className="w-14 h-14" src={imgTeste} alt="Imagem Itália" />
                  <h1 className="font-normal text-base text-B300 ml-4">Conheça Cultura da Itália</h1>
                </div>
              </Td>
              <Td className="font-normal text-base text-B300">R$ 1.500,00</Td>
              <Td className="font-normal text-base text-B300">01</Td>
              <Td className="font-normal text-base text-B300">R$ 1.500,00</Td>
              <Td className="font-normal text-base text-B300">[nomedoconsultor]</Td>
              <Td className="font-normal text-base text-B300">00/00/0000</Td>
            </Tr>
          </Tbody>

          <Tbody>
            <Tr>
              <Td className="w-80">
                <div className="flex items-center">
                  <img className="w-14 h-14" src={imgTeste} alt="Imagem Itália" />
                  <h1 className="font-normal text-base text-B300 ml-4">Conheça Cultura da Itália</h1>
                </div>
              </Td>
              <Td className="font-normal text-base text-B300">R$ 1.500,00</Td>
              <Td className="font-normal text-base text-B300">01</Td>
              <Td className="font-normal text-base text-B300">R$ 1.500,00</Td>
              <Td className="font-normal text-base text-B300">[nomedoconsultor]</Td>
              <Td className="font-normal text-base text-B300">00/00/0000</Td>
            </Tr>
          </Tbody>

          <Tbody>
            <Tr>
              <Td className="w-80">
                <div className="flex items-center">
                  <img className="w-14 h-14" src={imgTeste} alt="Imagem Itália" />
                  <h1 className="font-normal text-base text-B300 ml-4">Conheça Cultura da Itália</h1>
                </div>
              </Td>
              <Td className="font-normal text-base text-B300">R$ 1.500,00</Td>
              <Td className="font-normal text-base text-B300">01</Td>
              <Td className="font-normal text-base text-B300">R$ 1.500,00</Td>
              <Td className="font-normal text-base text-B300">[nomedoconsultor]</Td>
              <Td className="font-normal text-base text-B300">00/00/0000</Td>
            </Tr>
          </Tbody>
          <Tbody>
            <Tr>
              <Td className="w-80">
                <div className="flex items-center">
                  <img className="w-14 h-14" src={imgTeste} alt="Imagem Itália" />
                  <h1 className="font-normal text-base text-B300 ml-4">Conheça Cultura da Itália</h1>
                </div>
              </Td>
              <Td className="font-normal text-base text-B300">R$ 1.500,00</Td>
              <Td className="font-normal text-base text-B300">01</Td>
              <Td className="font-normal text-base text-B300">R$ 1.500,00</Td>
              <Td className="font-normal text-base text-B300">[nomedoconsultor]</Td>
              <Td className="font-normal text-base text-B300">00/00/0000</Td>
            </Tr>
          </Tbody>

        </Table>
      </Box>
    </ChakraProvider>
  );
}