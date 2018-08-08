const state = {
    // Список объектов
    data: [],

    // Фильтры
    filters: {
        subj: '',
        genre: '',
        grade: '',
        search: ''
    },

    options: {
        subj: [
            "Алгебра",
            "Английский язык",
            "Биология",
            "География",
            "Геометрия",
            "Демо-версия",
            "Информатика",
            "История",
            "Литература",
            "Математика",
            "Обществознание",
            "Окружающий мир",
            "Робототехника",
            "Русский язык",
            "Физика",
            "Химия",
        ],
        genre: [
            "Задачник",
            "Мультимедиа-коллекция",
            "Подготовка к ВПР",
            "Подготовка к ЕГЭ",
            "Рабочая тетрадь",
            "Тренажер ЕГЭ-2016",
        ],
        grade: [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
        ]
    }
}

export default state
