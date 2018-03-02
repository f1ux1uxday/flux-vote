export default function() {
  // Eventually this will be replaced by specific DB queries
  // e.g. recentQuestions makes a call for recent data
  // and userLogin makes a call for user data
  return [
    {
      title: 'Do You Believe In Life After Love?',
      options: [
        {
          choice: 'Yes',
        },
        {
          choice: 'No',
        },
        {
          choice: 'Kinda',
        },
      ],
      qid: 1,
    },
    {
      title: 'Are You Ready For The Country?',
      options: [
        {
          choice: 'Yes',
        },
        {
          choice: 'No',
        },
        {
          choice: 'Kinda',
        },
      ],
      qid: 2,
    },
    {
      title: 'Why Do Birds Sing So Gay?',
      options: [
        {
          choice: 'Because fools fall in love',
        },
        {
          choice: 'Because I live in a van down by the river',
        },
        {
          choice: 'Because the bell tolls for thee',
        },
      ],
      qid: 3,
    },
    {
      title: 'Who Let The Dogs Out?',
      options: [
        {
          choice: 'Everybody',
        },
        {
          choice: 'The One-Armed Man',
        },
        {
          choice: 'Nobody. There are no dogs',
        },
        {
          choice: 'Donald Trump'
        },
      ],
      qid: 4,
    },
    {
      title: 'Where Have All The Cowboys Gone?',
      options: [
        {
          choice: 'Dead',
        },
        {
          choice: 'In hiding',
        },
        {
          choice: 'Dallas',
        },
        {
          choice: 'Gone Fishing',
        },
        {
          choice: 'To the Moon and back'
        },
      ],
      qid: 5,
    }
  ]
}
