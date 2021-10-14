const users = [
  {
    id: '1',
    name: 'bob',
    email: 'bob@gmail.com',
    commentId: ['1', '3']
  },
  {
    id: '2',
    name: 'john',
    email: 'john@gmail.com',
    commentId: ['2', '4']
  }
]

const courses = [
  {
    id: '1',
    code: 'A9',
    name: '會計',
    commentId: ['1', '4']
  },
  {
    id: '2',
    code: 'A9',
    name: '統計',
    commentId: ['2', '3']
  }
]

const comments = [
  {
    id: '1',
    content:
      'Commodo duis sint cupidatat est aliqua consequat culpa aliquip commodo sit ad est consectetur fugiat.',
    userId: '1',
    courseId: '1'
  },
  {
    id: '2',
    content: 'Minim occaecat minim enim nisi duis est eiusmod sit Lorem.',
    userId: '2',
    courseId: '2'
  },
  {
    id: '3',
    content:
      'Excepteur sunt fugiat cupidatat ea consequat consectetur velit aliquip Lorem incididunt cillum labore excepteur.',
    userId: '1',
    courseId: '2'
  },
  {
    id: '4',
    content: 'Ad minim quis aliquip deserunt amet ea.',
    userId: '2',
    courseId: '1'
  }
]

export const resolvers = {
  Query: {
    users: () => users,
    user (parent, { id }, context, info) {
      return users.find(user => user.id === id)
    },
    courses: () => courses,
    getCoursebyId (parent, { id }, context, info) {
      return courses.find(course => course.id === id)
    },
    getCoursebyCode (parent, { code }, context, info) {
      return courses.find(course => course.code === code)
    }
  },
  Mutation: {
    addComment (parent, { userId, courseId, content }, context, info) {
      const newCommet = {
        id: new Date().getTime(),
        userId,
        courseId,
        content
      }
      comments.push(newCommet)
      return newCommet
    }
  },
  User: {
    comments ({ id }, args, context, info) {
      return comments.filter(comment => comment.userId === id)
    }
  },
  Course: {
    comments ({ id }, args, context, info) {
      return comments.filter(comment => comment.courseId === id)
    }
  }
}
