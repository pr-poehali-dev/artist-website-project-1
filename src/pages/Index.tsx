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
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-heading font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              АРТИСТ
            </h1>
            <div className="hidden md:flex gap-6">
              {["home", "bio", "portfolio", "video", "events", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`font-heading uppercase text-sm tracking-wider transition-colors hover:text-primary ${
                    activeSection === section ? "text-primary" : "text-muted-foreground"
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
            <Button variant="outline" size="icon" className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 animate-pulse"></div>
        <div className="container mx-auto px-4 z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <Badge className="bg-primary/20 text-primary border-primary">Современное искусство</Badge>
              <h1 className="text-6xl md:text-8xl font-heading font-black leading-tight">
                ТВОРЧЕСТВО
                <span className="block text-primary">БЕЗ ГРАНИЦ</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Исследую пространство между реальностью и воображением через современное искусство
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 font-heading">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  События
                </Button>
                <Button size="lg" variant="outline" className="font-heading">
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-3xl blur-3xl opacity-30 animate-float"></div>
              <img
                src="https://cdn.poehali.dev/projects/e45a1b73-a533-49ac-8137-1b316f2f7c78/files/31eca998-be6b-4fd1-b57d-b6b0b5a258a9.jpg"
                alt="Artist"
                className="relative rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="bio" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-heading font-black mb-12 text-center">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                БИОГРАФИЯ
              </span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 bg-card/50 backdrop-blur border-border hover:border-primary transition-colors group">
                <Icon name="Award" size={40} className="text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-heading font-bold mb-2">20+ лет</h3>
                <p className="text-muted-foreground">Опыта в современном искусстве</p>
              </Card>
              <Card className="p-6 bg-card/50 backdrop-blur border-border hover:border-secondary transition-colors group">
                <Icon name="Users" size={40} className="text-secondary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-heading font-bold mb-2">50+ выставок</h3>
                <p className="text-muted-foreground">По всему миру</p>
              </Card>
              <Card className="p-6 bg-card/50 backdrop-blur border-border hover:border-accent transition-colors group">
                <Icon name="Trophy" size={40} className="text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-heading font-bold mb-2">15 наград</h3>
                <p className="text-muted-foreground">Международных премий</p>
              </Card>
            </div>
            <div className="mt-12 space-y-6 text-lg leading-relaxed text-muted-foreground">
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

      <section id="portfolio" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-heading font-black mb-12 text-center">
            <span className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
              ПОРТФОЛИО
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((work, index) => (
              <Card 
                key={work.id} 
                className="group overflow-hidden bg-card border-border hover:border-primary transition-all duration-500 cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <Badge className="mb-2 bg-accent/20 text-accent border-accent">{work.category}</Badge>
                      <h3 className="text-xl font-heading font-bold">{work.title}</h3>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="video" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-heading font-black mb-12 text-center">
            <span className="bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent">
              ВИДЕО
            </span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden bg-card border-border">
              <div className="aspect-video bg-muted flex items-center justify-center relative group cursor-pointer">
                <img
                  src="https://cdn.poehali.dev/projects/e45a1b73-a533-49ac-8137-1b316f2f7c78/files/05bc765f-52f6-4542-8ff6-017ec10dc264.jpg"
                  alt="Video"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/70 transition-colors">
                  <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon name="Play" size={32} className="ml-1" />
                  </div>
                </div>
              </div>
            </Card>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="overflow-hidden bg-card border-border cursor-pointer group">
                  <div className="aspect-video bg-muted flex items-center justify-center">
                    <Icon name="Play" size={24} className="text-primary group-hover:scale-125 transition-transform" />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="events" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-heading font-black mb-12 text-center">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              ПРЕДСТОЯЩИЕ СОБЫТИЯ
            </span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {events.map((event, index) => (
              <Card 
                key={event.id} 
                className="p-6 bg-card/50 backdrop-blur border-border hover:border-primary transition-all duration-300 group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-xl group-hover:bg-primary/20 transition-colors">
                        <Icon name="Calendar" size={24} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">
                          {event.title}
                        </h3>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Icon name="MapPin" size={16} />
                            {event.location}
                          </div>
                          <div className="flex items-center gap-2">
                            <Icon name="Clock" size={16} />
                            {event.time}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge className="bg-accent/20 text-accent border-accent">
                      {new Date(event.date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' })}
                    </Badge>
                    <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon name="ArrowRight" size={16} />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-heading font-black mb-12 text-center">
            <span className="bg-gradient-to-r from-accent via-secondary to-primary bg-clip-text text-transparent">
              КОНТАКТЫ
            </span>
          </h2>
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 bg-card/50 backdrop-blur border-border">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-xl">
                      <Icon name="Mail" size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-heading font-semibold">artist@example.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-secondary/10 p-3 rounded-xl">
                      <Icon name="Phone" size={24} className="text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Телефон</p>
                      <p className="font-heading font-semibold">+7 (999) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-accent/10 p-3 rounded-xl">
                      <Icon name="MapPin" size={24} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Студия</p>
                      <p className="font-heading font-semibold">Москва, Россия</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <h3 className="text-xl font-heading font-bold">Социальные сети</h3>
                  <div className="flex gap-4">
                    {["Instagram", "Facebook", "Youtube", "Twitter"].map((social) => (
                      <Button
                        key={social}
                        variant="outline"
                        size="icon"
                        className="hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <Icon name={social as any} size={20} />
                      </Button>
                    ))}
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 font-heading">
                    <Icon name="Send" size={20} className="mr-2" />
                    Написать сообщение
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground font-body">
            © 2025 Артист. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
