import React from 'react';
import Menu from './components/Menu/index';
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Menu />
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end? Trabalhando na área" }>
      </BannerMain>
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}/>
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[1]}/>
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[2]}/>
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[3]}/>
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[4]}/>
      <Footer/>
    </div>
  );
}

export default App;
