import { useEffect, useState } from 'react';
import Fetch from '../fetch';
import { NewsType } from '../types';

const INITIAL_STATE = [{
  id: 37865,
  tipo: "Notícia",
  titulo: " Inflação fica em 0,23% em agosto, influenciada pelo aumento da energia elétrica", introducao: "Aumento de 4,59% na energia elétrica residencial foi influenciado pelo fim da incorporação do Bônus de Itaipu, creditado nas faturas do mês anterior - Foto: Helena Pontes/Agência IBGE Notícias A inflação do mês de agosto foi de 0,23%, ficando 0,11 ponto...",
  data_publicacao: "12/09/2023 09:00:00",
  produto_id: 0,
  produtos: "9256|Índice Nacional de Preços ao Consumidor Amplo|indice-nacional-de-precos-ao-consumidor-amplo|2210;9258|Índice Nacional de Preços ao Consumidor|indice-nacional-de-precos-ao-consumidor|2077",
  editorias: "economicas",
  imagens: "",
  produtos_relacionados: "9256, 9258",
  destaque: true,
  link: "http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/37865-inflacao-fica-em-0-23-em-agosto-influenciada-pelo-aumento-da-energia-eletrica.html"
}];

function Highlights() {
  const [data, setData] = useState<NewsType[]>(INITIAL_STATE);

  useEffect(() => {
    const searchAPI = async () => {
      const dataNews = await Fetch();
      setData(dataNews);
    };
    searchAPI();
  }, []);


  return (
    <main>
      <img src={ data[0].imagens } alt="noticias" />
      <p>Notícia mais recente</p>
      <h2>{ data[0].titulo }</h2>
      <p>{ data[0].introducao }</p>
      <p>{ data[0].data_publicacao }</p>
      <a href={ data[0].link } target="_blank">Leia a notícia aqui</a>
    </main>
  )
}

export default Highlights;