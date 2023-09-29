import React from 'react';

const Portfolio = () => {
    // Здесь вы можете определить данные о вашем портфолио, например:
    const projects = [
        {
            id: 1,
            title: 'Проект 1',
            description: 'Описание проекта 1',
            image: 'project1.jpg',
            link: 'https://example.com/project1',
        },
        {
            id: 2,
            title: 'Проект 2',
            description: 'Описание проекта 2',
            image: 'project2.jpg',
            link: 'https://example.com/project2',
        },
        {
            id: 3,
            title: 'Проект 3',
            description: 'Описание проекта 3',
            image: 'project3.jpg',
            link: 'https://example.com/project3',
        },
        // Добавьте дополнительные проекты
    ];

    return (
        <section className="py-12 bg-green-700">
            <div className="container mx-auto">
                <h2 className="text-3xl font-semibold mb-6 text-black">Мои работы</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-green-500 rounded-lg overflow-hidden shadow-lg"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl text-white font-semibold mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-white">{project.description}</p>
                                <a
                                    href={project.link}
                                    className="mt-4 inline-block bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Подробнее
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
