import React from 'react';
import a3x from '../../assets/Bulova/Celular/Xiomi/a3x.png';
import CardRelogio from '../../Components/CardRelogio';


const Loja = () =>{
    return(
        <>
            <section className="">
                <div className="container">
                    <div className="row">
                        <h2 className="d-flex justify-content-center mt-3 mb-3">Produtos *Tela em Desenvolvimento*</h2>

                        {/* Coluna 1 */}          
                            <CardRelogio image={a3x} valor="5.711,20" />                                      
                            <CardRelogio image={a3x} valor="2.421.00" />                                      
                            <CardRelogio image={a3x} valor="3.141,00" />                                      
                            <CardRelogio image={a3x} valor="5.391,00" />    
                    </div>
                </div>
            </section>
        </>
    );
}

export default Loja;