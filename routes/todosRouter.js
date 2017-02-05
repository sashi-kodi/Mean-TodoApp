/**
 * Created by sekharh on 2/4/2017.
 */
var express= require('express');
var router= express.Router();
var models = require('../models/index');

router.post('/', function(req,res){
    console.log('received data :' + req.body.title);
    models.Todo.create({
        title: req.body.title

    }).then(function(todo){
       res.json({message:"todo has been posted to the database"});
    });
});

router.put('/:id', function(req,res){
    models.Todo.find({
        where: { id: req.params.id}
    }).then(function(todo){
        if(!todo){
            res.json({message:"Such a todo doest not exist in the database"});
        }
        else{
            todo.updateAttributes({
                title: req.body.title
            }).then(function(todo){
               res.json({message:"Todo has been updated"});
            })
        }


    });
});

router.get('/:todoid', function(req,res){
    models.Todo.find({
        where:{ id: req.params.id}
    }).then(function(data){
        res.json(data);
    });
});

router.delete('/:id', function(req,res){
   models.Todo.destroy({
       where:{id: req.params.id}
   }).then(function(todo){
     res.json({message:"Todo has been deleted succesffully"});
   });
});



router.get('/', function(req,res){

    models.Todo.findAll({}).then(function(todos){

     res.json(todos);
    });

});

module.exports= router;