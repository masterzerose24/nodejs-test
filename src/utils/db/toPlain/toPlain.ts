import { Model } from 'sequelize';

export default function toPlain<T>(model: Model<T>) {
  return model.get({ plain: true });
}
