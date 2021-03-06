const express = require('express');
const sign_up_router = require('./routers/sign_up_router')
const progress_router = require('./routers/progress_router')

const {lesson_service,progress_service,sign_up_service,suggestion_service} = require('./imports');
const config = require('./configs/config');
const app = express();

app.use(sign_up_router);
app.use(progress_router);

app.get('**',(req,res)=>{
    res.sendStatus(404)
})
app.use(sign_up_router);

app.listen(config.PORT,() => {
    console.log(`ARMONEY IS IN YOUT POCKET!`);
    
});
