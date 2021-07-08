const express = require('express');
const sessionRouter = require('./routers/loginSession')
const {lesson_service,progress_service,sign_up_service,suggestion_service} = require('./imports');
const config = require('./configs/config');
const app = express();
app.use(sign_up_service);
app.use(lesson_service);
app.use(progress_service);
app.use(suggestion_service);
app.use(sessionRouter);

app.listen(config.PORT,() => {
    console.log("ARMONEY IS IN YOUT POCKET!");
    
});