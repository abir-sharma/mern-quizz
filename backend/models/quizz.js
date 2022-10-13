const mongoose = require('mongoose')
const QuizSchema = mongoose.Schema({
    quizname: {
        type: String,
        required: true
    },
    quizdescription: {
        type: String,
        required: true
    },
    questions:{
        type :Array,
        required: true

    }
})
module.exports = mongoose.model('quiz',QuizSchema)