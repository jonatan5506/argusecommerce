import React from 'react';
import a3x from '../../assets/Bulova/Celular/Xiomi/a3x.png';
import redmi13 from '../../assets/Bulova/Celular/Xiomi/redmi13.png';
import pococ75 from '../../assets/Bulova/Celular/Xiomi/pococ75.png';
import CardRelogio from '../../Components/CardRelogio';


const Loja = () =>{
    return(
        <>
            <section className="">
                <div className="container">
                    <div className="row">
                        <h2 className="d-flex justify-content-center mt-3 mb-3">Produtos *Tela em Desenvolvimento*</h2>

                        {/* Coluna 1 */}          
                            <CardRelogio image={redmi13} valor="1.200,00" desc={
    <>
        📱 <strong>Redmi 13 128GB/6GB</strong><br />    
        📱 <strong>Redmi 13 256GB/8GB</strong><br />    
    🔹 <strong>Tela Imersiva de 6.79” LCD IPS</strong><br />
    📺 Resolução Full HD+ (1080 x 2460) para imagens vibrantes e detalhadas.<br />
    ⚡ <strong>Desempenho Poderoso</strong><br />
    🚀 Processador Helio G91 Ultra e 6GB de RAM para fluidez em multitarefas e jogos.<br />
    📷 <strong>Câmera de Alta Resolução</strong><br />
    📸 108MP traseira para fotos incríveis + 13MP frontal para selfies nítidas.<br />
    🔋 <strong>Bateria Duradoura de 5030mAh</strong><br />
    ⚡ Energia para o dia todo com carregamento rápido USB-C.<br /> 
    </>}/>                                      
                            <CardRelogio image={pococ75 } valor="1.070.00" desc={
                                <>
                                📱 <strong>POCO C75 128GB/6GB NFC</strong><br />    
                                📱 <strong>POCO C75 256GB/8GB NFC</strong><br /> 
                                📱 <strong>Display Imersivo de 6.88”</strong><br />                           
                                🔋 <strong>Bateria Gigante de 5160mAh</strong><br />
                                ⚡ Longa duração para uso prolongado e suporte para carregamento rápido de 18W.<br /><br />
                            
                                📸 <strong>Câmera Dupla AI de 50MP</strong><br />
                            </>                            
                            }/>                                      
                            <CardRelogio image={a3x} valor="3.141,00" />                                      
                            <CardRelogio image={a3x} valor="5.391,00" />    
                    </div>
                </div>
            </section>
        </>
    );
}

export default Loja;