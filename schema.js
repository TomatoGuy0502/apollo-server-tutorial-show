import { gql } from "apollo-server"

export const schema = gql`
  type Query {
    "取得所有使用者資料"
    users: [User]
    "使用id查詢使用者資料"
    user(id: ID!): User

    "取得所有課程資料"
    courses: [Course]
    "使用id查詢課程資料"
    getCoursebyId(id: ID!): Course
    "使用課程代碼查詢課程資料"
    getCoursebyCode(code: String!): Course
  }

  type Mutation {
    addComment(userId: ID!, courseId: ID!, content: String!): Comment
  }

  type User {
    id: ID!
    "使用者名稱"
    name: String!
    "使用者信箱"
    email: String!
    "使用者發布的心得"
    comments: [Comment]
  }

  type Course {
    id: ID!
    "課程代碼"
    code: String!
    "課程名稱"
    name: String!
    "課程心得"
    comments: [Comment]
  }

  type Comment {
    id: ID!
    "心得內容"
    content: String!
    user: User
  }
`