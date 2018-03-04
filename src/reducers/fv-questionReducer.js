export default function(state = null, action) {
  // Eventually this will be replaced by specific DB queries
  // e.g. recentQuestions makes a call for recent data
  // and userLogin makes a call for user data
  // return [
  //   {
  //     title: 'Do You Believe In Life After Love?',
  //     options: [
  //       {
  //         choice: 'Yes',
  //         count: 0,
  //       },
  //       {
  //         choice: 'No',
  //         count: 0,
  //       },
  //       {
  //         choice: 'Kinda',
  //         count: 0,
  //       },
  //     ],
  //     qid: 1,
  //   },
  //   {
  //     title: 'Are You Ready For The Country?',
  //     options: [
  //       {
  //         choice: 'Yes',
  //         count: 0,
  //       },
  //       {
  //         choice: 'No',
  //         count: 0,
  //       },
  //       {
  //         choice: 'Kinda',
  //         count: 0,
  //       },
  //     ],
  //     qid: 2,
  //   },
  //   {
  //     title: 'Why Do Birds Sing So Gay?',
  //     options: [
  //       {
  //         choice: 'Because fools fall in love',
  //         count: 0,
  //       },
  //       {
  //         choice: 'Because I live in a van down by the river',
  //         count: 0,
  //       },
  //       {
  //         choice: 'Because the bell tolls for thee',
  //         count: 0,
  //       },
  //     ],
  //     qid: 3,
  //   },
  //   {
  //     title: 'Who Let The Dogs Out?',
  //     options: [
  //       {
  //         choice: 'Everybody',
  //         count: 0,
  //       },
  //       {
  //         choice: 'The One-Armed Man',
  //         count: 0,
  //       },
  //       {
  //         choice: 'Nobody. There are no dogs',
  //         count: 0,
  //       },
  //       {
  //         choice: 'Donald Trump',
  //         count: 0,
  //       },
  //     ],
  //     qid: 4,
  //   },
  //   {
  //     title: 'Where Have All The Cowboys Gone?',
  //     options: [
  //       {
  //         choice: 'Dead',
  //         count: 0,
  //       },
  //       {
  //         choice: 'In hiding',
  //         count: 0,
  //       },
  //       {
  //         choice: 'Dallas',
  //         count: 0,
  //       },
  //       {
  //         choice: 'Gone Fishing',
  //         count: 0,
  //       },
  //       {
  //         choice: 'To the Moon and back',
  //         count: 0,
  //       },
  //     ],
  //     qid: 5,
  //   }
  // ]
  switch (action.type) {
  case 'GET_RECENT':
    return action.payload.data
  }
  return state
}
