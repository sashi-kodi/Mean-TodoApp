/**
 * Created by sekharh on 2/4/2017.
 */
var express= require('express');
var router= express.Router();
var models = require('../models/index');

router.post('/', function(req,res){
    models.TodoItem.create({
        content : req.body.content,
        complete : req.body.complete,
        todoId : req.body.todoId

    }).then(function(todo){
        res.json({message:"todo has been posted to the database"});
    });
});

//router.put('/:id', function(req,res){
//    models.TodoItem.find({
//        where: { id: req.params.id}
//    }).then(function(todoitem){
//        if(!todoitem){
//            res.json({message:"Such a todo item doest not exist in the database"});
//        }
//        else{
//            todoitem.updateAttributes({
//                title: req.body.title
//            }).then(function(todo){
//                res.json({message:"Todo has been updated"});
//            })
//        }
//
//
//    });
//});

router.get('/:id', function(req,res){
    models.TodoItem.find({
        where:{ id: req.params.id}
    }).then(function(data){
        res.json(data);
    });
});

router.delete('/:id', function(req,res){
    models.TodoItem.destroy({
        where:{id: req.params.id}
    }).then(function(todoitem){
        res.json({message:"Todo item has been deleted succesffully"});
    });
});



router.get('/', function(req,res){

    models.TodoItem.findAll({}).then(function(todoitems){
        res.json(todoitems);
    });

});

module.exports= router;