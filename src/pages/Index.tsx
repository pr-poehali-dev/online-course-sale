import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge
            variant="secondary"
            className="mb-6 bg-purple-100 text-purple-700 px-4 py-2"
          >
            🔥 Новый курс 2024
          </Badge>

          <h1 className="font-bold mb-6 leading-tight text-neutral-900 text-6xl">
            Хахахахаха
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Изучите современные технологии, создайте портфолио из 5 проектов и
            получите работу мечты в IT
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            🔥 Новый курс 202555
          </div>

          <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center">2,500+ студент</div>
            <div className="flex items-center">
              <Icon name="Star" size={16} className="mr-2 text-yellow-500" />
              4.9 из 5 звезд
            </div>
            <div className="flex items-center">
              <Icon name="Trophy" size={16} className="mr-2" />
              95% трудоустройство
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-yellow-300">
            Почему выбирают наш курс5
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Code" size={32} className="text-purple-600" />
                </div>
                <CardTitle>Практические проекты</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Создайте 5 реальных проектов для портфолио: интернет-магазин,
                  социальную сеть и мобильное приложение
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} className="text-orange-600" />
                </div>
                <CardTitle>Менторская поддержка</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Персональный ментор, code review и еженедельные созвоны для
                  разбора сложных вопросов
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Briefcase" size={32} className="text-green-600" />
                </div>
                <CardTitle>Гарантия трудоустройства</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Помощь в составлении резюме, подготовка к собеседованиям и
                  прямые рекомендации в IT-компании
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Course Program */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Программа курса
          </h2>

          <div className="space-y-6">
            {[
              {
                month: "Месяц 1",
                title: "Основы веб-разработки",
                topics: [
                  "HTML5 и семантическая верстка",
                  "CSS3 и Flexbox/Grid",
                  "JavaScript ES6+",
                  "Адаптивная верстка",
                ],
              },
              {
                month: "Месяц 2",
                title: "React и современные технологии",
                topics: [
                  "React и компонентная архитектура",
                  "TypeScript",
                  "Состояние и хуки",
                  "API и асинхронность",
                ],
              },
              {
                month: "Месяц 3",
                title: "Профессиональная разработка",
                topics: [
                  "Node.js и базы данных",
                  "Git и командная работа",
                  "Деплой и DevOps",
                  "Создание портфолио",
                ],
              },
            ].map((module, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <Badge variant="outline">{module.month}</Badge>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {module.title}
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {module.topics.map((topic, topicIndex) => (
                        <li
                          key={topicIndex}
                          className="flex items-center text-gray-600"
                        >
                          <Icon
                            name="Check"
                            size={16}
                            className="text-green-500 mr-3"
                          />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Отзывы наших выпускников
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Анна Петрова",
                role: "Frontend Developer в Яндекс",
                text: "За 3 месяца прошла путь от новичка до джуниор-разработчика. Теперь работаю в команде мечты!",
                salary: "120,000 ₽",
              },
              {
                name: "Михаил Козлов",
                role: "Fullstack Developer в СБЕР",
                text: "Курс дал не только знания, но и уверенность. Ментор помог с первым собеседованием.",
                salary: "150,000 ₽",
              },
              {
                name: "Елена Смирнова",
                role: "React Developer в Tinkoff",
                text: "Практические проекты в портфолио сразу заинтересовали работодателей. Рекомендую!",
                salary: "140,000 ₽",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.name[0]}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600">олрл</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.text}"</p>
                  <Badge className="bg-green-100 text-green-700">
                    Зарплата: {testimonial.salary}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Начните карьеру в IT уже сегодня
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Специальная цена действует только до конца месяца
          </p>

          <Card className="max-w-md mx-auto bg-white text-gray-900 p-8">
            <div className="text-center space-y-6">
              <div>
                <div className="text-4xl font-bold text-purple-600 bg-gray-700">
                  34 000 ₽
                </div>
                <div className="text-lg text-gray-500 line-through">
                  59,900 ₽
                </div>
                <Badge className="bg-orange-100 text-orange-700 mt-2">
                  Скидка 33%
                </Badge>
              </div>

              <ul className="space-y-3 text-left">
                {[
                  "3 месяца интенсивного обучения",
                  "5 проектов в портфолио",
                  "Персональный ментор",
                  "Помощь в трудоустройстве",
                  "Сертификат о прохождении",
                  "Доступ к материалам навсегда",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-500 mr-3"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button className="w-full bg-purple-600 hover:bg-purple-700 py-4 text-lg">
                <Icon name="CreditCard" className="mr-2" />
                Записаться на курс
              </Button>

              <p className="text-sm text-red-700 text-left">
                💸 Возможна рассрочка на 12 месяцев
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
