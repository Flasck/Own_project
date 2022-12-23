# Роуты сервера

Роуты API:
* [/texts](#константы) - константы
* [/image](#картинки) - картинки
* [/persons](#участники-команды) - участники команды
* [/places](#места-участнков) - места участнков
* [/projects](#проекты) - проекты
* [/feedbacks](#список-обратной-связи) - список обратной связи
* [/comments](#коментарии) - коментарии
* [POST /feedback](#добавить-обратную-связь) - добавить обратную связь
* [POST /comment](#добавить-коментарий) - добавить коментарий

Дополнительные роуты:
* /feedbacks/list - (html) красивый список обратной связи
* /feedbacks/form - (html) форма обратной связи
* /comments/list - (html) красивый список коментариев
* /comments/form - (html) форма добавления коментария


## Выбор языка ответа
Всем запросам, возращающим json, можно задать параметр языка

Параметр | lang
---------|------
Возможные значения | ru \|\| en
Пример запроса | /texts?lang=ru

## Константы
>  /texts

Ответ: json
``` ts
{
	header: {
		mainPage: string,
		projectsPage: string,
		commentsPage: string
	},
	footer: {
		text1: string,
		text2: string
	},
	mainPage: {
		heroBlock: {
			title: string,
			subtitle: string,
			card1: string,
			card2: string,
			card3: string
		},
		mapBlock: {
			title: string,
			contactButton: string
		},
		modalWindowContact: {
			title: string,
			author: {
				text: string,
				required: string,
				minLength: string,
				notPattern: string
			},
			email: {
				text: string,
				required: string,
				notPattern: string
			},
			text: {
				text: string,
				required: string,
				minLength: string,
				maxLength: string
			},
			checkBoxLabel: string,
			onSuccess: string,
			onFailed: string,
			buttonSend: string,
			buttonOk: string
		}
	},
	projectsPage: {
		searchBar: string,
		showMore: string
	},
	notFoundPage: {
		title: string
	},
	personalDataPage: {
		title: string,
		data: string
	},
	commentsPage: {
		title: string
	}
}
```

## Картинки
> /image

Обязательный параметр **id** - id картинки

Ответ: image

Пример запроса: /image?id=avatar_1.jpg


## Участники команды
> /persons

Ответ: json
``` ts
[
	{
		id: number,
		name: string,
		descriptionShort: string,
		imageId: string,
		telegram: string,
		github: string,
		description: string,
		technologies: string[]
	}
]
```

## Места участнков
> /places
``` ts
[
	{
		person: string,
		places: [
			{
				address: string,
				coods: [number, number]
			}
		]
	}
]
```

## Проекты
> /projects

``` ts
[
	{
		id: number,
		title: string,
		date: string,
		imageId: string | null,
		link: string,
		description: string,
		type: string,
		authors: string[],
		technologies: string[]
	}
]
```

## Список обратной связи
> /feedbacks

``` ts
[
	{
		id: string,
		author: string,
		email: string,
		text: string
	}
]
```

## Коментарии
> /comments

``` ts
[
	{
		id: string,
		author: string,
		rate: number,
		text: string
	}
]
```

## Добавить обратную связь
> POST /feedback

Даные отправляются в виде json в теле запроса.

В хедерах должен быть указан **content-type: application/json**

Содержимое json
``` ts
{
	author: string,
	email: string,
	text: string
}
```

## Добавить коментарий
> POST /comment

Даные отправляются в виде json в теле запроса.

В хедерах должен быть указан **content-type: application/json**

Содержимое json
``` ts
{
	author: string,
	rate: number,
	text: string
}
```
