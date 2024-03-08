import React, { useState } from "react";

const jobs = [
    { id: 1, name: "Developer" },
    { id: 2, name: "Designer" },
    { id: 3, name: "Writer" },
    { id: 4, name: "Teacher" },
    { id: 5, name: "Engineer" },
];

const JobMenu = () => {
    const [selectedJob, setSelectedJob] = useState(null);

    const handleJobChange = (event) => {
        setSelectedJob(event.target.value);
    };

    return (
        <div>
            <h2>Job Menu</h2>
            <div>
                <h3>Select a profession:</h3>
                {jobs.map((job) => (
                    <label key={job.id}>
                        <input
                            type="radio"
                            value={job.name}
                            checked={selectedJob === job.name}
                            onChange={handleJobChange}
                        />
                        {job.name}
                    </label>
                ))}
            </div>
            {selectedJob && <MenuOptions selectedJob={selectedJob} />}
        </div>
    );
};

const MenuOptions = ({ selectedJob }) => {

    const menuOptionsByJob = {
        Developer: [
            "Обучающие материалы",
            "Примеры кода",
            "Фреймворки",
            "Инструменты",
            "Блоги",
            "Форумы",
            "Курсы",
        ],
        Designer: [
            "Вдохновение",
            "Цветовые палитры",
            "Типографика",
            "UI-наборы",
            "Инструменты дизайна",
            "Сообщества",
            "Курсы",
        ],
        Writer: [
            "Советы по письму",
            "Ресурсы по грамматике",
            "Платформы для публикации",
            "Темы для написания",
            "Литературные журналы",
            "Писательские сообщества",
            "Курсы",
        ],
        Teacher: [
            "Учебные планы",
            "Учебные ресурсы",
            "Образовательные веб-сайты",
            "Управление классом",
            "Профессиональное развитие",
            "Учительские сообщества",
            "Курсы",
        ],
        Engineer: [
            "Инженерные принципы",
            "Репозитории кода",
            "Техническая документация",
            "Ресурсы по аппаратуре",
            "Инженерные форумы",
            "Инженерные сообщества",
            "Курсы",
        ],
    };

    const options = menuOptionsByJob[selectedJob];

    return (
        <div>
            <h3>Menu Options for {selectedJob}</h3>
            <ul>
                {options.map((option, index) => (
                    <li key={index}><a href="https://habr.com/ru/feed/">{option}</a></li>
                ))}
            </ul>
        </div>
    );
};

export default JobMenu;