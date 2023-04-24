import { model, Schema } from 'mongoose';
import crypto  from 'crypto';

export const RestaurantSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    unique: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  },
});

RestaurantSchema.pre('save', async function (next) {
  if (!this.code) {
    const randomCode = crypto.randomBytes(3).toString('hex');
    this.code = randomCode.toUpperCase();
  }
  next();
});

export const Restaurant = model('Restaurant', RestaurantSchema);
