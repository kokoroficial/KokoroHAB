import { Query, QueryResult } from "pg";
import { pool } from "../../Connection/connection";
import { User } from "./user";

const columns = 'first_name, last_name, nickname, date_born, email, description';
const columnsInsert = 'first_name, last_name, nickname, password, date_born, email';
const table = 'users';

export const InsertUser = async (user: User): Promise<Boolean> => {
    const result: QueryResult = await pool.query(`INSERT INTO ${table}(${columnsInsert}) VALUES ($1, $2, $3, $4, $5, $6)`, [user.firstName, user.lastName, user.nickName, user.password, user.dateBorn, user.email]);
    return result.rowCount > 0;
};

export const UpdateUser = async (user: User): Promise<Boolean> => {
    const result: QueryResult = await pool.query(`UPDATE ${table} 
                                                  SET first_name = $1,
                                                      last_name = $2,
                                                      nickname = $3,
                                                      date_born = $4,
                                                      email = $5
                                                  WHERE id = $6`, [user.firstName, user.lastName, user.nickName, user.dateBorn, user.email, user.id]);
    return result.rowCount > 0;
};

export const DeleteUser = async (id: number): Promise<Boolean> => {
    const result: QueryResult = await pool.query(`DELETE FROM users WHERE id = $1`, [id]);
    return result.rowCount > 0;
};

export const UpdateUserPassword = async (id: number, password: String): Promise<Boolean> => {
    const result: QueryResult = await pool.query(`UPDATE ${table} SET password = $1 WHERE id = $2`, [password, id]);
    return result.rowCount > 0;
};

export const GetUserById = async (id: number): Promise<any> => {
    const result: QueryResult = await pool.query(`SELECT ${columns} FROM ${table} WHERE id = $1`, [id]);
    if (result.rowCount > 0) {
        return result.rows;
    } else {
        return null!;
    }
};