import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
  {
    id: Ơ,
    name: String,
    isCircle: String,
  },
  {collection: 'categorys'},
);

export default mongoose.model('CategoryModel', categorySchema);
