import bcrypt from 'bcrypt';
import {User} from '../models/users'
// eslint-disable-next-line no-undef
const usersRouter=require('express').Router()


usersRouter.post('/', async(request, response) => {
    const {username,email,password,numberPhone,legalEntity} = request.body

    const saltRounsd= 10
    const passwordHash= await bcrypt.hash(password,saltRounsd)

    const user= new User({
        username,
        email,
        passwordHash,
        numberPhone,
        legalEntity,
    })

    const savedUser = await user.save()
    response.status.json(savedUser)
});

usersRouter.get('/', async (request, response) => {
    const users = await User.find({})
    response.json(users)
  })

// eslint-disable-next-line no-undef
module.exports=usersRouter
