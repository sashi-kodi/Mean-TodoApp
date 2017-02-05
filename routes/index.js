/**
 * Created by sekharh on 2/4/2017.
 */
var express = require('express');
var router = express.Router();
router.use('/api/todos',require('./todosRouter'));
router.use('/api/todoitems', require('./todoItemsRouter'));
module.exports=router;