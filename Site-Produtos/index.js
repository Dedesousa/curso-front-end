  let botaoCadastro = document.getElementById("botaoCadastro");
        let nome = document.getElementById("nome");
        let telefone = document.getElementById("telefone");
        let estado = document.getElementById("estado");
        let cidade = document.getElementById("cidade");
        let numero = document.getElementById("numero");
        let email = document.getElementById("email");
        let btn = document.querySelectorAll(".btn");
        let finalizaCompra = document.getElementById("finalizaCompra");
        let mudaFoto = document.getElementById("mudaFoto");
        let descreverCompra = document.getElementById("descreverCompra");
        let lincou = document.getElementById("lincou");
        let dadosForm = document.getElementById("dadosForm");
        let container = document.querySelector("#container");
    
      for(let i =0; i < btn.length; i++){
        btn[i].addEventListener("click",()=>{
            let produtos = [{
             id:1,   
             marca:"Sansung",
             descricao:"Smart TV LED 40'' Samsung Tizen FHD 40T5300 2020 - WIFI, HDR para Brilho e Contraste, Plataforma Tizen",
             preco:"1.5000",
             garantia: "1 Ano"
            },{
                id:2,
                marca:"lg",
                descricao:" Smart TV OLED 65" +"UHD 4K LG OLED65GX Wi-Fi Bluetooth HDR IA ThinQ AI Hands Free e Alexa + Smart TV LG 65'' 65UN7310 Ultra HD 4K WiFi Bluetooth HDR IA ThinqAI Smart",
                preco:"1.5000",
                garantia: "1 Ano"
            },{
                id:3,
                marca:"Philco",
                descricao:"Smart TV Philco 32"+" PTV32N5SE10H LED HD Conversor Digital 2 HDMI 2 USB Wi-Fi com Netflix e Mais Aplicativos",
                preco:"1.5000",
                garantia: "1 Ano"
            },{
                id:4,
                marca:"Semp",
                descricao:"Smart TV Android LED 32"+" Semp 32S5300 Bluetooth 2 HDMI 1 USB Controle Remoto com Comando de Voz e Google Assistant",
                preco:"1.5000",
                garantia: "1 Ano"
            },{
                id:5,
                marca:"Sansung",
                descricao:" Smart TV LED 32"+" Samsung 32T4300 HD WIFI HDR para Brilho e Contraste Plataforma Tizen 2 HDMI 1 USB - Preto",
                preco:"1.5000",
                garantia: "1 Ano"
            },{
                id:6,
                marca:"lg",
                descricao:" Smart Tv Lg 77"+"4k Oled Wifi Bluetooth Hdr Intelig??ncia Artificial Thinqai Smart Magic Google Assistente Alexa",
                preco:"1.5000",
                garantia: "1 Ano"
            },{
                id:7,
                marca:"Sansung",
                descricao:"Smart TV 43'' Samsung Crystal UHD 43TU7000 4K 2020 Wi-fi Borda Infinita Controle Remoto ??nico Bluetooth e Processador Crystal 4K ",
                preco:"1.5000",
                garantia: "1 Ano"
            },{
                id:8,
                marca:"lg",
                descricao:" Smart TV OLED 65"+" UHD 4K LG OLED65GX Wi-Fi Bluetooth HDR IA ThinQ AI Hands Free e Alexa + Smart TV LG 65'' 65UN7310 Ultra HD 4K WiFi Bluetooth HDR IA ThinqAI Smart",
                preco:"1.5000",
                garantia: "1 Ano"
            }
            ];
            if(i == 0){
                localStorage.setItem("id1",JSON.stringify(produtos[0]));
                comprando.style.display="block";
                mudaFoto.src="src/tvSmart40.jpg";
                descreverCompra.innerText="Smart TV LED 40'' Samsung Tizen FHD 40T5300 2020 - WIFI, HDR para Brilho e Contraste, Plataforma Tizen";

            }
            if(i == 1){
                localStorage.setItem("id2",JSON.stringify(produtos[1])); 
                comprando.style.display="block";
                mudaFoto.src="src/tvled32.jpg";
                descreverCompra.innerText="A LG TV proporciona um novo jeito de ver TV. Com a Intelig??ncia Artificial da LG e seu reconhecimento de voz, voc?? consegue controlar sua TV sem complica????es. Procurar por qualquer informa????o ou conte??do que quiser, basta apenas falar. ";

            }
            if(i == 2){
                localStorage.setItem("id3",JSON.stringify(produtos[2])); 
                comprando.style.display="block";
                mudaFoto.src="src/tv32.jpg";
                descreverCompra.innerText="Smart TV LED 32"+" Samsung 32T4300 HD WIFI HDR para Brilho e Contraste Plataforma Tizen 2 HDMI 1 USB - Preto ";

            }
            if(i == 3){
                localStorage.setItem("id4",JSON.stringify(produtos[3])); 
                comprando.style.display="block";
                mudaFoto.src="src/tvold.jpg";
                descreverCompra.innerText="Smart Tv Lg 77"+" 4k Oled Wifi Bluetooth Hdr Intelig??ncia Artificial Thinqai Smart Magic Google Assistente Alexa  ";

            }
            if(i == 4){
                localStorage.setItem("id5",JSON.stringify(produtos[4])); 
                comprando.style.display="block";
                mudaFoto.src="src/tvsamsung.jpg";
                descreverCompra.innerText=" Smart TV 43'' Samsung Crystal UHD 43TU7000 4K 2020 Wi-fi Borda Infinita Controle Remoto ??nico Bluetooth e Processador Crystal 4K ";

            }
            if(i == 5){
                localStorage.setItem("id6",JSON.stringify(produtos[5])); 
                comprando.style.display="block";
                mudaFoto.src="src/tvle63.jpg";
                descreverCompra.innerText=" Smart TV OLED 65" +"UHD 4K LG OLED65GX Wi-Fi Bluetooth HDR IA ThinQ AI Hands Free e Alexa + Smart TV LG 65'' 65UN7310 Ultra HD 4K WiFi Bluetooth HDR IA ThinqAI Smart";
            }
            if(i == 6){
                localStorage.setItem("id7",JSON.stringify(produtos[6])); 
                comprando.style.display="block";
                mudaFoto.src="src/tv5.jpg";
                descreverCompra.innerText="Smart TV Philco 32" +"PTV32N5SE10H LED HD Conversor Digital 2 HDMI 2 USB Wi-Fi com Netflix e Mais Aplicativos ";
            }
            if(i == 7){
                localStorage.setItem("id8",JSON.stringify(produtos[7])); 
                comprando.style.display="block";
                mudaFoto.src="src/tv6.jpg";
                descreverCompra.innerText="Smart TV Android LED 32" +"Semp 32S5300 Bluetooth 2 HDMI 1 USB Controle Remoto com Comando de Voz e Google Assistant ";
            }
        })
    }
       
       // finaliza compra 
       
      function voltar(){
          comprando.style.display="none";
      }
      finalizaCompra.addEventListener("click",voltar);

      function teste(){
        let formulario = [{
            nome:nome.value,
            telefone:telefone.value,
            estado:estado.value,
            cidade:cidade.value,
            bairro:bairro.value,
            email:email.value
        }];
    
         let dados = localStorage.setItem("salvaDados", JSON.stringify(formulario)); 
    }
     botaoCadastro.addEventListener("click",teste);
       function abrir(){
         dadosForm.style.display="block";
         container.style.display="none";
       }
     lincou.addEventListener("click",abrir);
