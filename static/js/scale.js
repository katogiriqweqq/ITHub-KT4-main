document.addEventListener('DOMContentLoaded', function() {
    const sizeButtons = document.querySelectorAll('.menu-size-btn');
    
    sizeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const altText = this.alt.toLowerCase();
            let mode = '';
            
            if (altText.includes('desktop')) {
                mode = 'responsive-desktop';
            } else if (altText.includes('laptop')) {
                mode = 'responsive-laptop';
            } else if (altText.includes('tablet')) {
                mode = 'responsive-tablet';
            } else if (altText.includes('phone-horizontal')) {
                mode = 'responsive-phone-horizontal';
            } else if (altText.includes('phone')) {
                mode = 'responsive-phone';
            }
            
            applyResponsiveMode(mode);
        });
    });
    
    function applyResponsiveMode(mode) {
        const body = document.body;
        body.classList.remove(
            'responsive-desktop',
            'responsive-laptop',
            'responsive-tablet',
            'responsive-phone-horizontal',
            'responsive-phone'
        );
        
        body.classList.add(mode);
        
        updateViewport(mode);
    }
    
    function updateViewport(mode) {
        let viewport = document.querySelector('meta[name="viewport"]');
        
        if (!viewport) {
            viewport = document.createElement('meta');
            viewport.name = 'viewport';
            document.head.appendChild(viewport);
        }
        
        switch(mode) {
            case 'responsive-desktop':
                viewport.content = 'width=1200, initial-scale=1.0';
                break;
            case 'responsive-laptop':
                viewport.content = 'width=1024, initial-scale=1.0';
                break;
            case 'responsive-tablet':
                viewport.content = 'width=768, initial-scale=1.0';
                break;
            case 'responsive-phone-horizontal':
                viewport.content = 'width=667, initial-scale=1.0';
                break;
            case 'responsive-phone':
                viewport.content = 'width=375, initial-scale=1.0';
                break;
            default:
                viewport.content = 'width=device-width, initial-scale=1.0';
        }
    }
    
    addResponsiveStyles();
    
    function addResponsiveStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .responsive-desktop .card-holder {
                grid-template-columns: repeat(2, 1fr);
                max-width: 1200px;
                margin: 0 auto;
            }
            
            .responsive-laptop .card-holder {
                grid-template-columns: repeat(2, 1fr);
                max-width: 1024px;
                margin: 0 auto;
            }
            
            .responsive-tablet .card-holder {
                grid-template-columns: repeat(2, 1fr);
                max-width: 768px;
                margin: 0 auto;
            }
            
            .responsive-phone-horizontal .card-holder {
                grid-template-columns: repeat(1, 1fr);
                max-width: 667px;
                margin: 0 auto;
            }
            
            .responsive-phone .card-holder {
                grid-template-columns: repeat(1, 1fr);
                max-width: 375px;
                margin: 0 auto;
                padding: 0 10px;
            }
            
            .responsive-phone .card,
            .responsive-phone-horizontal .card {
                width: 100%;
                margin: 10px 0;
            }
            
            .responsive-phone .card h2,
            .responsive-phone-horizontal .card h2 {
                font-size: 28px;
            }
            
            .responsive-phone .card p,
            .responsive-phone-horizontal .card p {
                font-size: 12px;
            }
            
            .responsive-phone .header-two,
            .responsive-phone-horizontal .header-two {
                height: 70px;
            }
            
            .responsive-phone .default-logo,
            .responsive-phone-horizontal .default-logo {
                left: 20px;
                transform: scale(0.8);
            }
            
            .responsive-phone .menu-btn,
            .responsive-phone-horizontal .menu-btn {
                right: 20px;
                transform: scale(0.8);
            }
        `;
        document.head.appendChild(style);
    }
});
