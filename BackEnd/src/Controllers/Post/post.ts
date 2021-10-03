import { Request, Response } from 'express'
import { Post } from '../../Model/Post/post';
import { User } from '../../Model/User/user';

export const createPost = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { iduser, description, datepost } = req.body;

        var post: Post = new Post();
        post.description = description;
        post.date = datepost;
        post.user = new User(iduser);

        if (await post.InsertPost()) {
            return res.status(200).json('Post Created');
        } else {
            return res.status(400).json('Cannot create post');
        }
    } catch (error) {
        return res.status(500).json('Internal Server Error');
    }
}

export const getPostById = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = parseInt(req.params.id);
        const post = await Post.getPostById(id);
        console.log(post);
        if (post != null) {

            return res.status(200).json(post);
        } else {
            return res.status(400).json('Post not exists');
        }
    } catch (error) {
        return res.status(500).json('Internal Server Error');
    }
};

export const UpdatePost = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = parseInt(req.params.id);
        const { description } = req.body;

        const post: Post = new Post();
        post.id = id;
        post.description = description;

        if (await post.UpdatePost()) {
            return res.status(200).json('Post Changed');
        } else {
            return res.status(400).json('Cannot change post');
        }
    } catch (error) {
        return res.status(500).json('Internal Server Error');
    }
};

export const AddLike = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = parseInt(req.params.id);

        const post: Post = new Post(id);

        if (await post.AddLike()) {
            return res.status(200).json('Likes Incrementeds');
        } else {
            return res.status(400).json('Cannot change password');
        }
    } catch (error) {
        return res.status(500).json('Internal Server Error');
    }
};

export const DeletePost = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = parseInt(req.params.id);

        const post: Post = new Post(id);

        if (post.DeletePost()) {
            return res.status(200).json('Post deleted');
        } else {
            return res.status(400).json('Cannot delete post');
        }

    } catch (error) {
        return res.status(500).json('Internal Server Error');
    }
}