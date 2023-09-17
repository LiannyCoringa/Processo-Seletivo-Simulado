import { DataType } from "./types";

async function Fetch() {
  const API = "http://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100";
  const response = await fetch(API);
  const data: DataType = await response.json();
  return data.items;
}

export default Fetch;
