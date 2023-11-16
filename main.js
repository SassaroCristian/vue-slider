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

          colors: [
            'red',
            'blue',
            'green',
            'yellow',
            'purple',
            'orange',
            'magenta',
            'coral'
          ],

          bgColors: [
            'redBg',
            'blueBg',
            'greenBg',
            'yellowBg',
            'purpleBg',
            'orangeBg',
            'magentaBg',
            'coralBg'
          ],

          titoloClass: '',
          testoClass: '',
          counterClass: '',
          buttonBgClass : '',

          
          // do l'indice della diapositiva attualmente visualizzata
          currentSlideIndex: 0
        };
      },
      methods: {
        nextSlide() {
          let lastSlide = this.slides.length - 1;
    
          if (this.currentSlideIndex < lastSlide) {
            this.currentSlideIndex++;
          } else {
            this.currentSlideIndex = 0;
          }
        },
        prevSlide() {
          let lastSlide = this.slides.length - 1;
    
          if (this.currentSlideIndex > 0) {
            this.currentSlideIndex--;
          } else {
            this.currentSlideIndex = lastSlide;
          }
        },
        getRandomColor() {
          const randomIndex = Math.floor(Math.random() * this.colors.length);
          return this.colors[randomIndex];
        },
        getRandomBgColor() {
          const randomIndex = Math.floor(Math.random() * this.bgColors.length);
          return this.bgColors[randomIndex];
        }
      },
      watch: {
        currentSlideIndex() {
          this.titoloClass = this.getRandomColor();
          this.testoClass = this.getRandomColor();
          this.counterClass = this.getRandomColor();
          this.nextButtonBgClass = this.getRandomBgColor();
          this.prevButtonBgClass = this.getRandomBgColor();
        }
      }
    };

    createApp(slideShow).mount('#app');