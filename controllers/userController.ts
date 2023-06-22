import { Request, Response } from "express";
import { getRepository } from "typeorm";

import { User } from "../entity/user";
class UserController {
  static userUser = async (req: Request, res: Response) => {
    const newuser = {
      name: req.body.title,
      age: req.body.age,
    };
    const user = getRepository(User).create(newuser);
    const result = await getRepository(User).save(user);
    return res.json(result);
  };
  static getPost = async (req: Request, res: Response) => {
    const result = await getRepository(User).find();
    return res.json(result);
  };
  static getOnePost = async (req: Request, res: Response) => {
    const id = req.params.id;
    const post = await getRepository(User).find;
    return res.json(post);
  };
  static updatePost = async (req: Request, res: Response) => {
    const post = await getRepository(User).findOne({where: {id: parseInt(req.params.id)}})
    if (post) {
      getRepository(User).merge(post, req.body);
      const result = await getRepository(User).save(post);
      return res.json(result);
    }
    return res.json({ msg: "User Not Found" });
  };
  static deletePost = async (req: Request, res: Response) => {
    const post = await getRepository(User).delete(req.params.id);
    return res.json(post);
  };
}

export default UserController;