import { Request, Response } from 'express'
import { User } from '../../Model/User/user';

export const createUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { firstName, lastName, nickName, password, dateBorn, email } = req.body;

        var user: User = new User(firstName, lastName, nickName, password, dateBorn, email);
        if (await user.InsertUser()) {
            return res.status(200).json('User Created');
        } else {
            return res.status(400).json('Cannot insert User');
        }
    } catch (error) {
        return res.status(500).json('Internal Server Error');
    }
}

export const getUserById = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = parseInt(req.params.id);
        const user = await User.getUserById(id);
        console.log(user);
        if (user != null) {

            return res.status(200).json(user);
        } else {
            return res.status(400).json('User not exists');
        }
    } catch (error) {
        return res.status(500).json('Internal Server Error');
    }
};

export const UpdateUserPassword = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = parseInt(req.params.id);
        const { password } = req.body;

        const user: User = new User();
        user.id = id;
        user.password = password;

        if (await user.UpdatePassword()) {
            return res.status(200).json('Password Changed');
        } else {
            return res.status(400).json('Cannot change password');
        }
    } catch (error) {
        return res.status(500).json('Internal Server Error');
    }
};

export const UpdateUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = parseInt(req.params.id);
        const { firstName, lastName, nickName, dateBorn, email } = req.body;

        const user: User = new User(id, firstName, lastName, nickName, "", dateBorn, email);

        if (await user.UpdateUser()) {
            return res.status(200).json('User updated');
        } else {
            return res.status(400).json('Cannot update user');
        }
    } catch (error) {
        return res.status(500).json('Internal Server Error');
    }
};

export const DeleteUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = parseInt(req.params.id);

        const user: User = new User(id);

        if (user.DeleteUser()) {
            return res.status(200).json('User deleted');
        } else {
            return res.status(400).json('Cannot delete user');
        }

    } catch (error) {
        return res.status(500).json('Internal Server Error');
    }
}