import { QueryResult } from "pg";
import { pool } from "../../Connection/connection";
import { Post } from "./post";

const table = 'post';
const columnsInsert = 'id_user, descripton, date_post, likes';
const columns = 'id, id_user, descripton, date_post, likes';

export const InsertPost = async (post: Post): Promise<Boolean> => {
    const result: QueryResult = await pool.query(`INSERT INTO ${table}(${columnsInsert}) VALUES ($1, $2, $3, $4)`, [post.user.id, post.description, post.date, post.likes]);
    return result.rowCount > 0;
};

export const UpdatePost = async (post: Post): Promise<Boolean> => {
    const result: QueryResult = await pool.query(`UPDATE ${table} 
                                                  SET descripton = $1,
                                                  WHERE id = $2`, [post.description, post.id]);
    return result.rowCount > 0;
};

export const AddLike = async (post: Post): Promise<Boolean> => {
    const result: QueryResult = await pool.query(`UPDATE ${table} 
                                                  SET likes = likes + 1,
                                                  WHERE id = $2`, [post.id]);
    return result.rowCount > 0;
};

export const DeletePost = async (id: number): Promise<Boolean> => {
    const result: QueryResult = await pool.query(`DELETE FROM ${table} WHERE id = $1`, [id]);
    return result.rowCount > 0;
};


export const GetPostById = async (id: number): Promise<any> => {
    const result: QueryResult = await pool.query(`SELECT ${columns} FROM ${table} WHERE id = $1`, [id]);
    if (result.rowCount > 0) {
        return result.rows;
    } else {
        return null!;
    }
};