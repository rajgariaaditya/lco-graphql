import { nanoid } from 'nanoid'

class Course {
    constructor(id, {
        courseName, category, price, language, email, stack, teachingAssists
    }) {
        this.id = id
        this.courseName = courseName
        this.category = category
        this.price = price
        this.language = language
        this.email = email
        this.stack = stack
        this.teachingAssists = teachingAssists
    }
}

const courseholder = {}

const resolvers = {
    getCourse: ({ id }) => {
        return new Course(id, courseholder[id])
    },

    getAllCourse: () => {   
        const courses = []
        var ids = Object.keys(courseholder)        
        ids.forEach(id => {
            courses.push(new Course(id, courseholder[id]))
        });

        return courses
    },

    createCourse: ({ input }) => {
        let id = nanoid()
        courseholder[id] = input
        return new Course(id, input)
    }
}

export default resolvers
