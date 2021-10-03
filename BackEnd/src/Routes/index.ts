import { Router } from 'express'
import { createUser, DeleteUser, getUserById, UpdateUser, UpdateUserPassword } from '../Controllers/User/user';

const router = Router();

router.get('/user/:id', getUserById);
router.post('/user', createUser);
router.put('/user/:id/password', UpdateUserPassword);
router.put('/user/:id', UpdateUser);
router.delete('/user/:id', DeleteUser);

export default router;