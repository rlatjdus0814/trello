const todoData = {
  cardId: 13,
  listId: 2,
  addListMode: true,
  text: '',
  styleT: {
    display: 'block'
  },
  styleF: {
    display: 'none'
  },
  cards: {
    'card-0': {id: 'card-0', content: 'Monday'},
    'card-1': {id: 'card-1', content: 'Tuesday'},
    'card-2': {id: 'card-2', content: 'Wednesday'},
    'card-3': {id: 'card-3', content: 'Thursday'},
    'card-4': {id: 'card-4', content: 'Friday'},
    'card-5': {id: 'card-5', content: 'Saturday'},
    'card-6': {id: 'card-6', content: 'Sunday'},
    'card-7': {id: 'card-7', content: 'Korean'},
    'card-8': {id: 'card-8', content: 'Math'},
    'card-9': {id: 'card-9', content: 'English'},
    'card-10': {id: 'card-10', content: 'Comedy'},
    'card-11': {id: 'card-11', content: 'Darama'},
    'card-12': {id: 'card-12', content: 'Horror'},
    'card-13': {id: 'card-13', content: 'Romace'},
  },
  lists: {
    'list-0': {
      id: 'list-0',
      title: 'weekend',
      cardIds: ['card-0', 'card-1', 'card-2', 'card-3', 'card-4', 'card-5', 'card-6']
    },
      'list-1': {
      id: 'list-1',
      title: 'subject',
      cardIds: ['card-7', 'card-8', 'card-9']
    },
      'list-2': {
      id: 'list-2',
      title: 'genre',
      cardIds: ['card-10', 'card-11', 'card-12', 'card-13']
    },
  },
  listOrder: ['list-0', 'list-1', 'list-2'],
}

export default todoData;