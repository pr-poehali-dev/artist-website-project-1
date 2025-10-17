import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const events = [
  {
    id: 1,
    title: "Персональная выставка",
    date: "2025-11-15",
    location: "Музей современного искусства",
    time: "18:00",
    status: "upcoming"
  },
  {
    id: 2,
    title: "Перформанс 'Границы'",
    date: "2025-11-28",
    location: "Арт-пространство LOFT",
    time: "20:00",
    status: "upcoming"
  },
  {
    id: 3,
    title: "Коллективная выставка",
    date: "2025-12-10",
    location: "Галерея Новая коллекция",
    time: "19:00",
    status: "upcoming"
  },
  {
    id: 4,
    title: "Мастер-класс по абстракции",
    date: "2025-12-20",
    location: "Творческая мастерская",
    time: "15:00",
    status: "upcoming"
  }
];

const portfolio = [
  {
    id: 1,
    title: "Абстрактная композиция #1",
    category: "Живопись",
    image: "https://cdn.poehali.dev/projects/e45a1b73-a533-49ac-8137-1b316f2f7c78/files/f2044726-36ff-48da-9368-858bb8ac53ef.jpg"
  },
  {
    id: 2,
    title: "Перформанс 'Метаморфозы'",
    category: "Перформанс",
    image: "https://cdn.poehali.dev/projects/e45a1b73-a533-49ac-8137-1b316f2f7c78/files/05bc765f-52f6-4542-8ff6-017ec10dc264.jpg"
  },
  {
    id: 3,
    title: "Инсталляция 'Время'",
    category: "Инсталляция",
    image: "https://cdn.poehali.dev/projects/e45a1b73-a533-49ac-8137-1b316f2f7c78/files/31eca998-be6b-4fd1-b57d-b6b0b5a258a9.jpg"
  }
];

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/40">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-heading font-light tracking-wide">
              АРТИСТ
            </h1>
            <div className="hidden md:flex gap-8">
              {["home", "bio", "portfolio", "video", "events", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`font-body text-sm transition-colors ${
                    activeSection === section ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {section === "home" && "Главная"}
                  {section === "bio" && "Биография"}
                  {section === "portfolio" && "Портфолио"}
                  {section === "video" && "Видео"}
                  {section === "events" && "События"}
                  {section === "contact" && "Контакты"}
                </button>
              ))}
            </div>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-heading font-light leading-tight tracking-tight">
                  Творчество
                  <span className="block font-normal">без границ</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                  Исследую пространство между реальностью и воображением через современное искусство
                </p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" className="font-body">
                  События
                </Button>
                <Button variant="ghost" className="font-body">
                  Смотреть →
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/e45a1b73-a533-49ac-8137-1b316f2f7c78/files/31eca998-be6b-4fd1-b57d-b6b0b5a258a9.jpg"
                alt="Artist"
                className="w-full aspect-square object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="bio" className="py-32 border-t border-border/40">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-light mb-16">
              Биография
            </h2>
            <div className="grid md:grid-cols-3 gap-12 mb-16">
              <div className="space-y-2">
                <h3 className="text-4xl font-heading font-light">20+</h3>
                <p className="text-muted-foreground text-sm">лет опыта в современном искусстве</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-4xl font-heading font-light">50+</h3>
                <p className="text-muted-foreground text-sm">выставок по всему миру</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-4xl font-heading font-light">15</h3>
                <p className="text-muted-foreground text-sm">международных премий</p>
              </div>
            </div>
            <div className="space-y-6 text-base leading-loose text-muted-foreground max-w-2xl">
              <p>
                Современный художник, работающий на стыке живописи, перформанса и инсталляции. 
                Мои работы исследуют границы восприятия и трансформацию пространства.
              </p>
              <p>
                Окончил Академию изящных искусств, участвовал в международных резиденциях 
                в Берлине, Париже и Нью-Йорке. Работы находятся в частных и музейных коллекциях.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-32 border-t border-border/40">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-heading font-light mb-16">
            Портфолио
          </h2>
          <div className="grid md:grid-cols-3 gap-1">
            {portfolio.map((work) => (
              <div key={work.id} className="group relative aspect-square overflow-hidden cursor-pointer">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-80"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-xs text-muted-foreground mb-1">{work.category}</p>
                  <h3 className="text-lg font-heading font-light">{work.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="video" className="py-32 border-t border-border/40">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-heading font-light mb-16">
            Видео
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="aspect-video bg-muted relative group cursor-pointer overflow-hidden">
              <img
                src="https://cdn.poehali.dev/projects/e45a1b73-a533-49ac-8137-1b316f2f7c78/files/05bc765f-52f6-4542-8ff6-017ec10dc264.jpg"
                alt="Video"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                <div className="w-16 h-16 border border-white/80 rounded-full flex items-center justify-center">
                  <Icon name="Play" size={20} className="ml-0.5" />
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-1 mt-1">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-video bg-muted cursor-pointer group relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon name="Play" size={16} className="opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="events" className="py-32 border-t border-border/40">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-heading font-light mb-16">
            Предстоящие события
          </h2>
          <div className="max-w-4xl mx-auto space-y-1">
            {events.map((event) => (
              <div 
                key={event.id} 
                className="py-8 border-b border-border/40 last:border-0 group cursor-pointer hover:bg-muted/20 transition-colors px-4"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-light mb-3">
                      {event.title}
                    </h3>
                    <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                      <span>{event.location}</span>
                      <span>{event.time}</span>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {new Date(event.date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 border-t border-border/40">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-heading font-light mb-16">
            Контакты
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-8">
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="font-body">artist@example.com</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Телефон</p>
                  <p className="font-body">+7 (999) 123-45-67</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Студия</p>
                  <p className="font-body">Москва, Россия</p>
                </div>
              </div>
              <div className="space-y-8">
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground mb-3">Социальные сети</p>
                  <div className="flex gap-3">
                    {["Instagram", "Facebook", "Youtube", "Twitter"].map((social) => (
                      <Button
                        key={social}
                        variant="ghost"
                        size="sm"
                        className="text-xs"
                      >
                        {social}
                      </Button>
                    ))}
                  </div>
                </div>
                <Button variant="outline" className="font-body">
                  Написать сообщение
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-16 border-t border-border/40">
        <div className="container mx-auto px-6">
          <p className="text-xs text-muted-foreground">
            © 2025 Артист
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;