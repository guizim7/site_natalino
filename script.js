

document.addEventListener('DOMContentLoaded', function() {

    const cartaForm = document.getElementById('carta-form');
    const contatoForm = document.getElementById('contato-form');
    const modal = document.getElementById('modal');
    const closeModal = document.getElementById('modal-close');
    const closeBtn = document.querySelector('.close');
    
 
    criarEfeitoNeve();
    
 
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
  
    if (cartaForm) {
        cartaForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
           
            const nome = document.getElementById('nome').value;
            const idade = document.getElementById('idade').value;
            const presentes = document.getElementById('presentes').value;
            
            if (!nome || !idade || !presentes) {
                alert('Por favor, preencha todos os campos obrigatórios.');
                return;
            }
            
         
            console.log('Carta enviada:', {
                nome: nome,
                idade: idade,
                cidade: document.getElementById('cidade').value,
                comportamento: document.getElementById('comportamento').value,
                presentes: presentes,
                mensagem: document.getElementById('mensagem').value
            });
            
   
            mostrarModal();
            
   
            cartaForm.reset();
        });
    }
    

    if (contatoForm) {
        contatoForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
 
            const nome = document.getElementById('contato-nome').value;
            const email = document.getElementById('contato-email').value;
            const mensagem = document.getElementById('contato-mensagem').value;
            
            if (!nome || !email || !mensagem) {
                alert('Por favor, preencha todos os campos obrigatórios.');
                return;
            }
         
            console.log('Mensagem de contato enviada:', {
                nome: nome,
                email: email,
                assunto: document.getElementById('contato-assunto').value,
                mensagem: mensagem
            });
            
       
            alert('Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.');
            
      
            contatoForm.reset();
        });
    }
    
modal
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }
    
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }
    
   
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    

    function mostrarModal() {
        modal.style.display = 'block';
    }
    
  
    function criarEfeitoNeve() {
        const snowContainer = document.createElement('div');
        snowContainer.className = 'snow-container';
        snowContainer.style.position = 'fixed';
        snowContainer.style.top = '0';
        snowContainer.style.left = '0';
        snowContainer.style.width = '100%';
        snowContainer.style.height = '100%';
        snowContainer.style.pointerEvents = 'none';
        snowContainer.style.zIndex = '1';
        document.body.appendChild(snowContainer);
     
        for (let i = 0; i < 50; i++) {
            criarFlocoNeve(snowContainer);
        }
    }
    
 
    function criarFlocoNeve(container) {
        const floco = document.createElement('div');
        floco.innerHTML = '❄';
        floco.style.position = 'absolute';
        floco.style.color = 'white';
        floco.style.fontSize = Math.random() * 10 + 10 + 'px';
        floco.style.opacity = Math.random() * 0.5 + 0.5;
        floco.style.left = Math.random() * 100 + 'vw';
        floco.style.animation = `nevar ${Math.random() * 5 + 5}s linear infinite`;
        floco.style.animationDelay = Math.random() * 5 + 's';
        
        container.appendChild(floco);
        

        if (!document.querySelector('#snow-animation')) {
            const style = document.createElement('style');
            style.id = 'snow-animation';
            style.textContent = `
                @keyframes nevar {
                    0% {
                        transform: translateY(-10px) rotate(0deg);
                    }
                    100% {
                        transform: translateY(100vh) rotate(360deg);
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }
    

    const tituloCarta = document.querySelector('.carta-section h2');
    if (tituloCarta) {
        const textoOriginal = tituloCarta.textContent;
        tituloCarta.textContent = '';
        
        let i = 0;
        const digitar = () => {
            if (i < textoOriginal.length) {
                tituloCarta.textContent += textoOriginal.charAt(i);
                i++;
                setTimeout(digitar, 100);
            }
        };
  
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    digitar();
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(tituloCarta);
    }
});