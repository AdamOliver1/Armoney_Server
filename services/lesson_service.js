

class Lesson_service {
    constructor() {

        this.LessonsInvestingLongTerm = [
            "https://www.youtube.com/watch?v=3KAsQJgvgh0",
            'https://www.youtube.com/watch?v=F4z6RDNYAwg'
        ]
        this.LessonsInvestingShortTerm = [
            "https://www.hasolidit.com/",
            'https://www.youtube.com/watch?v=FSlM5cp6Jys'
        ]
    }



    getInvestingLongTerm(){
        return this.LessonsInvestingLongTerm;
    }
    getInvestingShortTerm(){
        return this.LessonsInvestingShortTerm;
    }

}
module.exports = new Lesson_service();