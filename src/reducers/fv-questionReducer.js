export default function(state = null, action) {
  // Eventually this will be replaced by specific DB queries
  // e.g. recentQuestions makes a call for recent data
  // and userLogin makes a call for user data
  // return [
  //   {
  //     title: 'Do You Believe In Life After Love?',
  //     options: [
  //       {
  //         oid: 0,
  //         choice: {
  //           name: 'Yes',
  //           count: 0,
  //         }
  //       },
  //       {
  //         oid: 1,
  //         choice: {
  //           name: 'No',
  //           count: 0,
  //         }
  //       },
  //       {
  //         oid: 2,
  //         choice: {
  //           name: 'Kinda',
  //           count: 0,
  //         }
  //       },
  //     ],
  //     qid: 1,
  //   },
  //   {
  //     title: 'Are You Ready For The Country?',
  //     options: [
  //       {
  //         oid: 0,
  //         choice: {
  //           name: 'Yes',
  //           count: 0,
  //         }
  //       },
  //       {
  //         oid: 1,
  //         choice: {
  //           name: 'No',
  //           count: 0,
  //         }
  //       },
  //       {
  //         oid: 2,
  //         choice: {
  //           name: 'Kinda',
  //           count: 0,
  //         }
  //       },
  //     ],
  //     qid: 2,
  //   },
  //   {
  //     title: 'Why Do Birds Sing So Gay?',
  //     options: [
  //       {
  //         oid: 0,
  //         choice: {
  //           name: 'Because fools fall in love',
  //           count: 0,
  //         }
  //       },
  //       {
  //         oid: 1,
  //         choice: {
  //           name: 'Because I live in a van down by the river',
  //           count: 0,
  //         }
  //       },
  //       {
  //         oid: 2,
  //         choice: {
  //           name: 'Because the bell tolls for thee',
  //           count: 0,
  //         }
  //       },
  //     ],
  //     qid: 3,
  //   },
  //   {
  //     title: 'Who Let The Dogs Out?',
  //     options: [
  //       {
  //         oid: 0,
  //         choice: {
  //           name: 'Everybody',
  //           count: 0,
  //         }
  //       },
  //       {
  //         oid: 1,
  //         choice: {
  //           name: 'The One-Armed Man',
  //           count: 0,
  //         }
  //       },
  //       {
  //         oid: 2,
  //         choice: {
  //           name: 'Nobody. There are no dogs',
  //           count: 0,
  //         }
  //       },
  //       {
  //         oid: 3,
  //         choice: {
  //           name: 'Donald Trump',
  //           count: 0,
  //         }
  //       },
  //     ],
  //     qid: 4,
  //   },
  // {
  //   title: 'Where Have All The Cowboys Gone?',
  //   options: [
  //     {
  //        oid: 0,
  //        choice: {
  //          name:'Dead',
  //          count: 0,
  //        },
  //     },
  //     {
  //       oid: 1,
  //       choice: {
  //         name: 'In hiding',
  //         count: 0,
  //       },
  //     },
  //     {
  //       oid: 2,
  //       choice: {
  //        name:'Dallas',
  //        count: 0,
  //       },
  //     },
  //     {
  //       oid: 3,
  //       choice: {
  //        name: 'Gone Fishing',
  //        count: 0,
  //       },
  //     },
  //     {
  //       oid: 4,
  //       choice: {
  //         name: 'To the Moon and back',
  //         count: 0,
  //       }
  //     },
  //   ],
  //   qid: 5,
  // }
  // ]
  switch (action.type) {
  case 'GET_RECENT':
    return action.payload.data
  }
  return state
}
