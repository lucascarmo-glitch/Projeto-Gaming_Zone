import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';

interface Slide {
  bannerSrc: string;
  bannerAlt: string;
  captionSrc: string;
  captionAlt: string;
}

interface Game {
  title: string;
  description: string;
  image: string;
}

interface Card {
  title: string;
  image: string;
}

@Component({
  selector: 'app-init',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './init.html',
  styleUrls: ['./init.css'],
  animations: [
    trigger('fade', [
      state('inactive', style({ opacity: 0 })),
      state('active', style({ opacity: 1 })),
      transition('inactive => active', animate('1s ease-in-out')),
      transition('active => inactive', animate('1s ease-in-out'))
    ])
  ]
})
export class Init implements AfterViewInit {

  // ---------- Banner Section ----------
  slides: Slide[] = [
    { bannerSrc: 'https://gmedia.playstation.com/is/image/SIEPDC/MSFS2024-hero-desktop-01-en-02dec25?$4000px$', bannerAlt: 'Flight simulator banner', captionSrc: 'https://gmedia.playstation.com/is/image/SIEPDC/MSFS2024-logo-01-en-02dec25?$1200px--t$', captionAlt: 'Flight Simulator caption' },
    { bannerSrc: 'https://gmedia.playstation.com/is/image/SIEPDC/COD-BLOPS-7-Season-1-hero-desktop-01-en-26nov25?$3200px$', bannerAlt: 'COD 7 banner', captionSrc: 'https://gmedia.playstation.com/is/image/SIEPDC/COD-BLOPS-7-Season-1-Logo-02-26nov25$pt?$1200px--t$', captionAlt: 'COD 7 caption' },
    { bannerSrc: 'https://gmedia.playstation.com/is/image/SIEPDC/red-dead-redemption-cover-01-en-9aug23?$3200px$', bannerAlt: 'Red Dead banner', captionSrc: 'https://gmedia.playstation.com/is/image/SIEPDC/red-dead-redemption-logo-01-en-10nov25?$1200px--t$', captionAlt: 'Red Dead Redemption caption' },
    { bannerSrc: 'https://gmedia.playstation.com/is/image/SIEPDC/Destiny-2-Renegades-hero-desktop-01-en-27nov25?$3200px$', bannerAlt: 'Destiny 2 banner', captionSrc: 'https://gmedia.playstation.com/is/image/SIEPDC/Destiny-2-Renegades-Logo-01-27nov25$pt?$1200px--t$', captionAlt: 'Destiny 2 Insurgent caption' }
  ];
  activeBannerIndex = 0;
  bannerAutoplayInterval: any;

  // ---------- Games Section ----------
  @ViewChild('gameCarousel') gameCarousel!: ElementRef<HTMLDivElement>;
  games: Game[] = [
    { title: 'Spider-Man 2', description: 'Controle Peter Parker e Miles Morales pela cidade de Nova York', image: 'https://gmedia.playstation.com/is/image/SIEPDC/spider-man-2-reveal-heroes-4K-legal_2022-en-12dec22?$600px--t$' },
    { title: 'The Witcher 3', description: 'A espada do destino tem dois gumes. Você é um deles?', image: 'https://www.yudiz.com/codepen/expandable-animated-card-slider/winter-3.jpg' },
    { title: 'Red Dead Redemption', description: 'Experimente as aventuras épicas do velho oeste que definiram uma geração', image: 'https://www.yudiz.com/codepen/expandable-animated-card-slider/rdr-2.jpg' },
    { title: 'The Last Of Us', description: 'Encare a jornada pela sobrevivência de Joel e Ellie nessa série emocionante', image: 'https://gmedia.playstation.com/is/image/SIEPDC/ps5-games-the-last-of-us-part-1-image-block-en-20jun22?$600px--t$' },
    { title: 'God Of War', description: 'Assuma o papel do guerreiro semideus Kratos e explore o mundo nórdico', image: 'https://gmedia.playstation.com/is/image/SIEPDC/ps5-games-god-of-war-image-block-01-en-28jul21' },
    { title: 'Uncharted 5', description: 'Nathan Drake e Chloe Frazer, desvendam antigos segredos e embarcam em aventuras épicas', image: 'https://gmedia.playstation.com/is/image/SIEPDC/ps5-games-uncharted-hub-image-block-02-en-21oct21?$600px--t$' }
  ];

  // ---------- Cards Section ----------
  cards: Card[] = [
    { title: 'Esportes', image: 'https://gmedia.playstation.com/is/image/SIEPDC/ea-sports-fc-26-MusialaGameplay-screenshot-01-en-08jul25?$1200px$', },
    { title: 'Multiplayer', image: 'https://gmedia.playstation.com/is/image/SIEPDC/Rocket-League-Season-10-tournament-rewards-01-03mar23?$1200px--t$' },
    { title: 'Luta', image: 'https://gmedia.playstation.com/is/image/SIEPDC/mortal-kombat-11-huge-hero-mobile-01-ps4-en-30jan19?$1200px--t$' },
    { title: 'Mundo aberto', image: 'https://gmedia.playstation.com/is/image/SIEPDC/burning-shores-dlc-editorial-main-questline-01-en-28mar23?$1200px--t$' },
    { title: 'Single player', image: 'https://gmedia.playstation.com/is/image/SIEPDC/star-wars-jedi-survivor-teaser-screen-04-ps4-ps5-en-20jul22?$1200px--t$' },
    { title: 'Remakes', image: 'https://gmedia.playstation.com/is/image/SIEPDC/resident-evil-4-remake-screen-13-ps5-en-01nov22?$1200px--t$' },
    { title: 'Terror', image: 'https://gmedia.playstation.com/is/image/SIEPDC/resident-evil-village-ps5-screenshot-05-24jul20?$1200px--t$' },
    { title: 'Heróis', image: 'https://gmedia.playstation.com/is/image/SIEPDC/injustice-2-listing-thumb-01-ps4-en-09jun22?$1200px--t$' },
    { title: 'Indies', image: 'https://gmedia.playstation.com/is/image/SIEPDC/tchia-background-01-en-2mar23?$1200px--t$' },
    { title: 'Infantis', image: 'https://gmedia.playstation.com/is/image/SIEPDC/hot-wheels-unleashed-hero-01-en-4oct21?$1600px--t$' },
    { title: 'Estratégia', image: 'https://gmedia.playstation.com/is/image/SIEPDC/planet-coaster-hero-01-en-18jan22?$1200px--t$' },
    { title: 'Furtivos', image: 'https://gmedia.playstation.com/is/image/SIEPDC/hitman-3-pre-orders-homepage-marquee-mobile-tablet-01-ps5-en-04dec20?$1200px--t$' }
  ];

  // ---------- Banner Attributs ----------
  activeIndex = 0;
  gameAutoplayInterval: any;

  ngAfterViewInit(): void {
    this.startBannerAutoplay();
    this.startGameAutoplay();
    this.scrollToActiveGame();
  }

  // ---------- Banner Methods ----------
  nextBanner() { this.activeBannerIndex = (this.activeBannerIndex + 1) % this.slides.length; }
  prevBanner() { this.activeBannerIndex = (this.activeBannerIndex - 1 + this.slides.length) % this.slides.length; }
  setActiveBanner(i: number) { this.activeBannerIndex = i; }

  // ---------- Games Methods ----------
  setActive(i: number) { 
    this.activeIndex = i; 
    this.scrollToActiveGame();
  }

  startBannerAutoplay() { this.bannerAutoplayInterval = setInterval(() => this.nextBanner(), 5000); }

  startGameAutoplay() {
    this.gameAutoplayInterval = setInterval(() => {
      this.activeIndex = (this.activeIndex + 1) % this.games.length;
      this.scrollToActiveGame();
    }, 5000);
  }

  scrollToActiveGame() {
    if (!this.gameCarousel) return;

    const container = this.gameCarousel.nativeElement;
    const activeItem = container.children[this.activeIndex] as HTMLElement;

    if (activeItem) {
      const containerWidth = container.offsetWidth;
      const itemWidth = activeItem.offsetWidth;
      const scrollPosition = activeItem.offsetLeft - (containerWidth / 2 - itemWidth / 2);
      container.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    }
  }

  ngOnDestroy() { 
    if (this.bannerAutoplayInterval) clearInterval(this.bannerAutoplayInterval); 
    if (this.gameAutoplayInterval) clearInterval(this.gameAutoplayInterval); 
  }
}