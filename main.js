const { createApp } = Vue;

    const slideShow = {
      data() {
        return {
          slides: [
            {
              immagine: 'https://img.freepik.com/free-vector/welcome-pattern-different-languages_23-2147870141.jpg',
              titolo: 'Benvenuti nel nostro sito',
              testo: 'Esplora la nostra vasta gamma di prodotti e scopri offerte speciali.'
            },
            {
              immagine: 'https://img.freepik.com/free-vector/spring-sale-instagram-post_23-2148849921.jpg',
              titolo: 'Nuova collezione primavera',
              testo: 'Scopri le ultime tendenze della moda con la nostra collezione primavera.'
            },
            {
              immagine: 'https://img.freepik.com/free-vector/special-offer-modern-sale-banner-template_1017-20667.jpg',
              titolo: 'Offerte speciali',
              testo: 'Approfitta delle nostre offerte speciali. Sconti incredibili solo per te!'
            }
          ],
          // do l'indice della diapositiva attualmente visualizzata
          currentSlideIndex: 0
        };
      },
      methods: {
        // creo una funzione per passare alla diapositiva successiva
        nextSlide() {
          let lastSlide = this.slides.length - 1;

          if (this.currentSlideIndex < lastSlide) {
            this.currentSlideIndex++;
          } else {
            this.currentSlideIndex = 0;
          }
        },
      // creo una funzione per passare alla diapositiva precedente
        prevSlide() {
          let lastSlide = this.slides.length - 1;

          if (this.currentSlideIndex > 0) {
            this.currentSlideIndex--;
          } else {
            this.currentSlideIndex = lastSlide;
          }
        }
      }
    };

    createApp(slideShow).mount('#app');