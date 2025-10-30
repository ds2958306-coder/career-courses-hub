import React, { useState } from "react";
import { Search } from "lucide-react";

export default function CareerCoursesHub() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  const courses = [
    {
      id: 1,
      title: "Frontend-разработчик с нуля",
      category: "it",
      duration: "4 месяца",
      level: "начальный",
      description:
        "Изучите HTML, CSS, JavaScript и React, чтобы начать карьеру веб-разработчика. Практические задания и портфолио-проекты.",
    },
    {
      id: 2,
      title: "UX/UI-дизайн: профессия будущего",
      category: "design",
      duration: "3 месяца",
      level: "начальный",
      description:
        "Освойте основы пользовательского интерфейса и опыта. Научитесь работать с Figma и проектировать современные интерфейсы.",
    },
    {
      id: 3,
      title: "Digital-маркетолог",
      category: "marketing",
      duration: "5 месяцев",
      level: "средний",
      description:
        "Курс охватывает SEO, контекстную рекламу, SMM и аналитику. Подходит для старта в digital или повышения квалификации.",
    },
    {
      id: 4,
      title: "Аналитик данных",
      category: "it",
      duration: "6 месяцев",
      level: "средний",
      description:
        "Научитесь работать с Python, SQL и Power BI. Реальные проекты и практические кейсы из бизнеса.",
    },
    {
      id: 5,
      title: "Менеджер проектов",
      category: "management",
      duration: "3 месяца",
      level: "начальный",
      description:
        "Узнайте, как планировать, управлять командой и достигать целей. Agile, Scrum и инструменты управления проектами.",
    },
    {
      id: 6,
      title: "3D-визуализация и моделирование",
      category: "design",
      duration: "4 месяца",
      level: "продвинутый",
      description:
        "Создавайте реалистичные 3D-модели и сцены в Blender и Cinema 4D. Курс подходит для дизайнеров и архитекторов.",
    },
  ];

  const filteredCourses = courses.filter((c) => {
    const matchesCategory = category === "all" || c.category === category;
    const matchesQuery = c.title.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const categories = [
    { id: "all", name: "Все направления" },
    { id: "it", name: "IT и анализ данных" },
    { id: "design", name: "Дизайн и визуализация" },
    { id: "marketing", name: "Маркетинг" },
    { id: "management", name: "Менеджмент" },
  ];

  const [favorites, setFavorites] = useState([]);
  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white p-6">
      <header className="max-w-6xl mx-auto mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-800">Career Courses Hub</h1>
          <p className="text-slate-600">
            Онлайн-курсы для повышения квалификации и освоения новых профессий
          </p>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 opacity-60" size={16} />
          <input
            className="pl-9 pr-3 py-2 rounded-lg border focus:outline-none"
            placeholder="Поиск курса..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </header>

      <main className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar */}
        <aside className="md:col-span-1">
          <div className="bg-white p-4 rounded-2xl shadow-sm">
            <h2 className="text-lg font-semibold mb-3">Категории</h2>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <button
                    className={`w-full text-left p-2 rounded-lg ${
                      category === cat.id ? "bg-green-50 text-green-700" : "hover:bg-gray-50"
                    }`}
                    onClick={() => setCategory(cat.id)}
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 bg-white p-4 rounded-2xl shadow-sm">
            <h2 className="text-lg font-semibold mb-3">Избранные курсы</h2>
            <ul className="space-y-2">
              {favorites.length === 0 && (
                <li className="text-gray-500 text-sm">Нет избранных курсов</li>
              )}
              {favorites.map((favId) => {
                const course = courses.find((c) => c.id === favId);
                return (
                  <li key={favId} className="text-sm border-b pb-1">
                    {course?.title}
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>

        {/* Courses */}
        <section className="md:col-span-3 space-y-4">
          <h2 className="text-2xl font-bold mb-4">Список курсов</h2>
          {filteredCourses.length === 0 ? (
            <p className="text-gray-500">Курсы не найдены</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredCourses.map((c) => (
                <div key={c.id} className="bg-white p-4 rounded-2xl shadow-sm flex flex-col justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">{c.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Направление: {categories.find((cat) => cat.id === c.category)?.name}
                    </p>
                    <p className="text-gray-700 text-sm mb-3">{c.description}</p>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>⏱ {c.duration}</span>
                      <span>📈 {c.level}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleFavorite(c.id)}
                    className={`mt-4 px-3 py-2 rounded-lg border ${
                      favorites.includes(c.id)
                        ? "bg-green-600 text-white border-green-600"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    {favorites.includes(c.id)
                      ? "Удалить из избранного"
                      : "Добавить в избранное"}
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>

      <footer className="max-w-6xl mx-auto mt-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Career Courses Hub — развивайся вместе с нами.
      </footer>
    </div>
  );
}
