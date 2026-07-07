class SiteHeader extends HTMLElement {
     connectedCallback() {
        this.innerHTML =
            `
             <header class="cabecalho">
                <div class="logo"><a href="index.html">Clarim Diário</a></div>
                <nav class="navegacao">
                    <a href="#">Política</a>
                    <a href="#">Economia</a>
                    <a href="#">Esportes</a>
                    <a href="#">Homem-Aranha</a>
                </nav>
            </header> `
        ;        
     }
}


customElements.define('site-header', SiteHeader)