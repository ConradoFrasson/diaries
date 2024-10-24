import { Schema, model } from "mongoose";

const diarieSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  }
});

const Diarie = model("Diarie", diarieSchema);

export default Diarie;