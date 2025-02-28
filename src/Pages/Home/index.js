import React from 'react'
import './style.css'
import CardRelogio from '../../Components/CardRelogio';
import a3x from '../../assets/Bulova/Celular/Xiomi/a3x.png';
import a3 from '../../assets/Bulova/Celular/Xiomi/a3.png';
import note60 from '../../assets/Bulova/Celular/Xiomi/note60.png';
import m6pro from '../../assets/Bulova/Celular/Xiomi/m6pro.png';
import cel from '../../assets/pocox6.mp4';
const Home = () =>{
    return(
        <>
            <section className="background-video">
                <div className="d-flex justify-content-center">
                    <video class="video" controls muted loop src={cel} type="video/mp4"></video>  
                </div>
            </section>

            <section className="">
                <div className="container">
                    <div className="row">
                        <h2 className="d-flex justify-content-center">Mais Vendidos</h2>
                        <CardRelogio image={a3} valor="799,00" desc={
    <>
        📱 <strong>Redmi A3 64GB/3GB</strong><br />              
        💾 <strong>Memória Interna de 64GB com Expansão</strong><br />       
        📺 <strong>Enorme Tela Touchscreen de 6.7 polegadas</strong><br />
        💎 Resolução de 1650x720 pixels para imagens nítidas e claras.<br />     
        📸 <strong>Câmera de 8MP para Fotos Fantásticas</strong><br />
        📷 Fotos com resolução de 3266x2449 pixels e vídeos em Full HD (1920x1080 pixels).<br />
        📏 <strong>Design Fino e Portátil</strong><br />
        🌟 Apenas 8.3mm de espessura, tornando o Redmi A3 fácil de transportar.<br /><br />
    </>
}/>            
                        <CardRelogio image={a3x} valor="899,00" desc={
    <>
        📱 <strong>Redmi A3X 128GB/4GB</strong><br />    
        🔹 <strong>Tela Imersiva de 6.71” com 90Hz</strong><br />
        📺 Imagens suaves e vibrantes para jogos, vídeos e navegação.<br /><br />
        🔋 <strong>Bateria Duradoura de 5000mAh</strong><br />
        ⚡ Carregamento rápido USB-C de 10W para um dia inteiro sem preocupações.<br /><br />
        📷 Câmera principal de 13MP + lente auxiliar + câmera frontal de 5MP com anel 
    </>}/>     
                        <CardRelogio image={note60} valor="1.010,00" desc={
                            <>
                            📱 <strong>Realme Note 60 256GB/4GB</strong><br />
                            ⚡ Chipset octa-core para alto desempenho em jogos e multitarefas;<br />
                            🔄 Memória RAM dinâmica de até 12GB + 256GB de armazenamento interno;<br />
                            🎮 Tela de 90Hz para navegação fluida e experiência visual aprimorada;<br />
                            📸 Câmera de 32MP para fotos nítidas e de alta definição.<br />
                        </>
                        }/>                                     
                        <CardRelogio image={m6pro} valor="1.520,00" desc={
    <>
    📱 <strong>POCO M6 Pro 256GB/8GB</strong><br />
        🌐 Tela AMOLED de 6.67", resolução 2400x1080;<br />
        📸Câmera de 64MP, fotos 9238x6928px, vídeos Full HD (1920x1080);<br />
    </>
}/>  
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;