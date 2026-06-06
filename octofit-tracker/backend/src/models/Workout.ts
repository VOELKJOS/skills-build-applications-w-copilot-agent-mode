import mongoose, { Schema, Document } from 'mongoose';

export interface IWorkout extends Document {
  userId: string;
  exercise: string;
  duration: number;
  calories: number;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
}

const workoutSchema = new Schema<IWorkout>(
  {
    userId: {
      type: String,
      required: true,
      index: true,
    },
    exercise: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    calories: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

export const Workout = mongoose.model<IWorkout>('Workout', workoutSchema);
