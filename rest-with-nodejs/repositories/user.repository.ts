import db from "../src/db";
import DatabaseError from "../src/models/errors/database.error.model";
import User from "../src/models/user.model";

class userRepository {
    async findAllUsers(): Promise<User[]> {
        const query = `
            SELECT uuid, username
            FROM application_user
        `;

        const { rows } = await db.query<User>(query);

        return rows || [];
    }

    async findById(uuid: string): Promise<User> {
        try {
            const query = `
                SELECT uuid, username
                FROM application_user
                WHERE uuid = $1
            `;

            const values = [uuid];

            const { rows } = await db.query<User>(query, values);
            const [ user ] = rows;

            return user;
        } catch (error) {
            throw new DatabaseError('Erro na consulta por id', error);
        }
    }

    async create(user: User): Promise<string> {
        const script = `
            INSERT INTO application_user (username, password)
            VALUES ($1, crypt($2, 'encrypt'))
            RETURNING uuid
        `;

        const values = [user.username, user.password];

        const { rows } = await db.query<{uuid: string}>(script, values);
        const [ newUser ] = rows;

        return newUser.uuid;
    }

    async update(user: User): Promise<void> {
        const script = `
            UPDATE application_user
            SET username = $1, password = crypt($2, 'encrypt')
            WHERE uuid = $3
            RETURNING uuid
        `;

        const values = [user.username, user.password, user.uuid];

        await db.query(script, values);
    }

    async remove(uuid: string): Promise<void> {
        const script = `
            DELETE FROM application_user
            WHERE uuid = $1
        `;

        const values = [uuid];

        await db.query(script, values);
    }
}

export default new userRepository();