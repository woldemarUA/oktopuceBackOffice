import bcrypt from 'bcrypt';
import { AuthDetailsModel } from '../db/entities/Users/AuthModel.mjs';

export const authenticate = async ({ email, password }) => {
  try {
    const user = await AuthDetailsModel.findOne({ where: { email } });
    if (user && bcrypt.compareSync(password, user.hashed_password)) {
      const response = { ...user.dataValues };
      delete response.hashed_password;

      return response;
    } else {
      throw new Error("Informations d'identification erronées");
    }
  } catch (error) {
    console.error(error);
  }
  return null;
};

export const createUser = async (email, password, user_id) => {
  try {
    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = await AuthDetailsModel.create({
      email,
      hashed_password: hashedPassword,
      user_id,
    });
    return user;
  } catch (error) {
    console.error(error);
  }
};
